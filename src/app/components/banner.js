
export default function HeroBanner() {
  return (
    <div className="relative flex items-center min-h-screen px-4 sm:px-8">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full" // Ensures the video covers the entire area
          autoPlay
          loop
          muted
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay to fade the video */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg mt-0 ml-8 font-serif text-white">
        <h1 className="text-4xl lg:text-5xl xl:text-[50px] font-bold mb-4">
          Inspiring Excellence, Building Character.
        </h1>
        <p className="text-lg lg:text-xl xl:text-xl">
          Dedicated to nurturing young minds through holistic education,
          fostering intellectual, ethical, and personal growth for a brighter,
          successful future.
        </p>
      </div>
    </div>
  );
}
