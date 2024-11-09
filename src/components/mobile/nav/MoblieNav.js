import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import MobileText from "../ui/MobileText";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "/mobile" },
  { name: "About", href: "/mobile/about" },
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Consumerbuzz",
        description: "Data-Driven Social Media Intelligence.",
        href: "/mobile/consumerbuzz",
      },
      {
        name: "Analytics",
        description: "Unlock the Power of Social Data.",
        href: "/mobile/analytics",
      },
      {
        name: "Converse",
        description: "Connect with Ease and Efficiency.",
        href: "/mobile/converse",
      },
    ],
  },

  // { name: "Resources", href: "/mobile/about#resources" },
  { name: "AI Demos", href: "/aidemos" },
];

export default function MoblieNav({ variant = "dark", className }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pageInfo = useSelector((state) => state);
  const { pages, current, navTheme } = pageInfo;
  let variantClass = `bg-black text-white dark`;

  if (variant === "dark") {
    variantClass = `bg-black text-white dark`;
  }

  if (variant === "light") {
    variantClass = `bg-white text-black light`;
  }

  let formattedNumber = current.toString().padStart(2, "0");
  return (
    <div className="uppercase fixed px-[20px] w-full z-30 pt-10 flex justify-between items-center align-middle">
      {/* Mobile Toggle Menu */}
      <div className="flex ">
        <button
          type="button"
          className={`p-2.5 border rounded-xl ${
            navTheme === "dark"
              ? " border-white text-white bg-[#05090A] "
              : " border-black text-black bg-[#fff] "
          }`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {/* Mobile Header */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-30 overflow-y-auto bg-white text-black px-5 pt-10 "
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="p-2.5 border border-black/5 rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#000]/[0.3]">
              <div className="space-y-2 py-6 uppercase">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {!item.children && (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 font-semibold leading-[50px] hover:bg-gray-400/10 text-2xl"
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.children && (
                      <>
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 font-semibold  hover:bg-gray-400/10 text-2xl"
                        >
                          {item.name}
                        </Link>
                        <div className="px-3 border-l border-black/[0.3] pl-6">
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
                                className="-mx-3 block rounded-lg my-2 px-3 text-[#05090A]/[0.3] font-semibold leading-[50px] hover:bg-gray-400/10 text-2xl"
                              >
                                {childItem.name}
                              </Link>
                            </Fragment>
                          ))}
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
      <div>
        <MobileText className="text-[#ffffff91]">
          {formattedNumber}/{pages}
        </MobileText>
      </div>
    </div>
  );
}
