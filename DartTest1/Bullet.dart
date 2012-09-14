interface BulletIF {
  void update();
  void draw(CanvasRenderingContext2D context);
}

class Bullet implements BulletIF {
  num _px, _py, _vx, _vy;
  num get px() => _px;
  num get py() => _py;
  num get vx() => _vx;
  num get vy() => _vy;
  void set px(num px){ this._px = px; }
  void set py(num py){ this._py = py; }
  void set vx(num px){ this._vx = vx; }
  void set vy(num py){ this._vy = vy; }
  
  Bullet(this._px, this._py, this._vx, this._vy);
  
  void update(){
  }
  
  void draw(CanvasRenderingContext2D context){
  }
}

class CircleBullet extends Bullet {
  num _rotateSpeed;
  num _centerPosX, _centerPosY;
  num _theta = 0.0;
  num _size;
  num _radius;
  List<String> _colors = ["red","yellow","blue","purple","white","orange", "pink", "gold"];
  String _color;
  
  CircleBullet(num px, num py, num vx, num vy, this._rotateSpeed, this._radius, this._size):super(px,py,vx,vy){
    _centerPosX = px; 
    _centerPosY = py;
    _color = _colors[new Random().nextInt(_colors.length)];
  }
  
  void update(){
    _theta += _rotateSpeed;
    px = sin(_theta) * _radius + _centerPosX;
    py = cos(_theta) * _radius + _centerPosY;
    
    _centerPosX += vx;
    _centerPosY += vy;
  }
  
  void draw(CanvasRenderingContext2D context){
    context.fillStyle = _color;
    context.beginPath();
    context.arc(px, py, _size, 0, PI * 2, true);
    context.closePath();
    context.fill();
  }
}