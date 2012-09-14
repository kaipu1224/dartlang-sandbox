#library('sample');
#import('dart:html');
#import('dart:math');

#source('Bullet.dart');

void main() {
  var cm = new CanvasManager(query("#myCanvas"));
  cm.initialize();
  cm.start();
}

/**
 * Canvasへの描画クラス
 */
class CanvasManager{
  CanvasElement canvas;
  bool _running = false;
  List<Bullet> bullets;
  
  /**
   * コンストラクタ
   */
  CanvasManager(this.canvas);
  
  /**
   * 初期化処理
   */ 
  void initialize(){
    bullets = [];
    num pos = 0;
    for(int i = 0; i < 100; i++){
      if(i > 0 && i%20 == 0){
        pos -= 130;
      }
      bullets.add(new RotateBullet(pos, pos, 0.5, 0.4,i * 0.1 + 0.1, 80, 3));
    }
  }
  
  /**
   * 開始処理
   */
  void start(){
    requestRedraw();
  }
  
  /**
   * 再描画要求
   */
  void requestRedraw() {
    window.requestAnimationFrame(update);
  }
  
  /**
   * 更新処理
   */
  bool update(int timer){
    CanvasRenderingContext2D context = canvas.getContext("2d");
    // 状態更新
    bullets.forEach(function(bullet)=>bullet.update());
    // 描画
    draw(context);
  }
  
  /**
   * 描画処理
   */
  void draw(CanvasRenderingContext2D context){
    drawBackground(context);
    bullets.forEach(function(bullet)=>bullet.draw(context));
    
    requestRedraw();
  }
  
  /**
   * 背景の再描画
   */
  void drawBackground(CanvasRenderingContext2D context){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();
  }
}
