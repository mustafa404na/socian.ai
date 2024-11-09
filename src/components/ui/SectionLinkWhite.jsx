import Link from "next/link";

export default function SectionLinkWhite({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center lg:px-8 lg:py-3 px-6 py-4 border border-gray-500 text-base font-medium rounded-full shadow-sm text-black bg-transparent duration-500 hover:border-black uppercase"
    >
      {children}
      <svg
        className="ml-2"
        width="8"
        height="15"
        viewBox="0 0 5 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrow"
          d="M0 11.5L4.59317 6.97222C5.13561 6.4375 5.13561 5.5625 4.59317 5.02778L0 0.5"
          // fill="#05090A"
          fill={"black"}
        />
      </svg>
    </Link>
  );
}
