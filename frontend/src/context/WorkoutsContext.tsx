import { ReactNode, createContext, useReducer } from "react";

export const WorkoutsContext = createContext<any>(null)

interface Workout {
    _id: string;
    title: string;
    load: number;
    reps: number;
}

interface WorkoutsState {
    workouts: Workout[] | null
    isDirty: boolean
}

type WorkoutsAction = { type: string, payload: any}

export const workoutsReducer = (state: WorkoutsState, action: WorkoutsAction) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
                isDirty: false
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: state.workouts ? [action.payload, ...state.workouts] : [action.payload],
                isDirty: true
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }: { children: ReactNode}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null,
        isDirty: false
    })

    // dispatch({type: 'SET_WORKOUT', payload: [{}, {}]})

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}