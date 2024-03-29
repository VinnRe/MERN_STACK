import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import '../fonts/fonts.css'
import { formatDistanceToNow } from "date-fns";

interface Workout {
    _id: string
    title: string
    load: number
    reps: number
    createdAt: string
}

interface WorkoutDetailsProps {
    workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {

    const { dispatch } = useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch("/api/workouts/" + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={handleClick} className="material-icons">delete</span>
        </div>
    )
}

export default WorkoutDetails