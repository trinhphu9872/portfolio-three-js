import React, { useState } from "react";

// import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import codeSVG from '../../public/1608639_code_icon.svg';
import ContactForm from "./ContactForm";

const ContactForm = ({ onSubmit, loading }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                    rows={7}
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='What you want to say?'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>

            <button
                type='submit'
                disabled={loading}
                className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            >
                {loading ? "Sending..." : "Send"}
            </button>
        </form>
    );
};

export default ContactForm;
