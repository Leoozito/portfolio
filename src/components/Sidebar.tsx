import { FaBars } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react';
// import icon from react-icons
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md'
import { CgProfile } from "react-icons/cg"
import { FaRegComments } from "react-icons/fa"
import { BiMessageSquareDots } from "react-icons/bi"
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai"

export default function Sidebar() {

    const [open, setOpen] = useState(false)

    const [subTopico, setSubTopico] = useState(false)

    const abreSubTopicos = () => {
      setSubTopico(!subTopico)
    }

    const [open1, setOpen1] = useState(false)
    const topicoDashboard = () => {
      setOpen1(!open1)
    }
    
    const [open2, setOpen2] = useState(false)
    const topicoProfile = () => {
      setOpen2(!open2)
    }
    

    const [open3, setOpen3] = useState(false)
    const topicoAnalytics = () => {
      setOpen3(!open3)
    }
    
    const [open4, setOpen4] = useState(false)
    const topicoMessage = () => {
      setOpen4(!open4)
    }
    
    const [open5, setOpen5] = useState(false)
    const topicoIntegration = () => {
      setOpen5(!open5)
    }
    
    const [open6, setOpen6] = useState(false)
    const topicoSettings = () => {
      setOpen6(!open6)
    }
    
    const [open7, setOpen7] = useState(false)
    const topicoMore = () => {
      setOpen7(!open7)
    }

    //  Profile     
    const abreItem = () => {
        setOpen(!open);
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div>
            <FaBars className="text-3xl" onClick={abreItem}/>

            {open && (
            <div ref={modalRef} className='overflow-y-auto border border-gray-300 p-6 w-1/5 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-80 lg:left-0 peer-focus:left-0 peer-transition ease-out delay-150 duration-200 rounded-md'>
              <div className='flex flex-col justify-start items-center'>
                <h1 className='text-2xl text-center cursor-pointer font-bold text-gray-700 border-b border-gray-100 pb-6 w-full'>Virtual Dashboard</h1>
              </div>

              <div className='min-h-screen mt-20 border-b border-gray-100 z-10'>
                <div onClick={topicoDashboard} className='pt-2 border-b border-gray-200'>
                  <div className='flex justify-start mb-6 items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineSpaceDashboard className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Dashboard</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open1 ? <AiOutlineUp /> : <AiOutlineDown />}  </button>
                  </div>
                </div>
                {open1 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}

                <div className='pt-5 border-b border-gray-200'>
                  <div onClick={topicoProfile} className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <CgProfile className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Profile</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open2 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>
                {open2 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}

                <div onClick={topicoAnalytics} className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineAnalytics className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Analytics</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open3 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>
                {open3 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}
                <div onClick={topicoMessage} className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BiMessageSquareDots className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Message</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open4 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>

                {open4 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 text-xl rounded hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}

                <div onClick={topicoIntegration} className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineIntegrationInstructions className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Integration</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open5 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>

                {open5 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}

                <div onClick={topicoSettings} className='pt-5 border-b border-gray-200 w-full'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineSettings className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Settings</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open6 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>

                {open6 && (
                <div className='pt-4 pl-5'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}

                <div onClick={topicoMore} className='pt-5 border-b border-gray-200 w-full'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineMoreHoriz className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>More</h3>
                    <button className="absolute right-6 p-2 flex items-center group-hover:text-white"> {open7 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                  </div>
                </div>

                {open7 && (
                <div className='pb-5 pt-4 pl-5 mb-10'>
                  <ul className='flex flex-col pl-4 text-gray-500 border-l border-gray-700'>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                    <li><a href='#' className='inline-block w-full px-4 py-2 rounded text-xl hover:bg-gray-800 hover:text-white'>Lorem Ipsum</a></li>
                  </ul>
                </div>
                )}
              </div>
              <div className='justify-end items-end bottom-0'>
                <div className='flex justify-start items-center gap-4 px-16 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <MdOutlineLogout className='text-3xl text-gray-600 group-hover:text-white'/>
                  <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Logout</h3>
                </div>
              </div>
            </div>
            )}
        </div>
    )
}