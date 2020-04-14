import React from 'react';
import MultipleChoiceQuestion from './multipleChoiceQuestion'
import TextInputQuestion from './textInputQuestion'
import { useState, useDispatch } from '../state-management/stores/store'
import { postQuestionnaireQuery } from '../queries/questionnaire'


const Questionnaire = () => {

  const {questions, validated} = useState().questionnaire
  const questionKeys = Object.keys(questions)
  const dispatch = useDispatch()

  const validQuestion = (question) => {
  const keys = Object.keys(question.variante || {})

  if(question.type === 'multipleChoices') {
    console.log(question.variante)
    if(keys.filter(key => question.variante[key].checked === true).length <= 0) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza cel putin o varianta de raspuns!'})
      return false
    }
    return true
  }

  if(question.type === 'threeChoices') {
    if(keys.filter(key => question.variante[key].checked === true).length !== 3) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza 3 variante de raspuns!'})
      return false
    }
    return true
  }

  if(question.type === 'inputAnswer') {
    if(!question.variante['1'].val) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Raspuns necesar!'})
      return false
    }
    return true
  }

  if(keys.filter(key => question.variante[key].checked === true).length !== 1) {
    dispatch({type: 'Error', idQuestion: question.id, errorMessage: 'Bifeaza o varianta de raspuns!'})
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
      postQuestionnaireQuery(questions)
      dispatch({
        type:'validated',
      })
    }
    //err
  }
  // console.log('questions')
  // console.log(questions)
  return (
    <React.Fragment>
      <div className = 'questionnaire'>
        {
          !validated ?
            (
              <React.Fragment>
                <h1>Studiu privind satisfactia consumatorilor de legume proaspete si preferintele acestora</h1>
                <ul>
                  {
                    questionKeys.map( (key, index) => {
                      if(questions[key].type === 'inputAnswer') {
                        return <TextInputQuestion key={`question_${key}`} {...questions[key]} nrQuestion={index}></TextInputQuestion>
                      }
                      return <MultipleChoiceQuestion key={`question_${key}`} {...questions[key]} nrQuestion={index}></MultipleChoiceQuestion>
                    })
                  }
                  <p>Nota: Colectarea informatiilor pe baza prezentului chestionar se face cu respectarea prevederilor art. 12 din Legea nr. 677 2001 pentru protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date, cu modificarile si completarile ulterioare.</p>
                </ul>
                <button type="button" onClick={ () => handleSubmit()}>Submit</button>
              </React.Fragment>
            ): (
              <React.Fragment>
                <h1>Chestionarul a fost transmis cu succes!</h1>
                <h1>Va multumesc frumos!</h1>
              </React.Fragment>
            )
        }
      </div>
    </React.Fragment>
  )
}
export default Questionnaire
