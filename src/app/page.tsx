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
      
      <div className="xs:h-[680px] sm:h-[650px] md:h-[620px] relative dark:bg-[rgb(2,6,23)] dark:from-[#1e1b4b] bg-gradient-to-t from-indigo-200 overflow-hidden w-full dark:-z-40">
          <section id="apresentacao">
            <div className=''>
              <Apresentacao/>
            </div>
          </section>
      </div>

      <div className='bg-indigo-200 dark:bg-[#1e1b4b] bg-gradient-to-t overflow-hidden w-full'>
        <div className='sm:my-40 md:mt-16 lg:my-40'>
          <section id="biografia">
            <Biografia/>
          </section>
        </div>
        <div className='mt-32 xs:mx-2 sm:mx-12'>
          <section id="habilidades">
            <Habilidades/>
          </section>
        </div>
        <div className='xs:mx-2 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 md:mt-10'>
          <section id="experiencia">
            <Experience/>
          </section>
        </div>
        {/* <Projects/> */}
        <section 
          id='contato' 
          className='xs:h-[800px] sm:h-[750px] md:h-[650px] p-6 xs:rounded-tl-[10%] sm:rounded-tl-[20%] xs:rounded-tr-[10%] sm:rounded-tr-[20%] md:rounded-tl-[40%] md:rounded-tr-[40%] lg:rounded-tl-[50%] lg:rounded-tr-[50%] bg-indigo-700 overflow-hidden w-full mt-60'
        >
          <Contact/>
        </section>
      </div>
    </>
  )
}
