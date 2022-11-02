import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  stories: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_STORIES":
    //   console.log("set stories dude");
    //   return { ...state, ...action.payload };

    case "SET_STORIES":
      return { stories: [...state.stories, ...action.payload] };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    storiesReducer: reducer,
  },
});
