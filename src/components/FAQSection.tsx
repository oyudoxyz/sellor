'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I become a Repzo rep?',
    a: 'Simply click the "Become a rep" button above, fill out your details, and our team will reach out to guide you through the onboarding process.',
  },
  {
    q: 'What are the requirements to join as a rep?',
    a: 'You should have strong communication skills, a passion for sales, and a willingness to learn. Prior direct sales experience is a plus but not required.',
  },
  {
    q: 'How do reps get paid?',
    a: 'Reps are paid based on performance, with competitive commissions and bonuses. Payment details and schedules are shared during onboarding.',
  },
  {
    q: 'How can Repzo help my business?',
    a: 'Repzo streamlines your direct sales operations, automates reporting, and gives you real-time insights to help your team close more deals.',
  },
  {
    q: 'Is Repzo suitable for my industry?',
    a: 'Repzo is trusted by businesses in retail, solar, pharma, insurance, telecom, and more. Our platform is flexible for any direct sales team.',
  },
  {
    q: 'How quickly can my team get started?',
    a: 'Most teams are up and running within days. Our onboarding specialists will help you import your data, train your reps, and launch fast.',
  },
];

function FAQItem({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-5 px-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-black">{q}</span>
        <ChevronDown
          className={`ml-4 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 text-base pb-5 pr-8 pl-3">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center font-manrope">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-4 max-w-2xl">
        Frequently Asked Questions
      </h2>
      <p className="text-lg md:text-xl text-center text-black/70 mb-12 max-w-xl">
        Answers for both reps and businesses interested in Repzo.
      </p>
      <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white/80 shadow-lg divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.q}
            q={faq.q}
            a={faq.a}
            open={openIdx === i}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
