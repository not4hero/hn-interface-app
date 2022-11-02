import React from "react";
import { useDispatch } from "react-redux";


export const setData = (data) => {
  useDispatch(() => ({type:"SET_STORIES", payload: [...data]}))
}
  
//   const defaultState = {
//     stories: [],
//   }
  
// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//       case "SET_STORIES":
//         return {stories:action.payload}
//       default:
//         return state
//     }
//   }
// }
// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'stories',
//   initialState: {
//     value: []
//   },
//   reducers: {
//     setData: (state, action) => {
//       state.value += action.payload
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { setData } = counterSlice.actions

// export default counterSlice.reducer

