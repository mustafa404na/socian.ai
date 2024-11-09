import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDowns({ data, getIndustries, setIndustries }) {
  const [industriesData, setIndustriesData] = useState(data);
  const [dropdownData, setDropdownData] = useState(
    industriesData.industriesDropdown
  );

  useEffect(() => {
    setIndustries(dropdownData[0]);
  }, []);

  return (
    <Listbox value={getIndustries} onChange={setIndustries}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-lg font-medium leading-6 text-white">
            {industriesData.industriesTitle}
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="block bg-white/[.1] text-white text-left text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg">
              <span className="block truncate">
                {getIndustries.industriesName}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {dropdownData.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none text-lg py-3 px-8 pr-4"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {item.industriesName}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
