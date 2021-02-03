import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
justify-content:space-between;
display:flex;
width:60vw;
border:1px solid red;
.right{
    display:flex;
    & div{
        margin-left:40px;
    }
}
`

const Header = () => {

    return <Container>
        <div>Josh Renema</div>
        <div className="right">
            <div>Projects</div>
            <div>About</div>
            <div>Resume</div>
        </div>
    </Container >

}

Header.defaultProps = {

}

export default Header;