import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom= () => {
        const { scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
        // scrollTop(@scroll in 0~350) =  scrollHeight(=div height) - clientHeight(=box height @scroll)
    }

    render() {
        const style = {
            border: '3px solid black',
            height: '200px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'     // 'relative' so need to be rendered
        };

        const innerStyle = {
            width: '100%',
            height: '600px',
            background: 'linear-gradient(white, blue)',
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>               
            </div>
        );
    }
}

export default ScrollBox;