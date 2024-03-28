const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")

const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

// Get single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE workout
router.delete('/:id', deleteWorkout)

// UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router