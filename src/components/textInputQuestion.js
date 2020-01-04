import React from 'react';
import { useDispatch } from '../state-management/stores/store'


const TextInputQuestion = (props) => {

  const dispatch = useDispatch()

  return (
      <React.Fragment>
        <h2>{props.text}</h2>
        Raspuns: <textarea rows="4" cols="50" onChange={(event) => dispatch({
            type: 'inputChange',
            id: props.id,
            value: event.target.value,
          })}></textarea>
        <h3>{props.errorMessage}</h3>
      </React.Fragment>
  )
}
export default TextInputQuestion