import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout"!</div>
}
