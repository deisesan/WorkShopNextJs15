import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="pb-10 text-center">
      <h1 className="font-display mx-auto w-xl text-5xl font-black">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Button className="mt-12 cursor-pointer" variant={"outline"}>
        Busque Uma Vaga
      </Button>
      <img
        src="/people.png"
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
