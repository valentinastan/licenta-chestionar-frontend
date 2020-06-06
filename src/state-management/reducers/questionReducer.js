import latinize from "latinize";

// console.log(latinize("Țânțarul comun Bine, fă ce ai de făcut.întâlnimDar nu ştiu când e mai bine să ieşimLunea n-are nici un rostMarţi e rău ca merge prost"))
function removeDiacritics(question) {
  question.variante['1'].val = latinize(question.variante['1'].val)

  return question
}

export default function questionReducer(state, action) {
  let inputQuestionsIds;
  let questionKeys;

  switch(action.type) {
    case 'Click':
      state.questions[action.id].variante[action.idVar].checked = !state.questions[action.id].variante[action.idVar].checked
      state.questions[action.id].errorMessage = ''

      return state
    case 'Error':
      state.questions[action.idQuestion].errorMessage = action.errorMessage

      return state
    case 'inputChange':
      state.questions[action.id].variante = {
        '1': {
          val: action.value,
          checked: true,
        }
      }
      state.questions[action.id].errorMessage = ''

      return state
    case 'validated':
      state.validated = true

      return state
    case 'handleDiacritics':
      questionKeys = Object.keys(state.questions)
      inputQuestionsIds = questionKeys.reduce((acc, el) => {
        let question = state.questions[el]
        if(question.type === 'inputAnswer'){
          acc.push(el)
        }
        return acc
      }, [])

      state.questions = questionKeys.map((questionId) => inputQuestionsIds.includes(questionId) ? removeDiacritics(state.questions[questionId]) : state.questions[questionId])

      return {...state}
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}