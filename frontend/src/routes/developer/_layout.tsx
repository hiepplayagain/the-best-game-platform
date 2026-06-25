import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/developer/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/developer/_layout"!</div>
}
