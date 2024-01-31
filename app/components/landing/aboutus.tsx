"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from 'next/image'
import earth from '../assets/earth.png'
import {
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

const aboutus = () => {
  return (
    <Disclosure as="nav" className="bg-main pb-12">
      {({ open }) => (
        <>
          <div className=" px-2 py-20 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-20 lg:px-8 lg:py-24 ">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-3xl mb-6">
                  <h2 className="max-w-1xl mb-6 font-roboto text-2xl font-bold tracking-tight text-white sm:text-5xl ">
                    Free Cloud Hosting
                  </h2>

                  <ul className="inline-grid text-lg text-white">
                    <li className="inline-flex pb-2">
                    <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                      <h2 className="pl-1"> 2 Free Servers </h2>
                    </li>
                    <li className="inline-flex pb-2">
                      <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                      <h2 className="pl-1"> Reliable Network </h2>
                    </li>
                    <li className="inline-flex pb-2">
                    <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                      <h1 className="pl-1"> Control Panel Access </h1>
                    </li>
                    <li className="inline-flex pb-2">
                    <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                      <h2 className="pl-1"> Enterprise Grade Hardware </h2>
                    </li>
                  </ul>
                </div>
                <div>
                    <button
                        type="button"
                        className="middle none center rounded-2xl bg-green-400 py-3 px-6 font-roboto font-bold pl-20 pr-20"
                    >
                    Create Server
                    </button>
                </div>
              </div>
              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                    <Image src={earth} width={400} height={400} alt=""/>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default aboutus;
