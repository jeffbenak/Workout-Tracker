const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workouts.findOneAndUpdate({_id: params.id}
    ,{
      $push: {
        exercises: body,
      }, 
    })
    .then(dbWorkouts => {
      console.log('hi')
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercise", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
