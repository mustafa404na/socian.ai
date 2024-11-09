import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Lite plan",
    href: "#",
    priceMonthly: 49,
    includedFeatures: [
      "03 Different Source",
      "10 Human Agent",
      "Unlimited AI Agent",
    ],
  },
  {
    name: "core plan",
    href: "#",
    priceMonthly: 44,
    includedFeatures: [
      "10 Different Source",
      "30 Human Agent",
      "Unlimited AI Agent",
    ],
  },
  {
    name: "premium plan",
    href: "#",
    priceMonthly: 39,
    includedFeatures: [
      "30 Different Source",
      "100 Human Agent",
      "Unlimited AI Agent",
    ],
  },
];
const addon = [
  {
    name: "Additional agents",
    href: "#",
    priceMonthly: 10,
    btnText: "ADD",
  },
  {
    name: "Additional agents",
    href: "#",
    priceMonthly: 10,
    btnText: "ADD",
  },
  {
    name: "Additional agents",
    href: "#",
    priceMonthly: 10,
    btnText: "ADD",
  },
];

export default function Alap() {
  return (
    <div className="min-h-[100vh]">
      <div className="flex lg:flex-row flex-col  items-start justify-center mt-12 space-y-4 sm:mt-16 sm:space-y-0 gap-5 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
        {tiers.map((tier) => (
          <div className="border border-white/[0.3] min-w-[300px] hover:border-white/[1] duration-500 overflow-hidden grid text-center rounded-[22px]">
            <h2 className=" head-bottom py-[21px] uppercase">{tier.name}</h2>
            <p className="mt-8">
              <span className="title-text">${tier.priceMonthly}</span>{" "}
              <span className=" font-medium text-gray-500">/mo</span>
            </p>
            <div className="inline-block px-[47px]">
              <ul role="list" className="mt-6 space-y-4">
                {tier.includedFeatures.map((feature) => (
                  <li key={feature} className="flex space-x-3 text-left">
                    <CheckIcon
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="text-xl leading-6 font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="inline-block  my-[40px]">
              <a
                href={tier.href}
                className="button-text bg-[#46B8E9] font-bold inline-flex rounded-xl px-5 py-3"
              >
                Buy {tier.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      {addon && addon?.length > 0 && (
        <>
          <h1 className="my-[24px] text-center text-xl leading-6 font-normal">
            Addons
          </h1>
          <div className="flex lg:flex-row flex-col items-start justify-center space-y-4 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
            {addon.map((tier) => (
              <div className="border border-white/[0.3] min-w-[300px] hover:border-white/[1] duration-500 overflow-hidden grid text-center rounded-[22px]">
                <h2 className=" head-bottom py-[21px]">{tier.name}</h2>
                <p className="mt-8">
                  <span className="title-text">${tier.priceMonthly}</span>{" "}
                  <span className=" font-medium text-gray-500">/mo</span>
                </p>
                <div className="inline-block  my-[40px]">
                  <a
                    href={tier.href}
                    className="button-text bg-[#46B8E9] font-bold inline-flex rounded-xl px-5 py-3"
                  >
                    Buy {tier.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
