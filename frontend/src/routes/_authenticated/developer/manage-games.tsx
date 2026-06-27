import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/developer/manage-games')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/developer/manage-games"!</div>
}
