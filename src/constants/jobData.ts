export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  isActive: boolean;
};

export const jobs: Job[] = [
  {
    slug: "front-developer",
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a Frontend Developer with strong React and Next.js skills.",
    isActive: true,
  },
];

export const BaseUrl = "https://careers-site-indol.vercel.app";
