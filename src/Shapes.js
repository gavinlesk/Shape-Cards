import Colors from './Colors';


function lineToPoint(surface, point) {
  surface.lineTo(point.x, point.y);
}

function moveToPoint(surface, point) {
  surface.moveTo(point.x, point.y);
}

function calcAngleTarget(origin, length, angle) {
  return {
    x: origin.x + length * Math.cos(Math.PI * angle / 180),
    y: origin.y + length * Math.sin(Math.PI * angle / 180)
  };
}

function drawCircle(surface, origin, radius) {
  surface.beginPath();
  surface.arc(origin.x, origin.y, radius, 0, 2 * Math.PI, false);
  surface.lineWidth=1
  surface.strokeStyle = Colors.darkBlue;
  surface.stroke();
  surface.closePath();
}

function drawRegularPolygon(surface, numberOfSides, origin, sideLength) {
  surface.beginPath();
  surface.moveTo (origin.x +  sideLength * Math.cos(0), origin.y +  sideLength *  Math.sin(0));          

  for (var i = 1; i <= numberOfSides;i += 1) {
      surface.lineTo (origin.x + sideLength * Math.cos(i * 2 * Math.PI / numberOfSides), 
                      origin.y + sideLength * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  surface.strokeStyle = Colors.black
  surface.lineWidth = 5;
  surface.stroke();
  surface.fillStyle = Colors.lime;
  surface.fill();
}

function toRadians(deg) {
    return deg * Math.PI / 180
}

function CreateAngleInCircleShape(title, definition, author, minAngle, maxAngle) {
  const defAngle =
    minAngle === maxAngle
      ? minAngle
      : minAngle + ((maxAngle - minAngle) / 2);

  return {
    title: title,
    definition: definition,
    author: author,
    constraints: {
      angle: {
        defaultValue: defAngle,
        min: minAngle,
        max: maxAngle
      }
    },
    render: function (surface, {angle}) {
      const length = 200;
      const origin = { x: 200, y: 200 };
      const baseEnd = { x: origin.x + length, y: origin.y };
      const target = calcAngleTarget(origin, length, angle);

      //Draw angle filed
      surface.beginPath();
      surface.moveTo(origin.x, origin.y);
      surface.arc(origin.x, origin.y, baseEnd.x - origin.x, 0, toRadians(angle));
      surface.lineTo(origin.x, origin.y);
      surface.fillStyle = Colors.gray;
      surface.fill();
      surface.closePath();

      //Draw outer circle
      drawCircle(surface, origin, length);

      //Draw Base Line
      surface.beginPath();
      surface.moveTo(origin.x, origin.y);
      surface.lineTo(baseEnd.x, baseEnd.y);
      surface.lineWidth= 2;
      surface.strokeStyle = Colors.yellow;
      surface.stroke();
      surface.closePath();

      //Draw Angle Line
      surface.beginPath()
      surface.moveTo(origin.x, origin.y);
      surface.lineTo(target.x, target.y);
      surface.lineWidth= 2;
      surface.strokeStyle = Colors.yellow;
      surface.stroke();
      surface.closePath();


      //Draw angle arc
      surface.beginPath();
      surface.moveTo(origin.x, origin.y);
      surface.arc(origin.x, origin.y, (baseEnd.x - origin.x) / 4, 0, toRadians(angle));
      surface.lineTo(origin.x, origin.y);
      surface.strokeStyle = Colors.yellow;
      surface.stroke();
      surface.closePath();
      

    }
  }
}

const Shapes = {

  //----------------------------------------------------------------------------
  // Square
  //----------------------------------------------------------------------------
  square: {
    title: 'Quadrilateral: Square',
    definition: 'A square is a quadralateral (a box) with four equal sides where each of the four angles is a right angle.',
    author: 'Dad (as an example)',
    constraints: {
      length: {
        defaultValue: 100,
        min: 1,
        max: 400
      }
    },
    render: function (surface, {length}) {
      surface.fillStyle = Colors.green;
      surface.fillRect(0, 0, length, length);
    }
  },

  //----------------------------------------------------------------------------
  // Rectangle
  //----------------------------------------------------------------------------
  rectangle: {
    title: 'Quadrilateral: Rectangle',
    definition: '.....',
    author: 'Gavin Lesk',
    constraints: {
      length: {
        defaultValue: 150,
        min: 1,
        max: 400
      },
      width: {
        defaultValue: 100,
        min: 1,
        max: 400
      }
    },
    render: function (surface, {length, width}) {
      surface.fillStyle = Colors.purple;
      surface.fillRect(0, 0, length, width);
    }
  },

  //----------------------------------------------------------------------------
  // Isocolese Triangle
  //----------------------------------------------------------------------------
  isocolestriangle: {
    title: 'Triangle: Isocoles',
    definition: 'A triangle with two sides of the same length.',
    author: 'Gavin Lesk',
    constraints: {
      base: {
        defaultValue: 100,
        min: 10,
        max: 400
      },
      height: {
        defaultValue: 100,
        min: 10,
        max: 400
      }
    },
    render: function (surface, {base, height}) {
      const a = { x: base / 2, y: 0 };
      const b = { x: 0, y: height };
      const c = { x: base, y: height };

      surface.beginPath();
      moveToPoint(surface, a)
      lineToPoint(surface, b);
      lineToPoint(surface, c);
      surface.closePath();

      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = 'black';
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
    title: 'Triangle Equilateral',
    definition: 'A triangle with all equal sides.',
    author: 'Gavin Lesk',
    constraints: {
      length: {
        defaultValue: 100,
        min: 10,
        max: 400
      }
    },
    render: function (surface, {length}) {
      surface.beginPath();
      surface.moveTo(0, length);
      surface.lineTo(length, length);
      surface.lineTo(length / 2, 0);
      surface.closePath();


      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = 'black';
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
    title: 'Triangle: Right',
    definition: 'A triangle with a right angle of 90 degrees.',
    author: 'Gavin Lesk',
    constraints: {
      base: {
        defaultValue: 100,
        min: 10,
        max: 400
      },
      height: {
        defaultValue: 100,
        min: 10,
        max: 400
      }
    },
    render: function (surface, {height, base}) {
      surface.beginPath();
      surface.moveTo(0, 0);
      surface.lineTo(0, height);
      surface.lineTo(base, height);
      surface.closePath();


      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = 'black';
      surface.stroke();

      // the fill color
      surface.fillStyle = Colors.orange;
      surface.fill();

    }
  },

  //----------------------------------------------------------------------------
  //hypotenuse
  //----------------------------------------------------------------------------
  hypotenuse: {
    title: 'Triangle: Hypotenuse',
    definition: 'The longest side of a right triangle, the line across from the right angle.',
    author: 'Gavin Lesk',
    constraints: {
      base: {
        defaultValue: 100,
        min: 10,
        max: 400
      },
      height: {
        defaultValue: 100,
        min: 10,
        max: 400
      }
    },
    render: function (surface, {base, height}) {
      surface.beginPath();
      surface.moveTo(0, 0);
      surface.lineTo(0, height);
      surface.lineTo(base, height);

      // the outline
      surface.lineWidth = 1;
      surface.strokeStyle = 'black';
      surface.stroke();

      //Draw the Hypotenuse
      surface.beginPath();
      surface.moveTo(base, height);
      surface.lineTo(0, 0)

      surface.lineWidth = 4;
      surface.strokeStyle = Colors.yellow;
      surface.stroke();
    }
  },

  //----------------------------------------------------------------------------
  // Tetrahedron
  //----------------------------------------------------------------------------
  tetrahedron: {
    title: 'Tetrahedron',
    definition: 'A three dimensional shape having four plane triangular faces; a triangular pyramid. The fourth triangle cannot be seen and is on the bottom or side depending on the way you look at it.',
    author: 'Gavin Lesk + Dad (The Skew)',
    constraints: {
      height: {
        defaultValue: 200,
        min: 10,
        max: 400
      },
      base: {
        defaultValue: 200,
        min: 10,
        max: 400
      },
      x_skew: {
        defaultValue: 50,
        min: 25,
        max: 75
      },
      y_skew: {
        defaultValue: 50,
        min: 25,
        max: 75
      }
    },
    render: function (surface, {height, base, x_skew, y_skew}) {

      //Tetrahedron is made up of three visible triangles
      //Easy to think of it this way 
      //base triangle is drawn flat on surface at points a, b, and c
      //At center of this triangle is point z
      //From point z draw a line to each poing, a, b, and c to form the 
      //three visible triangles that make up the shape
      //but easier to simply draw the three trangles in order to fill 
      //them with differnt colors for effect

      const a = { x: base / 2, y: 0 };
      const b = { x: 0, y: height };
      const c = { x: base, y: height };
      const z = { x: base * (x_skew / 100), y: height * (y_skew / 100) };

      //left side triangle
      surface.beginPath();
      surface.moveTo(z.x, z.y);
      surface.lineTo(a.x, a.y);
      surface.lineTo(b.x, b.y);
      surface.closePath();
      surface.lineWidth = 1;
      surface.strokeStyle = Colors.black;
      surface.stroke();
      surface.fillStyle = Colors.lightBlue;
      surface.fill();

      //Right Side Triangle
      surface.beginPath();
      surface.moveTo(z.x, z.y);
      surface.lineTo(c.x, c.y);
      surface.lineTo(a.x, a.y);
      surface.closePath();
      surface.lineWidth = 1;
      surface.strokeStyle = Colors.black;
      surface.stroke();
      surface.fillStyle = Colors.darkBlue;
      surface.fill();

      //Botton Triangle
      surface.beginPath();
      surface.moveTo(z.x, z.y);
      surface.lineTo(b.x, b.y);
      surface.lineTo(c.x, c.y);
      surface.closePath();
      surface.lineWidth = 1;
      surface.strokeStyle = Colors.black;
      surface.stroke();
      surface.fillStyle = Colors.blue;
      surface.fill();
    }
  },

  //----------------------------------------------------------------------------
  // Rhombus
  //----------------------------------------------------------------------------
  rhombus: {
    title: 'Quadrilateral: Rhombus',
    definition: 'A parellelogram that has a pair of equal acute angles opposite each other and a pair of equal obtuse angles opposite each other.',
    author: 'Gavin Lesk',
    constraints: {
      height: {
        defaultValue: 200,
        min: 10,
        max: 300
      },
      width: {
        defaultValue: 100,
        min: 5,
        max: 250
      }

    },
    render: function (surface, {height, width}) {
      const a = { x: width / 2, y: 0 };
      const b = { x: 0, y: height / 2 };
      const c = { x: width / 2, y: height };
      const d = { x: width, y: height / 2 };

      surface.beginPath();
      surface.moveTo(a.x, a.y);
      surface.lineTo(b.x, b.y);
      surface.lineTo(c.x, c.y);
      surface.lineTo(d.x, d.y);
      surface.closePath();
      surface.lineWidth = 1;
      surface.strokeStyle = Colors.black
      surface.stroke();
      surface.fillStyle = Colors.purple
      surface.fill();
    }
  },

  //----------------------------------------------------------------------------
  // Acute Angle
  //----------------------------------------------------------------------------
  acuteangle: CreateAngleInCircleShape(
    'Angle: Acute',
    'A angle smaller than 90 degrees. You will always remember it as the small angle because it is the cute angle',
    'Gavin Lesk',
    1,
    89),

  //----------------------------------------------------------------------------
  // right angle
  //----------------------------------------------------------------------------
  rightangle: CreateAngleInCircleShape(
    'Angle: Right',
    'A angle that measures 90 degrees. Also the right angle is always 1/4 of a circle because 90 degrees is 1/4 of 360 degrees.',
    'Gavin Lesk',
    90,
    90),

  //----------------------------------------------------------------------------
  // straight angle
  //----------------------------------------------------------------------------
  straightangle: CreateAngleInCircleShape(
    'Angle: Straight',
    'A angle that measures 180 degrees. Also known as a straight line.',
    'Gavin Lesk',
    180,
    180),

  //----------------------------------------------------------------------------
  // reflex angle
  //----------------------------------------------------------------------------
  reflexangle: CreateAngleInCircleShape(
    'Angle: Reflex',
    'A angle that measures more than 180 degrees but less than 360 degrees.',
    'Gavin Lesk',
    181,
    359),

  //----------------------------------------------------------------------------
  // obtuse angle
  //----------------------------------------------------------------------------
  obtuseangle: CreateAngleInCircleShape(
    'Angle: Obtuse',
    'A angle that measures more than 90 degrees but less than 180 degrees.',
    'Gavin Lesk',
    91,
    179),

  //----------------------------------------------------------------------------
  //parellelogram
  //----------------------------------------------------------------------------
  parallelogram: {
    title: 'Quadrilateral: Parallelogram',
    definition: 'A  four sided figure with opposite sides parellel.',
    author: 'Gavin Lesk',
    constraints: {
      length: {
        defaultValue: 150,
        min: 10,
        max: 200
      },
      height: {
        defaultValue: 100,
        min: 10,
        max: 150
      },
      tilt: {
        defaultValue: 50,
        min: -100,
        max: 100
      }
    },
    render: function (surface, {height, length, tilt}) {
        const a ={x: 100, y:0};
        const b ={x: a.x + tilt, y: a.y + height};
        const c ={x: b.x + length, y: b.y};
        const d = {x:a.x + length, y: a.y};

        surface.beginPath();
        moveToPoint(surface, a);
        lineToPoint(surface, b);
        lineToPoint(surface, c);
        lineToPoint(surface, d);
        surface.closePath();

        surface.strokeStyle=Colors.red;
        surface.stroke();

        surface.fillStyle=Colors.lime;
        surface.fill();
    }
  },

  //----------------------------------------------------------------------------
  // pentagon
  //----------------------------------------------------------------------------
  pentagon: {
    title: 'Polygon: Pentagon',
    definition: 'A polygon figure with five straight sides where all sides are the same length.',
    author: 'Gavin Lesk',
    constraints: {
      length: {
        defaultValue:100,
        min:20, 
        max:200
      }
    },
    render: function (surface, {length} ) {
      drawRegularPolygon(surface, 5, {x:200, y:200}, length);
    }
  },

  //----------------------------------------------------------------------------
  // hexagon
  //----------------------------------------------------------------------------
  hexagon: {
    title: 'Polygon: Hexagon',
    definition: 'A polygon figure with six straight sides.',
    author: 'Gavin Lesk',
    constraints: {
        length: {
            defaultValue:100,
            min:20,
            max:200
        }
    },
    render: function (surface, {length}) {
      drawRegularPolygon(surface, 6, {x:200, y:200}, length);
    }
  },

  //----------------------------------------------------------------------------
  // polygon 
  //----------------------------------------------------------------------------
  polygon: {
    title: 'Polygon',
    definition: 'A two dimensional shape with at least three straight sides. Triangles, rectangles, and pentagon are examples of a polygon. If you change the sides you transform the whole shape.',
    author: 'Gavin Lesk',
    constraints: {
        sides: {
            defaultValue:7,
            min:3,
            max:13
        },
        length: {
            defaultValue:200,
            min:100,
            max:200
        }
    },
    render: function (surface, {sides, length}) {
      drawRegularPolygon(surface, sides, {x:200, y:200}, length);
    }
  },

  //----------------------------------------------------------------------------
  // quadrelateral
  //----------------------------------------------------------------------------
  quadrilateral: {
    title: 'Quadrilateral',
    definition: 'A four sided figure that has four straight sides. Some examples are squares, rectangles, parallelogram and rhombuses, go check them all out in the quadrilatural section.',
    author: 'Trickery by Dad',
    constraints: {
      randomize: {
        defaultValue: 50,
        min: 1,
        max:100
      }
    },
    render: function (surface, {randomize}) {
      const o = {x: 150, y: Math.random() * 50 };
      const a = {x: o.x + (Math.random() * 200), y: o.y };
      const b = {x: a.x - (10 + (Math.random() * 50)), y: a.y + 25 + Math.random() * 100 };
      const c = {x: b.x - (50 + Math.random() * 85), y: b.y + 20 + Math.random() * 50};

      surface.beginPath();
      moveToPoint( surface, o );
      lineToPoint(surface, a);
      lineToPoint(surface, b);
      lineToPoint(surface, c);
      surface.closePath();
      surface.lineWidth=2;
      surface.strokeStyle = Colors.orange;
      surface.stroke();
    }
  },

  //----------------------------------------------------------------------------
  // perpandicular lines
  //----------------------------------------------------------------------------
  perpendicularlines: {
    title: 'Line: Perpendicular',
    definition: 'When two lines meet to form a 90 degree angle. It creates the shape of a uppside down capital "T"',
    author: 'Gavin Lesk',
    constraints: {
      width: {
        defaultValue: 100,
        min:5,
        max:400
      },
      height: {
        defaultValue: 100,
        min: 5, max: 400
      }
    },
    render: function (surface, {width, height}) {
      surface.beginPath();
      surface.moveTo(0, height);
      surface.lineTo(width, height);
      surface.moveTo(width / 2, height);
      surface.lineTo(width / 2, 0);
      surface.strokeStyle = Colors.teal;
      surface.lineWidth = 2;
      surface.stroke();
      surface.closePath();
    }
  },
}
export default Shapes;