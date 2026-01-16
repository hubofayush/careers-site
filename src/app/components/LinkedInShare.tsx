"use client";
import { BaseUrl } from "@/constants/jobData";
import { usePathname } from "next/navigation";

function LinkedInShare() {
  const pathName = usePathname();

  const base_url = BaseUrl;
  // console.log("base url: ", base_url);
  // console.log("pathname:", pathName);
  const currentUrl = `${base_url}/careers/front-developer`;
  // console.log("currentUrl", currentUrl);

  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
  console.log(shareUrl);
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border px-4 py-2 rounded-md"
    >
      share on LinkedIn
    </a>
  );
}

export default LinkedInShare;
