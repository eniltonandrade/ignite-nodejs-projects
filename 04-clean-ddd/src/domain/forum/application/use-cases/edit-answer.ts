import { AnswerRepository } from '../repositories/answers-repository'

interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

export class EditAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    authorId,
    content,
    answerId,
  }: EditAnswerUseCaseRequest): Promise<void> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not Allowed')
    }
    answer.content = content

    this.answerRepository.save(answer)
  }
}
