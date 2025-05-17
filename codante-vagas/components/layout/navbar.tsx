import { cn } from "@/lib/utils";
import Logo from "./logo";
import { buttonVariants } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between py-6">
      <Logo />
      <ul className="flex items-center gap-6">
        <a href="/" className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </a>
        <a href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </a>
        <a href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </a>
        <a
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar Vagas
        </a>
      </ul>
    </nav>
  );
}
