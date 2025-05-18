import { Job } from "@/lib/types";
import JobItem from "@/components/cards/job-item";

async function fetchJobs() {
  const res = await fetch("https://apis.codante.io/api/job-board/jobs", {
    cache: "no-store",
  });

  const json = await res.json();
  const jobs: Job[] = json.data;

  return jobs;
}

export default async function Vagas() {
  const jobs = await fetchJobs();

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
