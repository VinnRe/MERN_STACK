// FIX AFTER FORM SUBMIT IT WILL AUTO ADD IT TO THE DISPLAY WITHOUT REFRESHING MANUALLY

import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
interface Workout {
    _id: string
    title: string
    load: number
    reps: number
}

const Home = () => {

    const {workouts, dispatch, isDirty} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts')
            console.log('Fetch request:', response.url)
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    useEffect(() => {
        if (isDirty) {
            const fetchWorkouts = async () => {
                const response = await fetch('/api/workouts');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_WORKOUTS', payload: json });
                }
            };

            fetchWorkouts();
        }
    }, [dispatch, isDirty]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout: Workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}  />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home