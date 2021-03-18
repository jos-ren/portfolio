import { motion } from 'framer-motion';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
justify-content:space-between;
display:flex;
width:100%;
className="heading"
flex-direction:row;
.right{
    display:flex;

}
`

const Header = () => {

    return <Container>
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}><div>Josh Renema</div></Link>
        <div className="right">
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}><div>Projects</div></Link>
            <div>About</div>
            <div>Resume</div>
        </div>
    </Container >

}

Header.defaultProps = {

}

export default Header;