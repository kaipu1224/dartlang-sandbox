
#import('dart:html');
#import('dart:math');

void main() {
  
  var canvas = query("#stage");
  var stage = new Stage(canvas);
  stage.initialize();
  stage.start();
}
num renderTime;
double fpsAverage;
void showFps(num fps) {
  if (fpsAverage == null) {
    fpsAverage = fps;
  }
  fpsAverage = fps * 0.05 + fpsAverage * 0.95;
}

// Stage.
class Stage{
  CanvasElement _canvas;
  var _sceneList;
  num _currentScene = 0;

  Stage(this._canvas);
  
  void initialize(){
    _sceneList = new List<Scene>();
    _sceneList.add(SceneBuilder.build(_currentScene, _canvas.width, _canvas.height));
    _sceneList.add(SceneBuilder.build(_currentScene+1, _canvas.width, _canvas.height));
    _sceneList.add(SceneBuilder.build(_currentScene+2, _canvas.width, _canvas.height));
    print("scene = $_sceneList[_currentScene]");
  }
  
  void start(){
    _sceneList[_currentScene].start();
    redraw();
  }
  
  void redraw(){
    window.requestAnimationFrame(draw);
  }
  
  bool draw(num time){
    if (time == null) {
      // time can be null for some implementations of requestAnimationFrame
      time = new Date.now().millisecondsSinceEpoch;
    }

    if (renderTime != null) {
      showFps((1000 / (time - renderTime)).round());
    }
    renderTime = time;
    
    var context = _canvas.getContext("2d");
    
    // update scene
    _sceneList[_currentScene].update();
    
    // draw scene
    _sceneList[_currentScene].drawBackground(context);
    _sceneList[_currentScene].draw(context);
    
    redraw();
    
    if(_sceneList[_currentScene].isStopped()){
      _currentScene++;
      if(_currentScene > _sceneList.length-1){
        _currentScene = 0;
      }
      _sceneList[_currentScene].initialize();
      _sceneList[_currentScene].start();
    }
  }
}

// Scene builder
class SceneBuilder{
  static Scene build(num type, num width, num height){
    var scene;
    
    if(type == 0){
      scene = new FirstScene(width, height);
      scene.initialize();
      return scene;
    }else if(type == 1){
      scene = new SecondScene(width, height);
      scene.initialize();
      return scene;
    }else if(type == 2){
      scene = new ThirdScene(width, height);
      scene.initialize();
      return scene;
    }else{
      return null;
    }
  }
}

// Scene.
interface Scene{
  void initialize();
  void start();
  void pause();
  void stop();
  void update();
  void draw(CanvasRenderingContext2D context);
  void drawBackground(CanvasRenderingContext2D context);
}

// Abstract scene.
class AbstractScene implements Scene {
  // scene size
  num _width, _height;
  // scene state
  String _state;
  
  // debug
  num _updateCount = 0;
  
  // constructor
  AbstractScene(this._width, this._height);
  
  bool isInitialized(){ return _state == "initialized";}
  bool isStarted(){ return _state == "running";}
  bool isPaused(){ return _state == "paused";}
  bool isStopped(){ return _state == "stopped";}
}

// First scene.
class FirstScene extends AbstractScene {
  var backgroundColor = "black";
  
  FirstScene(num width, num height):super(width, height);
  
  void initialize(){
    _state = "initialized";
    _updateCount = 0;
  }
  void start(){
    _state = "running";
  }
  void pause(){
    _state = "paused";
  }
  void stop(){
    _state = "stopped";
  }
  void update(){
    _updateCount++;
    if(_updateCount > 200){
      stop();
    }
  }
  
  void draw(CanvasRenderingContext2D context){
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("First Scene", 30, _height/2);
    context.fillText("FPS : $fpsAverage", 30, _height/2+30);
  }
    
  void drawBackground(CanvasRenderingContext2D context){
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, _width, _height);
  }
}
  
// Second scene.
class SecondScene extends AbstractScene {
  var backgroundColor = "blue";
  
  SecondScene(num width, num height):super(width, height);
  
  void initialize(){
    _state = "initialized";
    _updateCount = 0;
  }
  void start(){
    _state = "running";
  }
  void pause(){
    _state = "paused";
  }
  void stop(){
    _state = "stopped";
  }
  void update(){
    _updateCount++;
    if(_updateCount > 200){
      stop();
    }
  }
  
  void draw(CanvasRenderingContext2D context){
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Second Scene", 30, _height/2);
    context.fillText("FPS : $fpsAverage", 30, _height/2+30);
  }
    
  void drawBackground(CanvasRenderingContext2D context){
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, _width, _height);
  }
}
  
// First scene.
class ThirdScene extends AbstractScene {
  var backgroundColor = "green";
  
  ThirdScene(num width, num height):super(width, height);
  
  void initialize(){
    _state = "initialized";
    _updateCount = 0;
  }
  void start(){
    _state = "running";
  }
  void pause(){
    _state = "paused";
  }
  void stop(){
    _state = "stopped";
  }
  void update(){
    _updateCount++;
    if(_updateCount > 200){
      stop();
    }
  }
  
  void draw(CanvasRenderingContext2D context){
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Third Scene", 30, _height/2);
    context.fillText("FPS : $fpsAverage", 30, _height/2+30);
  }
    
  void drawBackground(CanvasRenderingContext2D context){
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, _width, _height);
  }
}