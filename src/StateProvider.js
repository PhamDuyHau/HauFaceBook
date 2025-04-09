import React, {createContext, useContext, useReducer} from 'react';

// Create a context for your state
export const StateContext = createContext();

// The StateProvider component that will provide the state and dispatcher to the children
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);