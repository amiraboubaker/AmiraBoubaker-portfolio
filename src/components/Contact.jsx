import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Modal from "react-modal"; // Import react-modal for pop-up
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state
  const [modalMessage, setModalMessage] = useState("");  // Message for modal

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Amira Boubaker",
          from_email: form.email,
          to_email: "amiraboubakeresprims@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage("Thank you! I will get back to you as soon as possible.");
          setIsModalOpen(true); // Open modal on success

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalMessage("Something went wrong. Please try again.");
          setIsModalOpen(true); // Open modal on failure
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-8 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.65] bg-black-100 p-6 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-lg">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-lg">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-lg">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-lg"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-lg"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Modal for response message */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="modal-body">
          <h2 className="text-center text-2xl font-semibold text-white">{modalMessage}</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg w-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
