import React, { useState } from "react";
import { useNavigate } from "react-router";
import { GiGraduateCap } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Display = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      text: "Lorem ipsum is simply dummy text of the printing industry.",
      name: "Arjun Reddy",
      role: "Parent of 5 Grade Student",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      text: "Lorem ipsum has been the industry's standard dummy text ever.",
      name: "John Doe",
      role: "Parent of 6 Grade Student",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      text: "Amazing school with wonderful teachers and staff.",
      name: "Jane Smith",
      role: "Parent of 4 Grade Student",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];

  const [current, setCurrent] = useState(1);

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="w-full min-h-[80vh] flex flex-col justify-center gap-4 px-[5%] text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("/src/assets/kenny-eliason-zFSo6bnZJTw-unsplash.jpg") center/cover`,
        }}
      >
        <h1 className="font-semibold leading-tight text-[clamp(1.8rem,4vw,3rem)]">
          Education is the Key <br />
          <span className="font-light">to success</span>
        </h1>

        <p className="max-w-[600px] text-sm sm:text-base">
          Making a positive impact in the future of the new generation.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/about")}
            className="bg-red-500 px-4 py-2 rounded hover:bg-white hover:text-red-500 transition"
          >
            Learn More
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="px-[5%] -mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-lg rounded-md p-6">
            <GiGraduateCap className="text-red-900 text-3xl" />
            <h2 className="py-2 text-lg font-semibold">Our Vision</h2>

            <div className="border-b-4 border-red-500 w-10"></div>

            <p className="text-sm sm:text-base pt-4">
              To create confident, capable and sound minded learners prepared
              for the future.
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12 bg-gradient-to-r from-red-400/30 via-red-200/50 to-red-400/40 py-6 px-[5%] grid grid-cols-3 text-center">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <h2 className="font-bold text-red-800 text-lg sm:text-xl">10+</h2>
            <p className="text-xs sm:text-sm font-semibold">
              Years of Excellence
            </p>
          </div>
        ))}
      </section>

      <section className="px-[5%] py-12 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/src/assets/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
          className="w-full rounded-lg shadow-lg object-cover"
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-red-400 text-lg">About Us</h3>

          <h2 className="text-xl md:text-2xl">
            Building tomorrow's <span className="text-red-500">leaders</span>
          </h2>

          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="w-fit border border-red-500 px-4 py-2 rounded text-red-400 hover:bg-red-400 hover:text-white"
          >
            Know More
          </button>
        </div>
      </section>

      <section className="px-[5%] py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-red-400 text-xl md:text-2xl mb-6">
            Why Choose Us?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="shadow-md p-4 rounded">
                <GiGraduateCap className="text-red-400 text-xl" />
                <h3 className="text-red-400 font-semibold">
                  Experienced Faculty
                </h3>
                <p className="text-sm">
                  passionate educators with years of experience.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm sm:text-base text-center md:text-left">
            We combine tradition with innovation to create a learning
            environment that prepares students for tomorrow.
          </p>

          <img
            src="/src/assets/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
            className="w-[80%] rounded-md"
          />
        </div>
      </section>

      <section className="px-[5%] py-12">
        <div className="text-center mb-8">
          <h2 className="text-red-500 text-xl font-semibold">
            Our Academic Programmes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {["Kindergarten", "Nursery", "Secondary"].map((item) => (
            <div
              key={item}
              className="bg-red-400/20 p-6 rounded shadow flex flex-col gap-3"
            >
              <h2 className="text-red-400 text-lg">{item}</h2>

              <p className="text-sm">
                A nurturing environment that builds a strong foundation.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="flex items-center gap-2 text-red-500 hover:translate-x-1 transition"
              >
                Learn More
                <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-200 py-12">
        <h2 className="text-center text-red-500 text-xl font-semibold mb-8">
          Testimonials
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-[5%]">
          {testimonials.map((item, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] text-center transition
                ${isActive ? "scale-105" : "opacity-60 scale-95"}
                `}
              >
                <p className="text-sm italic mb-3">{item.text}</p>

                <img
                  src={item.img}
                  className="w-12 h-12 rounded-full mx-auto mb-2"
                />

                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.role}</p>

                {isActive && (
                  <div className="flex justify-between mt-3">
                    <button onClick={prev}>⬅</button>
                    <button onClick={next}>➡</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Display;
