const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    taskName: {
      type: "varchar",
    },
    taskCompleted: {
      type: "boolean",
    },
  },
});
