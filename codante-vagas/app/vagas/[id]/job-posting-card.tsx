import { Badge } from "@/components/ui/badge";
import { Briefcase, DollarSign, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Job } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function JobPostingCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-muted-foreground">
              Vaga disponível no{" "}
              <Link
                href={job.company_website}
                className="text-blue-600 hover:underline"
              >
                {job.company}
              </Link>
            </p>
          </div>
          <Button variant="destructive">Apagar Vaga</Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-5 w-5" />
            <span>{job.city}</span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-5 w-5" />
            <div className="flex gap-2">
              <Badge variant="secondary">
                {job.schedule === "full time" ? "Integral" : "Meio período"}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-muted-foreground h-5 w-5" />
            <span>{job.salary.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-muted-foreground h-5 w-5" />
            <span>{job.number_of_positions}</span>
          </div>
        </div>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
          <p className="text-muted-foreground">{job.requirements}</p>
        </section>
      </CardContent>
    </Card>
  );
}
