import React, { Component } from 'react';

import './index.css';

class TooltipCopy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        };
        this.timer = null;
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.show && nextProps.value) {
            this.copyInfo(nextProps.value);
            this.setState({ show: true });
            this.setTimer();
        }
    }

    setTimer() {
        if (this.timer != null)
            clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.setState({ show: false });
            this.timer = null;
        }, 1500);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    copyInfo(info) {
        const textArea = document.createElement("textarea");
        textArea.value = info;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    }

    render() {
        return (
            <span className={`tooltipcopy${this.state.show ? " show" : ""}`} >
                Copied to Clipboard
            </span>);
    }
}

export default TooltipCopy;