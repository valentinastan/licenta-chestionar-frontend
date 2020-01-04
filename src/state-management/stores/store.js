import React from 'react';
import questionReducer from '../reducers/questionReducer'
import allQuestions from '../../helpers/allQuestions'

const initialState = allQuestions
const Store = React.createContext();
const Dispatch = React.createContext();

const combinedReducers = ({ questionnaire }, action) => ({
  questionnaire: questionReducer(questionnaire, action)
})

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(combinedReducers, initialState)

  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        {children}
      </Dispatch.Provider>
    </Store.Provider>
  )
}

function useState() {
  const context = React.useContext(Store)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(Dispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

function useStore() {
  return [useState(), useDispatch()]
}
export { StateProvider, useState, useDispatch, useStore }