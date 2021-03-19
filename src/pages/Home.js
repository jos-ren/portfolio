import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Blog from "../comps/Blog.js"


const Container = styled.div`
padding: 0;
margin: 0;
height:auto;
display: flex;
justify-content: center;
align-items: center;
display:flex;
flex-direction:column;
`;

// const blogVariants = {
//     enter: { transition: { staggerChildren: 0.1 } },
//     exit: { transition: { staggerChildren: 0.1 } }
// };

const Home = () => {

    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const GetAllPosts = async () => {
        const resp = await axios.get("https://josh-portfolio-backend.herokuapp.com/api/posts/");
        setPosts(resp.data.posts);
        console.log("posts", posts)
    }

    useEffect(() => {
        GetAllPosts();
    }, [])

    return <Container>
        <div className="categories">
            <input placeholder="Search..." />
            <div>All</div>
            <div>Front End</div>
            <div>Ui</div>
            <div>Design</div>
        </div>
        <motion.div
            className="blog-list"
            initial="initial"
            animate="enter"
            exit="exit"
        // variants={blogVariants}
        >
            {Object.keys(posts).map((o, i) => <Blog
                key={i}
                title={posts[o].title}
                img_src={posts[o].img_src}
                role={posts[o].role}
                onClick={function () {
                    history.push("/posts/" + posts[o].id);
                }}
            />
            )}
        </motion.div>

    </Container >
}

export default Home;