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
      <div className='z-96'><Navbar/></div>
      
      <div className="dark:bg-[rgb(2,6,23)] dark:from-[#1e1b4b] bg-gradient-to-t from-indigo-200 h-screen overflow-hidden">
          <section id="apresentacao">
            <Apresentacao/>
          </section>
      </div>

      <div className='bg-indigo-200 dark:bg-[#1e1b4b] bg-gradient-to-t overflow-hidden relative'>
        <div className='my-20'>
          <section id="biografia">
            <Biografia/>
          </section>
        </div>
        <div className='my-20'>
          <section id="habilidades">
            <Habilidades/>
          </section>
        </div>
        <div className='mb-40'>
          <section id="experiencia">
            <Experience/>
          </section>
        </div>
        {/* <Projects/> */}
        <section id='contato' className='p-6 rounded-tl-[50%] rounded-tr-[50%] bg-indigo-900 relative overflow-hidden '>
          <Contact/>
        </section>
      </div>
    </>
  )
}
