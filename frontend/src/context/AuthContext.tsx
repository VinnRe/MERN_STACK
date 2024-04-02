import { ReactNode, createContext, useReducer } from 'react'

export const AuthContext = createContext<any>(null)

interface User {
    _id: string
    email: string
    token: string
}

interface AuthState {
    user: User[] | null
}

type AuthAction = { type: string, payload: any}

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}