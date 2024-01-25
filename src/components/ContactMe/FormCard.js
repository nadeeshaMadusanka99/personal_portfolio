import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const FormCard = () => {
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="flex flex-col gap-10 z-10"
    >
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        className=" z-20 p-4 rounded-xl border border-zinc-400 dark:bg-black"
      />
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        className=" z-20 p-4 w-full  rounded-xl border border-zinc-400 dark:bg-black"
      />
      <textarea
        rows={8}
        placeholder="Message"
        name="message"
        className=" z-20 p-4 w-full  rounded-xl border border-zinc-400 dark:bg-black"
      />
      {loading ? (
        <p className="z-20 text-dark">Sending...</p>
      ) : success ? (
        <button
          type="submit"
          disabled
          className="z-20 bg-green text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-white hover:border-black 
    dark:bg-green  dark:text-dark "
        >
          Successfully Sent
        </button>
      ) : error ? (
        <button
          disabled
          type="submit"
          className="z-20 bg-error text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent 
    dark:bg-error  dark:text-white"
        >
          Error Occured
        </button>
      ) : (
        <button
          type="submit"
          className="z-20 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
    hover:text-dark border-2 border-solid border-transparent 
    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Send
        </button>
      )}
    </motion.form>
  );
};

export default FormCard;
