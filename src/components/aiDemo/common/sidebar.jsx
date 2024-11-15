import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SocianAILogoLink from "@/components/ui/logos/SocianAILogoLink";
import voiceCricle from "@/images/aidemo/voice-cricle.png";
import videocircle from "@/images/aidemo/video-circle.png";
import emojiHappy from "@/images/aidemo/emoji-happy.png";
import ranking from "@/images/aidemo/ranking.png";
import bubble from "@/images/aidemo/bubble.png";
import searchStatus from "@/images/aidemo/search-status.png";
import like from "@/images/aidemo/like.png";
import clipboardTick from "@/images/aidemo/clipboard-tick.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    name: "Text to speech",
    href: "/ai-demos/texttospeech",
    icon: videocircle,
    current: true,
  },
  {
    name: "Speech to text",
    href: "/ai-demos/speechtotext",
    icon: voiceCricle,
    current: false,
  },
  {
    name: "Sentiment analysis",
    href: "/ai-demos/sentimentanalysis",
    icon: emojiHappy,
    current: false,
  },
  {
    name: "Topic modeling",
    href: "/ai-demos/topicmodeling",
    icon: ranking,
    current: false,
  },
  { name: "Chat bot", href: "/ai-demos/chatbot", icon: bubble, current: false },
  {
    name: "Search",
    href: "/ai-demos/search",
    icon: searchStatus,
    current: false,
  },
  {
    name: "Recommendation",
    href: "/ai-demos/recommendation",
    icon: like,
    current: false,
  },
  {
    name: "Document/Image to Text(OCR)",
    href: "/ai-demos/ocr",
    icon: clipboardTick,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                {/* <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                /> */}
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-12 overflow-y-auto px-6 pt-10 border-r border-white/[.3]">
          <div className="flex justify-center h-16 shrink-0 items-center">
            <SocianAILogoLink />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-6">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className={classNames(
                        isActive(`${item.href}`) ? "active" : "opacity-[.5]"
                      )}
                    >
                      <Link
                        href={item.href}
                        className={
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white"
                        }
                      >
                        <Image src={item.icon} alt={item.name} width={24} />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
      </div>
    </>
  );
}
