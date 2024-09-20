import { MyProfile } from '@/components/presentation/MyProfile'
import { Technology } from '@/components/presentation/Technology'

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <MyProfile />
      <Technology />
    </main>
  )
}
