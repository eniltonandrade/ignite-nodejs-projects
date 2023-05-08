import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/asnwers-repository'
import { Answer } from '../../enterprise/entities/answer'

const fakeAnswersRespository: AnswerRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRespository)

  const answer = await answerQuestion.execute({
    content: 'Nova Resposta',
    instructorId: '1',
    questionId: '1',
  })

  expect(answer.content).toEqual('Nova Resposta')
})
