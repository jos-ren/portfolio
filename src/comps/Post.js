import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { content } from "../server.js";
import React, { useState } from "react";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
    const id = Number(match.params.id);
    const { title, role, overview, imgSrc, team, tools } = content[id];
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div
            className="page"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={postVariants}
        >
            <div className="post">
                <img className="post__img" src={imgSrc} alt={title} />
                {/* <AnimateSharedLayout >
                    <motion.ul layout >
                        <motion.li layout onClick={toggleOpen} >
                            <motion.div className="list_cont">
                                <motion.div className="avatar" layout />
                                <motion.div layout>role</motion.div>
                            </motion.div>
                            <AnimatePresence>
                                {isOpen && <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                                    {role}
                                </motion.div>}
                            </AnimatePresence>
                        </motion.li>
                    </motion.ul>
                </AnimateSharedLayout> */}

                <div>{role}</div>
                <div>{overview}</div>
                <div>{team}</div>
                <div>{tools}</div>
                <div className="header_container">
                    <h1 className="heading">{title}</h1>
                    <div className="subheading">{role}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Post;