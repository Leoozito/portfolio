import Image from 'next/image'
import Navbar from '../components/Navbar'
import Apresentacao from '../components/Apresentacao'

export default function Home() {
  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
        <Navbar/>
        
      </div>
    </>
  )
}
