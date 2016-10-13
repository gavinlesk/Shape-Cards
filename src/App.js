import React, { Component } from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Shapes from './Shapes';
import ShapeCard from './components/ShapeCard';


// class Triangle extends Component {

//   renderShape(ctx, width, height) {
//     // the triangle
//     ctx.beginPath();
//     ctx.moveTo(width/4, height/4);
//     ctx.lineTo(100, 300);
//     ctx.lineTo(300, 300);
//     ctx.closePath();
    
//     // the outline
//     ctx.lineWidth = 10;
//     ctx.strokeStyle = '#666666';
//     ctx.stroke();
    
//     // the fill color
//     ctx.fillStyle = "#FFCC00";
//     ctx.fill();
//   }

//   render() {
//     return <Shape renderFunc={this.renderShape} width={this.props.width} height={this.props.height} /> 
//   }
// }

class App extends Component {

  constructor() {
      super();
      this.state = {shape: 'square'};
    }

  render() {
    const shapeDef = Shapes[this.state.shape];

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Explore Gavin's Shape Catalog!</h2>
          </div>
          <div className="App-content">
            <div className="App-split">
              <div className="App-left">
                {
                    Object.keys(Shapes).map(k => {
                        const shapeDef = Shapes[k];
                        return (
                          <div style={{marginBottom:10}}>
                            <a key={k} href="#" onClick={
                              () => this.setState({shape: k})
                              }>{shapeDef.title}
                            </a>
                          </div>);
                    })
                }
              </div>
              <div className="App-right">
                 <ShapeCard 
                    key={this.state.shape}
                    title={shapeDef.title}
                    definition={shapeDef.definition}
                    author={shapeDef.author}
                    constraints={shapeDef.constraints}
                    renderFunc={shapeDef.render} 
                    width={400} 
                    height={400}
                  />
              </div>
           </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


//<h3>The square to the triangle, the a to the b, give it up for me, the big 'G'</h3>