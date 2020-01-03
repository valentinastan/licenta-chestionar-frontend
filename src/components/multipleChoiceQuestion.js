import React from 'react';
import {useDispatch} from '../state-management/stores/store'

const printEvent = (e) => {
  console.log(e.target.checked)
}
const MultipleChoiceQuestion = (props) => {
  const {
    variante
  } = props
  
  const dispatch = useDispatch()
  const answersKeys = Object.keys(variante)

  return (
    <React.Fragment>
      <h1>{props.text}</h1>
      {answersKeys.map((aKey) => (
        <React.Fragment key={`chestionar_${props.id}_${aKey}`}>
          {variante[aKey].val}: <input type="checkbox" value={variante[aKey].val} checked={variante[aKey].checked} onChange={ () => dispatch({
            type: 'Click',
            id: props.id,
            idVar: aKey,
          })}></input><br />
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default MultipleChoiceQuestion