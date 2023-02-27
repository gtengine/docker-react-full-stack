const myspl = require("mysql");

// docker-compose.dev
const pool = myspl.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "devops",
  database: "myapp",
  port: 3306,
});
exports.pool = pool;
