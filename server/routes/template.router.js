const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM anime ORDER BY report_item_straight_average DESC limit 100';
  pool.query(queryText)
  .then((result) => { res.send(result.rows);})
  .catch((err) => {
    console.log('error completing SELECT anime query', err);
    res.sendStatus(500);
  });
});

router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "anime" 
  WHERE "report_item_id" = $1
  `;
  pool.query(queryText, [req.params.id])
    .then((result) =>
    // returns the first item in the array
     { res.send(result.rows[0]); })
    .catch((err) => {
      console.log('Error completing SELECT ID query', err);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const newAnime = req.body;
  const queryText = `INSERT INTO "user_anime" ("user_id", "report_item_id")
  Values ($1, $2);`;
  const queryValues = [
    newAnime.user_id,
    newAnime.report_item_id,
  ];
  pool.query(queryText, queryValues)
  .then(() => {
    res.sendStatus(201)
  }).catch((error) => {
    console.log('error adding anime to list', error);
    res.sendStatus(500);
  })

});

module.exports = router;
