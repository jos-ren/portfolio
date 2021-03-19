import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
color:white;
background-color:red;
width:fit-content;
height:30px;
border:1px solid red;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
padding:0px 10px;
border-radius:10px;
`

const Tag = ({ text }) => {

    return <Container>
        {text}
    </Container >

}

Tag.defaultProps = {

}

export default Tag;