import React from 'react';
import questionReducer from '../reducers/questionReducer'

const initialState = { questionnaire : {
  1: {
    id: 1,
    text: "Acesta este textul meu",
    variante: {
      1: {
        val: 'Gigel',
        checked: false, 
      },
      2: {
        val: 'Dorel',
        checked: false,
      },
      3: {
        val: 'Marcel',
        checked: false,
      }
    },
    choiceNumber: 2,
  },
  2: {
    id: 2,
    text: "fjhfjkfjksfk",
    variante: {
      1: {
        val: "Var1",
        checked: false,
      },
      2: {
        val: "Var2",
        checked: false,
      },
    }
  },
}}

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