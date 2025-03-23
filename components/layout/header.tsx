// components/layout/header.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full h-[92px] py-4 px-6 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="relative h-8 w-20">
          <Image
            src="/images/logo.svg"
            alt="PICK Logo"
            fill
            sizes="(max-width: 768px) 100px, 150px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <Button
          variant="default"
          className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6"
        >
          Download Now
        </Button>
      </div>
    </header>
  );
}
