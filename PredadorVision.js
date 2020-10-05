var capture;

var song;
var visao = 0;

function preload() {
 song = loadSound('data/battle-magic.mp3');
}

function setup() { 
 createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO);
 capture.hide(); 
}

function draw() {
  background(51); 
   switch(visao){
     case 1:       
         //print("Vision: 1");
         tint(255, 0 , 0, 200);
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50);   
         break;
     case 2:
         //print("Vision: 2 ");
         tint(0, 255 , 0, 200);
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50);        
         break;
     case 3:
         //print("Vision: 3");         
         tint(0, 0 , 255, 200);
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50);       
         break;
     case 4:
         //print("Vision: 4");
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filtersInvert();
         break;
     case 5:
         //print("Vision: 5");
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filtersPosterize();
         break;
     case 6:
        //print("Vision: 6");
        image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filtersDilate();
         break;
     case 7:
         //print("Vision: 7");
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filtersBlur();
         break;
     case 8: 
         //print("Vision: 8");
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filtersErode();
         break;
     case 9: 
         //print("Vision: 9");
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         filterTherehold();
         break;
    default: 
         image(capture, width/2 - 300, height/2 - 200, width/2, height/2 + 50); 
         visao = 0;
         break;
   }
   
   tint(255);    
}


function filtersInvert() {
    filter(INVERT); 
};

function filtersPosterize() {
    filter(POSTERIZE, 3); 
};

function filtersDilate() {
    filter(DILATE); 
};
function filtersBlur(){
    filter(BLUR, 3); 
};
function filtersErode(){
    filter(ERODE); 
};

function filterTherehold(){
  filter(THRESHOLD);
}

function mousePressed(){
    song.play();
    visao++;
};

function keyPressed() {
  if (keyCode == 83) {        
    saveCanvas('minhaFoto', 'jpg');
  } 
}
