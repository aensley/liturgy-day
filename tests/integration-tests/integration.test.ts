/**
 * Test the live API
 *
 * @group integration
 */

import jestOpenAPI from 'jest-openapi'
import axios from 'axios'
import { resolve } from 'path'

const settings = { apiHost: '' }

beforeAll(() => {
  jestOpenAPI(resolve('src/openapi.yml'))
  settings.apiHost = process.env.API_HOST ?? 'liturgy.day'
  console.info('API_HOST: ', settings.apiHost)
})

for (const endpoint of ['day', 'rosary-days', 'week']) {
  describe('GET /' + endpoint + '/{date}', () => {
    test('should satisfy OpenAPI spec', async () => {
      // Good request
      axios.get('https://' + settings.apiHost + '/api/' + endpoint + '/2023-01-09').then((response) => {
        expect(response.status).toEqual(200)
        expect(response).toSatisfyApiSpec()
      })

      // Invalid request - Too far in the past
      axios.get('https://' + settings.apiHost + '/api/' + endpoint + '/2020-01-09').catch((error) => {
        expect(error.response.status).toEqual(400)
        expect(error.response).toSatisfyApiSpec()
      })

      // Invalid request - No date
      axios.get('https://' + settings.apiHost + '/api/' + endpoint).catch((error) => {
        expect(error.response.status).toEqual(400)
      })
    })
  })
}
