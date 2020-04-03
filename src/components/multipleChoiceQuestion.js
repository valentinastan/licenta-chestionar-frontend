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
      <div className = 'multipleChoiceQuestion'>
        <h2>{props.text}</h2>
        <div className='allVariants'>
          {answersKeys.map((aKey) => (
            <React.Fragment key={`chestionar_${props.id}_${aKey}`}>
              <div className = 'variant'>
              <input id={`option_${props.id}_${aKey}`} type="checkbox" value={variante[aKey].val} checked={variante[aKey].checked} onChange={ () => dispatch({
                type: 'Click',
                id: props.id,
                idVar: aKey,
              })}></input>
              <label for={`option_${props.id}_${aKey}`}>{variante[aKey].val} </label>
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className = 'errorMessage'>{props.errorMessage}</h3>
      </div>
    </React.Fragment>
  )
}

export default MultipleChoiceQuestion
