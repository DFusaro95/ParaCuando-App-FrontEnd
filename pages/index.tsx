import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Navbar />
    <section className=''>
      <main className=''>
        <h1 className=''>This is the HomePage</h1>
      </main>
    </section>
    <Footer />
  </>
  )
}
