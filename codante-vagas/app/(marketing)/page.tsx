import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import peopleImg from "@/public/people.png";

export default function Home() {
  return (
    <section className="pb-10 text-center">
      <h1 className="font-display mx-auto w-xl text-5xl font-black">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Link
        href="/vagas"
        className={cn(
          "mt-12 cursor-pointer",
          buttonVariants({ variant: "outline" }),
        )}
      >
        Busque Uma Vaga
      </Link>
      <Image
        src={peopleImg}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
