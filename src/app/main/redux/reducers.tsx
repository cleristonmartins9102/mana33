import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  blackScreenOn: false,
  leftSlider: true
}

const blackScreenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BLACK_SCREEN_ON':
      return { ...state, blackScreenOn: action.payload }

    case 'LEFT_SLIDER_ON': {
        return { ...state, leftSlider: action.payload }
    }
    default:
      return state
  }
}

const initForms = {
  createCompany: {}
}

const formsReducer = (state = initForms, action: any) => {
  switch (action.type) {
    case 'ADD_CREATE_COMPANY_FORM':{
      return { ...state, createCompany: action.payload }
    }

    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    screen: blackScreenReducer,
    forms: formsReducer
  },
})

export default store
