import Link from "next/link";
import SocianAILogo from "./SocianAILogo";

export default function SocianAILogoLink({ logoClass = "h-8 w-36" }) {
  return (
    <Link href="/">
      <span className="sr-only">Socian AI</span>
      <div className={`${logoClass}`}>
        <SocianAILogo />
      </div>
    </Link>
  );
}
