"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const EmailSection = () => {
  // "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (val) => {
    const v = val.trim();
    if (!v) return "Email is required.";
    if (!emailRegex.test(v)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // final email check
    const err = validateEmail(emailValue);
    if (err) {
      setEmailError(err);
      setStatus("error");
      setStatusMsg(err);
      return;
    }

    // map to EmailJS template vars
    const data = {
      // what your template displays
      user_email: emailValue.trim().toLowerCase(),
      user_name: form.user_name.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),

      // aliases some templates expect
      reply_to: emailValue.trim().toLowerCase(),
      from_name: form.user_name.value.trim(),
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      setStatus("error");
      setStatusMsg("Email service isn’t configured.");
      return;
    }

    setStatus("loading");
    setStatusMsg("Sending…");

    try {
      const res = await emailjs.send(serviceId, templateId, data, userId);
      if (res?.status === 200) {
        setStatus("success");
        setStatusMsg(
          "Email sent! I’ll get back to you soon as soon as possible. :)"
        );
        form.reset();
        setEmailValue("");
        setEmailError("");
        setTimeout(() => {
          setStatus("idle");
          setStatusMsg("");
        }, 5000);
      } else {
        throw new Error(res?.text || "Unknown EmailJS error");
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setStatus("error");
      setStatusMsg("Couldn’t send right now. Please try again later.");
    }
  };

  const onEmailChange = (e) => {
    const val = e.target.value;
    setEmailValue(val);
    const err = validateEmail(val);
    setEmailError(err);
    if (status !== "loading") {
      if (err) {
        setStatus("error");
        setStatusMsg(err);
      } else if (status !== "success") {
        setStatus("idle");
        setStatusMsg("");
      }
    }
  };

  const isSubmitting = status === "loading";
  const canSubmit = !emailError && emailValue.length > 0 && !isSubmitting;

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
          I&apos;m always looking for new connections and opportunities. Whether
          you are interested in my services, inquiring professionally, have a
          question, want to talk shop, or just want to say hi - please reach
          out!.
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
        {/* status message */}
        {status !== "idle" && (
          <p
            className={
              "text-sm mb-4 " +
              (status === "success"
                ? "text-green-500"
                : status === "error"
                ? "text-red-500"
                : "text-slate-400")
            }
            aria-live="polite"
          >
            {statusMsg}
          </p>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
          {/* Email */}
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
              inputMode="email"
              autoComplete="email"
              required
              value={emailValue}
              onChange={onEmailChange}
              onBlur={(e) => setEmailError(validateEmail(e.target.value))}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
              className={
                "bg-[#18191E] border placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 " +
                (emailError
                  ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  : "border-[#33353F] hover:bg-white hover:text-black")
              }
              placeholder="you@example.com"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
            />
            {emailError && (
              <p id="email-error" className="text-xs text-red-500 mt-1">
                {emailError}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              autoComplete="name"
              required
              className="bg-[#18191E] border border-[#33353F] hover:bg-white placeholder-[#9CA2A9] hover:text-black text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jane Doe"
            />
          </div>

          {/* Subject */}
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

          {/* Message */}
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
            disabled={!canSubmit}
            className={
              "bg-gradient-to-r from-blue-400 via-yellow-300 to-red-500 text-black font-medium py-2.5 px-5 rounded-lg w-full " +
              (canSubmit
                ? "hover:bg-gradient-to-r hover:from-yellow-300 hover:via-blue-400 hover:to-red-500"
                : "opacity-70 cursor-not-allowed")
            }
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
