const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Vision",
  tableName: "vision",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    visionName: {
      type: "varchar",
    },
  },
});
