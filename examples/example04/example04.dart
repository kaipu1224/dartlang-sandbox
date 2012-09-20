
#import('dart:html');
#import('dart:math');

#source('fieldmap.dart');

void main() {
  var animationMap = new AnimationMap(query("#stage"));
  var left = query("#left");
  left.on.click.add((event)=>animationMap.distance = 0);
  var right = query("#right");
  right.on.click.add((event)=>animationMap.distance = 1);
  var top = query("#top");
  top.on.click.add((event)=>animationMap.distance = 2);
  var bottom = query("#bottom");
  bottom.on.click.add((event)=>animationMap.distance = 3);
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
  // move distance.
  // 0:left 1:right 2:top 3:bottom
  int _distance = 0;
  void set distance(int d){ _distance = d;}
  
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
    var col = _width / _chipWidth + 2;
    var row = _height / _chipHeight + 2;
    var posX = -_chipWidth;
    var posY = -_chipHeight;
    for(num y = 0; y < row; y++){
      for(num x = 0; x < col; x++){
        if(y == row/2){
          _mapData.add(new MapChipData(posX, posY, 10));
        }else if(x == col/2){
          _mapData.add(new MapChipData(posX, posY, 10));
        }else{
          _mapData.add(new MapChipData(posX, posY, 0));
        }
        //_mapData.add(new MapChipData(posX, posY, rand.nextInt(_map.chipCount.toInt())));
        posX += _chipWidth;
      }
      posX = -_chipWidth;
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
    
    switch(_distance){
      case 0:
        _moveLeft();
        break;
      case 1:
        _moveRight();
        break;
      case 2:
        _moveTop();
        break;
      case 3:
        _moveBottom();
        break;
    }
    _fillBackground(context);
    _draw(context);
    redraw();
  }
  
  // move the map to left.
  void _moveLeft(){
    _mapData.forEach((data){
      data.x -= 1;
      if(data.x + _chipWidth <= 0){
        data.x = _width;
      }
    });
  }
  
  // move the map to right.
  void _moveRight(){
    _mapData.forEach((data){
      data.x += 1;
      if(data.x >= _width){
        data.x = -_chipWidth;
      }
    });
  }
  
  // move the map to top.
  void _moveTop(){
    _mapData.forEach((data){
      data.y -= 1;
      if(data.y + _chipHeight <= 0){
        data.y = _height;
      }
    });
  }
  
  // move the map to bottom.
  void _moveBottom(){
    _mapData.forEach((data){
      data.y += 1;
      if(data.y >= _height){
        data.y = -_chipHeight;
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
//    context.fillStyle = "black";
//    context.fillRect(0, 0, _width, _height);
    _mapData.forEach((data){
      _map.draw(context, 0, data.x, data.y);
    });
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