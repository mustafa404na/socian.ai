import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SignInWithSocian from "SocianAuthSDK/components/SignInWithSocian";
import Link from "next/link";
import { Fragment, useState } from "react";
import Container from "../ui/Container";
import SocianAILogoLink from "../ui/logos/SocianAILogoLink";
import LandingAppbarDropdown from "./LandingAppbarDropdown";

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Consumerbuzz",
        description: "Data-Driven Social Media Intelligence.",
        href: "/consumerbuzz",
      },
      {
        name: "Analytics",
        description: "Unlock the Power of Social Data.",
        href: "/analytics",
      },
      {
        name: "Converse",
        description: "Connect with Ease and Efficiency.",
        href: "/converse",
      },
    ],
  },

  { name: "Resources", href: "/about#resources" },
  // { name: "AI Demos", href: "/aidemos" },
];

export default function AIDemoNav({ variant = "dark", className }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let variantClass = `bg-black text-white dark`;

  if (variant === "dark") {
    variantClass = `bg-black text-white dark`;
  }

  if (variant === "light") {
    variantClass = `bg-white text-black light`;
  }
  return (
    <div
      id={`header`}
      className={`${variantClass} uppercase sticky top-0 w-full z-30`}
    >
      <Container>
        {/* Desktop Header */}
        <header
          className="relative flex items-center lg:justify-center justify-end py-6"
          aria-label="Global"
        >
          {/* Mobile Toggle Menu */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name}>
                {!item.children && (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold uppercase leading-6"
                  >
                    {item.name}
                  </Link>
                )}
                {item.children && (
                  <LandingAppbarDropdown
                    title={item.name}
                    children={item.children}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="lg:ml-12">
            <SignInWithSocian
              className="text-sm font-semibold uppercase leading-6"
              callback_url={`/auth-server/callback/SignInSuccessCallback`}
            >
              AI Demos
            </SignInWithSocian>
          </div>
        </header>

        {/* Mobile Header */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-30 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Socian Ai</span>
                <SocianAILogoLink />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {!item.children && (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-white hover:bg-gray-400/10"
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.children && (
                        <>
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-white hover:bg-gray-400/10"
                          >
                            {item.name}
                          </Link>
                          <div className="px-3 ">
                            {item.children.map((childItem, childIndex) => (
                              <Fragment
                                key={
                                  childItem.name +
                                  childIndex +
                                  Math.random(5) * 100
                                }
                              >
                                <Link
                                  key={childItem.name}
                                  href={childItem.href}
                                  className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-white hover:bg-gray-400/10"
                                >
                                  {childItem.name}
                                </Link>
                              </Fragment>
                            ))}
                            {/* {item.children.map(childIten, childIndex)=>(<></>)} */}
                          </div>

                          <div className="pl-3">
                            <SignInWithSocian
                              className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 text-white hover:bg-gray-400/10"
                              callback_url={`/auth-server/callback/SignInSuccessCallback`}
                            >
                              AI Demos
                            </SignInWithSocian>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Container>
    </div>
  );
}
