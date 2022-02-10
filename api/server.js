require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('mysql2')

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8',
})

app.get('/time', function (req, res) {
  res.json(req.params(time))
})

app.get('/queue', (req, res) => {
  pool.query(
    `SELECT
  pt.hn,
  PtName ( pt.hn, pt.cid ) AS pt_name,
  ov.main_dep_queue, ov.vsttime,
  ov.vn,
  IF(rx.vn IS NULL,'','success') AS cc,
  rx.rx_time,
  k.department,
     ov.cur_dep_time,
     ot.name AS cur_name, 
     k2.department AS cur_dep,
     (select count(vn) from ptdepart where vn = ov.vn) AS count_pt_depart,
(select count(vn) from ptdepart where vn = ov.vn) AS count_pt_depart
     FROM ovst ov
  LEFT OUTER JOIN patient pt ON pt.hn = ov.hn 
  LEFT OUTER JOIN rx_doctor rx ON rx.vn = ov.vn
  LEFT OUTER JOIN kskdepartment k ON k.depcode = rx.depcode
  LEFT OUTER JOIN kskdepartment k2 ON k2.depcode = ov.cur_dep
     LEFT OUTER JOIN ovstost ot ON ot.ovstost = ov.ovstost
     WHERE ov.vstdate = CURDATE() 
  AND ov.main_dep = "010" 
     GROUP BY ov.vn
     ORDER BY ov.main_dep_queue`,
    function (err, rows, fields) {
      if (!err) {
        res.json(rows)
      }
    }
  )
})

module.exports = app
