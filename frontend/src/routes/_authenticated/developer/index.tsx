import { createFileRoute } from '@tanstack/react-router'
import Developer from '../../../pages/Developer'

export const Route = createFileRoute('/_authenticated/developer/')({
  component: Developer,
})

