import React, { Component } from 'react';
import Surface from './../Surface';

import './ShapeCard.css';

import Slider from 'material-ui/Slider';

export default class Shape extends Component {
    
   constructor() {
      super();
      this.state = {constraintValues: {}, rotation:0}
    }

    componentWillMount() {
      const defaultConstraintValues = {};
        Object.keys(this.props.constraints).reduce(
                  (p, c) => {
                    p[c]=this.props.constraints[c].defaultValue;
                    return p
                  }, 
                  defaultConstraintValues);

      this.setState({constraintValues: defaultConstraintValues});
    }
    
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    componentWillReceiveProps(nextProps) {
      this.setState({constraints: nextProps.constraints});
    }

    updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.props.width, this.props.height);
      //ctx.rotate(this.state.rotation * (Math.PI/180));
      this.props.renderFunc( /*new Surface(ctx)*/ ctx, this.state.constraintValues);
    }

    render() {
      return (
        <div className="Shape">
          <h1 style={{textAlign:'left', marginLeft: 25, marginRight: 25}}>{this.props.title}</h1>
          <span style={{textAlign:'left', marginLeft: 25, marginRight: 25}}>{this.props.definition}</span>
          <h5 style={{textAlign:'left', marginLeft: 25, marginRight: 25}}>Coded by: {this.props.author}</h5>
          <div className="Shape-split">
            <div className="Shape-left">
              {Object.keys(this.props.constraints).map(constraintName => {
                const constraint = this.props.constraints[constraintName];
                return (
                  <div key={constraintName}>
                    <span>{constraintName} : {this.state.constraintValues[constraintName]}</span>
                    <Slider
                      sliderStyle={{width:'75%', marginLeft: 'auto', marginRight: 'auto', marginTop:10, marginBottom:10}}
                      step={1}
                      min={constraint.min}
                      max={constraint.max}
                      defaultValue={constraint.defaultValue}
                      value={this.state.constraintValues[constraintName]}
                      onChange={ (event, value) => {
                        //console.log("new Value :" + value);
                        const newConstraintValues = this.state.constraintValues;
                        newConstraintValues[constraintName] = value;
                        this.setState({constraintValues: newConstraintValues})}}
                    /> 
                 </div>);  
              } )}
              {
              //<span>Rotation: {this.state.rotation}</span>
              // <Slider
              //       sliderStyle={{width:'75%', marginLeft: 'auto', marginRight: 'auto', marginTop:10, marginBottom:10}}
              //       step={1}
              //       min={0}
              //       max={360}
              //       defaultValue={0}
              //       value={0}
              //       onChange={ (event, value) => {
              //         this.setState({rotation: value})}}
              //     /> 
              }
            </div>
            <div className="Shape-right">
              <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
            </div>
          </div>
        </div>
      );
    }
}