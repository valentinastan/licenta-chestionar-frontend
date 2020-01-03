
export default function questionReducer(state, action) {
  switch(action.type) {
    case 'Click':
      state[action.id].variante[action.idVar].checked = !state[action.id].variante[action.idVar].checked
      console.log(state)
      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}