import { ProductStore } from '@/components/templates'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product-store')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductStore />
}
