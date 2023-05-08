import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRespository: QuestionRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRespository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    content: 'Test Question Content',
    title: 'Title Question',
  })

  expect(question.id).toBeTruthy()
})
