import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { intro } from '../constants/index';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import resume from '../../documents/resume.pdf';

const ServiceCard = ({ index, title, icon, link }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <Link to={link}>
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <div className="mt-20 gap-10  flex flex-col items-center justify-center">
                <a
                    className="border-violet-600 bg-transparent border-4 rounded-full hover:border-green-600 text-white font-bold py-4 px-20 text-center transition-color duration-500 "
                    href={resume}
                    // href="https://github.com/MingliZhang/resume/blob/master/resume.pdf"
                    download="resume.pdf"
                    target="_blank">
                    Resume
                </a>
            </div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                {intro}
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
