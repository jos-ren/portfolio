import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { content } from "../server.js";

const transition = { duration: 0.5, ease: "easeInOut" };

const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, transition },
    exit: { x: "-100%", opacity: 0, transition }
};

const PostPreview = ({ id, title, role, imgSrc }) => {
    return (
        <motion.div className="post-preview"
            variants={postPreviewVariants}
            whileHover={{ scale: 1.01, position: 2 }}
            whileTap={{ scale: 0.99 }}>
            <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: "black" }}>
                <img className="post-preview__img" src={imgSrc} alt={title} />
                <div className="post-preview__text">
                    <h2 className="heading">{title}</h2>
                    <p>{role}</p>
                </div>
            </Link>
        </motion.div>
    );
};

const blogVariants = {
    enter: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.1 } }
};

const Blog = () => {
    return (
        <div className="page">
            <div className="sort">
                <div>All</div>
                <div>Development</div>
                <div>UI / UX</div>
                <div>Design</div>
            </div>

            <motion.div
                className="blog-list"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={blogVariants}
            >
                {content.map((post) => (
                    <PostPreview key={post.id} {...post} />
                ))}
            </motion.div>
        </div>
    );
};

export default Blog;