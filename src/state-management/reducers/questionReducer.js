export default function questionReducer(state, action) {
  switch(action.type) {
    case 'Click':
      state.questions[action.id].variante[action.idVar].checked = !state.questions[action.id].variante[action.idVar].checked
      state.questions[action.id].errorMessage = ''

      return state
    case 'Error':
      state.questions[action.idQuestion].errorMessage = action.errorMessage

      return state
    case 'inputChange':
      state.questions[action.id].answer = action.value
      state.questions[action.id].errorMessage = ''
      
      return state
    case 'validated':
      state.validated = true

      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}