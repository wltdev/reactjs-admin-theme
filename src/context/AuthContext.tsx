import React, { useReducer, createContext, useContext } from 'react';

import { User } from '@/domain/interfaces/User';

import { ActionType } from './types';

interface State {
    user: User;
    isLogged: boolean;
}

const DEFAULT_VALUE: State = {
    user: {} as User,
    isLogged: false
};

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                user: action.payload,
                isLogged: true
            };
        case SET_LOGOUT:
            return {
                ...state,
                user: {},
                isLogged: false
            };
        default:
            throw new Error();
    }
};

export const AuthContext = createContext<{
    state: State;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: DEFAULT_VALUE,
    dispatch: () => undefined
});

export const AuthContextProvider: React.FC = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);
    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('Use AuthContext is missing');

    return context;
};
