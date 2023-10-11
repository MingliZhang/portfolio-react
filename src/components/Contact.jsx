import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faLinkedin,
//     faInstagram,
//     faFacebook,
//     faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contacts } from '../constants';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { toast } from 'react-toastify';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

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

        if (form.name && form.email && form.message) {
            if (
                form.email.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                )
            ) {
                emailjs
                    .send(
                        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                        {
                            from_name: form.name,
                            to_name: 'Mike Zhang',
                            from_email: form.email,
                            to_email: 'minglizhang2000@outlook.com',
                            message: form.message,
                        },
                        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                    )
                    .then(
                        () => {
                            setLoading(false);
                            toast.success(
                                'Thank you. I will get back to you as soon as possible.',
                                { autoClose: 15000 }
                            );

                            setForm({
                                name: '',
                                email: '',
                                message: '',
                            });
                        },
                        (error) => {
                            setLoading(false);
                            toast.error(
                                'Ahh, something went wrong. Please try again.',
                                { autoClose: 15000 }
                            );
                        }
                    );
            } else {
                toast.warn('Please provide a valid email address!', {
                    autoClose: 15000,
                });
                setLoading(false);
            }
        } else {
            toast.warn('Please fill in all required fields!', {
                autoClose: 15000,
            });
            setLoading(false);
        }
    };

    return (
        <>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-black-100 p-8 rounded-2xl xl:mt-12 gap-5  overflow-hidden text-center">
                {contacts.map((contact, index) => (
                    <div key={index}>
                        <a
                            target="blank"
                            href={contact.link}
                            className="hover:text-green-300 transition-colors duration-500">
                            <FontAwesomeIcon icon={contact.icon} />{' '}
                            {contact.text}
                        </a>
                    </div>
                ))}
            </motion.div>
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                    <p className={styles.sectionSubText}>Get in touch</p>
                    <h3 className={styles.sectionHeadText}>Contact.</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email address?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Message
                            </span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                    <EarthCanvas />
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Contact, 'contact');
