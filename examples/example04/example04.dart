
#import('dart:html');
#import('dart:math');

#source('fieldmap.dart');

void main() {
  new AnimationMap(query("#stage"));
}

/**
 * Animation map example.
 */
class AnimationMap {
  // my stage.
  CanvasElement _stage;
  // stage size.
  num _width, _height;
  // map.
  FieldMap _map;
  // my map data.
  List<MapChipData> _mapData;
  // mapchip size.
  num _chipWidth = 40;
  num _chipHeight = 40;
  
  // constructor.
  AnimationMap(this._stage){
    _initialize();
  }
  
  // initialize function.
  void _initialize(){
    _width = _stage.width;
    _height = _stage.height;
    
    _loadMap();
  }
  
  // loading map image.
  void _loadMap(){
    print("loading map image start.");
    _map = new FieldMap(_width, _height);
    _map.initialize("pipo-map001.png", _chipWidth, _chipHeight, _createMapData);
  }

  // create map data.
  void _createMapData(){
    print("create map data start.");
    _mapData = [];
    // it's test. scrolling left only.
    // stage size 480x480
    // mapchip size 40x40
    var rand = new Random();
    var col = _width / _chipWidth + 1;
    var row = _height / _chipHeight;
    var posX = 0;
    var posY = 0;
    for(num y = 0; y < row; y++){
      for(num x = 0; x < col; x++){
        _mapData.add(new MapChipData(posX, posY, rand.nextInt(_map.chipCount.toInt())));
        posX += _chipWidth;
      }
      posX = 0;
      posY += _chipHeight;
    }
    
    // setup is end.
    _start();
  }
  
  // animation start function.
  void _start(){
    print("animation start.");
    redraw();
  }
  
  // redrawing.
  void redraw(){
    window.requestAnimationFrame(update);
  }
  
  // update state and render.
  bool update(num time){
    var context = _stage.context2d;
    
    _moveLeft();
    _fillBackground(context);
    _draw(context);
    redraw();
  }
  
  // move the map to left.
  void _moveLeft(){
    _mapData.forEach((data){
      data.x -= 0.5;
      if(data.x + _chipWidth < 0){
        data.x = _width;
      }
    });
  }
  
  // draw map images.
  void _draw(CanvasRenderingContext2D context){
    _mapData.forEach((data){
      _map.draw(context, data.id, data.x, data.y);
    });
  }
  
  // fill background.
  void _fillBackground(CanvasRenderingContext2D context){
    context.fillStyle = "black";
    context.fillRect(0, 0, _width, _height);
  }
}

/**
 * Mapchip data.
 */
class MapChipData {
  // position
  num _x, _y;
  // image id.
  num _id;
  
  // getter/setter.
  num get x() => _x;
  num get y() => _y;
  num get id() => _id;
  void set x(num x){ _x = x;}
  void set y(num y){ _y = y;}
  
  MapChipData(this._x, this._y, this._id);
}