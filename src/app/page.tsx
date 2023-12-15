import Image from 'next/image'
import Navbar from '../components/Navbar'
import Apresentacao from '../sections/Apresentacao'
import Biografia from '../sections/Biografia'
import Habilidades from '../sections/Habilidade'
import Experience from '../sections/Experiencia'
import Projects from '../sections/Projetos'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <div className="h-1/2 lg:h-screen dark:z-40 dark:bg-[#020617] dark:from-[#1e1b4b] bg-gradient-to-t from-indigo-200 relative overflow-hidden">
        <Navbar/>
        <div className='p-40'>
          <Apresentacao/>
        </div>
      </div>
      <div className='bg-indigo-200 relative dark:bg-[#1e1b4b] bg-gradient-to-t overflow-hidden '>
        <div className='my-20'>
          <Biografia/>
        </div>
        <div className='my-20'>
          <Habilidades/>
        </div>
        <div className='mb-40'>
          <Experience/>
        </div>
        {/* <Projects/> */}
        <div className='p-6 rounded-tl-[50%] rounded-tr-[50%] bg-indigo-900 relative overflow-hidden '>
          <Contact/>
        </div>
      </div>
    </>
  )
}
