import { configureStore } from '@reduxjs/toolkit'

// Estado inicial
const initialState = {
  blackScreenOn: false,
}

// Reducer puro
const blackScreenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BLACK_SCREEN_ON':
      return { ...state, blackScreenOn: action.payload }
    default:
      return state
  }
}

// Criação da store
const store = configureStore({
  reducer: {
    blackScreen: blackScreenReducer,
  },
})

export default store
