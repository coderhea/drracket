import React from 'react';
import styled, { css } from 'styled-components';

const TodoTemplateBox = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
`;
  
const AppTitle = styled.div`
      background: #22b8cf;
      color: white;
      height: 4rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
`;

const Content = styled.div`
     background: white;
`;


const TodoTemplate = ({children}) => {
    return (
        <>
        <TodoTemplateBox>
            <AppTitle>Programming Tutorial</AppTitle>
            <Content>{children}</Content>
        </TodoTemplateBox>
        </>
    );
};

export default TodoTemplate;

/* Props, Children
const A = ({children})=>{
    return ( 
        <div>{children}</div>
    )
} */

/* p260 
overflow: visible(ALL), hidden(cut in display), scroll(show scroll), auto(when cut indisplay, show scroll)
given width, margin-left:auto, margin-right:auto => 중앙정렬
jutify-content:center, align-itmes: center */