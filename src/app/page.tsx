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
      <div className='z-96 overflow-hidden w-full'><Navbar/></div>
      
      <div className="xs:h-[650px] h-[650px] xs:relative dark:bg-[rgb(2,6,23)] dark:from-[#1e1b4b] bg-gradient-to-t from-indigo-200 overflow-hidden w-full">
          <section id="apresentacao">
            <div className=''>
              <Apresentacao/>
            </div>
          </section>
      </div>

      <div className='bg-indigo-200 dark:bg-[#1e1b4b] bg-gradient-to-t overflow-hidden w-full'>
        <div className='xs:my-0 sm:my-40'>
          <section id="biografia">
            <Biografia/>
          </section>
        </div>
        <div className='mt-32 xs:mx-10 sm:mx-32'>
          <section id="habilidades">
            <Habilidades/>
          </section>
        </div>
        <div className='xs:mx-20 sm:mx-36'>
          <section id="experiencia">
            <Experience/>
          </section>
        </div>
        {/* <Projects/> */}
        <section 
          id='contato' 
          className='xs:h-[800px] p-6 xs:rounded-tl-[10%] sm:rounded-tl-[20%] xs:rounded-tr-[10%] sm:rounded-tr-[20%] md:rounded-tl-[50%] md:rounded-tr-[50%] bg-indigo-700 overflow-hidden w-full mt-60'
        >
          <Contact/>
        </section>
      </div>
    </>
  )
}
