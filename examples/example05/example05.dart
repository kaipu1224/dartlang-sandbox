
#import('dart:html');
#import('dart:math');

int width = 320;
int height = 480;

void main() {
  
  CanvasElement canvas = query("#stage");
  canvas.width = width;
  canvas.height = height;
  var tetris = new Tetris(canvas);
  tetris.start();
  
}

/**
 * Tetris!
 */
class Tetris{
  CanvasElement _canvas;
  List<List<Point>> _drawPositions;
  List<List<String>> _screenColors;
  List<Block> _blocks = [];
  Block _block;
  
  double _fpsAverage;
  num _renderTime;
  
  Random _random;
  
  Point _pos;
  int _rotate = 0;
  
  int count = 0;
  int rotCount = 0;
  
  // state row and col
  int _row, _col;
  
  /**
   * constructor
   */
  Tetris(this._canvas){
    _init();
  }
  
  /**
   * init game state
   */
  void _init(){
    _row = (_canvas.height/Block.size).toInt();
    _col = (_canvas.width/Block.size).toInt();
    _initDrawPositions();
    _initScreenColors();
    _random = new Random();
    _initBlocks();
    _generateBlock();
    
  }
  
  /**
   * initialize draw positions
   */
  void _initDrawPositions(){
    _drawPositions = new List<List<Point>>(_row);
    int px = 0;
    int py = 0;
    for(int y = 0; y < _drawPositions.length; y++){
      _drawPositions[y] = new List<Point>(_col);
      for(int x = 0; x < _drawPositions[y].length; x++){
        _drawPositions[y][x] = new Point(px, py);
        px += Block.size;
      }
      px = 0;
      py += Block.size;
    }
  }
  
  /**
   * initialize screen colors
   */
  void _initScreenColors(){
    _screenColors = new List<List<String>>(_row);
    for(int y = 0; y < _screenColors.length; y++){
      _screenColors[y] = new List<String>(_col);
      for(int x = 0; x < _screenColors[y].length; x++){
        _screenColors[y][x] = "black";
      }
    }
    print("screen size[${_screenColors.length},${_screenColors[0].length}]");
  }
  
  /**
   * start game
   */
  void start(){
    _repaint();
  }
  
  /**
   * repaint canvas
   */
  void _repaint(){
    window.requestAnimationFrame(_update);
  }
  
  /**
   * update state
   */
  bool _update(int time){
    // update fps
    _updateFps(time);
    
    if(count > 30){
      if(_isHit()){
        _generateBlock();
      }else{
        setColor("black");
        _pos.y++;
        setColor(_block.color);        
      }
      count = 0;
    }
    count++;
  
    _paint();
    _repaint();
  }
  
  void setColor(String color){
    for(int i = 0; i < _block.sq[_rotate].length; i++){
      _screenColors[(_pos.y + _block.sq[_rotate][i].y).toInt()][(_pos.x + _block.sq[_rotate][i].x).toInt()] = color;
    }
  }
  
  /**
   * paint screen colors
   */
  void _paint(){
    CanvasRenderingContext2D context = _canvas.getContext("2d");
    for(int y = 0; y < _drawPositions.length; y++){
      for(int x = 0; x < _drawPositions[y].length; x++){
        context.fillStyle = _screenColors[y][x];
        context.fillRect(_drawPositions[y][x].x, _drawPositions[y][x].y, Block.size, Block.size);
      }
    }
  }
  
  bool _isHit(){
    bool hit = false;
    for(int i=0; i<_block.sq[_rotate].length; i++){
      var p = new Point(_pos.x + _block.sq[_rotate][i].x, _pos.y + _block.sq[_rotate][i].y + 1);
      hit = p.x < 0 || p.x >= _screenColors[0].length || p.y < 0 || p.y >= _screenColors.length || _screenColors[p.y.toInt()][p.x.toInt()] != "black";
    }
    return hit;
  }
  
  /**
   * update fps
   */
  void _updateFps(int time){
    if (time == null) time = new Date.now().millisecondsSinceEpoch;
    if (_renderTime != null) showFps((1000 / (time - _renderTime)).round());
    _renderTime = time;
  }
  
  /**
   * show fps
   */
  void showFps(num fps) {
    if (_fpsAverage == null) {
      _fpsAverage = fps;
    }

    _fpsAverage = fps * 0.05 + _fpsAverage * 0.95;

    query("#fps").text = "${_fpsAverage.round().toInt()} fps";
  }
  
  void _generateBlock(){
    int type = _random.nextInt(_blocks.length);
    _block = _blocks[type];
    _rotate = _random.nextInt(_block.sq.length);
    _pos = new Point(_col/2, 4);
    
  }
  
  void _initBlocks(){
    _blocks.add(new Block([new Point(-1, 0), new Point(0, 0), new Point(1, 0), new Point(2, 0)], 2, "skyblue")); // テトリス棒
    _blocks.add(new Block([new Point(0, -1), new Point(1, -1), new Point(0, 0), new Point(1, 0)], 1, "yellow")); // 四角
    _blocks.add(new Block([new Point(-1, -1), new Point(-1, 0), new Point(0, 0), new Point(1, 0)], 4, "pink")); // 逆L
    _blocks.add(new Block([new Point(-1, 0), new Point(0, 0), new Point(1, 0), new Point(1, -1)], 4, "red")); // L
    _blocks.add(new Block([new Point(-1, 0), new Point(0, 0), new Point(0, 1), new Point(1, 1)], 2, "blue")); // かぎ1
    _blocks.add(new Block([new Point(-1, 1), new Point(0, 1), new Point(0, 0), new Point(1, 0)], 2, "lime")); // かぎ2
    _blocks.add(new Block([new Point(-1, 0), new Point(0, 0), new Point(1, 0), new Point(0, -1)], 4, "orange")); // 凸
    
  }
}


class Block{
  List<List<Point>> sq;
  String color;
  int rot;
  static get size(){ return 20.toInt();}
  
  Block(List<Point> p, this.rot, this.color){
    this.sq = new List<List<Point>>(rot);
    for(int i=0; i<rot;i++){
      this.sq[i] = new List<Point>(4);
      for(int j=0; j<4; j++){
        sq[i][j] = p[j];
      }
      for(int j=0; j<4; j++){
        p[j] = _rotate(p[j]);
      }
    }
  }
  
  Point _rotate(Point point){
    return new Point(point.y, -point.x);
  }
}