import React from 'react';
import { useDispatch } from '../state-management/stores/store'


const TextInputQuestion = (props) => {

  const dispatch = useDispatch()

  return (
      <React.Fragment>
        <div className='textInputQuestion'>
          <h2>{props.text}</h2>
          <div>Raspuns:</div><textarea rows="4" cols="50" onChange={(event) => dispatch({
              type: 'inputChange',
              id: props.id,
              value: event.target.value,
            })}></textarea>
          <h3 className='errorMessage'>{props.errorMessage}</h3>
        </div>
      </React.Fragment>
  )
}
export default TextInputQuestion
