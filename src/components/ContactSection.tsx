"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "4e69d7b4-fd9c-4648-b5cb-78826ed514a2";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from victoriastrings.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full bg-[#f4f1ed] py-20 font-display">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-10 px-6 md:flex-row md:gap-20 md:px-[60px]">
        <div className="md:flex-1">
          <h2 className="mb-[18px] text-[28px] tracking-[0.16em] text-[#1f1b18] uppercase md:text-[42px]">
            Contact Us
          </h2>
          <p className="mb-[26px] text-[17px] leading-[1.7] text-[#3a3733]">
            Here is how you can contact us for any questions.
          </p>

          <div className="mb-[30px] h-0.5 w-[70px] bg-[#7b1d1b]" />

          <div className="grid grid-cols-1 gap-[22px]">
            <div className="flex items-center gap-3.5">
              <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#222] text-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91C21.98 6.45 17.53 2 12.04 2Zm5.83 14.13c-.25.7-1.25 1.29-1.98 1.44-.5.1-1.15.19-3.34-.72-2.8-1.16-4.62-3.96-4.76-4.15-.14-.19-1.14-1.52-1.14-2.9s.71-2.06.96-2.34c.25-.28.55-.35.73-.35h.53c.17 0 .4-.03.62.48.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.25.09 1.58.75 1.85.88.28.14.46.21.53.32.07.12.07.66-.18 1.36Z" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[13px] font-bold tracking-[0.22em] text-[#111] uppercase">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/447521071557"
                  className="text-[17px] font-medium text-[#222] transition-colors hover:text-[#7b1d1b]"
                >
                  +44 7521 071557
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#222] text-lg">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </div>
              <div>
                <div className="mb-1 text-[13px] font-bold tracking-[0.22em] text-[#111] uppercase">
                  Email
                </div>
                <a
                  href="mailto:sales@victoriastrings.com"
                  className="text-[17px] font-medium text-[#222] transition-colors hover:text-[#7b1d1b]"
                >
                  sales@victoriastrings.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-1">
          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] bg-white px-8 py-9 shadow-[0_16px_40px_rgba(0,0,0,0.07)] md:px-10"
          >
            <div className="mb-4">
              <label
                className="mb-2 block text-[14px] font-bold tracking-[0.16em] text-[#222] uppercase"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-[#ccc] bg-[#fafafa] px-3.5 py-3 text-[16px] font-medium text-[#111] outline-none placeholder:text-[#888] focus:border-[#7b1d1b]"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-[14px] font-bold tracking-[0.16em] text-[#222] uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-[#ccc] bg-[#fafafa] px-3.5 py-3 text-[16px] font-medium text-[#111] outline-none placeholder:text-[#888] focus:border-[#7b1d1b]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                className="mb-2 block text-[14px] font-bold tracking-[0.16em] text-[#222] uppercase"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-[#ccc] bg-[#fafafa] px-3.5 py-3 text-[16px] font-medium text-[#111] outline-none placeholder:text-[#888] focus:border-[#7b1d1b]"
                placeholder="Tell us what you're looking for"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-[#7b1d1b] px-9 py-2.5 text-[13px] tracking-[0.18em] text-white uppercase transition-[background-color,transform,box-shadow] hover:-translate-y-px hover:bg-[#5d1513] hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="mt-4 text-[15px] font-medium text-[#3a6b3a]">
                Thank you — your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-[15px] font-medium text-[#7b1d1b]">
                Something went wrong sending your message. Please email us directly at{" "}
                <a href="mailto:sales@victoriastrings.com" className="underline">
                  sales@victoriastrings.com
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
