import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('it worked')

    return {
      teardown() {
        console.log('teardown')
      },
    }
  },
}
