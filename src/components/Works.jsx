import React, { useState } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, website, docIcon } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects, projectIntro } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    githubLink,
    site,
    doc,
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                delay: 0.5,
                duration: 0.75,
                ease: 'easeOut',
            }}
            variants={{
                visible: { x: 0, y: 0, opacity: 1 },
                hidden: { x: 0, y: 100, opacity: 0 },
            }}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    {githubLink ? (
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() =>
                                    window.open(githubLink, '_blank')
                                }
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    src={github}
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ) : null}
                    {site ? (
                        <div className="absolute inset-0 flex justify-end mx-16 my-3 card-img_hover">
                            <div
                                onClick={() => window.open(site, '_blank')}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    src={website}
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ) : null}
                    {doc ? (
                        <div className="absolute inset-0 flex justify-end mx-16 my-3 card-img_hover">
                            <div
                                onClick={() => window.open(doc, '_blank')}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    src={docIcon}
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const [displayNum, setDisplayNum] = useState(6);
    const handleMoreItem = () => {
        setDisplayNum(displayNum + 6);
    };
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    {projectIntro}
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects?.slice(0, displayNum)?.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
            {displayNum < projects?.length && (
                <div className="mt-20 gap-10  flex flex-col items-center justify-center">
                    <button
                        className="border-violet-600 bg-transparent border-4 rounded-full hover:border-green-600 text-white font-bold py-4 px-20 text-center transition-color duration-500"
                        onClick={handleMoreItem}>
                        Load more
                    </button>
                </div>
            )}
        </>
    );
};

export default SectionWrapper(Works, '');
