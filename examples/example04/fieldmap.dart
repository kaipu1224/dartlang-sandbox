/**
 * Field map class.
 */
class FieldMap {
  // canvas size.
  num _canvasWidth, _canvasHeight;
  // map image.
  ImageElement _image;
  // mapchip size.
  num _chipWidth, _chipHeight;
  // image position.
  List<Point> positions;
  // mapchip count.
  num _chipCount;
  num get chipCount() => _chipCount;
  
  // constructor.
  FieldMap(this._canvasWidth, this._canvasHeight);
  
  // initialize.
  void initialize(String source, num chipWidth, num chipHeight, Function callback){
    this._chipWidth = chipWidth;
    this._chipHeight = chipHeight;
    _loadImage(source, callback);
  }
  
  // draw map image.
  void draw(CanvasRenderingContext2D context, num chipId, num posX, num posY){
    context.drawImage(_image, positions[chipId].x, positions[chipId].y, _chipWidth, _chipHeight, posX, posY, _chipWidth, _chipHeight);
  }
  
  // loading image.
  void _loadImage(String source, Function callback){
    _image = new Element.tag("img");
    _image.src = source;
    _image.on.load.add((event){
      print("image on load.");
      _setupImagePositions();
      callback();
    });
  }
  
  // setup map image position data.
  void _setupImagePositions(){
    var col = _image.width / _chipWidth;
    var row = _image.height / _chipHeight;
    var posX = 0;
    var posY = 0;
    positions = [];
    for(num y = 0; y < row; y++){
      for(num x = 0; x < col; x++){
        positions.add(new Point(posX, posY));
        posX += _chipWidth;
      }
      posX = 0;
      posY += _chipHeight;
    }
    _chipCount = col * row;
    
    // debug.
    print("map image col:$col row:$row chip count:$_chipCount");
  }
}