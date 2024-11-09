import Image from "next/image";

export default function SocianAILogo({ variant, width, height, alt }) {
  let SocianAILogoImage =
    "https://socianaistorageaccount.blob.core.windows.net/public-images/logos/socian-ai-logo.png";

  if (variant) {
    SocianAILogoImage = `https://socianaistorageaccount.blob.core.windows.net/public-images/logos/socian-ai-logo-${variant}.png`;
  }

  return (
    <Image
      src={SocianAILogoImage}
      width={width || 200}
      height={height || 200}
      alt={alt || "Socian AI Logo"}
      priority
    />
  );
}
