const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // TODO: ADD JOIN FOR USER ANIME
  const queryText = `SELECT * FROM anime 
  JOIN user_anime ON user_anime.report_item_id = anime.report_item_id
  WHERE user_id = $1
  ORDER BY report_item_straight_average DESC limit 100;`;
  pool.query(queryText,[req.user.id])
  .then((result) => { res.send(result.rows);})
  .catch((err) => {
    console.log('error completing SELECT anime query', err);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const newAnime = req.body;
  const queryText = `INSERT INTO user_anime ("user_id", "report_item_id")
  Values ($1, $2);`;
  const queryValues = [
    req.user.id,
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
