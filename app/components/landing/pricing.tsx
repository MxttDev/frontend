"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import earth from "../assets/earth.png";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const pricing = () => {
  return (
    <Disclosure as="div" className="bg-main pb-12">
      {({ open }) => (
        <>
          <div className="relative w-full h-full">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
              <div className="grid max-w-full gap-11 md:grid-cols-4 sm:mx-auto ">
                <div>
                  <div className="pb-28 p-8 bg-zinc-900 rounded-3xl">
                    <div className="pb-4 mb-4 text-center ">
                      <p className="text-xl font-medium tracking-wide text-green-400">
                        Instant Setup
                      </p>
                    </div>
                    <p className="text-base text-center tracking-wide text-gray-400">
                      Get 2 free servers in less time than it takes to break
                      dirt with a sword!
                    </p>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-50" />
                </div>

                <div>
                <div className="pb-28 p-8 bg-zinc-900 rounded-3xl">
                    <div className="pb-4 mb-4 text-center ">
                      <p className="text-xl font-medium tracking-wide text-green-400">
                        Community Focused
                      </p>
                    </div>
                    <p className="text-base text-center tracking-wide text-gray-400">
                      Get 2 free servers in less time than it takes to break
                      dirt with a sword!
                    </p>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-50" />
                </div>
                <div>
                <div className="pb-28 p-8 bg-zinc-900 rounded-3xl">
                    <div className="pb-4 mb-4 text-center ">
                      <p className="text-xl font-medium tracking-wide text-green-400">
                        No Limits
                      </p>
                    </div>
                    <p className="text-base text-center tracking-wide text-gray-400">
                      Get 2 free servers in less time than it takes to break
                      dirt with a sword!
                    </p>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-50" />
                </div>
                <div>
                <div className="pb-28 p-8 bg-zinc-900 rounded-3xl">
                    <div className="pb-4 mb-4 text-center ">
                      <p className="text-xl font-medium tracking-wide text-green-400">
                        Reliable Network
                      </p>
                    </div>
                    <p className="text-base text-center tracking-wide text-gray-400">
                      Get 2 free servers in less time than it takes to break
                      dirt with a sword!
                    </p>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-zinc-900 rounded-b opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default pricing;
