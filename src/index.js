import React from 'react'
import ReactDOM from 'react-dom';
import Slider from './components/Slider1.js'

let images=[
    {src:require('./images/1.jpg'),alt:'1.jpg'},
    {src:require('./images/2.jpg'),alt:'2.jpg'},
    {src:require('./images/3.jpg'),alt:'3.jpg'}
]




ReactDOM.render(<Slider images={images}
                        interval={2}
                        speed={1}
                        autoplay={true} //是否启用自动轮播
                        pause={true}    //当鼠标移动上去自动自动暂停
                        arrows={true}   //是否有箭头导航
                        dots={true}     //是否有点状导航
></Slider>,document.getElementById('root'))


