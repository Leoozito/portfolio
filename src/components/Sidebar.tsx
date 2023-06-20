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


export default function Sidebar() {

    const [open, setOpen] = useState(false)

    const alternarModal = () => {
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
            <FaBars className="text-3xl" onClick={alternarModal}/>

            {open && (
            <div ref={modalRef} className='border border-gray-300 p-6 w-1/5 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-80 lg:left-0 peer-focus:left-0 peer-transition ease-out delay-150 duration-200'>
              <div className='flex flex-col justify-start items-center'>
                <h1 className='text-2xl text-center cursor-pointer font-bold text-gray-700 border-b border-gray-100 pb-6 w-full'>Virtual Dashboard</h1>
              </div>

              <div className='mt-16 border-b border-gray-100 pb-4 w-full h-full'>
                <div className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineSpaceDashboard className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Dashboard</h3>
                  </div>
                </div>

                <div className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <CgProfile className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Profile</h3>
                  </div>
                </div>

                <div className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineAnalytics className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Analytics</h3>
                  </div>
                </div>
                <div className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BiMessageSquareDots className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Message</h3>
                  </div>
                </div>

                <div className='pt-5 border-b border-gray-200'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineIntegrationInstructions className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Integration</h3>
                  </div>
                </div>

                <div className='pt-5 border-b border-gray-200 w-full'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineSettings className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Settings</h3>
                  </div>
                </div>

                <div className='pt-5 border-b border-gray-200 w-full'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-8 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineMoreHoriz className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>More</h3>
                  </div>
                </div>
                
                <div className='my-2 flex justify-end fixed items-end bottom-0'>
                  <div className='flex mb-6 justify-start items-center gap-4 px-16 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineLogout className='text-3xl text-gray-600 group-hover:text-white'/>
                    <h3 className='text-2xl text-gray-600 group-hover:text-white font-semibold'>Logout</h3>
                  </div>
                </div>
              </div>
            </div>
            )}
        </div>
    )
}