import React from 'react'
import "./index.scss"



export default class Slogen extends React.Component {

    state = {
        startSlogen: "",
    }

    componentDidMount(prevProps, prevState, snapshot) {
        let timer = null;
        let i = 0;
        let endSlogen = "Welcome pure soul ~";
        timer = setInterval(() => {
            if (i <= endSlogen.length) {
                this.setState({
                    startSlogen:
                        endSlogen.slice(0, i++) + '_',
                });
            } else {
                this.setState({
                    startSlogen: endSlogen
                });
                clearInterval(timer);
            }
        }, 100);

    }

    render() {
        return (
            <div className="slogen">
                {this.state.startSlogen}
            </div>
        )
    }
}




