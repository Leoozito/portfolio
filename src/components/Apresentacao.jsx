import Image from 'next/image'

export default function Apresentacao() {
  return(
    <div>
      <div>
        <Image className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover" src="" alt="Foto perfil"/>
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md-left-1/4 md:text-6xl lg:left-5 xl:left-48 xl-text-7xl font-bold">
          <span className="text-gray-600">Full-Stack</span>
          <p className="text-red-500">Developer</p>
        </div>
        <div className="hidden lg:flex flex-col gap-5 absolute rounded-md shadow-lg top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">Olá, Me chamo Leonardo</h1>
          <p className="to-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ab dolorem voluptatum quisquam ut dicta aliquid quas odit quia, similique, amet cupiditate? Laboriosam, ullam! Exercitationem ratione minus mollitia quia error?</p>
          <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#">Contate-Me</a>
        </div>
      </div>
      {/* <div className="hidden lg:flex flex-col gap-5 absolute rounded-md shadow-lg top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/pagina-teste"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Tela de Criações e Testes
          </a>
        </div>
      </div> */}
    </div>
  )
}