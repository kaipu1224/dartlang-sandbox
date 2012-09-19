
#import('dart:html');
#import('dart:math');

void main() {
  var example = new Example(query("#stage"));
  example.initialize();
  example.start();
  
  var fireBtn = query("#fireBtn");
  fireBtn.on.click.add((event){
    example.fire();
  }, false);
}

class Example {
  CanvasElement _canvas;
  List<Bullet> bullets;
  var rand  = new Random();
  
  Example(this._canvas);
  
  void initialize(){
    bullets = [];
  }
  
  void start(){
    redraw();
  }
  
  void redraw(){
    window.requestAnimationFrame(draw);
  }
  
  void fire(){
    var r,g,b;
    
    for(num i = 0; i < 200; i++){
      r = rand.nextInt(155)+99;
      g = rand.nextInt(155)+99;
      b = rand.nextInt(155)+99;
      
      bullets.add(new Bullet(250, 250, rand.nextDouble()-3.0, rand.nextDouble()-2.0, rand.nextDouble()-2.0, "rgb($r,$g,$b)"));
    }
  }
  
  bool draw(num time){
    var context = _canvas.getContext("2d");
    fillBackground(context);
    
    bullets.forEach((b)=>b.update());
    bullets.forEach((b)=>b.draw(context));
    redraw();
    
    var count = bullets.length;
    for(num i = count-1; i >= 0; i--){
      if(!bullets[i].alive){
        bullets.removeRange(i, 1);
      }
    }
    count = bullets.length;
    query("#bulletCount").text = "Bullet count : $count";
  }
  
  void fillBackground(CanvasRenderingContext2D context){
    context.fillStyle = "black";
    context.fillRect(0, 0, _canvas.width, _canvas.height);
  }
}

class Bullet {
  num _x, _y, _v;
  bool _alive = true;
  num _radX, _radY;
  String _color;
  num _time = 0;
  
  bool get alive(){return _alive;}
  
  Bullet(this._x, this._y, this._v, this._radX, this._radY, this._color);
  
  void update(){
    _x += _v * cos(_radX);
    _y += _v * cos(_radY);
    
    if(_y > 500 || _x < 0 || _x > 500){
      _alive = false;
    }
    _time+=1;
    if(_alive && _time > 200){
      _alive = false;
    }
  }
  
  void draw(CanvasRenderingContext2D context){
    context.fillStyle = _color;
    context.beginPath();
    context.arc(_x, _y, 0.5, 0, PI * 2, true);
    context.closePath();
    context.fill();
  }
}
