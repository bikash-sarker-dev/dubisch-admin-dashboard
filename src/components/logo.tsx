import logoThree from "@/assets/logos/logoBlue.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-16 max-w-[12.847rem]">
      <Image
        src={logoThree}
        fill
        // className="dark:hidden"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={logoThree}
        fill
        // className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
