import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
img{
    border-radius:15px;
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const Image = ({ img_src }) => {

    return <Container>
        <img src={img_src} />
    </Container >

}

Image.defaultProps = {

}

export default Image;