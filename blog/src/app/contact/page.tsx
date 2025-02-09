import React from "react";
import Head from "next/head";
import { LuHandHeart } from "react-icons/lu";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us for inquiries or feedback." />
      </Head>
      <div>
        <section className="bg-slate-950 text-gray-600 body-font relative">
        <div className=" w-full h-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14162615.123307971!2d58.356556961517974!3d29.931409594905723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1735892835130!5m2!1sen!2s"
        width="100%"
        height="100%"
        className="absolute inset-0 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Pakistan"
      ></iframe>
    </div>
          <div className="container mx-auto px-5 py-24 flex flex-col lg:flex-row ">
            <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-tl from-teal-200 to-orange-300  border-gray-900 focus:border-red-900 focus:ring-2 focus:ring-red-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
              Feel free to share your thoughts, feedback, or collaboration ideas. I'm always excited to connect and hear from you!              </p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-700 rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  aria-label="Enter your email"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-700 rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  aria-label="Enter your message"
                ></textarea>
              </div>
              <button
                className="text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded text-lg"
                aria-label="Submit feedback"
              >
                Submit
              </button>
              <p className="text-sm text-gray-700 mt-3 flex flex-row">
               We're here to connect and grow together.<span className="text-xl"><LuHandHeart />    </span>         </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
