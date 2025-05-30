import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_hghka0x";
const TEMPLATE_ID = "template_5cme1f1";
const PUBLIC_KEY = "DygoISUwyUi5zUY0c";

export default function ContactMe({}) {
  const form = useRef();

  const labelStyle = "font-medium";
  const inputStyle = "bg-white w-[36rem] h-[3rem] rounded-3xl border-2 border-blue-100 mt-2 mb-4 px-3 text-lg";
  const textareaStyle = "bg-white w-[36rem] rounded-3xl border-2 border-blue-100 mt-2 mb-4 p-3 text-base resize-none";
  const buttonStyle = "bg-blue-500 text-white w-[12rem] h-[2.5rem] rounded-3xl mx-auto mt-8 cursor-pointer transform transition duration-300 hover:scale-103";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Email sent successfully!");
        },
        () => {
          alert("An error occurred, please try again.");
        }
      );
  }

  return (
    <div id="contact-me" className="bg-blue-50 scroll-mt-24 flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-12 mb-6">Contact Me</h1>
      <form className="flex flex-col text-2xl mb-24" ref={form} onSubmit={sendEmail}>
        <label className={labelStyle} htmlFor="name">Name</label>
        <input className={inputStyle} type="text" name="name" id="name" required />

        <label className={labelStyle} htmlFor="email">Email</label>
        <input className={inputStyle} type="email" name="email" id="email" required />

        <label className={labelStyle} htmlFor="message">Message</label>
        <textarea className={textareaStyle} name="message" id="message" rows="5" required />

        <button className={buttonStyle} type="submit">Submit</button>
      </form>
    </div>
  )
}