import { TopBar } from '@/components/organisms'
import { ReactNode } from '@tanstack/react-router'

interface Props {
  children: ReactNode
}

export function RootLayout({ children }: Props) {
  return (
    <>
      <TopBar />
      <div className="mt-[80px] bg-giordano">{children}</div>
    </>
  )
}
