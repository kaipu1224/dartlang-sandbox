
import 'dart:html';
import 'dart:math';

CanvasElement canvas;
ImageElement img;

void main() {
  canvas = query("#canvas");
  img = new Element.tag("img");
  
  var images = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg"];
  SelectElement selectMenu = query("#imgSelect");
  selectMenu.on.change.add((e){
    SelectElement s = e.target;
    selectImage(s.nodes[s.selectedIndex+1].text);
  });
  images.forEach((item) => selectMenu.nodes.add(new OptionElement(item, item, false, false)));
  selectImage(images[0]);
  
  query("#grayBtn").on.click.add((e){
    grayscaleFilter();
  });
  query("#sepiaBtn").on.click.add((e){
    sepiaFilter();
  });
  query("#negaBtn").on.click.add((e){
    negaFilter();
  });
}

void selectImage(imageName){
  img.src = imageName;
  img.on.load.add((e){
    drawImage();
  });
}

void drawImage(){
  canvas.width = img.width;
  canvas.height = img.height;
  CanvasRenderingContext2D context = canvas.getContext("2d");
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0,0,img.width,img.height);
}

void grayscaleFilter(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  var imgPixels = context.getImageData(0, 0, img.width, img.height);
  int pixLength = (img.width * img.height)*4;
  
  int red, green, blue, gray;
  for(var i = 0; i < pixLength; i += 4){
    red = imgPixels.data[i];
    green = imgPixels.data[i+1];
    blue = imgPixels.data[i+2];
    gray = (0.299 * red + 0.587 * green + 0.114 * blue).toInt();
    
    imgPixels.data[i] = gray;
    imgPixels.data[i+1] = gray;
    imgPixels.data[i+2] = gray;
  }
  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}

void sepiaFilter(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  var imgPixels = context.getImageData(0, 0, img.width, img.height);
  int pixLength = (img.width * img.height)*4;
  
  int red, green, blue, sepia;
  for(var i = 0; i < pixLength; i += 4){
    red = imgPixels.data[i];
    green = imgPixels.data[i+1];
    blue = imgPixels.data[i+2];
    sepia = (0.299 * red + 0.587 * green + 0.114 * blue).toInt();
    
    imgPixels.data[i] = (sepia/255*240).toInt();
    imgPixels.data[i+1] = (sepia/255*200).toInt();
    imgPixels.data[i+2] = (sepia/255*145).toInt();
  }
  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}

void negaFilter(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  var imgPixels = context.getImageData(0, 0, img.width, img.height);
  int pixLength = (img.width * img.height)*4;
  
  int red, green, blue;
  for(var i = 0; i < pixLength; i += 4){
    red = imgPixels.data[i];
    green = imgPixels.data[i+1];
    blue = imgPixels.data[i+2];
    
    imgPixels.data[i] = 255 - red;
    imgPixels.data[i+1] = 255 - green;
    imgPixels.data[i+2] = 255 - blue;
  }
  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}
