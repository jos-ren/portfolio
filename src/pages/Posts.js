import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Tag from "../comps/Tag.js"
import Image from "../comps/Image.js"

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
    // const id = Number(match.params.id);
    const [single, setSingle] = useState({});
    const params = useParams();

    const GetSinglePost = async () => {
        const resp = await axios.get("https://josh-portfolio-backend.herokuapp.com/api/posts/" + params.id);
        setSingle({ ...resp.data.posts });
        console.log("posts", single)
    }

    useEffect(() => {
        GetSinglePost();
    }, [])

    return (
        <motion.div
            className="page"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={postVariants}
        >
            {Object.keys(single).map((o, i) => <div key={i}>

                <h1>{single[o].title}</h1>
                <div className="tag_cont">
                    <Tag text={single[o].role} />
                </div>

                <Image img_src={single[o].img_src} />

                <div className="team_tools_cont">

                    <div className="team_tools">
                        <h2>Team</h2>
                        <div>{single[o].team}</div>
                    </div>

                    <div className="team_tools">
                        <h2>Tools</h2>
                        <div>{single[o].tools}</div>
                    </div>

                </div>

                <h2>Overview</h2>
                <div>{single[o].overview}</div>

                <h2>Development Process</h2>
                <h3>Step 1: Components</h3>
                <div>Content</div>
                <h3>Step 2: Pages</h3>
                <div>Content</div>
                <h3>Step 3: Routing</h3>
                <div>Content</div>
                <h3>Step 4: Functions</h3>
                <div>Content</div>

                <h2>Conclusions</h2>
                <div>Content</div>
            </div>
            )}
        </motion.div>
    );
};

export default Post;