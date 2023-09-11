import Image from 'next/image'
import Navbar from '../components/Navbar'
import Apresentacao from '../sections/Apresentacao'
import Biografia from '../sections/Biografia'

export default function Home() {
  return (
    <>
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
        <Navbar/>
        <div className='p-40'>
          <Apresentacao/>
        </div>
      </div>
      <div className='bg-indigo-200 relative overflow-hidden'>
        <Biografia/>
      </div>
    </>
  )
}
