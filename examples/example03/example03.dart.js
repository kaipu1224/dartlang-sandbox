function Isolate() {}
init();

var $$ = {};
var $ = Isolate.$isolateProperties;
$$.ExceptionImplementation = {"":
 ["_msg"],
 "super": "Object",
 toString$0: function() {
  var t1 = this._msg;
  return t1 == null ? 'Exception' : 'Exception: ' + $.S(t1);
}
};

$$.JSSyntaxRegExp = {"":
 ["_ignoreCase", "_multiLine", "_lib0_pattern"],
 "super": "Object",
 hasMatch$1: function(str) {
  return $.regExpTest(this, $.checkString(str));
},
 get$pattern: function() {
  return this._lib0_pattern;
},
 get$multiLine: function() {
  return this._multiLine;
},
 get$ignoreCase: function() {
  return this._ignoreCase;
},
 is$JSSyntaxRegExp: true,
 is$RegExp: true
};

$$.StringBufferImpl = {"":
 ["_buffer", "_length"],
 "super": "Object",
 get$length: function() {
  return this._length;
},
 isEmpty$0: function() {
  return this._length === 0;
},
 add$1: function(obj) {
  var str = $.toString(obj);
  if (str == null || $.isEmpty(str) === true)
    return this;
  $.add$1(this._buffer, str);
  var t1 = this._length;
  if (typeof t1 !== 'number')
    return this.add$1$bailout(1, str, t1);
  var t3 = $.get$length(str);
  if (typeof t3 !== 'number')
    return this.add$1$bailout(2, t1, t3);
  this._length = t1 + t3;
  return this;
},
 add$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      str = env0;
      t1 = env1;
      break;
    case 2:
      t1 = env0;
      t3 = env1;
      break;
  }
  switch (state) {
    case 0:
      var str = $.toString(obj);
      if (str == null || $.isEmpty(str) === true)
        return this;
      $.add$1(this._buffer, str);
      var t1 = this._length;
    case 1:
      state = 0;
      var t3 = $.get$length(str);
    case 2:
      state = 0;
      this._length = $.add(t1, t3);
      return this;
  }
},
 clear$0: function() {
  this._buffer = $.ListImplementation_List(null, 'String');
  this._length = 0;
  return this;
},
 toString$0: function() {
  if ($.get$length(this._buffer) === 0)
    return '';
  if ($.get$length(this._buffer) === 1)
    return $.index(this._buffer, 0);
  var result = $.stringJoinUnchecked($.StringImplementation__toJsStringArray(this._buffer), '');
  $.clear(this._buffer);
  $.add$1(this._buffer, result);
  return result;
},
 StringBufferImpl$1: function(content$) {
  this.clear$0();
  this.add$1(content$);
}
};

$$.IndexOutOfRangeException = {"":
 ["_value"],
 "super": "Object",
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.S(this._value);
}
};

$$.NoSuchMethodException = {"":
 ["_receiver", "_functionName", "_arguments", "_existingArgumentNames"],
 "super": "Object",
 toString$0: function() {
  var sb = $.StringBufferImpl$('');
  var t1 = this._arguments;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))
    return this.toString$0$bailout(1, t1, sb);
  var i = 0;
  for (; i < t1.length; ++i) {
    if (i > 0)
      sb.add$1(', ');
    if (i < 0 || i >= t1.length)
      throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  t1 = this._existingArgumentNames;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))
    return this.toString$0$bailout(2, sb, t1);
  var actualParameters = sb.toString$0();
  sb = $.StringBufferImpl$('');
  for (i = 0; i < t1.length; ++i) {
    if (i > 0)
      sb.add$1(', ');
    if (i < 0 || i >= t1.length)
      throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  var formalParameters = sb.toString$0();
  t1 = this._functionName;
  return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
},
 toString$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      sb = env1;
      break;
    case 2:
      sb = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var sb = $.StringBufferImpl$('');
      var t1 = this._arguments;
    case 1:
      state = 0;
      var i = 0;
      for (; $.ltB(i, $.get$length(t1)); ++i) {
        if (i > 0)
          sb.add$1(', ');
        sb.add$1($.index(t1, i));
      }
      t1 = this._existingArgumentNames;
    case 2:
      state = 0;
      if (t1 == null)
        return 'NoSuchMethodException : method not found: \'' + $.S(this._functionName) + '\'\n' + 'Receiver: ' + $.S(this._receiver) + '\n' + 'Arguments: [' + $.S(sb) + ']';
      else {
        var actualParameters = sb.toString$0();
        sb = $.StringBufferImpl$('');
        for (i = 0; $.ltB(i, $.get$length(t1)); ++i) {
          if (i > 0)
            sb.add$1(', ');
          sb.add$1($.index(t1, i));
        }
        var formalParameters = sb.toString$0();
        t1 = this._functionName;
        return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
      }
  }
}
};

$$.ObjectNotClosureException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Object is not closure';
}
};

$$.IllegalArgumentException = {"":
 ["_arg"],
 "super": "Object",
 toString$0: function() {
  return 'Illegal argument(s): ' + $.S(this._arg);
}
};

$$.StackOverflowException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Stack Overflow';
}
};

$$.NullPointerException = {"":
 ["functionName", "arguments"],
 "super": "Object",
 toString$0: function() {
  var t1 = this.functionName;
  if (t1 == null)
    return this.get$exceptionName();
  else
    return $.S(this.get$exceptionName()) + ' : method: \'' + $.S(t1) + '\'\n' + 'Receiver: null\n' + 'Arguments: ' + $.S(this.arguments);
},
 get$exceptionName: function() {
  return 'NullPointerException';
}
};

$$.NoMoreElementsException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'NoMoreElementsException';
}
};

$$.UnsupportedOperationException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.S(this._message);
}
};

$$.NotImplementedException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function() {
  var t1 = this._message;
  return !(t1 == null) ? 'NotImplementedException: ' + $.S(t1) : 'NotImplementedException';
}
};

$$.IllegalJSRegExpException = {"":
 ["_pattern", "_errmsg"],
 "super": "Object",
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.S(this._pattern) + '\' \'' + $.S(this._errmsg) + '\'';
}
};

$$.Object = {"":
 [],
 "super": "",
 operator$eq$1: function(other) {
  return this === other;
},
 toString$0: function() {
  return $.Primitives_objectToString(this);
}
};

$$._Random = {"":
 [],
 "super": "Object",
 nextInt$1: function(max) {
  if (max < 0)
    throw $.$$throw($.IllegalArgumentException$('negative max: ' + $.S(max)));
  if (max > 4294967295)
    max = 4294967295;
  return (Math.random() * max) >>> 0;
},
 nextDouble$0: function() {
  return Math.random();
}
};

$$.ListIterator = {"":
 ["i", "list"],
 "super": "Object",
 hasNext$0: function() {
  var t1 = this.i;
  if (typeof t1 !== 'number')
    return this.hasNext$0$bailout(1, t1);
  return t1 < this.list.length;
},
 hasNext$0$bailout: function(state, t1) {
  return $.lt(t1, this.list.length);
},
 next$0: function() {
  if (this.hasNext$0() !== true)
    throw $.$$throw($.NoMoreElementsException$());
  var value = this.list[this.i];
  var t1 = this.i;
  if (typeof t1 !== 'number')
    return this.next$0$bailout(1, t1, value);
  this.i = t1 + 1;
  return value;
},
 next$0$bailout: function(state, t1, value) {
  this.i = $.add(t1, 1);
  return value;
}
};

$$.Closure = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Closure';
},
 is$Function: true
};

$$.MetaInfo = {"":
 ["_tag?", "_tags", "_set?"],
 "super": "Object"
};

$$.Example = {"":
 ["_canvas", "bullets", "rand"],
 "super": "Object",
 initialize$0: function() {
  this.bullets = [];
},
 start$0: function() {
  this.redraw$0();
},
 redraw$0: function() {
  $.window().requestAnimationFrame$1(this.get$draw());
},
 fire$2: function(x, y) {
  for (var t1 = this.rand, r = null, g = null, b = null, i = 0; i < 200; ++i) {
    r = $.add(t1.nextInt$1(155), 99);
    g = $.add(t1.nextInt$1(155), 99);
    b = $.add(t1.nextInt$1(155), 99);
    $.add$1(this.bullets, $.Bullet$(x, y, $.sub(t1.nextDouble$0(), 3), $.sub(t1.nextDouble$0(), 2), $.sub(t1.nextDouble$0(), 2), 'rgb(' + $.S(r) + ',' + $.S(g) + ',' + $.S(b) + ')'));
  }
},
 draw$1: function(time) {
  var context = this._canvas.getContext$1('2d');
  this.fillBackground$1(context);
  $.forEach(this.bullets, new $.Example_draw_anon());
  $.forEach(this.bullets, new $.Example_draw_anon0(context));
  this.redraw$0();
  var i = $.sub($.get$length(this.bullets), 1);
  if (typeof i !== 'number')
    return this.draw$1$bailout(1, i);
  for (; i >= 0; --i)
    if ($.index(this.bullets, i).get$alive() !== true)
      $.removeRange(this.bullets, i, 1);
  var t1 = 'Bullet count : ' + $.S($.get$length(this.bullets));
  $.query('#bulletCount').set$text(t1);
},
 draw$1$bailout: function(state, i) {
  for (; $.geB(i, 0); i = $.sub(i, 1))
    if ($.index(this.bullets, i).get$alive() !== true)
      $.removeRange(this.bullets, i, 1);
  var t1 = 'Bullet count : ' + $.S($.get$length(this.bullets));
  $.query('#bulletCount').set$text(t1);
},
 get$draw: function() { return new $.BoundClosure(this, 'draw$1'); },
 fillBackground$1: function(context) {
  context.set$fillStyle('black');
  var t1 = this._canvas;
  context.fillRect$4(0, 0, t1.get$width(), t1.get$height());
}
};

$$.Bullet = {"":
 ["_x", "_y", "_v", "_alive", "_radX", "_radY", "_color", "_time"],
 "super": "Object",
 get$alive: function() {
  return this._alive;
},
 update$0: function() {
  var t1 = this._x;
  var t2 = this._v;
  this._x = $.add(t1, $.mul(t2, $.cos(this._radX)));
  this._y = $.add(this._y, $.mul(t2, $.cos(this._radY)));
  if ($.gtB(this._y, 500) || $.ltB(this._x, 0) || $.gtB(this._x, 500))
    this._alive = false;
  this._time = this._time + 1;
  if (this._alive === true && this._time > 200)
    this._alive = false;
},
 draw$1: function(context) {
  context.set$fillStyle(this._color);
  context.beginPath$0();
  context.arc$6(this._x, this._y, 0.5, 0, 6.283185307179586, true);
  context.closePath$0();
  context.fill$0();
}
};

$$._AbstractWorkerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._AudioContextEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._BatteryManagerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._BodyElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._DOMApplicationCacheEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._DedicatedWorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_WorkerContextEventsImpl"
};

$$._DocumentEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
}
};

$$._ElementEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
}
};

$$._EventSourceEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._EventsImpl = {"":
 ["_ptr"],
 "super": "Object",
 operator$index$1: function(type) {
  return $._EventListenerListImpl$(this._ptr, type);
}
};

$$._EventListenerListImpl = {"":
 ["_ptr", "_type"],
 "super": "Object",
 add$2: function(listener, useCapture) {
  this._add$2(listener, useCapture);
  return this;
},
 add$1: function(listener) {
  return this.add$2(listener,false)
},
 _add$2: function(listener, useCapture) {
  this._ptr.$dom_addEventListener$3(this._type, listener, useCapture);
}
};

$$._FileReaderEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._FileWriterEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._FrameSetElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._HttpRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._HttpRequestUploadEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._IDBDatabaseEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._IDBOpenDBRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_IDBRequestEventsImpl"
};

$$._IDBRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._IDBTransactionEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._IDBVersionChangeRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_IDBRequestEventsImpl"
};

$$._InputElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._JavaScriptAudioNodeEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl"
};

$$._MediaStreamEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaStreamTrackEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MediaStreamTrackListEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._MessagePortEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._NotificationEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
}
};

$$._PeerConnection00EventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._RTCPeerConnectionEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._SVGElementInstanceEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
}
};

$$._SharedWorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_WorkerContextEventsImpl"
};

$$._SpeechRecognitionEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._TextTrackEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._TextTrackCueEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._TextTrackListEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._WebSocketEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._WindowEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
}
};

$$._WorkerEventsImpl = {"":
 ["_ptr"],
 "super": "_AbstractWorkerEventsImpl"
};

$$._WorkerContextEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._FixedSizeListIterator = {"":
 ["_lib_length", "_array", "_pos"],
 "super": "_VariableSizeListIterator",
 hasNext$0: function() {
  var t1 = this._lib_length;
  if (typeof t1 !== 'number')
    return this.hasNext$0$bailout(1, t1, 0);
  var t3 = this._pos;
  if (typeof t3 !== 'number')
    return this.hasNext$0$bailout(2, t1, t3);
  return t1 > t3;
},
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t3 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lib_length;
    case 1:
      state = 0;
      var t3 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t3);
  }
}
};

$$._VariableSizeListIterator = {"":
 [],
 "super": "Object",
 hasNext$0: function() {
  var t1 = $.get$length(this._array);
  if (typeof t1 !== 'number')
    return this.hasNext$0$bailout(1, t1, 0);
  var t3 = this._pos;
  if (typeof t3 !== 'number')
    return this.hasNext$0$bailout(2, t3, t1);
  return t1 > t3;
},
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t3 = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = $.get$length(this._array);
    case 1:
      state = 0;
      var t3 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t3);
  }
},
 next$0: function() {
  if (this.hasNext$0() !== true)
    throw $.$$throw($.CTC3);
  var t1 = this._array;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))
    return this.next$0$bailout(1, t1, 0);
  var t3 = this._pos;
  if (typeof t3 !== 'number')
    return this.next$0$bailout(2, t1, t3);
  this._pos = t3 + 1;
  if (t3 !== (t3 | 0))
    throw $.iae(t3);
  if (t3 < 0 || t3 >= t1.length)
    throw $.ioore(t3);
  return t1[t3];
},
 next$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t3 = env1;
      break;
  }
  switch (state) {
    case 0:
      if (this.hasNext$0() !== true)
        throw $.$$throw($.CTC3);
      var t1 = this._array;
    case 1:
      state = 0;
      var t3 = this._pos;
    case 2:
      state = 0;
      this._pos = $.add(t3, 1);
      return $.index(t1, t3);
  }
}
};

$$.main_anon = {"":
 ["example_0"],
 "super": "Closure",
 call$1: function(event$) {
  this.example_0.fire$2(250, 250);
}
};

$$.main_anon0 = {"":
 ["example_1"],
 "super": "Closure",
 call$1: function(event$) {
  this.example_1.fire$2(event$.get$layerX(), event$.get$layerY());
}
};

$$.Maps__emitMap_anon = {"":
 ["result_3", "box_0", "visiting_2"],
 "super": "Closure",
 call$2: function(k, v) {
  var t1 = this.box_0;
  if (t1.first_1 !== true)
    $.add$1(this.result_3, ', ');
  t1.first_1 = false;
  t1 = this.result_3;
  var t2 = this.visiting_2;
  $.Collections__emitObject(k, t1, t2);
  $.add$1(t1, ': ');
  $.Collections__emitObject(v, t1, t2);
}
};

$$._convertDartToNative_PrepareForStructuredClone_findSlot = {"":
 ["copies_3", "values_2"],
 "super": "Closure",
 call$1: function(value) {
  var t1 = this.values_2;
  var length$ = t1.length;
  for (var i = 0; i < length$; ++i) {
    if (i < 0 || i >= t1.length)
      throw $.ioore(i);
    var t2 = t1[i];
    if (t2 == null ? value == null : t2 === value)
      return i;
  }
  t1.push(value);
  this.copies_3.push(null);
  return length$;
}
};

$$._convertDartToNative_PrepareForStructuredClone_readSlot = {"":
 ["copies_4"],
 "super": "Closure",
 call$1: function(i) {
  var t1 = this.copies_4;
  if (i !== (i | 0))
    throw $.iae(i);
  if (i < 0 || i >= t1.length)
    throw $.ioore(i);
  return t1[i];
}
};

$$._convertDartToNative_PrepareForStructuredClone_writeSlot = {"":
 ["copies_5"],
 "super": "Closure",
 call$2: function(i, x) {
  var t1 = this.copies_5;
  if (i !== (i | 0))
    throw $.iae(i);
  if (i < 0 || i >= t1.length)
    throw $.ioore(i);
  t1[i] = x;
}
};

$$._convertDartToNative_PrepareForStructuredClone_cleanupSlots = {"":
 [],
 "super": "Closure",
 call$0: function() {
}
};

$$._convertDartToNative_PrepareForStructuredClone_walk = {"":
 ["writeSlot_8", "findSlot_7", "readSlot_6"],
 "super": "Closure",
 call$1: function(e) {
  var t1 = {};
  if (e == null)
    return e;
  if (typeof e === 'boolean')
    return e;
  if (typeof e === 'number')
    return e;
  if (typeof e === 'string')
    return e;
  if (typeof e === 'object' && e !== null && !!e.is$Date)
    throw $.$$throw($.CTC5);
  if (typeof e === 'object' && e !== null && !!e.is$RegExp)
    throw $.$$throw($.CTC6);
  if (typeof e === 'object' && e !== null && e.is$_FileImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$File())
    throw $.$$throw($.CTC7);
  if (typeof e === 'object' && e !== null && e.is$_BlobImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$Blob())
    throw $.$$throw($.CTC8);
  if (typeof e === 'object' && e !== null && e.is$_FileListImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$FileList())
    throw $.$$throw($.CTC9);
  if (typeof e === 'object' && e !== null && e.is$_ImageDataImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ImageData())
    throw $.$$throw($.CTC9);
  if (typeof e === 'object' && e !== null && e.is$_ArrayBufferImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ArrayBuffer())
    throw $.$$throw($.CTC10);
  if (typeof e === 'object' && e !== null && e.is$_ArrayBufferViewImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ArrayBufferView())
    throw $.$$throw($.CTC11);
  if (typeof e === 'object' && e !== null && e.is$Map()) {
    var slot = this.findSlot_7.call$1(e);
    t1.copy_1 = this.readSlot_6.call$1(slot);
    var t2 = t1.copy_1;
    if (!(t2 == null))
      return t2;
    t1.copy_1 = {};
    this.writeSlot_8.call$2(slot, t1.copy_1);
    e.forEach$1(new $._convertDartToNative_PrepareForStructuredClone_walk_anon(this, t1));
    return t1.copy_1;
  }
  if (typeof e === 'object' && e !== null && (e.constructor === Array || e.is$List())) {
    if (typeof e !== 'object' || e === null || (e.constructor !== Array || !!e.immutable$list) && !e.is$JavaScriptIndexingBehavior())
      return this.call$1$bailout(1, e, 0, 0, 0, 0, 0, 0);
    var length$ = e.length;
    slot = this.findSlot_7.call$1(e);
    t2 = this.readSlot_6;
    var copy = t2.call$1(slot);
    if (!(copy == null)) {
      if (true === copy) {
        copy = new Array(length$);
        this.writeSlot_8.call$2(slot, copy);
      }
      return copy;
    }
    t1 = e instanceof Array && !!!(e.immutable$list);
    var t3 = this.writeSlot_8;
    if (t1) {
      t3.call$2(slot, true);
      for (var i = 0; i < length$; ++i) {
        if (i < 0 || i >= e.length)
          throw $.ioore(i);
        var element = e[i];
        var elementCopy = this.call$1(element);
        if (!(elementCopy == null ? element == null : elementCopy === element)) {
          copy = t2.call$1(slot);
          if (true === copy) {
            copy = new Array(length$);
            t3.call$2(slot, copy);
          }
          if (typeof copy !== 'object' || copy === null || (copy.constructor !== Array || !!copy.immutable$list) && !copy.is$JavaScriptIndexingBehavior())
            return this.call$1$bailout(2, copy, i, t3, e, length$, elementCopy, slot);
          for (var j = 0; j < i; ++j) {
            if (j < 0 || j >= e.length)
              throw $.ioore(j);
            t1 = e[j];
            if (j < 0 || j >= copy.length)
              throw $.ioore(j);
            copy[j] = t1;
          }
          if (i < 0 || i >= copy.length)
            throw $.ioore(i);
          copy[i] = elementCopy;
          ++i;
          break;
        }
      }
      if (copy == null) {
        t3.call$2(slot, e);
        copy = e;
      }
    } else {
      copy = new Array(length$);
      t3.call$2(slot, copy);
      i = 0;
    }
    if (typeof copy !== 'object' || copy === null || (copy.constructor !== Array || !!copy.immutable$list) && !copy.is$JavaScriptIndexingBehavior())
      return this.call$1$bailout(3, e, copy, length$, i, 0, 0, 0);
    for (; i < length$; ++i) {
      if (i < 0 || i >= e.length)
        throw $.ioore(i);
      t1 = this.call$1(e[i]);
      if (i < 0 || i >= copy.length)
        throw $.ioore(i);
      copy[i] = t1;
    }
    return copy;
  }
  throw $.$$throw($.CTC12);
},
 call$1$bailout: function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var e = env0;
      break;
    case 2:
      copy = env0;
      i = env1;
      t3 = env2;
      e = env3;
      length$ = env4;
      elementCopy = env5;
      slot = env6;
      break;
    case 3:
      e = env0;
      copy = env1;
      length$ = env2;
      i = env3;
      break;
  }
  switch (state) {
    case 0:
      var t1 = {};
      if (e == null)
        return e;
      if (typeof e === 'boolean')
        return e;
      if (typeof e === 'number')
        return e;
      if (typeof e === 'string')
        return e;
      if (typeof e === 'object' && e !== null && !!e.is$Date)
        throw $.$$throw($.CTC5);
      if (typeof e === 'object' && e !== null && !!e.is$RegExp)
        throw $.$$throw($.CTC6);
      if (typeof e === 'object' && e !== null && e.is$_FileImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$File())
        throw $.$$throw($.CTC7);
      if (typeof e === 'object' && e !== null && e.is$_BlobImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$Blob())
        throw $.$$throw($.CTC8);
      if (typeof e === 'object' && e !== null && e.is$_FileListImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$FileList())
        throw $.$$throw($.CTC9);
      if (typeof e === 'object' && e !== null && e.is$_ImageDataImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ImageData())
        throw $.$$throw($.CTC9);
      if (typeof e === 'object' && e !== null && e.is$_ArrayBufferImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ArrayBuffer())
        throw $.$$throw($.CTC10);
      if (typeof e === 'object' && e !== null && e.is$_ArrayBufferViewImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ArrayBufferView())
        throw $.$$throw($.CTC11);
      if (typeof e === 'object' && e !== null && e.is$Map()) {
        var slot = this.findSlot_7.call$1(e);
        t1.copy_1 = this.readSlot_6.call$1(slot);
        var t2 = t1.copy_1;
        if (!(t2 == null))
          return t2;
        t1.copy_1 = {};
        this.writeSlot_8.call$2(slot, t1.copy_1);
        e.forEach$1(new $._convertDartToNative_PrepareForStructuredClone_walk_anon(this, t1));
        return t1.copy_1;
      }
    default:
      if (state === 3 || state === 2 || state === 1 || state === 0 && typeof e === 'object' && e !== null && (e.constructor === Array || e.is$List()))
        switch (state) {
          case 0:
          case 1:
            state = 0;
            var length$ = $.get$length(e);
            slot = this.findSlot_7.call$1(e);
            t2 = this.readSlot_6;
            var copy = t2.call$1(slot);
            if (!(copy == null)) {
              if (true === copy) {
                copy = new Array(length$);
                this.writeSlot_8.call$2(slot, copy);
              }
              return copy;
            }
            t1 = e instanceof Array && !!!(e.immutable$list);
            var t3 = this.writeSlot_8;
          case 2:
            if (state === 2 || state === 0 && t1)
              switch (state) {
                case 0:
                  t3.call$2(slot, true);
                  var i = 0;
                case 2:
                  L0:
                    while (true)
                      switch (state) {
                        case 0:
                          if (!$.ltB(i, length$))
                            break L0;
                          var element = $.index(e, i);
                          var elementCopy = this.call$1(element);
                        case 2:
                          if (state === 2 || state === 0 && !(elementCopy == null ? element == null : elementCopy === element))
                            switch (state) {
                              case 0:
                                copy = t2.call$1(slot);
                                if (true === copy) {
                                  copy = new Array(length$);
                                  t3.call$2(slot, copy);
                                }
                              case 2:
                                state = 0;
                                for (var j = 0; j < i; ++j)
                                  $.indexSet(copy, j, $.index(e, j));
                                $.indexSet(copy, i, elementCopy);
                                ++i;
                                break L0;
                            }
                          ++i;
                      }
                  if (copy == null) {
                    t3.call$2(slot, e);
                    copy = e;
                  }
              }
            else {
              copy = new Array(length$);
              t3.call$2(slot, copy);
              i = 0;
            }
          case 3:
            state = 0;
            for (; $.ltB(i, length$); ++i)
              $.indexSet(copy, i, this.call$1($.index(e, i)));
            return copy;
        }
      throw $.$$throw($.CTC12);
  }
}
};

$$._convertDartToNative_PrepareForStructuredClone_walk_anon = {"":
 ["walk_9", "box_0"],
 "super": "Closure",
 call$2: function(key, value) {
  this.box_0.copy_1[key] = this.walk_9.call$1(value);
}
};

$$.invokeClosure_anon = {"":
 ["closure_0"],
 "super": "Closure",
 call$0: function() {
  return this.closure_0.call$0();
}
};

$$.invokeClosure_anon0 = {"":
 ["closure_2", "arg1_1"],
 "super": "Closure",
 call$0: function() {
  return this.closure_2.call$1(this.arg1_1);
}
};

$$.invokeClosure_anon1 = {"":
 ["closure_5", "arg1_4", "arg2_3"],
 "super": "Closure",
 call$0: function() {
  return this.closure_5.call$2(this.arg1_4, this.arg2_3);
}
};

$$.Example_draw_anon = {"":
 [],
 "super": "Closure",
 call$1: function(b) {
  return b.update$0();
}
};

$$.Example_draw_anon0 = {"":
 ["context_0"],
 "super": "Closure",
 call$1: function(b) {
  return b.draw$1(this.context_0);
}
};

$$.Closure = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Closure';
},
 is$Function: true
};

$$.BoundClosure = {'':
 ['self', 'target'],
 'super': 'Closure',
call$1: function(p0) { return this.self[this.target](p0); }
};
$$.BoundClosure0 = {'':
 ['self', 'target'],
 'super': 'Closure',
call$0: function() { return this.self[this.target](); }
};
$._EventListenerListImpl$ = function(_ptr, _type) {
  return new $._EventListenerListImpl(_ptr, _type);
};

$.gt$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a > b;
  return a.operator$gt$1(b);
};

$.iae = function(argument) {
  throw $.$$throw($.IllegalArgumentException$(argument));
};

$.startsWith = function(receiver, other) {
  $.checkString(other);
  var length$ = other.length;
  if (length$ > receiver.length)
    return false;
  return other == receiver.substring(0, length$);
};

$._InputElementEventsImpl$ = function(_ptr) {
  return new $._InputElementEventsImpl(_ptr);
};

$._DOMApplicationCacheEventsImpl$ = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
};

$.eqB = function(a, b) {
  if (a == null)
    return b == null;
  if (b == null)
    return false;
  if (typeof a === "object")
    if (!!a.operator$eq$1)
      return a.operator$eq$1(b) === true;
  return a === b;
};

$.typeNameInChrome = function(obj) {
  var name$ = obj.constructor.name;
  if (name$ === 'Window')
    return 'DOMWindow';
  if (name$ === 'CanvasPixelArray')
    return 'Uint8ClampedArray';
  if (name$ === 'WebKitMutationObserver')
    return 'MutationObserver';
  if (name$ === 'FormData')
    return 'DOMFormData';
  return name$;
};

$.Collections__emitCollection = function(c, result, visiting) {
  $.add$1(visiting, c);
  var isList = typeof c === 'object' && c !== null && (c.constructor === Array || c.is$List());
  $.add$1(result, isList ? '[' : '{');
  for (var t1 = $.iterator(c), first = true; t1.hasNext$0() === true;) {
    var t2 = t1.next$0();
    if (!first)
      $.add$1(result, ', ');
    $.Collections__emitObject(t2, result, visiting);
    first = false;
  }
  $.add$1(result, isList ? ']' : '}');
  $.removeLast(visiting);
};

$.set$length = function(receiver, newLength) {
  if ($.isJsArray(receiver)) {
    $.checkNull(newLength);
    if (!(typeof newLength === 'number' && Math.floor(newLength) === newLength))
      throw $.$$throw($.IllegalArgumentException$(newLength));
    if (newLength < 0)
      throw $.$$throw($.IndexOutOfRangeException$(newLength));
    $.checkGrowable(receiver, 'set length');
    receiver.length = newLength;
  } else
    receiver.set$length(newLength);
  return newLength;
};

$.Example$ = function(_canvas) {
  return new $.Example(_canvas, null, $.Random_Random(null));
};

$._document = function() {
return document;
};

$.checkNum = function(value) {
  if (!(typeof value === 'number')) {
    $.checkNull(value);
    throw $.$$throw($.IllegalArgumentException$(value));
  }
  return value;
};

$.convertDartClosureToJS = function(closure, arity) {
  if (closure == null)
    return;
  var function$ = closure.$identity;
  if (!!function$)
    return function$;
  function$ = function() {
    return $.invokeClosure.call$5(closure, $, arity, arguments[0], arguments[1]);
  };
  closure.$identity = function$;
  return function$;
};

$._TextTrackListEventsImpl$ = function(_ptr) {
  return new $._TextTrackListEventsImpl(_ptr);
};

$.ObjectNotClosureException$ = function() {
  return new $.ObjectNotClosureException();
};

$._MediaStreamTrackEventsImpl$ = function(_ptr) {
  return new $._MediaStreamTrackEventsImpl(_ptr);
};

$.isJsArray = function(value) {
  return !(value == null) && value.constructor === Array;
};

$.clear = function(receiver) {
  if (!$.isJsArray(receiver))
    return receiver.clear$0();
  $.set$length(receiver, 0);
};

$.Primitives_objectTypeName = function(object) {
  var name$ = $.constructorNameFallback(object);
  if ($.eqB(name$, 'Object')) {
    var decompiled = String(object.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1];
    if (typeof decompiled === 'string')
      name$ = decompiled;
  }
  return $.charCodeAt(name$, 0) === 36 ? $.substring$1(name$, 1) : name$;
};

$._FrameSetElementEventsImpl$ = function(_ptr) {
  return new $._FrameSetElementEventsImpl(_ptr);
};

$.StringImplementation__toJsStringArray = function(strings) {
  if (typeof strings !== 'object' || strings === null || (strings.constructor !== Array || !!strings.immutable$list) && !strings.is$JavaScriptIndexingBehavior())
    return $.StringImplementation__toJsStringArray$bailout(1, strings);
  $.checkNull(strings);
  var length$ = strings.length;
  if ($.isJsArray(strings)) {
    for (var i = 0; i < length$; ++i) {
      if (i < 0 || i >= strings.length)
        throw $.ioore(i);
      var string = strings[i];
      $.checkNull(string);
      if (!(typeof string === 'string'))
        throw $.$$throw($.IllegalArgumentException$(string));
    }
    var array = strings;
  } else {
    array = $.ListImplementation_List(length$);
    for (i = 0; i < length$; ++i) {
      if (i < 0 || i >= strings.length)
        throw $.ioore(i);
      string = strings[i];
      $.checkNull(string);
      if (!(typeof string === 'string'))
        throw $.$$throw($.IllegalArgumentException$(string));
      if (i < 0 || i >= array.length)
        throw $.ioore(i);
      array[i] = string;
    }
  }
  return array;
};

$.IllegalJSRegExpException$ = function(_pattern, _errmsg) {
  return new $.IllegalJSRegExpException(_pattern, _errmsg);
};

$.forEach = function(receiver, f) {
  if (!$.isJsArray(receiver))
    return receiver.forEach$1(f);
  else
    return $.Collections_forEach(receiver, f);
};

$.ListIterator$ = function(list, T) {
  var t1 = new $.ListIterator(0, list);
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
};

$._JavaScriptAudioNodeEventsImpl$ = function(_ptr) {
  return new $._JavaScriptAudioNodeEventsImpl(_ptr);
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver))
    return receiver.length === 0;
  return receiver.isEmpty$0();
};

$.StackOverflowException$ = function() {
  return new $.StackOverflowException();
};

$.Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true;)
    f.call$1(t1.next$0());
};

$._IDBDatabaseEventsImpl$ = function(_ptr) {
  return new $._IDBDatabaseEventsImpl(_ptr);
};

$.toStringForNativeObject = function(obj) {
  return 'Instance of ' + $.getTypeNameOf(obj);
};

$.query = function(selector) {
  return $._document().query$1(selector);
};

$._IDBTransactionEventsImpl$ = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$.dynamicFunction = function(name$) {
  var f = Object.prototype[name$];
  if (!(f == null) && !!f.methods)
    return f.methods;
  var methods = {};
  var dartMethod = Object.getPrototypeOf($.CTC15)[name$];
  if (!(dartMethod == null))
    $.propertySet(methods, 'Object', dartMethod);
  var bind = function() {return $.dynamicBind.call$4(this, name$, methods, Array.prototype.slice.call(arguments));};
  bind.methods = methods;
  $.defineProperty(Object.prototype, name$, bind);
  return methods;
};

$.buildDynamicMetadata = function(inputTable) {
  var result = [];
  for (var i = 0; i < inputTable.length; ++i) {
    var tag = inputTable[i][0];
    var array = inputTable[i];
    var tags = array[1];
    var set = {};
    var tagNames = tags.split('|');
    for (var j = 0, index = 1; j < tagNames.length; ++j) {
      $.propertySet(set, tagNames[j], true);
      index = j;
      array = tagNames;
    }
    result.push($.MetaInfo$(tag, tags, set));
  }
  return result;
};

$.constructorNameFallback = function(obj) {
  var constructor$ = obj.constructor;
  if (typeof(constructor$) === 'function') {
    var name$ = constructor$.name;
    if (typeof name$ === 'string')
      var t1 = !(name$ === '') && !(name$ === 'Object') && !(name$ === 'Function.prototype');
    else
      t1 = false;
    if (t1)
      return name$;
  }
  var string = Object.prototype.toString.call(obj);
  return string.substring(8, string.length - 1);
};

$._EventSourceEventsImpl$ = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
};

$._Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true;)
    f.call$1(t1.next$0());
};

$.ltB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a < b : $.lt$slow(a, b) === true;
};

$.unwrapException = function(ex) {
  if ("dartException" in ex)
    return ex.dartException;
  var message = ex.message;
  if (ex instanceof TypeError) {
    var type = ex.type;
    var name$ = ex.arguments ? ex.arguments[0] : "";
    if ($.eqB(type, 'property_not_function') || $.eqB(type, 'called_non_callable') || $.eqB(type, 'non_object_property_call') || $.eqB(type, 'non_object_property_load'))
      if (typeof name$ === 'string' && $.startsWith(name$, 'call$') === true)
        return $.ObjectNotClosureException$();
      else
        return $.NullPointerException$(null, $.CTC2);
    else if ($.eqB(type, 'undefined_method'))
      if (typeof name$ === 'string' && $.startsWith(name$, 'call$') === true)
        return $.ObjectNotClosureException$();
      else
        return $.NoSuchMethodException$('', name$, [], null);
    var ieErrorCode = ex.number & 0xffff;
    var ieFacilityNumber = ex.number>>16 & 0x1FFF;
    if (typeof message === 'string')
      if ($.endsWith(message, 'is null') === true || $.endsWith(message, 'is undefined') === true || $.endsWith(message, 'is null or undefined') === true)
        return $.NullPointerException$(null, $.CTC2);
      else {
        if ($.contains$1(message, ' is not a function') !== true)
          var t1 = ieErrorCode === 438 && ieFacilityNumber === 10;
        else
          t1 = true;
        if (t1)
          return $.NoSuchMethodException$('', '<unknown>', [], null);
      }
    return $.ExceptionImplementation$(typeof message === 'string' ? message : '');
  }
  if (ex instanceof RangeError) {
    if (typeof message === 'string' && $.contains$1(message, 'call stack') === true)
      return $.StackOverflowException$();
    return $.IllegalArgumentException$('');
  }
  if (typeof InternalError == 'function' && ex instanceof InternalError)
    if (typeof message === 'string' && message === 'too much recursion')
      return $.StackOverflowException$();
  return ex;
};

$.checkNumbers = function(a, b) {
  if (typeof a === 'number')
    if (typeof b === 'number')
      return true;
    else {
      $.checkNull(b);
      throw $.$$throw($.IllegalArgumentException$(b));
    }
  return false;
};

$._MediaStreamTrackListEventsImpl$ = function(_ptr) {
  return new $._MediaStreamTrackListEventsImpl(_ptr);
};

$.NoSuchMethodException$ = function(_receiver, _functionName, _arguments, existingArgumentNames) {
  return new $.NoSuchMethodException(_receiver, _functionName, _arguments, existingArgumentNames);
};

$.stringJoinUnchecked = function(array, separator) {
  return array.join(separator);
};

$.ge$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a >= b;
  return a.operator$ge$1(b);
};

$._convertDartToNative_PrepareForStructuredClone = function(value) {
  var values = [];
  var copies = [];
  var t1 = new $._convertDartToNative_PrepareForStructuredClone_findSlot(copies, values);
  var t2 = new $._convertDartToNative_PrepareForStructuredClone_readSlot(copies);
  var t3 = new $._convertDartToNative_PrepareForStructuredClone_writeSlot(copies);
  var t4 = new $._convertDartToNative_PrepareForStructuredClone_cleanupSlots();
  var copy = new $._convertDartToNative_PrepareForStructuredClone_walk(t3, t1, t2).call$1(value);
  t4.call$0();
  return copy;
};

$.floor = function(receiver) {
  return Math.floor(receiver);
};

$.S = function(value) {
  var res = $.toString(value);
  if (!(typeof res === 'string'))
    throw $.$$throw($.IllegalArgumentException$(value));
  return res;
};

$.getFunctionForTypeNameOf = function() {
  if (!(typeof(navigator) === 'object'))
    return $.typeNameInChrome;
  var userAgent = navigator.userAgent;
  if ($.contains(userAgent, 'Chrome') || $.contains(userAgent, 'DumpRenderTree'))
    return $.typeNameInChrome;
  else if ($.contains(userAgent, 'Firefox'))
    return $.typeNameInFirefox;
  else if ($.contains(userAgent, 'MSIE'))
    return $.typeNameInIE;
  else if ($.contains(userAgent, 'Opera'))
    return $.typeNameInOpera;
  else if ($.contains(userAgent, 'Safari'))
    return $.typeNameInSafari;
  else
    return $.constructorNameFallback;
};

$.checkString = function(value) {
  if (!(typeof value === 'string')) {
    $.checkNull(value);
    throw $.$$throw($.IllegalArgumentException$(value));
  }
  return value;
};

$._WebSocketEventsImpl$ = function(_ptr) {
  return new $._WebSocketEventsImpl(_ptr);
};

$.Arrays_indexOf = function(a, element, startIndex, endIndex) {
  var t1 = a.length;
  if (startIndex >= t1)
    return -1;
  if (startIndex < 0)
    startIndex = 0;
  for (var i = startIndex; i < endIndex; ++i) {
    if (i < 0 || i >= t1)
      throw $.ioore(i);
    if ($.eqB(a[i], element))
      return i;
  }
  return -1;
};

$._convertDartToNative_SerializedScriptValue = function(value) {
  return $._convertDartToNative_PrepareForStructuredClone(value);
};

$.indexSet$slow = function(a, index, value) {
  if ($.isJsArray(a)) {
    if (!(typeof index === 'number' && Math.floor(index) === index))
      throw $.$$throw($.IllegalArgumentException$(index));
    if (index < 0 || $.geB(index, $.get$length(a)))
      throw $.$$throw($.IndexOutOfRangeException$(index));
    $.checkMutable(a, 'indexed set');
    a[index] = value;
    return;
  }
  a.operator$indexSet$2(index, value);
};

$._MediaStreamEventsImpl$ = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$.setRuntimeTypeInfo = function(target, typeInfo) {
  if (!(target == null))
    target.builtin$typeInfo = typeInfo;
};

$.mul$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a * b;
  return a.operator$mul$1(b);
};

$.gt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a > b : $.gt$slow(a, b);
};

$.lt$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a < b;
  return a.operator$lt$1(b);
};

$.charCodeAt = function(receiver, index) {
  if (typeof receiver === 'string') {
    if (index < 0)
      throw $.$$throw($.IndexOutOfRangeException$(index));
    if (index >= receiver.length)
      throw $.$$throw($.IndexOutOfRangeException$(index));
    return receiver.charCodeAt(index);
  } else
    return receiver.charCodeAt$1(index);
};

$.Collections__emitObject = function(o, result, visiting) {
  if (typeof o === 'object' && o !== null && (o.constructor === Array || o.is$Collection()))
    if ($.Collections__containsRef(visiting, o))
      $.add$1(result, typeof o === 'object' && o !== null && (o.constructor === Array || o.is$List()) ? '[...]' : '{...}');
    else
      $.Collections__emitCollection(o, result, visiting);
  else if (typeof o === 'object' && o !== null && o.is$Map())
    if ($.Collections__containsRef(visiting, o))
      $.add$1(result, '{...}');
    else
      $.Maps__emitMap(o, result, visiting);
  else
    $.add$1(result, o == null ? 'null' : o);
};

$.getTypeNameOf = function(obj) {
  if ($._getTypeNameOf == null)
    $._getTypeNameOf = $.getFunctionForTypeNameOf();
  return $._getTypeNameOf.call$1(obj);
};

$._DedicatedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$.removeRange = function(receiver, start, length$) {
  if (!$.isJsArray(receiver))
    return receiver.removeRange$2(start, length$);
  $.checkGrowable(receiver, 'removeRange');
  if (length$ === 0)
    return;
  $.checkNull(start);
  $.checkNull(length$);
  if (!(typeof start === 'number' && Math.floor(start) === start))
    throw $.$$throw($.IllegalArgumentException$(start));
  if (length$ < 0)
    throw $.$$throw($.IllegalArgumentException$(length$));
  var receiverLength = receiver.length;
  if (start < 0 || start >= receiverLength)
    throw $.$$throw($.IndexOutOfRangeException$(start));
  var t1 = start + length$;
  if (t1 > receiverLength)
    throw $.$$throw($.IndexOutOfRangeException$(t1));
  var t2 = receiverLength - length$;
  $.Arrays_copy(receiver, t1, receiver, start, t2 - start);
  $.set$length(receiver, t2);
};

$.ListImplementation_List = function(length$, E) {
  return $.Primitives_newList(length$);
};

$.truncate = function(receiver) {
  return receiver < 0 ? $.ceil(receiver) : $.floor(receiver);
};

$.contains$1 = function(receiver, other) {
  return $.contains$2(receiver, other, 0);
};

$.mul = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a * b : $.mul$slow(a, b);
};

$._EventsImpl$ = function(_ptr) {
  return new $._EventsImpl(_ptr);
};

$._RTCPeerConnectionEventsImpl$ = function(_ptr) {
  return new $._RTCPeerConnectionEventsImpl(_ptr);
};

$.substringUnchecked = function(receiver, startIndex, endIndex) {
  return receiver.substring(startIndex, endIndex);
};

$._BodyElementEventsImpl$ = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$.Bullet$ = function(_x, _y, _v, _radX, _radY, _color) {
  return new $.Bullet(_x, _y, _v, true, _radX, _radY, _color, 0);
};

$.add$1 = function(receiver, value) {
  if ($.isJsArray(receiver)) {
    $.checkGrowable(receiver, 'add');
    receiver.push(value);
    return;
  }
  return receiver.add$1(value);
};

$.contains = function(userAgent, name$) {
  return !(userAgent.indexOf(name$) === -1);
};

$.get$length = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver))
    return receiver.length;
  else
    return receiver.get$length();
};

$._AudioContextEventsImpl$ = function(_ptr) {
  return new $._AudioContextEventsImpl(_ptr);
};

$.dynamicBind = function(obj, name$, methods, arguments$) {
  var tag = $.getTypeNameOf(obj);
  var method = methods[tag];
  if (method == null && !($._dynamicMetadata0() == null))
    for (var i = 0; i < $._dynamicMetadata0().length; ++i) {
      var entry = $._dynamicMetadata0()[i];
      if (entry.get$_set()[tag]) {
        method = methods[entry.get$_tag()];
        if (!(method == null))
          break;
      }
    }
  if (method == null)
    method = methods['Object'];
  var proto = Object.getPrototypeOf(obj);
  if (method == null)
    method = function () {if (Object.getPrototypeOf(this) === proto) {throw new TypeError(name$ + " is not a function");} else {return Object.prototype[name$].apply(this, arguments);}};
  if (!proto.hasOwnProperty(name$))
    $.defineProperty(proto, name$, method);
  return method.apply(obj, arguments$);
};

$._TextTrackCueEventsImpl$ = function(_ptr) {
  return new $._TextTrackCueEventsImpl(_ptr);
};

$.typeNameInSafari = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if (name$ === 'Window')
    return 'DOMWindow';
  if (name$ === 'CanvasPixelArray')
    return 'Uint8ClampedArray';
  if (name$ === 'WebKitMutationObserver')
    return 'MutationObserver';
  if (name$ === 'FormData')
    return 'DOMFormData';
  return name$;
};

$.endsWith = function(receiver, other) {
  $.checkString(other);
  var receiverLength = receiver.length;
  var otherLength = other.length;
  if (otherLength > receiverLength)
    return false;
  return other === $.substring$1(receiver, receiverLength - otherLength);
};

$.regExpMakeNative = function(regExp, global) {
  var pattern = regExp.get$pattern();
  var multiLine = regExp.get$multiLine();
  var ignoreCase = regExp.get$ignoreCase();
  $.checkString(pattern);
  var sb = $.StringBufferImpl$('');
  if (multiLine === true)
    $.add$1(sb, 'm');
  if (ignoreCase === true)
    $.add$1(sb, 'i');
  if (global)
    $.add$1(sb, 'g');
  try {
    return new RegExp(pattern, $.toString(sb));
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var e = t1;
    throw $.$$throw($.IllegalJSRegExpException$(pattern, String(e)));
  }

};

$.contains$2 = function(receiver, other, startIndex) {
  $.checkNull(other);
  return $.stringContainsUnchecked(receiver, other, startIndex);
};

$._WorkerContextEventsImpl$ = function(_ptr) {
  return new $._WorkerContextEventsImpl(_ptr);
};

$._ElementEventsImpl$ = function(_ptr) {
  return new $._ElementEventsImpl(_ptr);
};

$.main = function() {
  var example = $.Example$($.query('#stage'));
  example.initialize$0();
  example.start$0();
  $.query('#fireBtn').get$on().get$click().add$2(new $.main_anon(example), false);
  $.query('#stage').get$on().get$click().add$2(new $.main_anon0(example), false);
};

$.Random_Random = function(seed) {
  return $.CTC14;
};

$.ceil = function(receiver) {
  return Math.ceil(receiver);
};

$._dynamicMetadata = function(table) {
  $dynamicMetadata = table;
};

$._SpeechRecognitionEventsImpl$ = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$._dynamicMetadata0 = function() {
  if (typeof($dynamicMetadata) === 'undefined') {
    var t1 = [];
    $._dynamicMetadata(t1);
  }
  return $dynamicMetadata;
};

$.add$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a + b;
  return a.operator$add$1(b);
};

$.IllegalArgumentException$ = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$.iterator = function(receiver) {
  if ($.isJsArray(receiver))
    return $.ListIterator$(receiver);
  return receiver.iterator$0();
};

$.UnsupportedOperationException$ = function(_message) {
  return new $.UnsupportedOperationException(_message);
};

$._HttpRequestUploadEventsImpl$ = function(_ptr) {
  return new $._HttpRequestUploadEventsImpl(_ptr);
};

$.removeLast = function(receiver) {
  if ($.isJsArray(receiver)) {
    $.checkGrowable(receiver, 'removeLast');
    if ($.get$length(receiver) === 0)
      throw $.$$throw($.IndexOutOfRangeException$(-1));
    return receiver.pop();
  }
  return receiver.removeLast$0();
};

$.invokeClosure = function(closure, isolate, numberOfArguments, arg1, arg2) {
  if ($.eqB(numberOfArguments, 0))
    return new $.invokeClosure_anon(closure).call$0();
  else if ($.eqB(numberOfArguments, 1))
    return new $.invokeClosure_anon0(closure, arg1).call$0();
  else if ($.eqB(numberOfArguments, 2))
    return new $.invokeClosure_anon1(closure, arg1, arg2).call$0();
  else
    throw $.$$throw($.ExceptionImplementation$('Unsupported number of arguments for wrapped closure'));
};

$.checkNull = function(object) {
  if (object == null)
    throw $.$$throw($.NullPointerException$(null, $.CTC2));
  return object;
};

$.Arrays_copy = function(src, srcStart, dst, dstStart, count) {
  if (typeof src !== 'string' && (typeof src !== 'object' || src === null || src.constructor !== Array && !src.is$JavaScriptIndexingBehavior()))
    return $.Arrays_copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (typeof dst !== 'object' || dst === null || (dst.constructor !== Array || !!dst.immutable$list) && !dst.is$JavaScriptIndexingBehavior())
    return $.Arrays_copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (srcStart < dstStart)
    for (var i = srcStart + count - 1, j = dstStart + count - 1; i >= srcStart; --i, --j) {
      if (i !== (i | 0))
        throw $.iae(i);
      if (i < 0 || i >= src.length)
        throw $.ioore(i);
      var t1 = src[i];
      if (j !== (j | 0))
        throw $.iae(j);
      if (j < 0 || j >= dst.length)
        throw $.ioore(j);
      dst[j] = t1;
    }
  else
    for (t1 = srcStart + count, i = srcStart, j = dstStart; i < t1; ++i, ++j) {
      if (i < 0 || i >= src.length)
        throw $.ioore(i);
      var t2 = src[i];
      if (j < 0 || j >= dst.length)
        throw $.ioore(j);
      dst[j] = t2;
    }
};

$.MetaInfo$ = function(_tag, _tags, _set) {
  return new $.MetaInfo(_tag, _tags, _set);
};

$._PeerConnection00EventsImpl$ = function(_ptr) {
  return new $._PeerConnection00EventsImpl(_ptr);
};

$.toString = function(value) {
  if (typeof value == "object" && value !== null)
    if ($.isJsArray(value))
      return $.Collections_collectionToString(value);
    else
      return value.toString$0();
  if (value === 0 && (1 / value) < 0)
    return '-0.0';
  if (value == null)
    return 'null';
  if (typeof value == "function")
    return 'Closure';
  return String(value);
};

$._AbstractWorkerEventsImpl$ = function(_ptr) {
  return new $._AbstractWorkerEventsImpl(_ptr);
};

$.indexSet = function(a, index, value) {
  if (a.constructor === Array && !a.immutable$list) {
    var key = index >>> 0;
    if (key === index && key < a.length) {
      a[key] = value;
      return;
    }
  }
  $.indexSet$slow(a, index, value);
};

$.index$slow = function(a, index) {
  if (typeof a === 'string' || $.isJsArray(a)) {
    if (!(typeof index === 'number' && Math.floor(index) === index)) {
      if (!(typeof index === 'number'))
        throw $.$$throw($.IllegalArgumentException$(index));
      if (!($.truncate(index) === index))
        throw $.$$throw($.IllegalArgumentException$(index));
    }
    if ($.ltB(index, 0) || $.geB(index, $.get$length(a)))
      throw $.$$throw($.IndexOutOfRangeException$(index));
    return a[index];
  }
  return a.operator$index$1(index);
};

$.add = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : $.add$slow(a, b);
};

$._HttpRequestEventsImpl$ = function(_ptr) {
  return new $._HttpRequestEventsImpl(_ptr);
};

$.Collections__containsRef = function(c, ref) {
  for (var t1 = $.iterator(c); t1.hasNext$0() === true;) {
    var t2 = t1.next$0();
    if (t2 == null ? ref == null : t2 === ref)
      return true;
  }
  return false;
};

$.geB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a >= b : $.ge$slow(a, b) === true;
};

$.ioore = function(index) {
  throw $.$$throw($.IndexOutOfRangeException$(index));
};

$._MediaElementEventsImpl$ = function(_ptr) {
  return new $._MediaElementEventsImpl(_ptr);
};

$.$$throw = function(ex) {
  if (ex == null)
    ex = $.CTC0;
  var jsError = new Error();
  jsError.name = ex;
  jsError.description = ex;
  jsError.dartException = ex;
  jsError.toString = $.toStringWrapper.call$0;
  throw jsError;
};

$._MessagePortEventsImpl$ = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$.dynamicSetMetadata = function(inputTable) {
  var t1 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t1);
};

$._IDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBRequestEventsImpl(_ptr);
};

$.Maps__emitMap = function(m, result, visiting) {
  var t1 = {};
  $.add$1(visiting, m);
  $.add$1(result, '{');
  t1.first_1 = true;
  m.forEach$1(new $.Maps__emitMap_anon(result, t1, visiting));
  $.add$1(result, '}');
  $.removeLast(visiting);
};

$.typeNameInFirefox = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if (name$ === 'Window')
    return 'DOMWindow';
  if (name$ === 'Document')
    return 'HTMLDocument';
  if (name$ === 'XMLDocument')
    return 'Document';
  if (name$ === 'WorkerMessageEvent')
    return 'MessageEvent';
  if (name$ === 'DragEvent')
    return 'MouseEvent';
  if (name$ === 'DataTransfer')
    return 'Clipboard';
  if (name$ === 'FormData')
    return 'DOMFormData';
  return name$;
};

$._WorkerEventsImpl$ = function(_ptr) {
  return new $._WorkerEventsImpl(_ptr);
};

$.ExceptionImplementation$ = function(msg) {
  return new $.ExceptionImplementation(msg);
};

$.propertySet = function(object, property, value) {
  object[property] = value;
};

$._BatteryManagerEventsImpl$ = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$.sub$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a - b;
  return a.operator$sub$1(b);
};

$.Collections_collectionToString = function(c) {
  var result = $.StringBufferImpl$('');
  $.Collections__emitCollection(c, result, $.ListImplementation_List(null));
  return result.toString$0();
};

$._IDBOpenDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBOpenDBRequestEventsImpl(_ptr);
};

$._SharedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$.indexOf$2 = function(receiver, element, start) {
  if ($.isJsArray(receiver))
    return $.Arrays_indexOf(receiver, element, start, receiver.length);
  else {
    $.checkNull(element);
    if (start < 0)
      return -1;
    return receiver.indexOf(element, start);
  }
  return receiver.indexOf$2(element, start);
};

$.checkMutable = function(list, reason) {
  if (!!(list.immutable$list))
    throw $.$$throw($.UnsupportedOperationException$(reason));
};

$.checkGrowable = function(list, reason) {
  if (!!(list.fixed$length))
    throw $.$$throw($.UnsupportedOperationException$(reason));
};

$.typeNameInIE = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if (name$ === 'Window')
    return 'DOMWindow';
  if (name$ === 'Document') {
    if (!!obj.xmlVersion)
      return 'Document';
    return 'HTMLDocument';
  }
  if (name$ === 'CanvasPixelArray')
    return 'Uint8ClampedArray';
  if (name$ === 'DataTransfer')
    return 'Clipboard';
  if (name$ === 'DragEvent')
    return 'MouseEvent';
  if (name$ === 'HTMLDDElement')
    return 'HTMLElement';
  if (name$ === 'HTMLDTElement')
    return 'HTMLElement';
  if (name$ === 'HTMLTableDataCellElement')
    return 'HTMLTableCellElement';
  if (name$ === 'HTMLTableHeaderCellElement')
    return 'HTMLTableCellElement';
  if (name$ === 'HTMLPhraseElement')
    return 'HTMLElement';
  if (name$ === 'MSStyleCSSProperties')
    return 'CSSStyleDeclaration';
  if (name$ === 'MouseWheelEvent')
    return 'WheelEvent';
  if (name$ === 'FormData')
    return 'DOMFormData';
  return name$;
};

$._TextTrackEventsImpl$ = function(_ptr) {
  return new $._TextTrackEventsImpl(_ptr);
};

$.Primitives_newList = function(length$) {
  if (length$ == null)
    return new Array();
  if (!(typeof length$ === 'number' && Math.floor(length$) === length$) || length$ < 0)
    throw $.$$throw($.IllegalArgumentException$(length$));
  var result = new Array(length$);
  result.fixed$length = true;
  return result;
};

$.index = function(a, index) {
  if (typeof a == "string" || a.constructor === Array) {
    var key = index >>> 0;
    if (key === index && key < a.length)
      return a[key];
  }
  return $.index$slow(a, index);
};

$.IndexOutOfRangeException$ = function(_value) {
  return new $.IndexOutOfRangeException(_value);
};

$.substring$2 = function(receiver, startIndex, endIndex) {
  $.checkNum(startIndex);
  var length$ = receiver.length;
  if (endIndex == null)
    endIndex = length$;
  $.checkNum(endIndex);
  if (startIndex < 0)
    throw $.$$throw($.IndexOutOfRangeException$(startIndex));
  if ($.gtB(startIndex, endIndex))
    throw $.$$throw($.IndexOutOfRangeException$(startIndex));
  if ($.gtB(endIndex, length$))
    throw $.$$throw($.IndexOutOfRangeException$(endIndex));
  return $.substringUnchecked(receiver, startIndex, endIndex);
};

$.StringBufferImpl$ = function(content$) {
  var t1 = new $.StringBufferImpl(null, null);
  t1.StringBufferImpl$1(content$);
  return t1;
};

$.window = function() {
return window;
};

$._DocumentEventsImpl$ = function(_ptr) {
  return new $._DocumentEventsImpl(_ptr);
};

$.typeNameInOpera = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if (name$ === 'Window')
    return 'DOMWindow';
  if (name$ === 'FormData')
    return 'DOMFormData';
  return name$;
};

$.substring$1 = function(receiver, startIndex) {
  if (!(typeof receiver === 'string'))
    return receiver.substring$1(startIndex);
  return $.substring$2(receiver, startIndex, null);
};

$._IDBVersionChangeRequestEventsImpl$ = function(_ptr) {
  return new $._IDBVersionChangeRequestEventsImpl(_ptr);
};

$._SVGElementInstanceEventsImpl$ = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$._FixedSizeListIterator$ = function(array, T) {
  var t1 = new $._FixedSizeListIterator($.get$length(array), array, 0);
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
};

$._FileReaderEventsImpl$ = function(_ptr) {
  return new $._FileReaderEventsImpl(_ptr);
};

$.eq = function(a, b) {
  if (a == null)
    return b == null;
  if (b == null)
    return false;
  if (typeof a === "object")
    if (!!a.operator$eq$1)
      return a.operator$eq$1(b);
  return a === b;
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$.NullPointerException$ = function(functionName, arguments$) {
  return new $.NullPointerException(functionName, arguments$);
};

$.toStringWrapper = function() {
  return $.toString(this.dartException);
};

$.gtB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a > b : $.gt$slow(a, b) === true;
};

$.defineProperty = function(obj, property, value) {
  Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: true, configurable: true});
};

$.stringContainsUnchecked = function(receiver, other, startIndex) {
  return !($.indexOf$2(receiver, other, startIndex) === -1);
};

$.Primitives_objectToString = function(object) {
  return 'Instance of \'' + $.S($.Primitives_objectTypeName(object)) + '\'';
};

$.lt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a < b : $.lt$slow(a, b);
};

$._FileWriterEventsImpl$ = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
};

$.cos = function(value) {
  return Math.cos($.checkNum(value));
};

$.regExpGetNative = function(regExp) {
  var r = regExp._re;
  return r == null ? regExp._re = $.regExpMakeNative(regExp, false) : r;
};

$._NotificationEventsImpl$ = function(_ptr) {
  return new $._NotificationEventsImpl(_ptr);
};

$.NoMoreElementsException$ = function() {
  return new $.NoMoreElementsException();
};

$.sub = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a - b : $.sub$slow(a, b);
};

$._WindowEventsImpl$ = function(_ptr) {
  return new $._WindowEventsImpl(_ptr);
};

$.StringImplementation__toJsStringArray$bailout = function(state, strings) {
  $.checkNull(strings);
  var length$ = $.get$length(strings);
  if ($.isJsArray(strings)) {
    for (var i = 0; $.ltB(i, length$); ++i) {
      var string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string'))
        throw $.$$throw($.IllegalArgumentException$(string));
    }
    var array = strings;
  } else {
    array = $.ListImplementation_List(length$);
    for (i = 0; $.ltB(i, length$); ++i) {
      string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string'))
        throw $.$$throw($.IllegalArgumentException$(string));
      if (i < 0 || i >= array.length)
        throw $.ioore(i);
      array[i] = string;
    }
  }
  return array;
};

$.Arrays_copy$bailout = function(state, src, srcStart, dst, dstStart, count) {
  if (srcStart < dstStart)
    for (var i = srcStart + count - 1, j = dstStart + count - 1; i >= srcStart; --i, --j)
      $.indexSet(dst, j, $.index(src, i));
  else
    for (var t1 = srcStart + count, i = srcStart, j = dstStart; i < t1; ++i, ++j)
      $.indexSet(dst, j, $.index(src, i));
};

$.dynamicBind.call$4 = $.dynamicBind;
$.dynamicBind.$name = "dynamicBind";
$.toStringWrapper.call$0 = $.toStringWrapper;
$.toStringWrapper.$name = "toStringWrapper";
$.typeNameInFirefox.call$1 = $.typeNameInFirefox;
$.typeNameInFirefox.$name = "typeNameInFirefox";
$.typeNameInSafari.call$1 = $.typeNameInSafari;
$.typeNameInSafari.$name = "typeNameInSafari";
$.constructorNameFallback.call$1 = $.constructorNameFallback;
$.constructorNameFallback.$name = "constructorNameFallback";
$.typeNameInChrome.call$1 = $.typeNameInChrome;
$.typeNameInChrome.$name = "typeNameInChrome";
$.typeNameInIE.call$1 = $.typeNameInIE;
$.typeNameInIE.$name = "typeNameInIE";
$.invokeClosure.call$5 = $.invokeClosure;
$.invokeClosure.$name = "invokeClosure";
$.typeNameInOpera.call$1 = $.typeNameInOpera;
$.typeNameInOpera.$name = "typeNameInOpera";
Isolate.$finishClasses($$);
$$ = {};
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC2 = Isolate.makeConstantList([]);
$.CTC3 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC16 = 'Cannot removeLast on immutable List.';
$.CTC4 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot removeLast on immutable List.');
$.CTC17 = 'structured clone of Blob';
$.CTC8 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Blob');
$.CTC18 = false;
$.CTC19 = '^#[_a-zA-Z]\\w*$';
$.CTC = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC20 = 'structured clone of File';
$.CTC7 = new Isolate.$isolateProperties.NotImplementedException('structured clone of File');
$.CTC21 = 'structured clone of other type';
$.CTC12 = new Isolate.$isolateProperties.NotImplementedException('structured clone of other type');
$.CTC22 = 'Cannot add to immutable List.';
$.CTC1 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot add to immutable List.');
$.CTC14 = new Isolate.$isolateProperties._Random();
$.CTC23 = 'Cannot removeRange on immutable List.';
$.CTC13 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot removeRange on immutable List.');
$.CTC24 = 'structured clone of Date';
$.CTC5 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Date');
$.CTC25 = 'structured clone of ArrayBufferView';
$.CTC11 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBufferView');
$.CTC26 = 'structured clone of ArrayBuffer';
$.CTC10 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBuffer');
$.CTC15 = new Isolate.$isolateProperties.Object();
$.CTC27 = 'structured clone of FileList';
$.CTC9 = new Isolate.$isolateProperties.NotImplementedException('structured clone of FileList');
$.CTC28 = null;
$.CTC0 = new Isolate.$isolateProperties.NullPointerException(null, Isolate.$isolateProperties.CTC2);
$.CTC29 = 'structured clone of RegExp';
$.CTC6 = new Isolate.$isolateProperties.NotImplementedException('structured clone of RegExp');
$.Primitives_DOLLAR_CHAR_VALUE = 36;
$.PI = 3.141592653589793;
$._getTypeNameOf = null;
var $ = null;
Isolate.$finishClasses($$);
$$ = {};
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
$.$defineNativeClass = function(cls, fields, methods) {
  var generateGetterSetter =   function(field, prototype) {
    var len = field.length;
    var lastChar = field[len - 1];
    var needsGetter = lastChar == '?' || lastChar == '=';
    var needsSetter = lastChar == '!' || lastChar == '=';
    if (needsGetter || needsSetter) field = field.substring(0, len - 1);
    if (needsGetter) {
      var getterString = "return this." + field + ";";
        prototype["get$" + field] = new Function(getterString);
    }
    if (needsSetter) {
      var setterString = "this." + field + " = v;";
      prototype["set$" + field] = new Function("v", setterString);
    }
    return field;
  };
  for (var i = 0; i < fields.length; i++) {
    generateGetterSetter(fields[i], methods);
  }
  for (var method in methods) {
    $.dynamicFunction(method)[cls] = methods[method];
  }
};

(function(table) {
  for (var key in table) {
    $.defineProperty(Object.prototype, key, table[key]);
  }
})({
 is$JavaScriptIndexingBehavior: function() { return false; },
 is$ArrayBufferView: function() { return false; },
 is$_FileListImpl: function() { return false; },
 is$_BlobImpl: function() { return false; },
 is$_ImageDataImpl: function() { return false; },
 is$_FileImpl: function() { return false; },
 is$_ArrayBufferViewImpl: function() { return false; },
 toString$0: function() { return $.toStringForNativeObject(this); },
 is$Blob: function() { return false; },
 is$ArrayBuffer: function() { return false; },
 is$File: function() { return false; },
 is$List: function() { return false; },
 is$_ArrayBufferImpl: function() { return false; },
 is$FileList: function() { return false; },
 is$Map: function() { return false; },
 is$Collection: function() { return false; },
 is$ImageData: function() { return false; }
});

$.$defineNativeClass('AbstractWorker', [], {
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {
  return $._AbstractWorkerEventsImpl$(this);
}
  } else {
    return Object.prototype.get$on.call(this);
  }

},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLAnchorElement', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('WebKitAnimationList', ["length?"], {
});

$.$defineNativeClass('HTMLAppletElement', ["height?", "width?"], {
});

$.$defineNativeClass('ArrayBuffer', [], {
 is$_ArrayBufferImpl: function() { return true; },
 is$ArrayBuffer: function() { return true; }
});

$.$defineNativeClass('ArrayBufferView', [], {
 is$_ArrayBufferViewImpl: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('AudioBuffer', ["length?"], {
});

$.$defineNativeClass('AudioContext', [], {
 get$on: function() {
  return $._AudioContextEventsImpl$(this);
}
});

$.$defineNativeClass('HTMLBRElement', [], {
 clear$0: function() { return this.clear.call$0(); }
});

$.$defineNativeClass('BatteryManager', [], {
 get$on: function() {
  return $._BatteryManagerEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('Blob', [], {
 is$_BlobImpl: function() { return true; },
 is$Blob: function() { return true; }
});

$.$defineNativeClass('HTMLBodyElement', [], {
 get$on: function() {
  return $._BodyElementEventsImpl$(this);
}
});

$.$defineNativeClass('WebKitCSSMatrix', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('CSSRuleList', ["length?"], {
});

$.$defineNativeClass('CSSStyleDeclaration', ["length?"], {
 getPropertyValue$1: function(propertyName) {
  return this.getPropertyValue(propertyName);
},
 get$clear: function() {
  return this.getPropertyValue$1('clear');
},
 clear$0: function() { return this.get$clear().call$0(); },
 get$height: function() {
  return this.getPropertyValue$1('height');
},
 get$width: function() {
  return this.getPropertyValue$1('width');
}
});

$.$defineNativeClass('CSSValueList', ["length?"], {
});

$.$defineNativeClass('HTMLCanvasElement', ["height?", "width?"], {
 getContext$1: function(contextId) {
  return this.getContext(contextId);
}
});

$.$defineNativeClass('CanvasRenderingContext2D', ["fillStyle!"], {
 arc$6: function(x, y, radius, startAngle, endAngle, anticlockwise) {
  return this.arc(x,y,radius,startAngle,endAngle,anticlockwise);
},
 beginPath$0: function() {
  return this.beginPath();
},
 closePath$0: function() {
  return this.closePath();
},
 fill$0: function() {
  return this.fill();
},
 fillRect$4: function(x, y, width, height) {
  return this.fillRect(x,y,width,height);
}
});

$.$defineNativeClass('CharacterData', ["length?"], {
});

$.$defineNativeClass('ClientRect', ["height?", "width?"], {
});

$.$defineNativeClass('ClientRectList', ["length?"], {
});

_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
$.$defineNativeClass('DOMApplicationCache', [], {
 get$on: function() {
  return $._DOMApplicationCacheEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 update$0: function() {
  return this.update();
}
});

$.$defineNativeClass('DOMException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('DOMMimeTypeArray', ["length?"], {
});

$.$defineNativeClass('DOMPlugin', ["length?"], {
});

$.$defineNativeClass('DOMPluginArray', ["length?"], {
});

$.$defineNativeClass('DOMSelection', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('DOMStringList', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'String');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('DOMTokenList', ["length?"], {
 add$1: function(token) {
  return this.add(token);
},
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('DataTransferItemList', ["length?"], {
 add$2: function(data_OR_file, type) {
  return this.add(data_OR_file,type);
},
 add$1: function(data_OR_file) {
  return this.add(data_OR_file);
},
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('DataView', [], {
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('DedicatedWorkerContext', [], {
 get$on: function() {
  return $._DedicatedWorkerContextEventsImpl$(this);
}
});

$.$defineNativeClass('HTMLDocument', [], {
 get$on: function() {
  return $._DocumentEventsImpl$(this);
},
 $dom_getElementById$1: function(elementId) {
  return this.getElementById(elementId);
},
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
},
 query$1: function(selectors) {
  if ($.CTC.hasMatch$1(selectors) === true)
    return this.$dom_getElementById$1($.substring$1(selectors, 1));
  return this.$dom_querySelector$1(selectors);
}
});

$.$defineNativeClass('DocumentFragment', [], {
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
},
 click$0: function() {
},
 get$click: function() { return new $.BoundClosure0(this, 'click$0'); },
 get$on: function() {
  return $._ElementEventsImpl$(this);
},
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
}
});

$.$defineNativeClass('Element', [], {
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
},
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {
  return $._ElementEventsImpl$(this);
}
  } else {
    return Object.prototype.get$on.call(this);
  }

},
 click$0: function() {
  return this.click();
},
 get$click: function() { return new $.BoundClosure0(this, 'click$0'); },
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
}
});

$.$defineNativeClass('HTMLEmbedElement', ["height?", "width?"], {
});

$.$defineNativeClass('EntryArray', ["length?"], {
});

$.$defineNativeClass('EntryArraySync', ["length?"], {
});

$.$defineNativeClass('EventException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('EventSource', [], {
 get$on: function() {
  return $._EventSourceEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('EventTarget', [], {
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {
  return $._EventsImpl$(this);
}
  } else {
    return Object.prototype.get$on.call(this);
  }

},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }

}
});

$.$defineNativeClass('File', [], {
 is$_FileImpl: function() { return true; },
 is$File: function() { return true; },
 is$Blob: function() { return true; }
});

$.$defineNativeClass('FileException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('FileList', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'File');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$_FileListImpl: function() { return true; },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$FileList: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('FileReader', [], {
 get$on: function() {
  return $._FileReaderEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('FileWriter', ["length?"], {
 get$on: function() {
  return $._FileWriterEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('FileWriterSync', ["length?"], {
});

$.$defineNativeClass('Float32Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'num');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Float64Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'num');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('HTMLFormElement', ["length?"], {
});

$.$defineNativeClass('HTMLFrameElement', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLFrameSetElement', [], {
 get$on: function() {
  return $._FrameSetElementEventsImpl$(this);
}
});

$.$defineNativeClass('GamepadList', ["length?"], {
});

$.$defineNativeClass('HTMLHRElement', ["width?"], {
});

$.$defineNativeClass('HTMLAllCollection', ["length?"], {
});

$.$defineNativeClass('HTMLCollection', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'Node');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLOptionsCollection', [], {
 get$length: function() {
return this.length;
},
 set$length: function(value) {
this.length = value;
},
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('History', ["length?"], {
});

$.$defineNativeClass('XMLHttpRequest', [], {
 get$on: function() {
  return $._HttpRequestEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('XMLHttpRequestException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('XMLHttpRequestUpload', [], {
 get$on: function() {
  return $._HttpRequestUploadEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBDatabase', [], {
 get$on: function() {
  return $._IDBDatabaseEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBDatabaseException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('IDBObjectStore', [], {
 add$2: function(value, key) {
  var t1 = $ === key;
  if (t1)
    key = null;
  if (!t1)
    return this._add_1$2($._convertDartToNative_SerializedScriptValue(value), key);
  return this._add_2$1($._convertDartToNative_SerializedScriptValue(value));
},
 add$1: function(value) {
  return this.add$2(value,$)
},
 _add_1$2: function(value, key) {
  return this.add(value,key);
},
 _add_2$1: function(value) {
  return this.add(value);
},
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('IDBOpenDBRequest', [], {
 get$on: function() {
  return $._IDBOpenDBRequestEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBRequest', [], {
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {
  return $._IDBRequestEventsImpl$(this);
}
  } else {
    return Object.prototype.get$on.call(this);
  }

},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }

}
});

$.$defineNativeClass('IDBTransaction', [], {
 get$on: function() {
  return $._IDBTransactionEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBVersionChangeRequest', [], {
 get$on: function() {
  return $._IDBVersionChangeRequestEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLIFrameElement', ["height?", "width?"], {
});

$.$defineNativeClass('ImageData', ["height?", "width?"], {
 is$_ImageDataImpl: function() { return true; },
 is$ImageData: function() { return true; }
});

$.$defineNativeClass('HTMLImageElement', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLInputElement', ["height?", "width?"], {
 get$on: function() {
  return $._InputElementEventsImpl$(this);
}
});

$.$defineNativeClass('Int16Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Int32Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Int8Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('JavaScriptAudioNode', [], {
 get$on: function() {
  return $._JavaScriptAudioNodeEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('LocalMediaStream', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('Location', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('HTMLMarqueeElement', ["height?", "width?"], {
});

$.$defineNativeClass('MediaController', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLMediaElement', [], {
 get$on: function() {
  return $._MediaElementEventsImpl$(this);
}
});

$.$defineNativeClass('MediaList', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'String');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('MediaSource', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('MediaStream', [], {
 get$on: function() {
  return $._MediaStreamEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
  {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }

}
});

$.$defineNativeClass('MediaStreamList', ["length?"], {
});

$.$defineNativeClass('MediaStreamTrack', [], {
 get$on: function() {
  return $._MediaStreamTrackEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('MediaStreamTrackList', ["length?"], {
 get$on: function() {
  return $._MediaStreamTrackListEventsImpl$(this);
},
 add$1: function(track) {
  return this.add(track);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('MessagePort', [], {
 get$on: function() {
  return $._MessagePortEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('NamedNodeMap', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'Node');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Node', [], {
 set$text: function(value) {
this.textContent = value;
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_appendChild$1: function(newChild) {
  return this.appendChild(newChild);
},
 $dom_removeChild$1: function(oldChild) {
  return this.removeChild(oldChild);
},
 $dom_replaceChild$2: function(newChild, oldChild) {
  return this.replaceChild(newChild,oldChild);
}
});

$.$defineNativeClass('NodeList', ["length?"], {
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'Node');
},
 add$1: function(value) {
  this._parent.$dom_appendChild$1(value);
},
 removeLast$0: function() {
  var result = this.last$0();
  if (!(result == null))
    this._parent.$dom_removeChild$1(result);
  return result;
},
 clear$0: function() {
  this._parent.set$text('');
},
 operator$indexSet$2: function(index, value) {
  this._parent.$dom_replaceChild$2(value, this.operator$index$1(index));
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
},
 operator$index$1: function(index) {
return this[index];
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Notification', [], {
 get$on: function() {
  return $._NotificationEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLObjectElement', ["height?", "width?"], {
});

$.$defineNativeClass('PeerConnection00', [], {
 get$on: function() {
  return $._PeerConnection00EventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLPreElement', ["width?"], {
});

$.$defineNativeClass('RTCPeerConnection', [], {
 get$on: function() {
  return $._RTCPeerConnectionEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('RadioNodeList', [], {
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Range', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('RangeException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('SQLResultSetRowList', ["length?"], {
});

$.$defineNativeClass('SVGElementInstance', [], {
 get$on: function() {
  return $._SVGElementInstanceEventsImpl$(this);
}
});

$.$defineNativeClass('SVGElementInstanceList', ["length?"], {
});

$.$defineNativeClass('SVGException', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('SVGFEBlendElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEColorMatrixElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEComponentTransferElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFECompositeElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEConvolveMatrixElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEDiffuseLightingElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEDisplacementMapElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEDropShadowElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEFloodElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEGaussianBlurElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEImageElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEMergeElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEMorphologyElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFEOffsetElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFESpecularLightingElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFETileElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFETurbulenceElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGFilterElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGForeignObjectElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGImageElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGLengthList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGMaskElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGNumberList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGPathSegList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGPatternElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGPointList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGRect', ["height?", "width?"], {
});

$.$defineNativeClass('SVGRectElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGSVGElement', ["height?", "width?"], {
});

$.$defineNativeClass('SVGStringList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGTransformList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGUseElement', ["height?", "width?"], {
});

$.$defineNativeClass('Screen', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLSelectElement', ["length="], {
});

$.$defineNativeClass('SharedWorkerContext', [], {
 get$on: function() {
  return $._SharedWorkerContextEventsImpl$(this);
}
});

$.$defineNativeClass('SourceBufferList', ["length?"], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('SpeechGrammarList', ["length?"], {
});

$.$defineNativeClass('SpeechInputResultList', ["length?"], {
});

$.$defineNativeClass('SpeechRecognition', [], {
 get$on: function() {
  return $._SpeechRecognitionEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('SpeechRecognitionResult', ["length?"], {
});

$.$defineNativeClass('SpeechRecognitionResultList', ["length?"], {
});

$.$defineNativeClass('Storage', [], {
 operator$index$1: function(key) {
  return this.$dom_getItem$1(key);
},
 operator$indexSet$2: function(key, value) {
  return this.$dom_setItem$2(key, value);
},
 clear$0: function() {
  return this.$dom_clear$0();
},
 forEach$1: function(f) {
  for (var i = 0; true; ++i) {
    var key = this.$dom_key$1(i);
    if (key == null)
      return;
    f.call$2(key, this.operator$index$1(key));
  }
},
 get$length: function() {
  return this.get$$$dom_length();
},
 isEmpty$0: function() {
  return this.$dom_key$1(0) == null;
},
 get$$$dom_length: function() {
return this.length;
},
 $dom_clear$0: function() {
  return this.clear();
},
 $dom_getItem$1: function(key) {
  return this.getItem(key);
},
 $dom_key$1: function(index) {
  return this.key(index);
},
 $dom_setItem$2: function(key, data) {
  return this.setItem(key,data);
},
 is$Map: function() { return true; }
});

$.$defineNativeClass('StyleSheetList', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'StyleSheet');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTableCellElement', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLTableColElement', ["width?"], {
});

$.$defineNativeClass('HTMLTableElement', ["width?"], {
});

$.$defineNativeClass('TextMetrics', ["width?"], {
});

$.$defineNativeClass('TextTrack', [], {
 get$on: function() {
  return $._TextTrackEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('TextTrackCue', ["text!"], {
 get$on: function() {
  return $._TextTrackCueEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('TextTrackCueList', ["length?"], {
});

$.$defineNativeClass('TextTrackList', ["length?"], {
 get$on: function() {
  return $._TextTrackListEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('TimeRanges', ["length?"], {
});

$.$defineNativeClass('TouchList', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
  throw $.$$throw($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'Touch');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('UIEvent', ["layerX?", "layerY?"], {
});

$.$defineNativeClass('Uint16Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint32Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint8Array', ["length?"], {
 operator$index$1: function(index) {
return this[index];
},
 operator$indexSet$2: function(index, value) {
this[index] = value
},
 iterator$0: function() {
  return $._FixedSizeListIterator$(this, 'int');
},
 add$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC4);
},
 removeRange$2: function(start, rangeLength) {
  throw $.$$throw($.CTC13);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('Uint8ClampedArray', [], {
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('HTMLVideoElement', ["height?", "width?"], {
});

$.$defineNativeClass('WebKitNamedFlow', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('WebSocket', [], {
 get$on: function() {
  return $._WebSocketEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('DOMWindow', ["length?"], {
 requestAnimationFrame$1: function(callback) {
  this._ensureRequestAnimationFrame$0();
  return this._requestAnimationFrame$1(callback);
},
 _requestAnimationFrame$1: function(callback) {
  return this.requestAnimationFrame($.convertDartClosureToJS(callback, 1));
},
 _ensureRequestAnimationFrame$0: function() {
   if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   var vendors = ['ms', 'moz', 'webkit', 'o'];
   for (var i = 0; i < vendors.length && !this.requestAnimationFrame; ++i) {
     this.requestAnimationFrame = this[vendors[i] + 'RequestAnimationFrame'];
     this.cancelAnimationFrame =
         this[vendors[i]+'CancelAnimationFrame'] ||
         this[vendors[i]+'CancelRequestAnimationFrame'];
   }
   if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   this.requestAnimationFrame = function(callback) {
       return window.setTimeout(callback, 16 /* 16ms ~= 60fps */);
   };
   this.cancelAnimationFrame = function(id) { clearTimeout(id); }

},
 get$on: function() {
  return $._WindowEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('Worker', [], {
 get$on: function() {
  return $._WorkerEventsImpl$(this);
}
});

$.$defineNativeClass('WorkerContext', [], {
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
  {
  return $._WorkerContextEventsImpl$(this);
}
  } else {
    return Object.prototype.get$on.call(this);
  }

},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('WorkerLocation', [], {
 toString$0: function() {
  return this.toString();
}
});

$.$defineNativeClass('XPathException', [], {
 toString$0: function() {
  return this.toString();
}
});

// 169 dynamic classes.
// 301 classes
// 27 !leaf
(function(){
  var v0/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement|HTMLVideoElement|HTMLAudioElement';
  var v1/*class(_ElementImpl)*/ = [v0/*class(_MediaElementImpl)*/,v0/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v2/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot|ShadowRoot';
  var v3/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument|SVGDocument';
  var v4/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|CDATASection|Comment|Text|CDATASection|CDATASection|Comment';
  var v5/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v6/*class(_NodeImpl)*/ = [v1/*class(_ElementImpl)*/,v2/*class(_DocumentFragmentImpl)*/,v3/*class(_DocumentImpl)*/,v4/*class(_CharacterDataImpl)*/,v1/*class(_ElementImpl)*/,v2/*class(_DocumentFragmentImpl)*/,v3/*class(_DocumentImpl)*/,v4/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v7/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream|LocalMediaStream';
  var v8/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest';
  var v9/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker|Worker|SharedWorker';
  var v10/*class(_Uint8ArrayImpl)*/ = 'Uint8Array|Uint8ClampedArray|Uint8ClampedArray';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['HTMLMediaElement', v0/*class(_MediaElementImpl)*/],
    ['Element', v1/*class(_ElementImpl)*/],
    ['WorkerContext', v5/*class(_WorkerContextImpl)*/],
    ['DocumentFragment', v2/*class(_DocumentFragmentImpl)*/],
    ['HTMLDocument', v3/*class(_DocumentImpl)*/],
    ['CharacterData', v4/*class(_CharacterDataImpl)*/],
    ['Node', v6/*class(_NodeImpl)*/],
    ['MediaStream', v7/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v8/*class(_IDBRequestImpl)*/],
    ['AbstractWorker', v9/*class(_AbstractWorkerImpl)*/],
    ['EventTarget', [v5/*class(_WorkerContextImpl)*/,v6/*class(_NodeImpl)*/,v7/*class(_MediaStreamImpl)*/,v8/*class(_IDBRequestImpl)*/,v9/*class(_AbstractWorkerImpl)*/,v5/*class(_WorkerContextImpl)*/,v6/*class(_NodeImpl)*/,v7/*class(_MediaStreamImpl)*/,v8/*class(_IDBRequestImpl)*/,v9/*class(_AbstractWorkerImpl)*/,'EventTarget|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLOptionsCollection'],
    ['Uint8Array', v10/*class(_Uint8ArrayImpl)*/],
    ['ArrayBufferView', [v10/*class(_Uint8ArrayImpl)*/,v10/*class(_Uint8ArrayImpl)*/,'ArrayBufferView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView'].join('|')],
    ['UIEvent', 'UIEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|WheelEvent|WheelEvent|KeyboardEvent|CompositionEvent'],
    ['NodeList', 'NodeList|RadioNodeList|RadioNodeList'],
    ['Blob', 'Blob|File|File'],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList|DOMSettableTokenList']];
$.dynamicSetMetadata(table);
})();

if (typeof document != 'undefined' && document.readyState != 'complete') {
  document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {
      $.main();
    }
  }, false);
} else {
  $.main();
}
function init() {
Isolate.$isolateProperties = {};
Isolate.$defineClass = function(cls, fields, prototype) {
  var generateGetterSetter =   function(field, prototype) {
    var len = field.length;
    var lastChar = field[len - 1];
    var needsGetter = lastChar == '?' || lastChar == '=';
    var needsSetter = lastChar == '!' || lastChar == '=';
    if (needsGetter || needsSetter) field = field.substring(0, len - 1);
    if (needsGetter) {
      var getterString = "return this." + field + ";";
        prototype["get$" + field] = new Function(getterString);
    }
    if (needsSetter) {
      var setterString = "this." + field + " = v;";
      prototype["set$" + field] = new Function("v", setterString);
    }
    return field;
  };
  var constructor;
  if (typeof fields == 'function') {
    constructor = fields;
  } else {
    var str = "function " + cls + "(";
    var body = "";
    for (var i = 0; i < fields.length; i++) {
      if (i != 0) str += ", ";
      var field = fields[i];
      field = generateGetterSetter(field, prototype);
      str += field;
      body += "this." + field + " = " + field + ";\n";
    }
    str += ") {" + body + "}\n";
    str += "return " + cls + ";";
    constructor = new Function(str)();
  }
  constructor.prototype = prototype;
  return constructor;
};
var supportsProto = false;
var tmp = Isolate.$defineClass('c', ['f?'], {}).prototype;
if (tmp.__proto__) {
  tmp.__proto__ = {};
  if (typeof tmp.get$f !== "undefined") supportsProto = true;
}
Isolate.$pendingClasses = {};
Isolate.$finishClasses = function(collectedClasses) {
  for (var cls in collectedClasses) {
    if (Object.prototype.hasOwnProperty.call(collectedClasses, cls)) {
      var desc = collectedClasses[cls];
      Isolate.$isolateProperties[cls] = Isolate.$defineClass(cls, desc[''], desc);
      if (desc['super'] !== "") Isolate.$pendingClasses[cls] = desc['super'];
    }
  }
  var pendingClasses = Isolate.$pendingClasses;
  Isolate.$pendingClasses = {};
  var finishedClasses = {};
  function finishClass(cls) {
    if (finishedClasses[cls]) return;
    finishedClasses[cls] = true;
    var superclass = pendingClasses[cls];
    if (!superclass) return;
    finishClass(superclass);
    var constructor = Isolate.$isolateProperties[cls];
    var superConstructor = Isolate.$isolateProperties[superclass];
    var prototype = constructor.prototype;
    if (supportsProto) {
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
    } else {
      function tmp() {};
      tmp.prototype = superConstructor.prototype;
      var newPrototype = new tmp();
      constructor.prototype = newPrototype;
      newPrototype.constructor = constructor;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var member in prototype) {
        if (member == '' || member == 'super') continue;
        if (hasOwnProperty.call(prototype, member)) {
          newPrototype[member] = prototype[member];
        }
      }
    }
  }
  for (var cls in pendingClasses) finishClass(cls);
};
Isolate.$finishIsolateConstructor = function(oldIsolate) {
  var isolateProperties = oldIsolate.$isolateProperties;
  var isolatePrototype = oldIsolate.prototype;
  var str = "{\n";
  str += "var properties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= properties." + staticName + ";\n";
    }
  }
  str += "}\n";
  var newIsolate = new Function(str);
  newIsolate.prototype = isolatePrototype;
  isolatePrototype.constructor = newIsolate;
  newIsolate.$isolateProperties = isolateProperties;
  return newIsolate;
};
}

//@ sourceMappingURL=example03.dart.js.map