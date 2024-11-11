import { Header } from '../blocks/Header'
import { Footer } from '../blocks/Footer'
import { Projects } from '../contents/Projects'
import { MyProfile } from '../contents/MyProfile'
import { Technology } from '../contents/Technology'
import { Experience } from '../contents/Experience'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <MyProfile />
        <Technology />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
