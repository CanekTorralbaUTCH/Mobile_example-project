import React from 'react';
import { Link } from 'react-router-dom';
import './style/Hero.css'

const Hero = props =>{
    return (
        <React.Fragment>
            <div className="Hero">
                <div className="Hero_color_filter" style={{height: props.h}}></div>
                <div className="Hero_img" style={{height: props.h}}>
                    <img src={"https://assets.entrepreneur.com/content/3x2/2000/20180504211008-bibliotecas.jpeg"} alt="" /> 
                </div>
            </div>

        </React.Fragment>
    );
}

export default Hero