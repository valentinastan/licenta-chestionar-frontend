
export default function questionReducer(state, action) {
  switch(action.type) {
    case 'Click':
      state[action.id].variante[action.idVar].checked = !state[action.id].variante[action.idVar].checked
      state[action.id].errorMessage = ''

      return state
    case 'Error':
      state[action.idQuestion].errorMessage = action.errorMessage

      return state
    case 'inputChange':
      state[action.id].answer = action.value
      state[action.id].errorMessage = ''
      
      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}