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
      <div className='bg-indigo-200 relative dark:bg-[#1e1b4b] dark:from-[#0f172a] bg-gradient-to-t overflow-hidden h-screen'>
        <Biografia/>
      </div>
      <div className='bg-indigo-200 relative dark:bg-[#0f172a] bg-gradient-to-t overflow-hidden '>
        <Habilidades/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}
