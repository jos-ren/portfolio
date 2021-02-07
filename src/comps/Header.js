import { motion } from 'framer-motion';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
justify-content:space-between;
display:flex;
width:100%;
padding:0px 20px;
className="heading"
flex-direction:row;
.right{
    display:flex;
    & h2{
        margin-left:20px;
    }
    & h2:hover{
        cursor:pointer;
        color:indianred;
    }
}
`

const Header = () => {

    return <Container>
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}><h2>Josh Renema</h2></Link>
        <div className="right">
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}><h2>Projects</h2></Link>
            <h2>About</h2>
            <h2>Resume</h2>
        </div>
    </Container >

}

Header.defaultProps = {

}

export default Header;