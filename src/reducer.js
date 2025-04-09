// Define the initial state of your app
export const initialState = {
    user: null,  // Start with no user
};

// Define action types for dispatching actions
export const actionTypes = {
    SET_USER: "SET_USER",  // Action type to set the user
};

// Reducer function to handle state changes based on actions
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,  // Copy the previous state
                user: action.user,  // Update the user state
            };
        default:
            return state;  // If no recognized action, return the current state
    }
};

export default reducer;
