import { handlers } from "@/external-resource/all-api-mocks/handlers.ts";
import { setupServer } from 'msw/node'

export const server = setupServer(...handlers)
