const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
    exercises: [
      {
        type: {
          type: String,
          required: true
        },

        name: {
          type: String,
          trim: true,
          required: 'Enter a name for the workout'
        },
        duration: {
          type: Number,
          required: true
        }, 
        weight: {
          type: Number,

        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        },
      },
    ],
});


const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
