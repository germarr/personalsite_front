/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link"

const navigation = [
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'About Me', href: '/about', current: false },
    { name: 'Videos', href: '/videos', current: false }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <Link className="hover:cursor-pointer" href="/index" passHref>
                        <img className="block lg:hidden h-16 w-auto"
                          src="https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/gerlog.png"
                          alt="Workflow"/>
                      </Link>
                      <Link className="hover:cursor-pointer" href="/index" passHref>
                        <img className="hidden lg:block h-16 w-auto hover:cursor-pointer"
                          src="https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/gerlog.png"
                          alt="Workflow"
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex mt-3 ml-10 space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}
