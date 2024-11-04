import { handlers } from "@/external-resource/all-api-mocks/handlers.ts";
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(...handlers)
