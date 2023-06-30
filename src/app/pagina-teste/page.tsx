"use client"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react' // instalar "npm install @headlessui/react"
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline' //instalar "npm install @heroicons/react"
import Sidebar from '../../components/Sidebar'
import { Button, Input } from "@material-tailwind/react";
// import Image from 'next/image'

export default function Teste() {

    const [open, setOpen] = useState(false)

    const alternarModal = () => {
        setOpen(!open);
    };
  
    const cancelButtonRef = useRef(null)

    return (
        <div className='py-8 mx-8'>
            <div className=' flex items-center gap-2'>
              <Sidebar/>
              <div className="ml-auto flex items-center justify-end">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ir para Tela Inicial
                </a>
              </div>
            </div>
            <section className="relative isolate overflow-hidden bg-white px-6 py-8 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600 ring-1 ring-indigo-300 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption className="mt-10 gap-2">
                            {/* <Image className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/> */}
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Judith Black.HTML</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            
            <div className="bg-white gap-2 my-10 py-6 grid md:flex grid-cols-2">
                <div>
                    <div className="max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster.HTML</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
                    </div>
                    <div className="max-w-2xl lg:mt-10 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"/>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                </div>
                                Push to deploy.HTML
                            </dt>
                            <dd className="mt-2 max-w-xl text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                        </div>
                    </div>

                    <div className="my-6 flex gap-x-4">
                        <a
                        onClick={alternarModal}
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        CLICK HERE
                        </a>
                    </div>
                    <Button onClick={() => window.location.href = "/formulario"} className="px-6 py-4 rounded-lg bg-green-500 hover:bg-green-700 font-bold text-white shadow-lg shadow-green-200 duration-200 translate-10">
                        Formulario
                    </Button>
                </div>
                <div className="flex ml-auto mr-40">
                  <div className="bg-white p-10 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="font-medium text-sm text-stone-600">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="john doe"
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium text-sm text-stone-600">Email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="johndoe@example.com"
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="date" className="font-medium text-sm text-stone-600">Published Date</label>
                        <input
                          type="date"
                          id="date"
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="status" className="font-medium text-sm text-stone-600">Status</label>

                        <select
                          id="status"
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                        >
                          <option>Active</option>
                          <option>Pending</option>
                          <option>Deleted</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
                      <button className="px-4 py-2 rounded-lg bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
                        Reset
                      </button>

                      <button className="px-4 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-200 transition ease-in-out duration-200 translate-10">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            {open && (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>
          
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                              </div>
                              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                  Deactivate account
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Are you sure you want to deactivate your account? All of your data will be permanently
                                    removed. This action cannot be undone.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                              onClick={() => setOpen(false)}
                            >
                              Deactivate
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
            </Transition.Root>
            )}

            <div className="shadow-sm mb-6">
                <div className='block bg-transparent overflow-x-auto w-full rounded-lg shadow-xl'>
                    <table className='w-full border-collapse border border-gray-200'>
                        <thead className='bg-gray-100 border-b-2 border-gray-300'> 
                            <tr>
                                <th className="w-26 p-4 text sm font-semibold tracking-wide text-left ">No.</th>
                                <th className="p-3 text sm font-semibold tracking-wide text-left">Details</th>
                                <th className="w-26 p-4 text sm font-semibold tracking-wide text-left">Status</th>
                                <th className="w-26 p-4 text sm font-semibold tracking-wide text-left">Date</th>
                                <th className="w-34 p-4 text sm font-semibold tracking-wide text-left">Total</th>
                                <th className="p-4 text sm font-semibold tracking-wide text-left">Lorem Ipsum</th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-gray-100'>
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-blue-500 whitespace-nowrap"><a href="#">10001</a></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, blac</td>
                                <td className="p-4 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 whitespace-nowrap">Delivere</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap peer-checked:block">Lorem Ipsum</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className="p-4 font-bold text-blue-500 whitespace-nowrap"><a href="#">10001</a></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, blac</td>
                                <td className='p-2'><span className="p-2 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-300 rounded-lg bg-opacity-50 whitespace-nowrap">Shipped</span></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">Lorem Ipsum</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-blue-500 whitespace-nowrap"><a href="#">10001</a></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, blac</td>
                                <td className="p-4 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50 whitespace-nowrap">Cancelled</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">Lorem Ipsum</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-bold text-blue-500 whitespace-nowrap uppercase"><a href="#">Lorem Ipsum</a></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-xs font-medium uppercase tracking-wider text-gray-600 rounded-lg bg-opacity-50 whitespace-nowrap">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-4 font-bold text-blue-500 whitespace-nowrap uppercase"><a href="#">Lorem Ipsum</a></td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-xs font-medium uppercase tracking-wider text-gray-600 rounded-lg bg-opacity-50 whitespace-nowrap">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                                <td className="p-4 text-sm text-gray-700 whitespace-nowrap uppercase">Lorem Ipsum</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center items-center">
              <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>

                  <span>
                      previous
                  </span>
              </a>

              <div className="items-center hidden md:flex gap-x-3">
                  <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                  <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
              </div>

              <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                  <span>
                      Next
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </a>
          </div>
        </div>
    )
}