import { AnswerRepository } from '@/domain/forum/application/repositories/asnwers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemorAnswerRepository implements AnswerRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
