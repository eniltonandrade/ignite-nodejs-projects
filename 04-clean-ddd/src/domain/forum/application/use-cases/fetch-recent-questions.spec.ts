import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { FetchRecentQuestionsUseCase } from './fetch-recent-questions'

let inMemoryQuestionRepository: InMemoryQuestionsRepository
let sut: FetchRecentQuestionsUseCase

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionsRepository()
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionRepository)
  })

  it('should be able to feteh recent questions', async () => {
    await inMemoryQuestionRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 0, 20),
      }),
    )
    await inMemoryQuestionRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 0, 28),
      }),
    )
    await inMemoryQuestionRepository.create(
      makeQuestion({
        createdAt: new Date(2023, 0, 23),
      }),
    )

    const { questions } = await sut.execute({
      page: 1,
    })

    expect(questions).toEqual([
      expect.objectContaining({
        createdAt: new Date(2023, 0, 28),
      }),
      expect.objectContaining({
        createdAt: new Date(2023, 0, 23),
      }),
      expect.objectContaining({
        createdAt: new Date(2023, 0, 20),
      }),
    ])
  })

  it('should be able to feteh recent questions with pagination', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionRepository.create(makeQuestion())
    }

    const { questions } = await sut.execute({
      page: 2,
    })

    expect(questions).toHaveLength(2)
  })
})
