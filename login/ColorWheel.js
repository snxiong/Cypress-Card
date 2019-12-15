		//PIESLICEANGLE CLASS
		class pieSliceAngle{
			constructor(startAngle, endAngle){
				this.startAngle = startAngle;
				this.endAngle = endAngle;
			}
		}
		
	
		// 'selectedColor' is an array variable that will hold all the needed colors (ITS A GLOBAL VARIABLE)
		var selectedColor = ["stuff", "stuff2", "stuff3", "stuff4"];
	
		// GETTING THE CANVAS TO DRAW ON
		var colorWheelElement = document.getElementById('colorWheelCanvas');
		var context = colorWheelElement.getContext('2d');
		
		// ARRAY THAT WILL HOLD ALL THE COLOR CODES FOR THE COLOR WHEEL
		var firstCircle = ['#6b439b', '#a64499', '#e44097', '#ed1b24', '#f37020', '#f78f1e', '#ffc20f', '#fef200', '#8dfc07', '#00a88f', '#0092ce', '#0154a4'];
		var secondCircle = ['#8869ad', '#b868ad', '#e966ac', '#f04950', '#f58d4e', '#f9a54b', '#fece3e', '#fff533', '#a3fd39', '#33b8a5', '#33a7d8', '#3276b5'];
		var thirdCircle = ['#b7a5cd', '#d3a4ce', '#f1a3cd', '#f69195', '#f9bb94', '#fbc994', '#ffe18b', '#fef984', '#c8fd87', '#84d4c9', '#85cae7', '#85acd3'];	
		
		pieSlice0 = new pieSliceAngle((3*Math.PI)/2, (5*Math.PI)/3);
		pieSlice1 = new pieSliceAngle((5*Math.PI)/3, (11*Math.PI)/6);
		pieSlice2 = new pieSliceAngle((11*Math.PI)/6, (2*Math.PI));
		pieSlice3 = new pieSliceAngle(0, (Math.PI)/6);
		pieSlice4 = new pieSliceAngle((Math.PI)/6, (Math.PI)/3);
		pieSlice5 = new pieSliceAngle((Math.PI)/3, (Math.PI)/2);
		pieSlice6 = new pieSliceAngle((Math.PI/2), (2*Math.PI)/3);
		pieSlice7 = new pieSliceAngle((2*Math.PI)/3, (5*Math.PI)/6);
		pieSlice8 = new pieSliceAngle((5*Math.PI)/6, Math.PI);
		pieSlice9 = new pieSliceAngle(Math.PI, (7*Math.PI)/6);
		pieSlice10 = new pieSliceAngle((7*Math.PI)/6, (4*Math.PI)/3);
		pieSlice11 = new pieSliceAngle((4*Math.PI)/3, (3*Math.PI)/2);
		
		//STORED ALL THE ABOVE PIESLICE RADIANS INTO AN ARRAY, SO AN ARRAY OF PIE SLICE ANGLE CLASSES
		var pieSliceArray = [pieSlice0, pieSlice1, pieSlice2, pieSlice3, pieSlice4, pieSlice5, pieSlice6, pieSlice7, pieSlice8, pieSlice9, pieSlice10, pieSlice11];
		
		//1ST CIRCLE
		drawPieSlice(context, 250,250,200, pieSliceArray[0].startAngle, pieSliceArray[0].endAngle, firstCircle[0]);
		drawPieSlice(context, 250,250,200, pieSliceArray[1].startAngle, pieSliceArray[1].endAngle, firstCircle[1]);
		drawPieSlice(context, 250,250,200, pieSliceArray[2].startAngle, pieSliceArray[2].endAngle, firstCircle[2]);
		drawPieSlice(context, 250,250,200, pieSliceArray[3].startAngle, pieSliceArray[3].endAngle, firstCircle[3]);
		drawPieSlice(context, 250,250,200, pieSliceArray[4].startAngle, pieSliceArray[4].endAngle, firstCircle[4]);
		drawPieSlice(context, 250,250,200, pieSliceArray[5].startAngle, pieSliceArray[5].endAngle, firstCircle[5]);
		drawPieSlice(context, 250,250,200, pieSliceArray[6].startAngle, pieSliceArray[6].endAngle, firstCircle[6]);
		drawPieSlice(context, 250,250,200, pieSliceArray[7].startAngle, pieSliceArray[7].endAngle, firstCircle[7]);
		drawPieSlice(context, 250,250,200, pieSliceArray[8].startAngle, pieSliceArray[8].endAngle, firstCircle[8]);
		drawPieSlice(context, 250,250,200, pieSliceArray[9].startAngle, pieSliceArray[9].endAngle, firstCircle[9]);
		drawPieSlice(context, 250,250,200, pieSliceArray[10].startAngle, pieSliceArray[10].endAngle, firstCircle[10]);
		drawPieSlice(context, 250,250,200, pieSliceArray[11].startAngle, pieSliceArray[11].endAngle, firstCircle[11]);
		
		
		drawPieSlice(context, 250,250,145, 0, (2*Math.PI), '#ffffff');
		
		//2ND CIRCLE
		drawPieSlice(context, 250,250,140, pieSliceArray[0].startAngle, pieSliceArray[0].endAngle, secondCircle[0]);
		drawPieSlice(context, 250,250,140, pieSliceArray[1].startAngle, pieSliceArray[1].endAngle, secondCircle[1]);
		drawPieSlice(context, 250,250,140, pieSliceArray[2].startAngle, pieSliceArray[2].endAngle, secondCircle[2]);
		drawPieSlice(context, 250,250,140, pieSliceArray[3].startAngle, pieSliceArray[3].endAngle, secondCircle[3]);
		drawPieSlice(context, 250,250,140, pieSliceArray[4].startAngle, pieSliceArray[4].endAngle, secondCircle[4]);
		drawPieSlice(context, 250,250,140, pieSliceArray[5].startAngle, pieSliceArray[5].endAngle, secondCircle[5]);
		drawPieSlice(context, 250,250,140, pieSliceArray[6].startAngle, pieSliceArray[6].endAngle, secondCircle[6]);
		drawPieSlice(context, 250,250,140, pieSliceArray[7].startAngle, pieSliceArray[7].endAngle, secondCircle[7]);
		drawPieSlice(context, 250,250,140, pieSliceArray[8].startAngle, pieSliceArray[8].endAngle, secondCircle[8]);
		drawPieSlice(context, 250,250,140, pieSliceArray[9].startAngle, pieSliceArray[9].endAngle, secondCircle[9]);
		drawPieSlice(context, 250,250,140, pieSliceArray[10].startAngle, pieSliceArray[10].endAngle, secondCircle[10]);
		drawPieSlice(context, 250,250,140, pieSliceArray[11].startAngle, pieSliceArray[11].endAngle, secondCircle[11]);
		
		drawPieSlice(context, 250,250,95, 0, (2*Math.PI), '#ffffff');
		
		//3RD CIRCLE
		drawPieSlice(context, 250,250,90, pieSliceArray[0].startAngle, pieSliceArray[0].endAngle, thirdCircle[0]);
		drawPieSlice(context, 250,250,90, pieSliceArray[1].startAngle, pieSliceArray[1].endAngle, thirdCircle[1]);
		drawPieSlice(context, 250,250,90, pieSliceArray[2].startAngle, pieSliceArray[2].endAngle, thirdCircle[2]);
		drawPieSlice(context, 250,250,90, pieSliceArray[3].startAngle, pieSliceArray[3].endAngle, thirdCircle[3]);
		drawPieSlice(context, 250,250,90, pieSliceArray[4].startAngle, pieSliceArray[4].endAngle, thirdCircle[4]);
		drawPieSlice(context, 250,250,90, pieSliceArray[5].startAngle, pieSliceArray[5].endAngle, thirdCircle[5]);
		drawPieSlice(context, 250,250,90, pieSliceArray[6].startAngle, pieSliceArray[6].endAngle, thirdCircle[6]);
		drawPieSlice(context, 250,250,90, pieSliceArray[7].startAngle, pieSliceArray[7].endAngle, thirdCircle[7]);
		drawPieSlice(context, 250,250,90, pieSliceArray[8].startAngle, pieSliceArray[8].endAngle, thirdCircle[8]);
		drawPieSlice(context, 250,250,90, pieSliceArray[9].startAngle, pieSliceArray[9].endAngle, thirdCircle[9]);
		drawPieSlice(context, 250,250,90, pieSliceArray[10].startAngle, pieSliceArray[10].endAngle, thirdCircle[10]);
		drawPieSlice(context, 250,250,90, pieSliceArray[11].startAngle, pieSliceArray[11].endAngle, thirdCircle[11]);
		
		
		//-----------------------------------------------------------------------
		//-------------------------------- BASICALLY MAIN FUNCTION---------------
		//-----------------------------------------------------------------------
		$('#colorWheelCanvas').mousedown(function(e) {
			// FIND THE POSITION OF MOUSE CLICK
			var pos = findPos(this);
			var x = e.pageX - pos.x;
			var y = e.pageY - pos.y;
			var coord = "x=" + x + ", y=" + y;
			var c = this.getContext('2d');
			var p = c.getImageData(x, y, 1, 1).data; 
			var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
			
			var i;
			
			var circleLevel = 0;
			var colorWheelArray;
			// FOR STATEMENT THAT WILL FIGURE OUT WHETHER THE USER SELECTED A COLOR FROM
			// THE FIRST, SECOND, OR THIRD CIRCLE
			for(i = 0; i < 12; i++)
			{
				if(firstCircle[i] == hex)
				{
					colorWheelArray = firstCircle;
					circleLevel = 1;
				}
				else if(secondCircle[i] == hex)
				{
					colorWheelArray = secondCircle;
					circleLevel = 2;
				}
				else if(thirdCircle[i] == hex)
				{
					colorWheelArray = thirdCircle;
					circleLevel = 3;
				}
				
				if(circleLevel != 0)
				{
					i = 12;
				}
			}
			
			// VARIABLES THAT WILL HOLD WHICH ELEMENT IN THE COLORWHEELARRAY THAT IS CURRENTLY IN PLAY
			var w = 0;
			var x = 0;
			var y = 0;
			var z = 0;
			
			// IF STATEMENTS THAT WILL FIGURE OUT THE REST OF THE COLOR COMBINATIONS;
			//===============================================================================
			//======================	COMPLEMENTARY CODE SECTION ==========================
			//===============================================================================
			if(document.getElementById('Complementary').checked)
			{
			
				for(i = 0; i < 12; i++)
				{
					if(colorWheelArray[i] == hex)
					{
						w = i;
						if(i < 6)
						{
							x = i + 6;
						}
						else if(i >= 6)
						{
							x = i - 6;
						}
					}
				}	
				
				//DRAWS SMALL RECTANGLE AND FILL THEM WITH THE COLOR OF THE COLOR COMBO THAT THE USER SELECTED
				/*context.fillStyle = colorWheelArray[w];
				context.fillRect(40, 470, 50, 25);
				context.fillStyle = colorWheelArray[x];
				context.fillRect(100, 470, 50, 25);
				context.fillStyle = "#ffffff";
				context.fillRect(160, 470, 50, 25);
				context.fillStyle = "#ffffff";
				context.fillRect(220, 470, 50, 25);*/

				// drawing the outline
				var compArray = [w, x, 12, 12];
				pieSliceSelector(context,compArray);
				
				selectedColor[0] = colorWheelArray[w];
				selectedColor[1] = colorWheelArray[x];
				selectedColor[2] = "#ffffff";
				selectedColor[3] = "#ffffff";
				
				//document.getElementById("colorComp").innerHTML =" [" + w + "] [" + x + "] ";
			}
			//===============================================================================
			//============================== ANALOGOUS CODE SECTION =========================
			//===============================================================================
			else if(document.getElementById('Analogous').checked)
			{
				for(i = 0; i < 12; i++)
				{
					if(colorWheelArray[i] == hex)
					{
						w = i;
						x = i + 1;
						y = i - 1;
	
						if(y < 0)
						{
							y = 11;
						}
						else if(x == 12)
						{
							x = 0;
						}
					}
				}
				//DRAWS SMALL RECTANGLE AND FILL THEM WITH THE COLOR OF THE COLOR COMBO THAT THE USER SELECTED
				/*context.fillStyle = colorWheelArray[y];
				context.fillRect(40, 470, 50, 25);
				context.fillStyle = colorWheelArray[w];
				context.fillRect(100, 470, 50, 25);
	
				context.fillStyle = colorWheelArray[x];
				context.fillRect(160, 470, 50, 25);
				context.fillStyle = "#ffffff";
				context.fillRect(220, 470, 50, 25);*/

				// drawing the outline
				var anlgArray = [w, x, y, 12];
				pieSliceSelector(context,anlgArray);
				
				selectedColor[0] = colorWheelArray[w];
				selectedColor[1] = colorWheelArray[x];
				selectedColor[2] = colorWheelArray[y];
				selectedColor[3] = "#ffffff";
				
				//document.getElementById("colorComp").innerHTML = " [" + y + "] [" + w + "] [" + x + "]";
			}
			//===============================================================================
			//============================= TRIADIC CODE SECTION ============================
			//===============================================================================
			else if(document.getElementById('Triadic').checked)
			{
				for(i = 0; i < 12; i++)
				{
					if(colorWheelArray[i] == hex)
					{
						w = i;
						if(w <= 3)
						{
							x = i + 4;
							y = i + 8;
						}
						else if(w >= 4 && w <= 7)
						{
							x = i + 4;
							y = i - 4;
						}	
						else if(w >= 8 && w <= 11)
						{
							x = i - 8;
							y = i - 4;
						}
					}			
				}
				
				//DRAWS SMALL RECTANGLE AND FILL THEM WITH THE COLOR OF THE COLOR COMBO THAT THE USER SELECTED
				/*context.fillStyle = colorWheelArray[w];
				context.fillRect(40, 470, 50, 25);
				context.fillStyle = colorWheelArray[x];
				context.fillRect(100, 470, 50, 25);
	
				context.fillStyle = colorWheelArray[y];
				context.fillRect(160, 470, 50, 25);
			
				context.fillStyle = "#ffffff";
				context.fillRect(220, 470, 50, 25);*/

				//drawing the outline
				var triArray = [w, x, y, 12];
				pieSliceSelector(context,triArray);
				
				selectedColor[0] = colorWheelArray[w];
				selectedColor[1] = colorWheelArray[x];
				selectedColor[2] = colorWheelArray[y];
				selectedColor[3] = "#ffffff";
				
				//document.getElementById("colorComp").innerHTML = " [" + w + "] [" + x + "] [" + y + "]";
			}
			//===============================================================================
			//=========================== SPLIT-COMPLEMENTARY CODE SECTION ==================
			//===============================================================================
			else if(document.getElementById('SplitComplementary').checked)
			{
				for(i = 0; i < 12; i++)
				{
					if(colorWheelArray[i] == hex)
					{
						w = i;
						if(w <= 4)
						{
							x = i + 5;
							y = i + 7;
						}
						else if(w >= 5 && w <= 6)
						{
							x = i + 5;
							y = i - 5;
						}
						else if(w == 7)
						{
							x = i -7;
							y = i - 5;
						}
						else if(w >= 8 && w <= 11)
						{
							x = i - 7;
							y = i - 5;
						}
					}
				}
				//DRAWS SMALL RECTANGLE AND FILL THEM WITH THE COLOR OF THE COLOR COMBO THAT THE USER SELECTED
				/*context.fillStyle = colorWheelArray[w];
				context.fillRect(40, 470, 50, 25);
				context.fillStyle = colorWheelArray[x];
				context.fillRect(100, 470, 50, 25);
	
				context.fillStyle = colorWheelArray[y];
				context.fillRect(160, 470, 50, 25);
				context.fillStyle = "#ffffff";
				context.fillRect(220, 470, 50, 25);*/

				//drawing the outline
				var splCompArray = [w, x, y, 12];
				pieSliceSelector(context,splCompArray);
				
				selectedColor[0] = colorWheelArray[w];
				selectedColor[1] = colorWheelArray[x];
				selectedColor[2] = colorWheelArray[y];
				selectedColor[3] = "#ffffff";
						
				//document.getElementById("colorComp").innerHTML = " [" + w + "] [" + x + "] [" + y + "]";
			}
			//===============================================================================
			//============================= TETRATIC CODE SECTIONS ==========================
			//===============================================================================
			else if(document.getElementById('TeTratic').checked)
			{
				for(i = 0; i < 12; i++)
				{
					
					if(colorWheelArray[i] == hex)
					{
						w = i;
						if(w >= 0 && w <= 1)
						{
							x = i + 4;
							y = i + 6;
							z = i + 10;
						}
						else if(w >= 2 && w <= 5)
						{
							x = i + 4;
							y = i + 6;
							z = i - 2;
						}
						else if(w >= 6 && w <= 7)
						{
							x = i + 4;
							y = i - 6;
							z = i - 2;
						}
						else if(w >= 8 && w <= 11)
						{
							x = i - 8;
							y = i - 6;
							z = i - 2;
						}
					}
					
				}
				//DRAWS SMALL RECTANGLE AND FILL THEM WITH THE COLOR OF THE COLOR COMBO THAT THE USER SELECTED
				/*context.fillStyle = colorWheelArray[w];
				context.fillRect(40, 470, 50, 25);
				context.fillStyle = colorWheelArray[x];
				context.fillRect(100, 470, 50, 25);
	
				context.fillStyle = colorWheelArray[y];
				context.fillRect(160, 470, 50, 25);
				context.fillStyle = colorWheelArray[z];
				context.fillRect(220, 470, 50, 25);*/

				//drawing the outline
				var TETRATICArray = [w, x, y, z];
				pieSliceSelector(context,TETRATICArray);
				
				selectedColor[0] = colorWheelArray[w];
				selectedColor[1] = colorWheelArray[x];
				selectedColor[2] = colorWheelArray[y];
				selectedColor[3] = colorWheelArray[z];
				//document.getElementById("colorComp").innerHTML = " [" + w + "] [" + x + "] [" + y + "] [" + z + "]";
				//document.getElementById("test2").innerHTML = "pass thisFunction()";
				//thisFunction();
				//document.getElementById("test2").innerHTML = "pass thisFunction()";
				
			}
			
			//Only draw the colors if a color scheme has been selected
			if(document.getElementById('Complementary').checked ||
			   document.getElementById('Analogous').checked ||
			   document.getElementById('Triadic').checked ||
			   document.getElementById('SplitComplementary').checked ||
			   document.getElementById('TeTratic').checked) {
				draw(selectedColor[0],selectedColor[1],selectedColor[2],selectedColor[3]);
			   }
		});
		
		
		//TESTING FUNCTIONS
		
		function thisFunction()
		{
			//document.getElementById("test3").innerHTML = "inside thisFunction()";
			document.getElementById("test3").innerHTML = "1st color = " + selectedColor[0] + "| 2nd color = " + selectedColor[1];
			document.getElementById("test4").innerHTML = "3rd color = " + selectedColor[2] + "|  4th color = " + selectedColor[3];
			
			
		}
		
	//------------------------------------END OF MAIN FUNCTION------------------------------
		
		
		// FUNCTION TO DRAW A PIE SLICE ON THE CANVAS
		function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color )
		{
			startAngle = startAngle + .01;
			endAngle = endAngle - .01;			
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(centerX,centerY);
			ctx.arc(centerX, centerY, radius, startAngle, endAngle);
			ctx.closePath();
			ctx.fill();
		}
		
		// FUNCTION TO FIND THE MOUSE CLICK POSITION
		function findPos(obj) 
		{
			var curleft = 0, curtop = 0;
			if (obj.offsetParent) {
				do {
					curleft += obj.offsetLeft;
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
				return { x: curleft, y: curtop };
			}
			return undefined;
		}
		// FUNCTION TO CONVERY R G B VALUES TO A HEX VALUE
		function rgbToHex(r, g, b) 
		{
			if (r > 255 || g > 255 || b > 255)
				throw "Invalid color component";
			return ((r << 16) | (g << 8) | b).toString(16);
		}
	
	//======================================================================================================
	//===============================================CODE CURRENTLY NOT IN USE==============================
	//======================================================================================================
	//CODE BELOW WAS MEANT TO OUTLINE EACH PIE SLICE THAT WAS IN THE COLOR COMBOINATION, BUT IT ISN'T WORKING, SO I'M SCRAPPING IT FOR NOW
		function pieSliceSelector(ctx, elementArray)
		{
			outlineReset(ctx);
			var a;
			for(a = 0; a < 4; a++)
			{
				
				if(elementArray[a] != 12)
				{
					if(elementArray[a] == 0)
					{					
						drawPieSliceOutline(ctx, 250, 250, 200, (3*Math.PI/2), (5*Math.PI/3), "#ffffff");
					}
					else if(elementArray[a] == 1)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, (5*Math.PI/3), (11*Math.PI/6), '#ffffff');
					}
					else if(elementArray[a] == 2)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, (11*Math.PI/6), (2*Math.PI), '#ffffff');
					}
					else if(elementArray[a] == 3)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, 0, (Math.PI/6), '#ffffff');
					}
					else if(elementArray[a] == 4)
					{
						drawPieSliceOutline(ctx, 250, 250, 200,(Math.PI)/6, (Math.PI)/3 , '#ffffff');
					}
					else if(elementArray[a] == 5)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, (Math.PI)/3, (Math.PI)/2, '#ffffff');
					}
					else if(elementArray[a] == 6)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, (Math.PI/2), (2*Math.PI)/3, '#ffffff');
					}
					else if(elementArray[a] == 7)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, (2*Math.PI)/3, (5*Math.PI)/6, '#ffffff');
					}
					else if(elementArray[a] == 8)
					{
						drawPieSliceOutline(ctx, 250, 250, 200,(5*Math.PI)/6, Math.PI , '#ffffff');
					}
					else if(elementArray[a] == 9)
					{
						drawPieSliceOutline(ctx, 250, 250, 200, Math.PI, (7*Math.PI)/6, '#ffffff');
					}
					else if(elementArray[a] == 10)
					{
						drawPieSliceOutline(ctx, 250, 250, 200,(7*Math.PI)/6, (4*Math.PI)/3 , '#ffffff');
					}
					else if(elementArray[a] == 11)
					{
						drawPieSliceOutline(ctx, 250, 250, 200,(4*Math.PI)/3, (3*Math.PI)/2 , '#ffffff');	
					}
				}
			}
		}
		function drawPieSliceOutline(ctx, centerX, centerY, radius, startAngle, endAngle)
		{
			ctx.beginPath();
			ctx.moveTo(centerX,centerY);
			ctx.arc(centerX, centerY, radius, startAngle, endAngle);
			ctx.closePath();
			ctx.lineWidth = 5;
			ctx.strokeStyle = "black";
			ctx.stroke();
		}
		function outlineReset(ctx)
		{		
			cutPieSliceOutline(ctx, 250, 250, 200, (3*Math.PI/2), (5*Math.PI/3));
			cutPieSliceOutline(ctx, 250, 250, 200, (5*Math.PI/3), (11*Math.PI/6));
			cutPieSliceOutline(ctx, 250, 250, 200, (11*Math.PI/6), (2*Math.PI));
			cutPieSliceOutline(ctx, 250, 250, 200, 0, (Math.PI/6));
			cutPieSliceOutline(ctx, 250, 250, 200,(Math.PI)/6, (Math.PI)/3);
			cutPieSliceOutline(ctx, 250, 250, 200, (Math.PI)/3, (Math.PI)/2);
			cutPieSliceOutline(ctx, 250, 250, 200, (Math.PI/2), (2*Math.PI)/3);
			cutPieSliceOutline(ctx, 250, 250, 200, (2*Math.PI)/3, (5*Math.PI)/6);
			cutPieSliceOutline(ctx, 250, 250, 200,(5*Math.PI)/6, Math.PI);
			cutPieSliceOutline(ctx, 250, 250, 200, Math.PI, (7*Math.PI)/6);
			cutPieSliceOutline(ctx, 250, 250, 200,(7*Math.PI)/6, (4*Math.PI)/3);
			cutPieSliceOutline(ctx, 250, 250, 200,(4*Math.PI)/3, (3*Math.PI)/2);	
		}
		function cutPieSliceOutline(ctx, centerX, centerY, radius, startAngle, endAngle)
		{
			ctx.beginPath();
			ctx.moveTo(centerX,centerY);
			ctx.arc(centerX, centerY, radius, startAngle, endAngle);
			ctx.closePath();
			ctx.lineWidth = 6;
			ctx.strokeStyle = "white";
			ctx.stroke();
		}
		
	//======================================================================================================================
	//======================================================================================================================
	//======================================================================================================================
		