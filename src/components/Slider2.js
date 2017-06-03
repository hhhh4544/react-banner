import React from 'react'
import ReactDom from 'react-dom'
require('./Slider1.less')
export default class Slider extends React.Component{
    constructor(props) {
        super(props)
        this.state={pos:0}
    }
    turn(n){
        let pos=this.state.pos
        pos+=n
        if(pos>this.props.images.length){
           pos=0
        }
        if(pos<0){
            pos=this.props.images.length-1
        }
        this.setState({pos})
    }
    play(){
        this.$timer=setInterval(()=>{
            this.turn(1)
        },this.props.interval*1000)
    }
    componentDidMount(){
        if(this.props.autoplay){
            this.play()
        }
    }
    render(){
        let images=this.props.images
        let style={
            width:200*images.length,
            left:this.state.pos*-200,
            transitionDuration:this.props.speed+'s'
        }
        let arrows=null
        if(this.props.arrows){
            arrows=(
                <div className="arrows">
                    <span className="arrow arrow-left" onClick={()=>this.turn(-1)}>&lt;</span>
                    <span className="arrow arrow-right" onClick={()=>this.turn(1)}>&gt;</span>
                </div>
            )
        }
        let dots=null
        if(this.props.dots){
           dots=(
               <div className="dots">
                   {images.map((item,index)=>(
                       <span className={"dot "+(index==this.state.pos?'active':'')} onClick={()=>this.turn(index-this.state.pos)} ></span>
                   ))
                   }
               </div>
           )
        }
        return (
            <div onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.play()} className="wrapper">
                <ul style={style} className="sliders">
                    {
                    images.map((item,index)=>(<li className="slider" key={index}>
                        <img src={item.src} alt=""/>
                    </li>))
                }</ul>
                {arrows}
                {dots}
            </div>
        )
    }
}
