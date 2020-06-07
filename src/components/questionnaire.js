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
      dispatch({
        type: 'Error', 
        idQuestion: question.id, 
        errorMessage: `Bifeaza cel putin o varianta de raspuns pentru intrebarea cu numarul ${question.id} !`
      })
      return false
    }
    return true
  }

  if(question.type === 'threeChoices') {
    if(keys.filter(key => question.variante[key].checked === true).length !== 3) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: `Bifeaza 3 variante de raspuns pentru intrebarea cu numarul ${question.id}!`})
      return false
    }
    return true
  }

  if(question.type === 'inputAnswer') {
    if(!question.variante) {
      dispatch({type: 'Error', idQuestion: question.id, errorMessage: `Raspuns necesar pentru intrebarea cu numarul ${question.id}!`})
      return false
    }
    return true
  }

  if(keys.filter(key => question.variante[key].checked === true).length !== 1) {
    dispatch({type: 'Error', idQuestion: question.id, errorMessage: `Bifeaza o varianta de raspuns pentru intrebarea cu numarul ${question.id}!`})
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
      dispatch({type: 'handleDiacritics'})
      postQuestionnaireQuery(questions)
      dispatch({
        type:'validated',
      })
    }
    //err
  }
  // console.log('questions')
  // console.log(questions)

  let errors = []

  return (
    <React.Fragment>
      <div className = 'questionnaire'>
        {
          !validated ?
            (
              <React.Fragment>
                <h1>Studiu privind satisfactia consumatorilor de legume proaspete si preferintele acestora</h1>
                <ul>
                <p>Bună ziua,<br></br><br></br>

                    Numele meu este Valentina Stan, studentă la Facultatea de Cibernetică, Statistică și Informatică Economică. <br></br>
                    Prin intermediul acestui chestionar vă invit să participați la un studiu de cercetare util în realizarea lucrării de licență. <br></br><br></br>
                    <b>CONDIȚIE DE PARTICIPARE LA STUDIU:</b> Chestionarul se adresează exclusiv persoanelor majore cu domiciliul în orașul București şi în zonele limitrofe.  <br></br>
                    Participarea la acest studiu presupune răspunsul la 21 de întrebări. Informaţiile primite sunt confidențiale şi vor fi folosite în scop academic. <br></br> <br></br>

                    Vă mulțumesc!</p>
                  {
                    questionKeys.map( (key, index) => {
                      if(questions[key].errorMessage)
                        errors.push(questions[key].errorMessage)
                    
                      if(questions[key].type === 'inputAnswer') {
                        return <TextInputQuestion key={`question_${key}`} {...questions[key]} nrQuestion={index}></TextInputQuestion>
                      }
                      return <MultipleChoiceQuestion key={`question_${key}`} {...questions[key]} nrQuestion={index}></MultipleChoiceQuestion>
                    })
                  }
                  <p>Nota: Colectarea informatiilor pe baza prezentului chestionar se face cu respectarea prevederilor art. 12 din Legea nr. 696 2001 pentru protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date, cu modificarile si completarile ulterioare.</p>
                </ul>
                <button type="button" onClick={ () => handleSubmit()}>Submit</button>
                <ul className = 'errorMessage'>
                  {errors.map((el, index) => { if(index < 3) return <li key={index}>{el}</li>})}
                </ul>
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
