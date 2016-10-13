import Colors from './Colors';


const Shapes = {

  //----------------------------------------------------------------------------
  // Square
  //----------------------------------------------------------------------------
  square: {
    title: 'Square',
    definition: 'A square is a quadralateral with four equal sides where each of the four angles is a right angle.',
    author:'Daddy (as an example)',
    constraints: {
      length: {
        defaultValue:100,
        min:1,
        max:400
      }
    },
    render: function(surface, {length}) {
      surface.fillStyle = Colors.green;
      surface.fillRect (0, 0, length, length); 
    }
  },

  //----------------------------------------------------------------------------
  // Rectangle
  //----------------------------------------------------------------------------
  rectangle: {
    title: 'Rectangle',
    definition: '.....',
    author:'Gavin Lesk',
    constraints: {
      length: {
        defaultValue:150,
        min:1,
        max:333
      },
      width: {
        defaultValue:100,
        min:1,
        max:333
      }
    },
    render: function(surface, {length, width}) {
      surface.fillStyle = Colors.purple;
      surface.fillRect (0, 0, length, width); 
    }
  },

  //----------------------------------------------------------------------------
  // Isocolese Triangle
  //----------------------------------------------------------------------------
  isocolestriangle: {
    title: 'Isocoles Triangle',
    definition: '.....',
    author:'Gavin Lesk',
    constraints: {
      base: {
        defaultValue:100,
        min:10,
        max:400
      },
      height: {
        defaultValue:100,
        min:10,
        max:400
      }
    },
    render: function(surface, {base, height}) {
      surface.beginPath();
      surface.moveTo(0, height);
      surface.lineTo(base, height);
      surface.lineTo(base / 2, 0);
      surface.closePath();

      
      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = '#666666';
      surface.stroke();
      
      // the fill color
      surface.fillStyle = Colors.orange;
      surface.fill();

    }
  },

  //----------------------------------------------------------------------------
  // Equilateral Triangle
  //----------------------------------------------------------------------------
  equilateraltriangle: {
    title: 'Equilateral Triangle',
    definition: '.....',
    author:'Gavin Lesk',
    constraints: {
       length: {
        defaultValue:100,
        min:10,
        max:400
      }
    },
    render: function(surface, {length}) {
      surface.beginPath();
      surface.moveTo(0, length);
      surface.lineTo( length, length);
      surface.lineTo(length / 2, 0);
      surface.closePath();

      
      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = '#666666';
      surface.stroke();
      
      // the fill color
      surface.fillStyle = Colors.blue;
      surface.fill();

    }
  },

  //----------------------------------------------------------------------------
  // Right Triangle
  //----------------------------------------------------------------------------
  righttriangle: {
      title: 'Right Triangle',
      definition: '.....',
      author:'Gavin Lesk',
      constraints: {
        base: {
          defaultValue:100,
          min:10,
          max:400
        },
        height: {
          defaultValue:100,
          min:10,
          max:400
        }
      },
      render: function(surface, {height, base}) {
        surface.beginPath();
        surface.moveTo(0, 0);
        surface.lineTo(0, height);
        surface.lineTo(base, height);
        surface.closePath();

        
        // the outline
        surface.lineWidth = 1;
        surface.strokeStyle = '#666666';
        surface.stroke();
        
        // the fill color
        surface.fillStyle = Colors.orange;
        surface.fill();

      }
    },

    //----------------------------------------------------------------------------
    // Tetrahedron
    //----------------------------------------------------------------------------
    // tetrahedron: {
    //   title: 'Tetrahedron',
    //   definition: '....',
    //   author: 'Gavin Lesk',
    //   constraints: {
    //     height: {defaultValue:100,
    //       min:10,
    //     max:400
    //   },
    //   base: {
    //     defaultValue:100
    //     min:10
    //     max:400
    //   },
    //   depth: {
    //     defaultValue:100

    //   }
    //   }
    // }
}

export default Shapes;