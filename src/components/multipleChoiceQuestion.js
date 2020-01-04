import React from 'react';
import {useDispatch} from '../state-management/stores/store'


const MultipleChoiceQuestion = (props) => {
  const {
    variante
  } = props
  
  const dispatch = useDispatch()
  const answersKeys = Object.keys(variante)

  //console.log(props)
  return (
    <React.Fragment>
      <h2>{props.text}</h2>
      {answersKeys.map((aKey) => (
        <React.Fragment key={`chestionar_${props.id}_${aKey}`}>
          {variante[aKey].val}: <input type="checkbox" value={variante[aKey].val} checked={variante[aKey].checked} onChange={ () => dispatch({
            type: 'Click',
            id: props.id,
            idVar: aKey,
          })}></input><br />
        </React.Fragment>
      ))}
      <h3>{props.errorMessage}</h3>
    </React.Fragment>
  )
}

export default MultipleChoiceQuestion