import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/developer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/developer/"!</div>
}
