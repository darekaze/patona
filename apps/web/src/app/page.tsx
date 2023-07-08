import { Button, Header } from "@drkz/ui"
import { api } from "~/utils/eden"

export default async function Page() {
  const { data } = await api.index.get()

  const { data: loginData } = await api.login.post({ username: "abbbbb" })

  return (
    <>
      <div>{data}</div>
      <div>{loginData?.username}</div>
      <Header text="Web" />
      <Button />
    </>
  )
}
