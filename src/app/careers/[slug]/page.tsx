import LinkedInShare from "@/app/components/LinkedInShare";
import { jobs } from "@/constants/jobData";
import { execFile } from "child_process";
import { notFound } from "next/navigation";

type props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: props) {
  const { slug } = await params;

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return {};
  }

  const url = `${process.env.BASE_URL}${job.slug}`;
  const ogImage = `${process.env.BASE_URL}og/job.jpg`;
  // 1200x630

  return {
    title: `${job.title} | Careers`,
    description: job.description,

    openGraph: {
      title: job.title,
      description: job.description,
      url,
      siteName: "Company Name",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${job.title} at Company Name`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: job.title,
      description: job.description,
      images: [ogImage],
    },
  };
}

const JobDetailsPage = async ({ params }: props) => {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.location} . {job.type}
      </p>
      <p className="mb-6">{job.description}</p>
      <button className="bg-background text-foreground rounded-lg m-2">
        Apply
      </button>

      {/* share on linkedin */}
      <LinkedInShare />
    </main>
  );
};

export default JobDetailsPage;
