import { createFileRoute } from '@tanstack/react-router'
import { Cuti } from '@/features/cuti'

export const Route = createFileRoute('/_authenticated/cuti/')({
  component: Cuti,
})