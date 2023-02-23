const myspl = require("mysql");
const pool = myspl.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "devops",
  database: "myapp",
});
exports.pool = pool;
