import SocianAILogo from "../../../images/socian-logo-blue.png";
import Link from "next/link";
import Image from "next/image";

export default function SocianAILogoLinkBlue({ logoClass = "h-8 w-36" }) {
  return (
    <Link href="/">
      <span className="sr-only">Socian AI</span>
      <div className={`${logoClass}`}>
        <Image src={SocianAILogo} height={"100%"} width={"100%"} priority />
      </div>
    </Link>
  );
}
