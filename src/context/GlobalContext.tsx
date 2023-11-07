import React, { useReducer, createContext, useContext } from 'react';

import { ActionType } from './types';

interface State {
    sidebarCollapsed: boolean;
}

const DEFAULT_VALUE: State = {
    sidebarCollapsed: false
};

export const SET_SIDEBAR_COLLAPSED = 'SET_SIDEBAR_COLLAPSED';

const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case SET_SIDEBAR_COLLAPSED:
            return {
                ...state,
                sidebarCollapsed: action.payload
            };
        default:
            throw new Error();
    }
};

export const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: DEFAULT_VALUE,
    dispatch: () => undefined
});

export const GlobalContextProvider: React.FC = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);
    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => {
    const context = useContext(GlobalContext);

    if (!context) throw new Error('Use GlobalContext is missing');

    return context;
};
