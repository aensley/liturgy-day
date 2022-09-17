/**
 * Test the live API
 *
 * @group integration
 */

import jestOpenAPI from 'jest-openapi'
import axios from 'axios'
import { resolve } from 'path'

// Load the OpenAPI spec
jestOpenAPI(resolve('src/openapi.yml'))

const apiHost = process.env.API_HOST ?? 'liturgy.day'

describe('GET /week', () => {
  test('should satisfy OpenAPI spec', async () => {
    console.info('API_HOST: ', apiHost)
    const res = await axios.get('https://' + apiHost + '/api/week?date=2023-01-09')

    expect(res.status).toEqual(200)
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec()
  })
})
