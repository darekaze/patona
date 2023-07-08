import { edenTreaty } from "@elysiajs/eden"
import type { App } from "@drkz/backend"

export const api = edenTreaty<App>("http://0.0.0.0:4000/")
