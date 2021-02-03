import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import bg from "../img/bg.jpg"

const Container = styled.div`
background: white;
border-radius: 0px 0px 30px 30px;
width: 100vw;
height: 400px;
box-shadow: rgb(0 0 0 / 10%) 0 7px 25px 0;
cursor:pointer;
& img{
    border-radius: 0px 0px 30px 30px;
    width: 100vw;
    height: 400px;
    object-fit:cover;
}
& div{
    display:flex;
    align-item:center;
    justify-content:center;
}
`

const Thumbnail = () => {

    return <Container>
        <div>
            <img src={bg} />
        </div>
    </Container >

}

Thumbnail.defaultProps = {

}

export default Thumbnail;