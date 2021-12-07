const pg = require('pg');
const fs = require('fs');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
})

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
    from "grades"
  `;
db.query(sql)
  .then(result => {
    res.status(200).json(result.rows[0]);
    return;
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      error: 'An unexpected error occurred.'
    });
  })
});

app.listen(8081, () => {
  console.log('Express server listening on port 8081');
})

// app.get('api/grades/:gradeId', (req, res, next) => {
//   const gradeId = Number(req.params.gradeId);
//   if (!Number.isInteger(gradeId) || gradeId <= 0) {
//     res.status(400).json({
//       error: '"gradeId" must be a positive integer'
//     });
//     return;
//   }
//   const sql = `
//     Select "gradeId",
//            "name",
//            "course",
//            "score",
//            "createdAt"
//       from "grades"
//      where "gradeId" = $1
// `;
// const params = [gradeId];
// db.query(sql, params)
//   .then(result => {
//     const grade = result.rows[0];
//     if (!grade) {
//       res.status(404).json({
//         error: `Cannot find grade with "gradeId" ${gradeId}`
//       });
//     } else {
//       res.json(grade);
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     res.status(500).json({
//       error: 'An unexpected error occurred.'
//     })
//   })
// })
