import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from "./src/external-resource/all-api-mocks/node";

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
