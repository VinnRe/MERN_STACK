import { useEffect, useState } from "react";
interface Workout {
    _id: string
    title: string
    load: number
    reps: number
}

const Home = () => {

    const [workouts, setWorkouts] = useState<Workout[] | null>(null)

    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts')
            console.log('Fetch request:', response.url)
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home