
#import('dart:html');
#import('dart:math');

<<<<<<< HEAD
void main() {
  var calcBtn = query("#calcBtn");
  calcBtn.on.click.add((event){
    InputElement rowTxt = query("#row");
    InputElement colTxt = query("#col");
    
    OnesanRobot onesan = new OnesanRobot(parseInt(rowTxt.value)+1, parseInt(colTxt.value)+1);
    onesan.start();
  });
}

/**
 * オネエサン　ロボット　ダヨ。
 */
class OnesanRobot{
  // マップサイズ
  int _row, _col;
  // マップ
  List<List<bool>> _map;
  // ケイロノカズダヨ
  int _route;
  
  /**
   * コンストラクタ
   */
  OnesanRobot(this._row, this._col){
    _init();
  }
  
  /**
   * マップトカソノタイロイロヲショキカスルヨー
   */
  void _init(){
    _route = 0;
    
    // タテｘヨコノマップヲセイセイスルヨ
    // true : タンサクシテナイヨ
    // false : タンサクシテルヨ
    _map = new List<List<bool>>(_row);
    for(int i = 0; i < _map.length; i++){
      _map[i] = new List<bool>(_col);
      for(int j = 0; j < _map[i].length; j++){
        _map[i][j] = false;
      }
    }
  }
  
  /**
   * オネーサンガンバッテ　タンサクシチャウヨ!
   */
  void start(){
    window.alert("${_row-1}x${_col-1}デケイサン　スルヨ！");
    
    _update(0, 0, _copy(_map));
    
    // 結果
    DivElement result = query("#route");
    result.text = "ケイロタンサク　オワリマシタ　ケイロスウハ　${_route}　デシタ。";
  }
  
  /**
   * マップヲコピースルヨ
   */
  List<List<bool>> _copy(List<List<bool>> m){
    List<List<bool>> retMap = new List<List<bool>>(_row);
    for(int i = 0; i < retMap.length; i++){
      retMap[i] = new List<bool>(_col);
      for(int j = 0; j < retMap[i].length; j++){
        retMap[i][j] = m[i][j];
      }
    }
    return retMap;
  }
  
  /**
   * マップタンサクスルヨ！サイキショリデヤッチャウカラネ！
   */
  void _update(int posX, int posY, List<List<bool>> map){
      List<List<bool>> copyMap = _copy(map);
    
    // コレイジョウススメルカ　ケイサンスルヨ！
    if(posX < 0 || posX >= _col || posY < 0 || posY >= _row){
      // マップガイダッタラ　オワリダヨ
      return;
    }
    
    // ゴールシタカシラベルヨ　ゴールハミギシタ！
    if(posX == _col - 1 && posY >= _row - 1){
      _route++;
      return;
    }
    
    // イマイルトコロガ　タンサクズミカ　シラベルヨ
    if(copyMap[posY][posX]){
      return;
    }else{
      copyMap[posY][posX] = true;
    }
    
    // ジョウゲサユウ　ゼンブ　ミチャウカラネ！
    _update(posX + 1, posY, copyMap); // ミギ
    _update(posX, posY + 1, copyMap); // シタ
    _update(posX - 1, posY, copyMap); // ヒダリ
    _update(posX, posY - 1, copyMap); // ウェィ
  }
}

=======
List<List<bool>> maps;
Point pos = new Point(0,0);
int row, col;

void main() {
  var calcBtn = query("#calc");
  calcBtn.on.click.add((event){
    InputElement rowTxt = query("#row");
    InputElement colTxt = query("#col");
    row = parseInt(rowTxt.value);
    col = parseInt(colTxt.value);
    calculate();
    
    query("#result").addHTML("");
  }, false);
  
}

void calculate(){
  initializeMap();
  
  processing();
  
  showMapState();
}

void initializeMap(){
  maps = new List<List<bool>>(row);
  for(int y=0; y<maps.length; y++){
    maps[y] = new List<bool>(col);
    for(int x=0; x<maps[y].length; x++){
      maps[y][x] = false;
    }
  }
  pos = new Point(0,0);
}

void showMapState(){
  String state = "";
  for(int y=0; y<maps.length; y++){
    for(int x=0; x<maps[y].length; x++){
      state = "$state${maps[y][x] ? "1,":"0,"}";
    }
    print(state);
    state = "";
  }
  print(state);
}

void processing(){
  
  if(maps[row-1][col-1]){
    print("clear");
    return;
  }else{
    
    processing();
  }
}

int count = 0;

bool valid(Point pos){
  // 自分の上下左右を探索
  // 右を探索
  if(pos.x + 1 < maps[0].length){
    if(maps[pos.y][pos.x+1]){
      // 探索済
    }else{
      maps[pos.y][pos.x+1] = true;
      pos.x += 1;
    }
  }
  
  if(pos.y == maps.length-1 && pos.x == maps[maps.length-1].length-1){
    return true;
  }
  return false;
}


>>>>>>> てとりす
