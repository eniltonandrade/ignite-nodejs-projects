import { CheckInsUseCase } from '../check-in'
import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCheckInUseCase() {
  const checkInRepository = new PrismaCheckInRepository()
  const gymRepository = new PrismaGymsRepository()
  const useCase = new CheckInsUseCase(checkInRepository, gymRepository)

  return useCase
}
