import React from 'react'
import ReactDom from 'react-dom'
import Slider from './components/Slider1'

let images=[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')},
    {src:require('./images/4.jpg')}
    ]
ReactDom.render(
    <Slider
    images={images}
    interval={2}
    speed={1}
    autoplay={true}
    pause={true}
    arrows={true}
    dots={true}
    ></Slider>,document.geElementById('root'))

//.babelrc文件 {["presets":["es2015","stage-0","react"]]}