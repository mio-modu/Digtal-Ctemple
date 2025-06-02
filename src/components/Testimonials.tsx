import React from 'react';

const testimonials = [
  {
    quote: "Sanctus has become my daily spiritual retreat. The guided prayers and worship music help me connect with God in a deeper way.",
    author: "Sarah Johnson",
    role: "Church Member"
  },
  {
    quote: "As a busy parent, I love how I can find moments of peace and reflection through Sanctus. It's like having a chapel in my pocket.",
    author: "Michael Chen",
    role: "Parent"
  },
  {
    quote: "The combination of beautiful visuals and meaningful content creates a truly sacred space for worship and meditation.",
    author: "Reverend David Park",
    role: "Pastor"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-gray-50">
      <h2 className="font-serif text-3xl md:text-4xl mb-12 text-gray-800">Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="rounded-3xl shadow-xl bg-white/80 p-8 flex flex-col items-center w-80"
          >
            <p className="text-gray-600 italic mb-6 text-center">"{testimonial.quote}"</p>
            <h3 className="font-serif text-xl">{testimonial.author}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 