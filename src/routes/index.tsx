import { createFileRoute } from '@tanstack/react-router'
import Login from '../Login/components/Login'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login />
}
