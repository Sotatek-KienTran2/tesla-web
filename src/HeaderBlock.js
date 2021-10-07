import React from 'react'
import './HeaderBlock.scss'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function HeaderBlock({title,backgroundImage,description ,buttonLeftText,buttonRightText}) {
    return (
        <Warp  bgImage={backgroundImage}>
            <Fade bottom>
            <Content>
                    <h1>{title}</h1>
                    <h4>{description}</h4>
            </Content>
            </ Fade>
            <Fade bottom>
               <ButtonGroup>
                   <LeftButton>
                        {buttonLeftText}
                   </LeftButton>
                   {buttonRightText && 
                        <RightButoon>
                            {buttonRightText}
                        </RightButoon>
                   }
               </ButtonGroup>
               </Fade>
        </Warp>
        
        
    )
}

export default HeaderBlock
const Warp =styled.div
` 
    background: url('https://tesla.com/ns_videos/model-3-social.jpg') ;
    width:100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props =>`url("/image/${props.bgImage}")`}

`
const Content =styled.div
` 
    text-align: center;
    padding-top:15vh;

`
const ButtonGroup= styled.div
`
    display:flex;
    margin-bottom:1.8rem;
    @media (max-width:768px)
    {
        flex-direction: column;
        
    }
`
const LeftButton =styled.div
`
       background-color:black;
       height:2.5rem;
       width:16rem;
       color:white;
       display:flex;
       justify-content:center;
       align-items: center;
       border-radius:6rem;
       text-transform: uppercase;
       font-size:1rem; 
       opacity:0.75;
       margin:0.5rem;
       cursor:pointer;
        
`
const  RightButoon=styled(LeftButton)
`
    background:white;
    color:black;
`

