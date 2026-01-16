"use client";

export default function ShareOnLinkedIn() {
  const handleShare = async () => {
    const payload = {
      text: "🚀 We are hiring Full Native Developers! @RushikeshSurve",
      url: "https://careers-site-indol.vercel.app/careers/front-developer",
      image: "https://careers-site-indol.vercel.app/og/job.jpg",
    };
    try {
      const res = await fetch("/api/linkedin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to share on LinkedIn");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Share on LinkedIn
    </button>
  );
}
