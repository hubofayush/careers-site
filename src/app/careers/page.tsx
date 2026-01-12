import { jobs } from "@/constants/jobData";
import Link from "next/link";

const page = () => {
  const activeJobs = jobs.filter((job) => job.isActive);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Careers</h1>

      <ul className="space-y-4">
        {activeJobs.map((job) => (
          <li key={job.slug} className="border rounded-lg p-4 hover:bg-gray-50">
            <Link href={`/careers/${job.slug}`}>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-600">
                {job.location} . {job.type}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default page;
