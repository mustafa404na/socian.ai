import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import Container from "../ui/Container";
import SocianAILogo from "../ui/logos/SocianAILogo";
import FooterLinkHeading from "./FooterLinkHeading";
import SocianSubscriptionForm from "./form/SocianSubscriptionForm";

const navigation = {
  about: [
    { name: "Overview", href: "/about" },
    { name: "Partners", href: "/partners" },
  ],
  products: [
    { name: "ConsumerBuzz", href: "/consumerbuzz" },
    { name: "Socian Analytics", href: "/analytics" },
    { name: "My Search", href: "/converse#mysearch" },
    { name: "My Recommends", href: "/converse#recommends" },
  ],

  technologies: [{ name: "Dev Tools", href: "/converse#devtools" }],

  resources: [
    { name: "Documents", href: "/about#resources" },
    { name: "Contact Us", href: "/#section_contact_form" },
    { name: "Help", href: "https://wa.me/8801324446600" },
  ],

  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/socianai",
      color: "hover:bg-[#337FFF]",
      bgcolor: "fbBg",
      icon: (props) => (
          <svg
              width="14"
              height="25"
              viewBox="0 0 14 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M12.8717 13.5625L13.5556 9.21725H9.34277V6.39281C9.34277 5.20464 9.93093 4.04363 11.8117 4.04363H13.754V0.343341C12.6229 0.162972 11.4799 0.0653921 10.3344 0.0513916C6.86704 0.0513916 4.60331 2.13578 4.60331 5.90396V9.21725H0.759766V13.5625H4.60331V24.0727H9.34277V13.5625H12.8717Z"
                fill="white"
            />
          </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/socianai",
      color: "hover:bg-[#33CCFF]",
      bgcolor: "twitterBg",
      icon: (props) => (
          <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M24.9136 3.40066C24.1211 3.74205 23.2879 3.97977 22.4346 4.10796C22.8335 4.03951 23.4205 3.3208 23.6542 3.0299C24.0091 2.5911 24.2797 2.09017 24.452 1.55256C24.452 1.51263 24.4919 1.45559 24.452 1.42707C24.4319 1.41609 24.4094 1.41033 24.3865 1.41033C24.3636 1.41033 24.341 1.41609 24.3209 1.42707C23.3944 1.92927 22.4083 2.31255 21.386 2.56787C21.3503 2.57877 21.3124 2.57975 21.2763 2.5707C21.2401 2.56166 21.2071 2.54293 21.1808 2.51654C21.1012 2.4217 21.0156 2.33214 20.9244 2.24845C20.5074 1.87452 20.0343 1.56848 19.5224 1.34151C18.8315 1.05778 18.0851 0.934904 17.3397 0.982159C16.6165 1.02788 15.9104 1.22203 15.2653 1.55256C14.6301 1.90103 14.0718 2.37444 13.624 2.94434C13.153 3.53091 12.8129 4.21164 12.6267 4.94074C12.4731 5.63426 12.4557 6.35105 12.5754 7.05122C12.5754 7.17101 12.5754 7.18812 12.4728 7.17101C8.40949 6.57209 5.07561 5.12897 2.35151 2.0317C2.23184 1.8948 2.16915 1.8948 2.07227 2.0317C0.886886 3.83416 1.46248 6.68617 2.9442 8.09506C3.14367 8.28329 3.34883 8.46582 3.56539 8.63694C2.88603 8.58866 2.22326 8.4044 1.61635 8.09506C1.50237 8.0209 1.43968 8.06083 1.43398 8.19773C1.41783 8.38752 1.41783 8.57834 1.43398 8.76813C1.5529 9.67769 1.91103 10.5393 2.47176 11.2649C3.03249 11.9905 3.7757 12.554 4.62539 12.8978C4.83252 12.9866 5.04835 13.0535 5.26937 13.0975C4.64045 13.2214 3.99541 13.2407 3.36023 13.1545C3.22345 13.126 3.17216 13.2001 3.22345 13.3313C4.0612 15.6129 5.87916 16.3088 7.21271 16.6967C7.39508 16.7252 7.57744 16.7252 7.78261 16.7709C7.78261 16.7709 7.78261 16.7709 7.74841 16.8051C7.35518 17.5238 5.76518 18.0086 5.03572 18.2596C3.70426 18.7383 2.28467 18.9212 0.875488 18.7958C0.653229 18.7616 0.601939 18.7673 0.544949 18.7958C0.48796 18.8243 0.544949 18.887 0.607638 18.9441C0.892585 19.1323 1.17753 19.2977 1.47388 19.4574C2.3561 19.9391 3.28878 20.3216 4.25496 20.5982C9.25863 21.9786 14.8892 20.9633 18.6448 17.2272C21.5968 14.2953 22.634 10.2512 22.634 6.20133C22.634 6.04732 22.8221 5.95605 22.9304 5.8762C23.6772 5.29376 24.3357 4.60591 24.8851 3.83416C24.9803 3.71912 25.0291 3.57265 25.0219 3.42347C25.0219 3.33791 25.0219 3.35503 24.9136 3.40066Z"
                fill="white"
            />
          </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/socian/",
      color: "hover:bg-[#006699]",
      bgcolor: "linkedInBg",
      icon: (props) => (
          <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M5.47771 19.7265V6.76032H1.17177V19.7265H5.47816H5.47771ZM3.32564 4.99031C4.82689 4.99031 5.76152 3.99466 5.76152 2.75038C5.73342 1.47775 4.82689 0.509888 3.35419 0.509888C1.88048 0.509888 0.917969 1.47775 0.917969 2.75027C0.917969 3.99455 1.85226 4.9902 3.29743 4.9902H3.3253L3.32564 4.99031ZM7.8611 19.7265H12.1667V12.4864C12.1667 12.0994 12.1948 11.7113 12.3085 11.4349C12.6197 10.6603 13.3282 9.85854 14.5179 9.85854C16.0756 9.85854 16.6991 11.0475 16.6991 12.7907V19.7265H21.0046V12.2921C21.0046 8.3096 18.8806 6.45634 16.0477 6.45634C13.7252 6.45634 12.7051 7.75563 12.1384 8.64058H12.167V6.76077H7.86132C7.91753 7.97715 7.86099 19.727 7.86099 19.727L7.8611 19.7265Z"
                fill="white"
            />
          </svg>
      ),
    },
    {
      name: "What's app",
      href: "https://wa.me/8801324446600",
      color: "hover:bg-[#00D95F]",
      bgcolor: "whatsAppBg",
      icon: (props) => (
          <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M0 24.1114L1.72195 17.7088C0.333239 15.2147 -0.107966 12.3042 0.47929 9.51154C1.06655 6.71885 2.64287 4.23125 4.91901 2.50522C7.19515 0.77918 10.0184 -0.0695088 12.8707 0.114884C15.7231 0.299276 18.4131 1.50438 20.4473 3.50906C22.4815 5.51374 23.7233 8.18352 23.9449 11.0285C24.1665 13.8735 23.353 16.7028 21.6537 18.9973C19.9544 21.2918 17.4832 22.8976 14.6937 23.52C11.9042 24.1424 8.9835 23.7396 6.46746 22.3856L0 24.1114ZM6.77931 19.9897L7.17929 20.2265C9.00171 21.3049 11.1303 21.7512 13.2333 21.4958C15.3362 21.2404 17.2955 20.2976 18.8058 18.8144C20.3161 17.3312 21.2925 15.391 21.5828 13.2959C21.8732 11.2009 21.4613 9.06884 20.4112 7.23196C19.3611 5.39508 17.7318 3.95658 15.7774 3.14064C13.8229 2.32469 11.6529 2.17714 9.60563 2.72096C7.55837 3.26478 5.7488 4.46944 4.45892 6.1472C3.16904 7.82496 2.4713 9.88158 2.47445 11.9966C2.47273 13.7502 2.95853 15.47 3.87777 16.9643L4.1286 17.3772L3.16594 20.9507L6.77931 19.9897Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4865 13.6406C16.252 13.4518 15.9775 13.3189 15.6838 13.252C15.3901 13.1852 15.0849 13.1861 14.7917 13.2548C14.351 13.4375 14.0663 14.1279 13.7815 14.473C13.7215 14.5558 13.6333 14.6138 13.5334 14.6362C13.4336 14.6587 13.329 14.644 13.2392 14.5949C11.6259 13.9641 10.2737 12.8072 9.40211 11.3123C9.32776 11.2191 9.29258 11.1006 9.30396 10.982C9.31534 10.8633 9.3724 10.7537 9.46312 10.6761C9.78069 10.3623 10.0139 9.97355 10.1411 9.54588C10.1693 9.07415 10.061 8.60427 9.8292 8.19226C9.64997 7.61465 9.30887 7.10032 8.8462 6.71006C8.60757 6.60291 8.34298 6.56698 8.08435 6.60661C7.82573 6.64624 7.58411 6.75974 7.38865 6.9334C7.04932 7.22568 6.77999 7.59022 6.60048 8.00018C6.42097 8.41014 6.33586 8.85508 6.35141 9.30223C6.35246 9.55333 6.38434 9.80336 6.44633 10.0467C6.60375 10.6314 6.84583 11.19 7.16493 11.7049C7.39516 12.0993 7.64635 12.4811 7.91744 12.8487C8.79844 14.0561 9.90588 15.0813 11.1783 15.8673C11.8168 16.2667 12.4992 16.5914 13.2121 16.8351C13.9526 17.1702 14.7702 17.2989 15.5781 17.2073C16.0383 17.1378 16.4745 16.9564 16.848 16.679C17.2216 16.4017 17.5211 16.0369 17.7203 15.6168C17.8374 15.3631 17.8729 15.0794 17.822 14.8047C17.7 14.2429 16.9475 13.9113 16.4865 13.6406Z"
                fill="white"
            />
          </svg>
      ),
    },
  ],
};

export default function AppFooter() {
  return (
      <section className="scrollElement">
        <Container>
          <footer aria-labelledby="footer-heading action-1">
            <div className="min-h-screen pt-[110px] flex xl:items-end xl:pb-20 items-start mob:items-start mx-auto mob:pt-20">
              <div className={`mx-auto`}>
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div className={``}>
                    <div className={`w-56`}>
                      <SocianAILogo width={150} height={100} />
                    </div>

                    <div className={`xl:mt-10 mt-4 pr-24 text-lg`}>
                      Socian builds technologies that help companies achieve
                      unparalleled intelligence and automation by merging
                      language, AI, and business acumen.
                    </div>

                    <div className="xl:mt-9 mt-4 flex flex-col gap-y-4">
                      <div className="flex items-center">
                        <PhoneIcon className={`w-6 h-6 mr-4`} />

                        <div className={`flex flex-col gap-y-3`}>
                          <a href="callto:+8801324446600">
                            (+880) 132-444-6600
                          </a>

                          <a href="callto:+13024402121">
                            (+1) 302-440-2121
                          </a>
                        </div>

                      </div>

                      <div className="flex items-center">
                        <EnvelopeIcon className={`w-6 h-6 mr-4`} />
                        <a href="mailTo:contact@socian.ai">contact@socian.ai</a>
                      </div>

                      <div className="flex items-start">
                        <MapPinIcon className={`w-6 h-6 mr-4`} />
                        <a
                            target="_blank"
                            href="https://www.google.com/maps/place/Socian+Ltd./@23.8379188,90.3689339,18.25z/data=!4m14!1m7!3m6!1s0x3755c1496fc0ab5f:0x4dd0a4c5914672b9!2sSocian+Ltd.!8m2!3d23.8381101!4d90.3694437!16s%2Fg%2F11dxdhwj2d!3m5!1s0x3755c1496fc0ab5f:0x4dd0a4c5914672b9!8m2!3d23.8381101!4d90.3694437!16s%2Fg%2F11dxdhwj2d"
                        >
                          Flat# 1C, House# 739-742, Road# 10 <br />
                          Avenue# 04, Mirpur DOHS, Dhaka# 1216
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 tablet:my-12 mob:my-10">
                      <a
                          href="https://book.ms/b/SocianAI@socian.ai"
                          target={"_blank"}
                          className="defultFont text-[#46B8E9] underline duration-500 hover:text-[#0068EC]"
                      >
                        Schedule a meeting
                      </a>
                    </div>
                  </div>

                  <div className="grid-cols-2 gap-8 lg:col-span-2 lg:mt-0 hidden md:grid tablet:my-12 mob:my-12">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <FooterLinkHeading>About</FooterLinkHeading>

                        <ul
                            role="list"
                            className="xl:mt-6 mt-1 xl:space-y-4 space-y-1"
                        >
                          {navigation.about.map((item) => (
                              <li key={item.name}>
                                <Link
                                    // target={"_blank"}
                                    href={item.href}
                                    className="text-lg hover:text-[#46B8E9] hover:underline duration-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div className="xl:mt-0 mt-4 md:mt-0">
                        <FooterLinkHeading>Products</FooterLinkHeading>
                        <ul
                            role="list"
                            className="xl:mt-6 mt-1 xl:space-y-4 space-y-1"
                        >
                          {navigation.products.map((item) => (
                              <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-lg hover:text-[#46B8E9] hover:underline duration-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <FooterLinkHeading>Technologies</FooterLinkHeading>
                        <ul
                            role="list"
                            className="xl:mt-6 mt-1 xl:space-y-4 space-y-1"
                        >
                          {navigation.technologies.map((item) => (
                              <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-lg hover:text-[#46B8E9] hover:underline duration-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div className="xl:mt-0 mt-4 md:mt-0">
                        <FooterLinkHeading>Resources</FooterLinkHeading>
                        <ul
                            role="list"
                            className="xl:mt-6 mt-1 xl:space-y-4 space-y-1"
                        >
                          {navigation.resources.map((item) => (
                              <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-lg hover:text-[#46B8E9] hover:underline duration-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-4 border-white/10 pt-4 lg:flex lg:items-center lg:justify-between tablet:my-12 mob:my-12">
                  <div>
                    <h1 className="defultFont">Subscribe to our newsletter</h1>
                  </div>

                  <SocianSubscriptionForm />
                </div>
                <div className="flex xl:flex mob:flex-col lg:hidden mt-4 border-t border-white/10 pt-4 items-center justify-between">
                  <div className="flex space-x-6 md:order-2">
                    {navigation.social.map((item) => (
                        <a
                            target={"_blank"}
                            key={item.name}
                            href={item.href}
                            className={`h-[48px] w-[48px] rounded-[14px] justify-center bg-white/[.2] duration-500 items-center flex ${item.color}`}
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                  </div>
                  <p className="mt-8 mb-5 text-md leading-5 text-gray-400 md:order-1 md:mt-0">
                    &copy; {new Date().getFullYear()} Socian AI. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden xl:hidden lg:block mx-auto pb-12">
              <div className="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between">
                <div className="flex space-x-6 md:order-2">
                  {navigation.social.map((item) => (
                      <a
                          target={"_blank"}
                          key={item.name}
                          href={item.href}
                          className={`h-[48px] w-[48px] rounded-[14px] justify-center bg-white/[.2] duration-500 items-center flex ${item.color}`}
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                  ))}
                </div>
                <p className="mt-8 mb-5 text-md leading-5 text-gray-400 md:order-1 md:mt-0">
                  &copy; {new Date().getFullYear()} Socian AI. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </Container>
      </section>
  );
}
