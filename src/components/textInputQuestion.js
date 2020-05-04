import React from 'react';
import { useDispatch } from '../state-management/stores/store'


const TextInputQuestion = (props) => {

  const dispatch = useDispatch()

  return (
      <React.Fragment>
        <li className='textInputQuestion'>
          <h2>{`${props.nrQuestion + 1}. ${props.text}`}</h2>
          <div>Raspuns:</div><textarea rows="4" cols="50" onChange={(event) => dispatch({
              type: 'inputChange',
              id: props.id,
              value: event.target.value,
            })}></textarea>
        </li>
      </React.Fragment>
  )
}
export default TextInputQuestion
