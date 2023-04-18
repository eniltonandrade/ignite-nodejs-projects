import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Search Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search Gyms by title', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `bearer ${token}`)
      .send({
        title: 'Gym 01',
        description: 'Some description',
        phone: '119999999',
        latitude: -23.5197668,
        longitude: -47.4784653,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `bearer ${token}`)
      .send({
        title: 'Gym 02',
        description: 'Some description',
        phone: '119999999',
        latitude: -23.5197668,
        longitude: -47.4784653,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        q: 'Gym 01',
      })
      .set('Authorization', `bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Gym 01',
      }),
    ])
  })
})
