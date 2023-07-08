import { Elysia, t } from "elysia"
import { cors } from "@elysiajs/cors"

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .post("/login", ({ body }) => body, {
    body: t.Object({
      username: t.String(),
    }),
  })
  .listen(4000)

export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
