import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeInOut" };

const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, transition },
    exit: { x: "-100%", opacity: 0, transition }
};

const Blog = ({ title, role, img_src }) => {
    return (

        <motion.div className="post-preview"
            variants={postPreviewVariants}
            whileHover={{ scale: 1.01, position: 2 }}
            whileTap={{ scale: 0.99 }}>
            <img className="post-preview__img" src={img_src} alt={title} />
            <div className="post-preview__text">
                <h1>{title}</h1>
                <div>{role}</div>
            </div>
        </motion.div>
    );
};

export default Blog;