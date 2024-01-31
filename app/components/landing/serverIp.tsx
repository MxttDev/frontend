"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import ip from "../assets/ip.png";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";

const serverIp = () => {
  return (
    <Disclosure as="div" className="bg-main pb-12">
      {({ open }) => (
        <>
          <div className="p-24 w-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-green-400">
                Looking for a server to play on? We got it covered.
              </h1>
              <p className="text-xl pt-5 px-80 text-white">
                Pyron has everything you need: from vanilla survival to wacky
                mini games weve got it all! Plus with our easy-to-use search
                feature youll be playing on your new favorite server in no
                time! Join the Pyron community and discover endless
                possibilities in the world of Minecraft!
              </p>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default serverIp;
