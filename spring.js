
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	width="1000" height="1000" xml:space="preserve" >


<!--labels-->	
  <text id="unsed"x="110" y="30" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">unstrectched  </text>
  <text id ="spi" x="80" y="45" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">spring </text>
 	<text x="200" y="200" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">The spring constant k : </text>
 	<text x="200" y="230" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">Distance Stretched  x:</text> 	
 	<text x="200" y="260" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">Potential Energy PE : </text>
<button type="button" onclick="alert('Hello world!')">Click Me!</button>

	<!--show Values-->
 	<text id="kv" x="250" y="200" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">0</text>
 	<text id="xv" x="250" y="230" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">0</text>
 	<text id="pev" x="250" y="260" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">0</text>
  
  <!--buttons-->

   <rect  id="up" x="270" y="185"  width="60" height="18" style="fill:gray"/>
   <rect  id="down" x="350" y="185"  width="60" height="18" style="fill:gray"/>
   <text x="305" y="180" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">up</text>
 	<text  x="395" y="180" font-family="sans-serif" font-size="15px" fill="black" text-anchor="end">down</text>
   <!--grapic-->  
   <line x1="0" y1="25" x2="0" y2="150"
style="stroke:black;stroke-width:6"/>  
     
<path id="spring" d="M0 75
C0  75   40 80 15 110
C15 110 -10 80 30 75
C30 75   70 80 45 110
C45 110  20 80 60 75 
C60 75   100 80 75 110
C75 110  50  80  90 75  
C90 75   130 80 105 110
C105 110  80  80  120 75
C120 75   135  80  135 100
L 135 100 145 100                      "
style="fill:white;stroke:black;stroke-width:2"/>

   <circle id="ball"  cx="160" cy="100" r="18" stroke="black"
stroke-width="2" fill="red"/>
 
</svg>
