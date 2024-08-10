const dotenv = require("dotenv");
dotenv.config();
let typeorm = require("typeorm");
const Task = require("./entity/Task");

const AppDataSource = new typeorm.DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Task],
  migrations: [],
  subscribers: [],
});

module.exports = AppDataSource;
