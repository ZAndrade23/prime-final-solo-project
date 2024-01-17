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

//PUT
router.put('/:id', (req, res) => {
  console.log('PUT/list/:id', req.params.id);
  let queryText = `
      UPDATE "user_anime" SET "status" = 'Watched'
      WHERE "id" = $1;
  `;
  pool.query(queryText, [req.params.id])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log('PUT/list/:id', error);
          res.sendStatus(500);
      });
});



//DELETE
router.delete('/:id', (req, res) => {
  let queryText = `DELETE FROM user_anime WHERE id = $1;`;
  pool.query(queryText, [req.params.id])
  .then(() => { res.sendStatus(201)})
    // res.sendStatus(201);
  .catch((e) => {
    console.error('error in delete router', e)
    res.sendStatus(500);
  })
});
module.exports = router;
