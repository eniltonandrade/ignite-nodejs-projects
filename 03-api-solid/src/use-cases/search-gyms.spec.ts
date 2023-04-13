import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository

let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      id: `gym-1`,
      description: 'test',
      title: 'JavaScript Gym',
      latitude: -23.5197668,
      longitude: -47.4784653,
      phone: '',
    })

    await gymsRepository.create({
      id: `gym-2`,
      description: 'test',
      title: 'TypeScript Gym',
      latitude: -23.5197668,
      longitude: -47.4784653,
      phone: '',
    })

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
  })

  it('should be search for gyms with pagination', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        id: `gym-1`,
        description: 'test',
        title: `TypeScript Gym-${i}`,
        latitude: -23.5197668,
        longitude: -47.4784653,
        phone: '',
      })
    }

    const { gyms } = await sut.execute({
      query: 'TypeScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'TypeScript Gym-21' }),
      expect.objectContaining({ title: 'TypeScript Gym-22' }),
    ])
  })
})
