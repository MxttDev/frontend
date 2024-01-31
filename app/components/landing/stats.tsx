"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import earth from "../assets/earth.png";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";

const stats = () => {
  return (
    <Disclosure as="div" className="bg-main pb-12">
      {({ open }) => (
        <>
          <div className="p-24">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5">
              <div className="text-center md:border-r">
                <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
                  500+
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                  Servers Created
                </p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
                  1,000+
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                  Unique Players
                </p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
                  24/7
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                  Server Uptime
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">
                  99%
                </h6>
                <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
                  Uptime gurantee
                </p>
              </div>
              <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5 bg-gray-800 p-3 rounded-2xl">
                <ShieldExclamationIcon className="h-20 w-20 pr-4 text-green-400" />
                <div className="text-center">
                  <h6 className=" text-4xl font-bold lg:text-5xl xl:text-4xl pt-2 pl-6 text-white">
                    DDoS
                  </h6>

                  <p className="text-sm font-medium tracking-widest text-white uppercase pl-6 lg:text-base">
                    Protected
                  </p>
                </div>
            
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default stats;
