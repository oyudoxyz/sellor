'use client';
import Image from 'next/image';

export default function BecomeARepSection() {
  return (
    <section className="w-full bg-[#18191a] py-20 px-4 flex flex-col md:flex-row items-center justify-center font-manrope relative overflow-hidden">
      <div className="flex-1 flex flex-col items-start justify-center z-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to earn more? <br /> Become a Repzo Rep
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
          Join a network of top field sales professionals, get exclusive access
          to high-quality leads, and boost your income with flexible, rewarding
          work.
        </p>
        <a
          href="#become-rep"
          className="bg-white hover:bg-gray-200 text-black font-semibold rounded-full px-8 py-3 text-[17px] shadow-md transition-all duration-200 border border-white"
        >
          Become a rep
        </a>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[320px] w-full max-w-lg mt-12 md:mt-0">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 w-full h-[320px] md:h-[400px] relative">
          <Image
            src="/assets/become-a-rep.jpg"
            alt="Become a Rep"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
