    import React, { Component } from "react";
    import Slider from "react-slick";

    export default class SimpleSlider extends Component {
        state = {
            display: true,
            width: 600
        };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (

                <div>
                <h2> Resizable Collapsible </h2>
                <button
                className="button"
                onClick={() =>
                    this.setState({
                    width: this.state.width + 100
                    })
                }
                >
                {" "}
                increase{" "}
                </button>
                <button
                className="button"
                onClick={() =>
                    this.setState({
                    width: this.state.width - 100
                    })
                }
                >
                {" "}
                decrease{" "}
                </button>
                <button
                className="button"
                onClick={() =>
                    this.setState({
                    display: !this.state.display
                    })
                }
                >
                {" "}
                toggle{" "}
                </button>
                <div
                style={{
                    width: this.state.width + "px",
                    display: this.state.display ? "block" : "none"
                }}
                >
                <Slider {...settings}>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                    <div>
                    <img src='img\linked.jpg' type="amazon" alt="amazon"/>
                    </div>
                </Slider>
                </div>
            </div>
        );
    }
    }