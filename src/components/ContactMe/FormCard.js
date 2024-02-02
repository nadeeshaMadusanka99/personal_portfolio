import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormCard = () => {
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     // Clear toasts on component unmount
  //     toast.dismiss();
  //   };
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.info("Message Sending...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
      );
  };
  useEffect(() => {
    if (success) {
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (error) {
      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [success, error]);

  return (
    <>
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
          className=" z-20 p-4 rounded-xl border border-zinc-400 dark:bg-black dark:text-white"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className=" z-20 p-4 w-full  rounded-xl border border-zinc-400 dark:bg-black dark:text-white"
        />
        <textarea
          rows={8}
          placeholder="Message"
          name="message"
          className=" z-20 p-4 w-full  rounded-xl border border-zinc-400 dark:bg-black dark:text-white"
        />

        <button
          type="submit"
          className="z-20 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
    hover:text-dark border-2 border-solid border-transparent 
    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Send
        </button>
      </motion.form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default FormCard;
