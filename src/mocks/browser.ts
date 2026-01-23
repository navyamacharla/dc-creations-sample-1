import { setupWorker } from "msw/browser"
import { productHandlers } from "./handlers"

export const worker = setupWorker(...productHandlers)
