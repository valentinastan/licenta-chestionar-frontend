import { post } from './query'

export async function postQuestionnaireQuery(params) {
  let questionnaire = await post('api/questionnaire', params)

  console.log('am asteptat crearea')
  console.log(questionnaire)

  return questionnaire.data
}