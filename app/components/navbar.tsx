'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSession, signIn } from "next-auth/react"
import NavbarAuth from "./navbarAuth";


const navigation = [
  { name: 'SERVER LIST', href: '#', current: false },
  { name: 'COMMUNITY', href: '#', current: false },
  { name: 'SHOP', href: '#', current: false },
  { name: 'MORE', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const { data: session, status } = useSession()

  const handleClick = () => {
    signIn("google");
  };

  
  
  if (session) {
    return <NavbarAuth/>
  } else {
    
  }



  return (
    <Disclosure as="nav" className="bg-main"> 
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute text-white font-bold text-5xl">
                <h3>PYRON</h3>
              </div>
              <div className="absolute right-96 flex items-center"> {/* Navigational bar */}
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' '  : 'text-white font-semibold text-24 hover:text-gray-400',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
               
              <div className="absolute inset-y-0 right-0 flex items-center">
                
                <button
                  onClick={handleClick}
                  type="button"
                  className="middle none center rounded-2xl bg-green-400 py-3 px-6 font-roboto font-semibold pl-12 pr-12"
                >
                  Continue with Google
                </button>
                

              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
  
export default Navbar;