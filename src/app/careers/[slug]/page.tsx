import LinkedInShare from "@/app/components/LinkedInShare";
import ShareOnLinkedIn from "@/app/components/ShareOnLinkedIn";
import { BaseUrl, jobs } from "@/constants/jobData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type props = {
  params: Promise<{ slug: string }>;
};

// export async function generateMetadata({ params }: props): Promise<Metadata> {
//   const { slug } = await params;

//   const job = jobs.find((j) => j.slug === slug);

//   if (!job) {
//     return {};
//   }

//   const base_url = BaseUrl;

//   const url = `${base_url}/careers/front-developer`;
//   const ogImage = `${base_url}/og/job.jpg`;
//   console.log("ogurl :", url);
//   console.log(ogImage);
//   // 1200x630

//   return {
//     title: `${job.title} | Careers`,
//     description: job.description,

//     openGraph: {
//       title: job.title,
//       description: job.description,
//       url,
//       siteName: "Company Name",
//       type: "website",
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: `${job.title} at Company Name`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: job.title,
//       description: job.description,
//       images: [ogImage],
//     },
//   };
// }

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};

  const url = `https://careers-site-indol.vercel.app/careers/${job.slug}`;
  console.log(url);

  return {
    title: `${job.title} | Careers`,
    description: job.description,

    alternates: {
      canonical: url, // 🔴 THIS FIXES THE ISSUE
    },

    openGraph: {
      title: job.title,
      description: job.description,
      url,
      type: "website",
      images: [
        {
          url: "https://careers-site-indol.vercel.app/og/job.png",
          width: 1200,
          height: 630,
        },
      ],
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
      <ShareOnLinkedIn />
      <LinkedInShare />
    </main>
  );
};

export default JobDetailsPage;
