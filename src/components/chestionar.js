import React from 'react';
import MultipleChoiceQuestion from './multipleChoiceQuestion'
import { useState } from '../state-management/stores/store'

const Chestionar = () => {

  const intrebari = useState().questionnaire
  const questionKeys = Object.keys(intrebari)

  return (
      <React.Fragment>
        { questionKeys.map(key => <MultipleChoiceQuestion key={`question_${key}`} {...intrebari[key]}> </MultipleChoiceQuestion>) }
      </React.Fragment>
  )
}
export default Chestionar