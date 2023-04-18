import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a Gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `bearer ${token}`)
      .send({
        title: 'Gym 01',
        description: 'Some description',
        phone: '119999999',
        latitude: -23.5197668,
        longitude: -47.4784653,
      })

    expect(response.statusCode).toEqual(201)
  })
})
