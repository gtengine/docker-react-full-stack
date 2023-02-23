const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

// create express server
const app = express();
app.use(bodyParser.json());

db.pool.query(
  `CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`,
  (err, result, fields) => {
    console.log("result: ", result);
  }
);

app.get("/api/values", function (req, res) {
  db.pool.query("SELECT * FROM lists;", (err, result, fields) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json(result);
    }
  });
});

app.post("/api/value", function (req, res, next) {
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json({ success: true, value: req.body.value });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("App이 포트:5000에서 시작되었습니다.");
});
