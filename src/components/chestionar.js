import React from 'react';
import MultipleChoiceQuestion from './multipleChoiceQuestion'
import TextInputQuestion from './textInputQuestion'
import { useState, useDispatch } from '../state-management/stores/store'


const Chestionar = () => {

  const questions = useState().questionnaire
  const questionKeys = Object.keys(questions)
  const dispatch = useDispatch()

  const validQuestion = (question) => {
  const keys = Object.keys(question.variante || {})
   
  if(question.type === 'multipleChoices') {
    console.log(question.variante)
    if(keys.filter(key => question.variante[key].checked === true).length <= 0) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza cel putin o varianta de raspuns'})
      return false
    }
    return true
  }

  if(question.type === 'threeChoices') {
    if(keys.filter(key => question.variante[key].checked === true).length !== 3) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza cel 3 variante de raspuns'})
      return false
    }
    return true
  }

  if(question.type === 'inputAnswer') {
    if(!question.answer) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Raspuns necesar'})
      return false
    }
    return true
  }

  if(keys.filter(key => question.variante[key].checked === true).length !== 1) {
    dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza o varianta de raspuns'})
    return false
  }
  return true
}

  const validQuestionnaire = () => {
    const validatedAnswers = questionKeys.map(key => validQuestion(questions[key]))
    
    return validatedAnswers.every(el => el === true)
  }

  const handleSubmit = () => {
    if(validQuestionnaire()){
      //send to backend
    }
    //err
  }
  // console.log('questions')
  // console.log(questions)
  return (
    <React.Fragment>
      { questionKeys.map(key => {
        if(questions[key].type === 'inputAnswer') {
          return <TextInputQuestion key={`question_${key}`} {...questions[key]}></TextInputQuestion>
        }
        return <MultipleChoiceQuestion key={`question_${key}`} {...questions[key]}> </MultipleChoiceQuestion>} ) 
      }
      <button type="button" onClick={ () => handleSubmit()}>Submit</button>
    </React.Fragment>
  )
}
export default Chestionar