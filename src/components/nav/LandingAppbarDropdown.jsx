import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingAppbarDropdown({ title, children }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="text-sm font-semibold text-inherit group inline-flex items-center uppercase cursor-pointer">
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {children.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="ml-4">
                        <p className=" font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 normal-case text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
