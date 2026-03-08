import React from "react";

const About = () => {
  return (
    <section className="px-[5%] py-16">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          About Our School
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our school is dedicated to providing high-quality education that helps
          students grow academically and personally. We focus on innovation,
          creativity, and leadership.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          With experienced teachers and modern learning methods, we prepare
          students for future opportunities and global challenges.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-red-600">
              Our Mission
            </h2>

            <p>
              To provide excellent education that empowers students with
              knowledge, creativity, and leadership skills.
            </p>
          </div>

          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-red-600">
              Our Vision
            </h2>

            <p>
              To become a leading educational institution known for academic
              excellence and student success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
