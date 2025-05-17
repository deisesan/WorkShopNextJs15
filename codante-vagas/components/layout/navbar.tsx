import { cn } from "@/lib/utils";
import Logo from "./logo";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between py-6">
      <Logo />
      <ul className="flex items-center gap-6">
        <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </Link>
        <Link href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </Link>
        <Link href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </Link>
        <Link
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar Vagas
        </Link>
      </ul>
    </nav>
  );
}
