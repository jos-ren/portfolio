import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../comps/Header.js"
import Blog from "../comps/Blog.js"
import Post from "../comps/Post.js"

const Container = styled.div`
padding: 0;
margin: 0;
height:auto;
// width:100vw;
display: flex;
justify-content: center;
align-items: center;
display:flex;
flex-direction:column;
`;

const Home = () => {

    return <Container>
        <Router>
            <Header />
            <Route
                render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={Blog} />
                            <Route exact path="/post/:id" component={Post} />
                        </Switch>
                    </AnimatePresence>
                )}
            />
        </Router>
    </Container>
}

export default Home;