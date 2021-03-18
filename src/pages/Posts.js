import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
    const id = Number(match.params.id);
    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState();

    return (
        <motion.div
            className="page"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={postVariants}
        >
            {Object.keys(posts).map((o, i) => <div className="post">
                {/* <img className="post__img" src={img_src} alt="x" /> */}
                <div>role</div>
                <div>overview</div>
                <div>team</div>
                <div>tools</div>
                <div className="header_container">
                    <h1 className="heading">title</h1>
                    <div className="subheading">role</div>
                </div>
            </div>
            )}
        </motion.div>
    );
};

export default Post;