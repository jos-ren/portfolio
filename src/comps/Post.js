import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { content } from "../content.js";
import React, { useState } from "react";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
};

const items = [0, 1, 2, 3, 4, 5, 6];

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="row" />
            <div className="row" />

        </motion.div>
    );
}



const Post = ({ match }) => {
    const id = Number(match.params.id);

    const { title, overview, role, team, tools, imgSrc } = content[id];

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
                <h1 className="heading">{title}</h1>
                <p><b>Role: </b>{role}</p>
                <p><b>Overview: </b>{overview}</p>
                <p><b>Team: </b>{team}</p>
                <p><b>Tools: </b>{tools}</p>
                <AnimateSharedLayout >
                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {items.map(item => (
                            <Item key={item} />
                        ))}
                    </motion.ul>
                </AnimateSharedLayout>
            </div>

        </motion.div>
    );
};

export default Post;