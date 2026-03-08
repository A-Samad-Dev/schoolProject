import React from "react";

const Contact = () => {
  return (
    <section className="px-[5%] py-16">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-10">
          Contact Us
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Get In Touch
            </h2>

            <p className="text-gray-700 mb-3">📍 School Address</p>

            <p className="text-gray-700 mb-3">📞 +234 XXX XXX XXXX</p>

            <p className="text-gray-700 mb-3">✉️ school@email.com</p>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-md outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-md outline-none focus:border-red-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="border p-3 rounded-md outline-none focus:border-red-500"
            />

            <button className="bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
