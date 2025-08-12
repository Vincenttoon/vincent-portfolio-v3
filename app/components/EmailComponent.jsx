"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.user_email.value, // name="user_email"
      subject: form.subject.value,
      message: form.message.value,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, data, userId);
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 5000);
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities—whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Vincenttoon" aria-label="GitHub">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vincent-toon-4954b6162/"
            aria-label="LinkedIn"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] hover:bg-white placeholder-[#9CA2A9] text-gray-100 hover:text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="apollo@email.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] hover:bg-white placeholder-[#9CA2A9] hover:text-black text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="What do you want to talk about?"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] hover:bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 hover:text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="..."
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 via-yellow-300 to-red-500 hover:bg-gradient-to-r hover:from-yellow-300 hover:via-blue-400 hover:to-red-500 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
