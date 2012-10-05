
import 'dart:html';
import 'dart:math';

CanvasElement canvas;
ImageElement img;

void main() {
  canvas = query("#canvas");
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  
  img = new Element.tag("img");
  img.src = "img01.jpg";
  img.on.load.add((e){
    drawImage();
  });
  
  var gray = query("#convertBtn");
  gray.on.click.add((e){
    grayscaleFilter();
  });
}

void drawImage(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0,0,img.width,img.height);
}

void grayscaleFilter(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  var imgPixels = context.getImageData(0, 0, img.width, img.height);
  int pixLength = (img.width * img.height)*4;
      
  for(var i = 0; i < pixLength; i += 4){
    int red = imgPixels.data[i];
    int green = imgPixels.data[i+1];
    int blue = imgPixels.data[i+2];
    int gray = ((red + green + blue) / 3).toInt();
    
    imgPixels.data[i] = gray;
    imgPixels.data[i+1] = gray;
    imgPixels.data[i+2] = gray;
  }
  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
  context.save();
}