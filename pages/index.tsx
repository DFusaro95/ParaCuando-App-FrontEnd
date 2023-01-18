import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <h1 className='bg-purple-500'>This is the HomePage</h1>
      </main>
    </>
  )
}
