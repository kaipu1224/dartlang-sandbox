
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
  query("#mozaBtn").on.click.add((e){
    mozaFilter();
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

// モザイクのフィルタリング、あとでもっとまじめに書く
void mozaFilter(){
  CanvasRenderingContext2D context = canvas.getContext("2d");
  var imgPixels = context.getImageData(0, 0, img.width, img.height);
  int dot = 8;
  int w = (img.width/dot).toInt();
  int h = (img.height/dot).toInt();
  for(int i=0; i < w; i++){
    for(int j=0; j < h; j++){
      int px = i*dot;
      int py = j*dot;
      var block = context.getImageData(px, py, dot, dot);
      int rr = 0;
      int gg = 0;
      int bb = 0;
//      int gray = 0;
      int len = (block.data.length/4).toInt();
      for(int k=0; k<len; k++){
        rr += block.data[k*4];
        gg += block.data[k*4+1];
        bb += block.data[k*4+2];
      }
      rr = (rr/len).toInt();
      gg = (gg/len).toInt();
      bb = (bb/len).toInt();
//      gray = (0.299 * rr + 0.587 * gg + 0.114 * bb).toInt();
      context.fillStyle = "rgb($rr,$gg,$bb)";
//      context.fillStyle = "rgb($gray,$gray,$gray)";
      context.fillRect(px, py, dot, dot);
    }
  }
//  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}
