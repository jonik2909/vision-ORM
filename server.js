const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const AppDataSource = require("./data-source");

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

AppDataSource.initialize()
  .then(async (connection) => {
    console.log("MYSQL connection success");
    module.exports = connection;

    const app = require("./app");
    const server = http.createServer(app);
    let PORT = process.env.PORT || 3077;
    server.listen(PORT, function () {
      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => console.log(error));
