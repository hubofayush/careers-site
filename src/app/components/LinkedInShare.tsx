"use client";
import { usePathname } from "next/navigation";

function LinkedInShare() {
  const pathName = usePathname();

  const currentUrl = `http://localhost:3000${pathName}`;

  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

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
