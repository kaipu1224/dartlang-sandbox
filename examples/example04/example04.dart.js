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
},
 is$Exception: true
};

$$.FutureImpl = {"":
 ["_isComplete", "_lib0_value?", "_exception", "_stackTrace", "_exceptionHandled", "_successListeners", "_exceptionHandlers", "_completionListeners"],
 "super": "Object",
 get$value: function() {
  if (this.get$isComplete() !== true)
    throw $.$$throw($.FutureNotCompleteException$());
  var t1 = this._exception;
  if (!(t1 == null))
    throw $.$$throw(t1);
  return this._lib0_value;
},
 get$stackTrace: function() {
  if (this.get$isComplete() !== true)
    throw $.$$throw($.FutureNotCompleteException$());
  return this._stackTrace;
},
 get$isComplete: function() {
  return this._isComplete;
},
 get$hasValue: function() {
  return this.get$isComplete() === true && this._exception == null;
},
 then$1: function(onSuccess) {
  if (this.get$hasValue() === true)
    onSuccess.call$1(this.get$value());
  else if (this.get$isComplete() !== true)
    this._successListeners.push(onSuccess);
  else if (this._exceptionHandled !== true)
    throw $.$$throw(this._exception);
},
 handleException$1: function(onException) {
  if (this._exceptionHandled === true)
    return;
  if (this._isComplete === true) {
    var t1 = this._exception;
    if (!(t1 == null))
      this._exceptionHandled = onException.call$1(t1);
  } else
    this._exceptionHandlers.push(onException);
},
 _complete$0: function() {
  this._isComplete = true;
  try {
    if (!(this._exception == null))
      for (var t1 = $.iterator(this._exceptionHandlers); t1.hasNext$0() === true;) {
        var handler = t1.next$0();
        if ($.eqB(handler.call$1(this._exception), true)) {
          this._exceptionHandled = true;
          break;
        }
      }
    if (this.get$hasValue() === true)
      for (t1 = $.iterator(this._successListeners); t1.hasNext$0() === true;) {
        var listener = t1.next$0();
        listener.call$1(this.get$value());
      }
    else if (this._exceptionHandled !== true && $.gtB($.get$length(this._successListeners), 0))
      throw $.$$throw(this._exception);
  } finally {
    for (t1 = $.iterator(this._completionListeners); t1.hasNext$0() === true;) {
      var listener0 = t1.next$0();
      try {
        listener0.call$1(this);
      } catch (exception) {
        $.unwrapException(exception);
      }

    }
  }
},
 _setValue$1: function(value) {
  if (this._isComplete === true)
    throw $.$$throw($.FutureAlreadyCompleteException$());
  this._lib0_value = value;
  this._complete$0();
},
 _setException$2: function(exception, stackTrace) {
  if (exception == null)
    throw $.$$throw($.IllegalArgumentException$(null));
  if (this._isComplete === true)
    throw $.$$throw($.FutureAlreadyCompleteException$());
  this._exception = exception;
  this._stackTrace = stackTrace;
  this._complete$0();
}
};

$$.CompleterImpl = {"":
 ["_futureImpl"],
 "super": "Object",
 get$future: function() {
  return this._futureImpl;
},
 complete$1: function(value) {
  this._futureImpl._setValue$1(value);
},
 completeException$2: function(exception, stackTrace) {
  this._futureImpl._setException$2(exception, stackTrace);
},
 completeException$1: function(exception) {
  return this.completeException$2(exception,null)
},
 completeException$1: function(exception) {
  return this.completeException$2(exception,null)
}
};

$$.HashMapImplementation = {"":
 ["_keys", "_values", "_loadLimit", "_numberOfEntries", "_numberOfDeleted"],
 "super": "Object",
 _probeForAdding$1: function(key) {
  var t1 = $.hashCode(key);
  if (t1 !== (t1 | 0))
    return this._probeForAdding$1$bailout(1, key, t1, 0, 0, 0);
  var t3 = $.get$length(this._keys);
  if (t3 !== (t3 | 0))
    return this._probeForAdding$1$bailout(2, key, t1, t3, 0, 0);
  var hash = (t1 & t3 - 1) >>> 0;
  for (var numberOfProbes = 1, insertionIndex = -1; true;) {
    t1 = this._keys;
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))
      return this._probeForAdding$1$bailout(3, key, hash, numberOfProbes, insertionIndex, t1);
    if (hash < 0 || hash >= t1.length)
      throw $.ioore(hash);
    var existingKey = t1[hash];
    if (existingKey == null) {
      if (insertionIndex < 0)
        return hash;
      return insertionIndex;
    } else if ($.eqB(existingKey, key))
      return hash;
    else if (insertionIndex < 0 && $.CTC14 === existingKey)
      insertionIndex = hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    if (hash !== (hash | 0))
      return this._probeForAdding$1$bailout(4, numberOfProbes0, key, insertionIndex, hash, 0);
    numberOfProbes = numberOfProbes0;
  }
},
 _probeForAdding$1$bailout: function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var key = env0;
      t1 = env1;
      break;
    case 2:
      key = env0;
      t1 = env1;
      t3 = env2;
      break;
    case 3:
      key = env0;
      hash = env1;
      numberOfProbes = env2;
      insertionIndex = env3;
      t1 = env4;
      break;
    case 4:
      numberOfProbes0 = env0;
      key = env1;
      insertionIndex = env2;
      hash = env3;
      break;
  }
  switch (state) {
    case 0:
      var t1 = $.hashCode(key);
    case 1:
      state = 0;
      var t3 = $.get$length(this._keys);
    case 2:
      state = 0;
      var hash = $.and(t1, $.sub(t3, 1));
      var numberOfProbes = 1;
      var insertionIndex = -1;
    default:
      L0:
        while (true)
          switch (state) {
            case 0:
              if (!true)
                break L0;
              t1 = this._keys;
            case 3:
              state = 0;
              var existingKey = $.index(t1, hash);
              if (existingKey == null) {
                if ($.ltB(insertionIndex, 0))
                  return hash;
                return insertionIndex;
              } else if ($.eqB(existingKey, key))
                return hash;
              else if ($.ltB(insertionIndex, 0) && $.CTC14 === existingKey)
                insertionIndex = hash;
              var numberOfProbes0 = numberOfProbes + 1;
              hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
            case 4:
              state = 0;
              numberOfProbes = numberOfProbes0;
          }
  }
},
 _probeForLookup$1: function(key) {
  var hash = $.and($.hashCode(key), $.sub($.get$length(this._keys), 1));
  if (hash !== (hash | 0))
    return this._probeForLookup$1$bailout(1, key, hash);
  for (var numberOfProbes = 1; true;) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey == null)
      return -1;
    if ($.eqB(existingKey, key))
      return hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
},
 _probeForLookup$1$bailout: function(state, key, hash) {
  for (var numberOfProbes = 1; true;) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey == null)
      return -1;
    if ($.eqB(existingKey, key))
      return hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
},
 _ensureCapacity$0: function() {
  var newNumberOfEntries = $.add(this._numberOfEntries, 1);
  if ($.geB(newNumberOfEntries, this._loadLimit)) {
    this._grow$1($.mul($.get$length(this._keys), 2));
    return;
  }
  var numberOfFree = $.sub($.sub($.get$length(this._keys), newNumberOfEntries), this._numberOfDeleted);
  if ($.gtB(this._numberOfDeleted, numberOfFree))
    this._grow$1($.get$length(this._keys));
},
 _grow$1: function(newCapacity) {
  var capacity = $.get$length(this._keys);
  if (typeof capacity !== 'number')
    return this._grow$1$bailout(1, newCapacity, capacity, 0, 0);
  this._loadLimit = $.tdiv($.mul(newCapacity, 3), 4);
  var oldKeys = this._keys;
  if (typeof oldKeys !== 'string' && (typeof oldKeys !== 'object' || oldKeys === null || oldKeys.constructor !== Array && !oldKeys.is$JavaScriptIndexingBehavior()))
    return this._grow$1$bailout(2, newCapacity, oldKeys, capacity, 0);
  var oldValues = this._values;
  if (typeof oldValues !== 'string' && (typeof oldValues !== 'object' || oldValues === null || oldValues.constructor !== Array && !oldValues.is$JavaScriptIndexingBehavior()))
    return this._grow$1$bailout(3, newCapacity, oldKeys, oldValues, capacity);
  this._keys = $.ListImplementation_List(newCapacity);
  this._values = $.ListImplementation_List(newCapacity, $.getRuntimeTypeInfo(this).V);
  for (var i = 0; i < capacity; ++i) {
    if (i < 0 || i >= oldKeys.length)
      throw $.ioore(i);
    var key = oldKeys[i];
    if (key == null || key === $.CTC14)
      continue;
    if (i < 0 || i >= oldValues.length)
      throw $.ioore(i);
    var value = oldValues[i];
    var newIndex = this._probeForAdding$1(key);
    $.indexSet(this._keys, newIndex, key);
    $.indexSet(this._values, newIndex, value);
  }
  this._numberOfDeleted = 0;
},
 _grow$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var newCapacity = env0;
      capacity = env1;
      break;
    case 2:
      newCapacity = env0;
      oldKeys = env1;
      capacity = env2;
      break;
    case 3:
      newCapacity = env0;
      oldKeys = env1;
      oldValues = env2;
      capacity = env3;
      break;
  }
  switch (state) {
    case 0:
      var capacity = $.get$length(this._keys);
    case 1:
      state = 0;
      this._loadLimit = $.tdiv($.mul(newCapacity, 3), 4);
      var oldKeys = this._keys;
    case 2:
      state = 0;
      var oldValues = this._values;
    case 3:
      state = 0;
      this._keys = $.ListImplementation_List(newCapacity);
      this._values = $.ListImplementation_List(newCapacity, $.getRuntimeTypeInfo(this).V);
      for (var i = 0; $.ltB(i, capacity); ++i) {
        var key = $.index(oldKeys, i);
        if (key == null || key === $.CTC14)
          continue;
        var value = $.index(oldValues, i);
        var newIndex = this._probeForAdding$1(key);
        $.indexSet(this._keys, newIndex, key);
        $.indexSet(this._values, newIndex, value);
      }
      this._numberOfDeleted = 0;
  }
},
 clear$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number')
    return this.clear$0$bailout(1, length$);
  for (var i = 0; i < length$; ++i) {
    $.indexSet(this._keys, i, null);
    $.indexSet(this._values, i, null);
  }
},
 clear$0$bailout: function(state, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    $.indexSet(this._keys, i, null);
    $.indexSet(this._values, i, null);
  }
},
 operator$indexSet$2: function(key, value) {
  this._ensureCapacity$0();
  var index = this._probeForAdding$1(key);
  var t1 = this._keys;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))
    return this.operator$indexSet$2$bailout(1, key, value, index, t1);
  if (index !== (index | 0))
    throw $.iae(index);
  if (index < 0 || index >= t1.length)
    throw $.ioore(index);
  if (!(t1[index] == null)) {
    if (index < 0 || index >= t1.length)
      throw $.ioore(index);
    var t2 = t1[index] === $.CTC14;
    t1 = t2;
  } else
    t1 = true;
  if (t1) {
    t1 = this._numberOfEntries;
    if (typeof t1 !== 'number')
      return this.operator$indexSet$2$bailout(3, key, value, t1, index);
    this._numberOfEntries = t1 + 1;
  }
  t1 = this._keys;
  if (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())
    return this.operator$indexSet$2$bailout(4, key, value, t1, index);
  if (index < 0 || index >= t1.length)
    throw $.ioore(index);
  t1[index] = key;
  t1 = this._values;
  if (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())
    return this.operator$indexSet$2$bailout(5, value, t1, index, 0);
  if (index < 0 || index >= t1.length)
    throw $.ioore(index);
  t1[index] = value;
},
 operator$indexSet$2$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var key = env0;
      var value = env1;
      index = env2;
      t1 = env3;
      break;
    case 2:
      key = env0;
      value = env1;
      index = env2;
      t1 = env3;
      break;
    case 3:
      key = env0;
      value = env1;
      t1 = env2;
      index = env3;
      break;
    case 4:
      key = env0;
      value = env1;
      t1 = env2;
      index = env3;
      break;
    case 5:
      value = env0;
      t1 = env1;
      index = env2;
      break;
  }
  switch (state) {
    case 0:
      this._ensureCapacity$0();
      var index = this._probeForAdding$1(key);
      var t1 = this._keys;
    case 1:
      state = 0;
    case 2:
      if (state === 2 || state === 0 && !($.index(t1, index) == null))
        switch (state) {
          case 0:
            t1 = this._keys;
          case 2:
            state = 0;
            var t3 = $.index(t1, index) === $.CTC14;
            t1 = t3;
        }
      else
        t1 = true;
    case 3:
      if (state === 3 || state === 0 && t1)
        switch (state) {
          case 0:
            t1 = this._numberOfEntries;
          case 3:
            state = 0;
            this._numberOfEntries = $.add(t1, 1);
        }
      t1 = this._keys;
    case 4:
      state = 0;
      $.indexSet(t1, index, key);
      t1 = this._values;
    case 5:
      state = 0;
      $.indexSet(t1, index, value);
  }
},
 operator$index$1: function(key) {
  var index = this._probeForLookup$1(key);
  if ($.ltB(index, 0))
    return;
  return $.index(this._values, index);
},
 remove$1: function(key) {
  var index = this._probeForLookup$1(key);
  if ($.geB(index, 0)) {
    this._numberOfEntries = $.sub(this._numberOfEntries, 1);
    var value = $.index(this._values, index);
    $.indexSet(this._values, index, null);
    $.indexSet(this._keys, index, $.CTC14);
    this._numberOfDeleted = $.add(this._numberOfDeleted, 1);
    return value;
  }
  return;
},
 isEmpty$0: function() {
  return $.eq(this._numberOfEntries, 0);
},
 get$length: function() {
  return this._numberOfEntries;
},
 forEach$1: function(f) {
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number')
    return this.forEach$1$bailout(1, f, length$);
  for (var i = 0; i < length$; ++i) {
    var key = $.index(this._keys, i);
    if (!(key == null) && !(key === $.CTC14))
      f.call$2(key, $.index(this._values, i));
  }
},
 forEach$1$bailout: function(state, f, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    var key = $.index(this._keys, i);
    if (!(key == null) && !(key === $.CTC14))
      f.call$2(key, $.index(this._values, i));
  }
},
 getKeys$0: function() {
  var t1 = {};
  var list = $.ListImplementation_List($.get$length(this), $.getRuntimeTypeInfo(this).K);
  t1.i_10 = 0;
  this.forEach$1(new $.HashMapImplementation_getKeys__(list, t1));
  return list;
},
 getValues$0: function() {
  var t1 = {};
  var list = $.ListImplementation_List($.get$length(this), $.getRuntimeTypeInfo(this).V);
  t1.i_1 = 0;
  this.forEach$1(new $.HashMapImplementation_getValues__(list, t1));
  return list;
},
 containsKey$1: function(key) {
  return !$.eqB(this._probeForLookup$1(key), -1);
},
 toString$0: function() {
  return $.Maps_mapToString(this);
},
 HashMapImplementation$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = $.HashMapImplementation__computeLoadLimit(8);
  this._keys = $.ListImplementation_List(8);
  this._values = $.ListImplementation_List(8, $.getRuntimeTypeInfo(this).V);
},
 is$Map: function() { return true; }
};

$$._DeletedKeySentinel = {"":
 [],
 "super": "Object"
};

$$.KeyValuePair = {"":
 ["key?", "value="],
 "super": "Object"
};

$$.LinkedHashMapImplementation = {"":
 ["_list", "_lib0_map?"],
 "super": "Object",
 operator$indexSet$2: function(key, value) {
  var t1 = this._lib0_map;
  if (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())
    return this.operator$indexSet$2$bailout(1, key, value, t1);
  if (t1.containsKey$1(key) === true) {
    if (key !== (key | 0))
      throw $.iae(key);
    if (key < 0 || key >= t1.length)
      throw $.ioore(key);
    t1[key].get$element().set$value(value);
  } else {
    var t2 = this._list;
    $.addLast(t2, $.KeyValuePair$(key, value, $.getRuntimeTypeInfo(this).K, $.getRuntimeTypeInfo(this).V));
    t2 = t2.lastEntry$0();
    if (key !== (key | 0))
      throw $.iae(key);
    if (key < 0 || key >= t1.length)
      throw $.ioore(key);
    t1[key] = t2;
  }
},
 operator$indexSet$2$bailout: function(state, key, value, t1) {
  if (t1.containsKey$1(key) === true)
    $.index(t1, key).get$element().set$value(value);
  else {
    var t2 = this._list;
    $.addLast(t2, $.KeyValuePair$(key, value, $.getRuntimeTypeInfo(this).K, $.getRuntimeTypeInfo(this).V));
    $.indexSet(t1, key, t2.lastEntry$0());
  }
},
 operator$index$1: function(key) {
  var entry = $.index(this._lib0_map, key);
  if (entry == null)
    return;
  return entry.get$element().get$value();
},
 remove$1: function(key) {
  var entry = this._lib0_map.remove$1(key);
  if (entry == null)
    return;
  entry.remove$0();
  return entry.get$element().get$value();
},
 getKeys$0: function() {
  var t1 = {};
  var list = $.ListImplementation_List($.get$length(this), $.getRuntimeTypeInfo(this).K);
  t1.index_10 = 0;
  $.forEach(this._list, new $.LinkedHashMapImplementation_getKeys__(list, t1));
  return list;
},
 getValues$0: function() {
  var t1 = {};
  var list = $.ListImplementation_List($.get$length(this), $.getRuntimeTypeInfo(this).V);
  t1.index_1 = 0;
  $.forEach(this._list, new $.LinkedHashMapImplementation_getValues__(list, t1));
  return list;
},
 forEach$1: function(f) {
  $.forEach(this._list, new $.LinkedHashMapImplementation_forEach__(f));
},
 containsKey$1: function(key) {
  return this._lib0_map.containsKey$1(key);
},
 get$length: function() {
  return $.get$length(this._lib0_map);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 clear$0: function() {
  $.clear(this._lib0_map);
  $.clear(this._list);
},
 toString$0: function() {
  return $.Maps_mapToString(this);
},
 LinkedHashMapImplementation$0: function() {
  this._lib0_map = $.HashMapImplementation$($.getRuntimeTypeInfo(this).K, 'DoubleLinkedQueueEntry<KeyValuePair<K, V>>');
  this._list = $.DoubleLinkedQueue$('KeyValuePair<K, V>');
},
 is$Map: function() { return true; }
};

$$.DoubleLinkedQueueEntry = {"":
 ["_previous=", "_next=", "_element?"],
 "super": "Object",
 _link$2: function(p, n) {
  this._next = n;
  this._previous = p;
  p.set$_next(this);
  n.set$_previous(this);
},
 prepend$1: function(e) {
  $.DoubleLinkedQueueEntry$(e, $.getRuntimeTypeInfo(this).E)._link$2(this._previous, this);
},
 remove$0: function() {
  var t1 = this._next;
  this._previous.set$_next(t1);
  t1 = this._previous;
  this._next.set$_previous(t1);
  this._next = null;
  this._previous = null;
  return this._element;
},
 _asNonSentinelEntry$0: function() {
  return this;
},
 previousEntry$0: function() {
  return this._previous._asNonSentinelEntry$0();
},
 get$element: function() {
  return this._element;
},
 DoubleLinkedQueueEntry$1: function(e) {
  this._element = e;
}
};

$$._DoubleLinkedQueueEntrySentinel = {"":
 ["_previous", "_next", "_element"],
 "super": "DoubleLinkedQueueEntry",
 remove$0: function() {
  throw $.$$throw($.CTC15);
},
 _asNonSentinelEntry$0: function() {
  return;
},
 get$element: function() {
  throw $.$$throw($.CTC15);
},
 _DoubleLinkedQueueEntrySentinel$0: function() {
  this._link$2(this, this);
}
};

$$.DoubleLinkedQueue = {"":
 ["_sentinel"],
 "super": "Object",
 addLast$1: function(value) {
  this._sentinel.prepend$1(value);
},
 add$1: function(value) {
  this.addLast$1(value);
},
 removeLast$0: function() {
  return this._sentinel.get$_previous().remove$0();
},
 removeFirst$0: function() {
  return this._sentinel.get$_next().remove$0();
},
 lastEntry$0: function() {
  return this._sentinel.previousEntry$0();
},
 get$length: function() {
  var t1 = {};
  t1.counter_1 = 0;
  this.forEach$1(new $.DoubleLinkedQueue_length__(t1));
  return t1.counter_1;
},
 isEmpty$0: function() {
  var t1 = this._sentinel;
  var t2 = t1.get$_next();
  return t2 == null ? t1 == null : t2 === t1;
},
 clear$0: function() {
  var t1 = this._sentinel;
  t1.set$_next(t1);
  t1.set$_previous(t1);
},
 forEach$1: function(f) {
  var t1 = this._sentinel;
  var entry = t1.get$_next();
  for (; !(entry == null ? t1 == null : entry === t1);) {
    var nextEntry = entry.get$_next();
    f.call$1(entry.get$_element());
    entry = nextEntry;
  }
},
 iterator$0: function() {
  return $._DoubleLinkedQueueIterator$(this._sentinel, $.getRuntimeTypeInfo(this).E);
},
 toString$0: function() {
  return $.Collections_collectionToString(this);
},
 DoubleLinkedQueue$0: function() {
  this._sentinel = $._DoubleLinkedQueueEntrySentinel$($.getRuntimeTypeInfo(this).E);
},
 is$Collection: function() { return true; }
};

$$._DoubleLinkedQueueIterator = {"":
 ["_sentinel", "_currentEntry"],
 "super": "Object",
 hasNext$0: function() {
  var t1 = this._currentEntry.get$_next();
  var t2 = this._sentinel;
  return !(t1 == null ? t2 == null : t1 === t2);
},
 next$0: function() {
  if (this.hasNext$0() !== true)
    throw $.$$throw($.CTC11);
  this._currentEntry = this._currentEntry.get$_next();
  return this._currentEntry.get$element();
},
 _DoubleLinkedQueueIterator$1: function(_sentinel) {
  this._currentEntry = this._sentinel;
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
 ["_value?"],
 "super": "Object",
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.S(this._value);
},
 is$Exception: true
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
},
 is$Exception: true
};

$$.ObjectNotClosureException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Object is not closure';
},
 is$Exception: true
};

$$.IllegalArgumentException = {"":
 ["_arg"],
 "super": "Object",
 toString$0: function() {
  return 'Illegal argument(s): ' + $.S(this._arg);
},
 is$Exception: true
};

$$.StackOverflowException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Stack Overflow';
},
 is$Exception: true
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
},
 is$Exception: true
};

$$.NoMoreElementsException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'NoMoreElementsException';
},
 is$Exception: true
};

$$.EmptyQueueException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'EmptyQueueException';
},
 is$Exception: true
};

$$.UnsupportedOperationException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.S(this._message);
},
 is$Exception: true
};

$$.NotImplementedException = {"":
 ["_message"],
 "super": "Object",
 toString$0: function() {
  var t1 = this._message;
  return !(t1 == null) ? 'NotImplementedException: ' + $.S(t1) : 'NotImplementedException';
},
 is$Exception: true
};

$$.IllegalJSRegExpException = {"":
 ["_pattern", "_errmsg"],
 "super": "Object",
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.S(this._pattern) + '\' \'' + $.S(this._errmsg) + '\'';
},
 is$Exception: true
};

$$.FutureNotCompleteException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Exception: future has not been completed';
},
 is$Exception: true
};

$$.FutureAlreadyCompleteException = {"":
 [],
 "super": "Object",
 toString$0: function() {
  return 'Exception: future already completed';
},
 is$Exception: true
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

$$.StackTrace = {"":
 ["stack"],
 "super": "Object",
 toString$0: function() {
  var t1 = this.stack;
  return !(t1 == null) ? t1 : '';
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

$$.AnimationMap = {"":
 ["_stage", "_width?", "_height?", "_map?", "_mapData", "_chipWidth?", "_chipHeight?", "_distance"],
 "super": "Object",
 set$distance: function(d) {
  this._distance = d;
},
 _initialize$0: function() {
  var t1 = this._stage;
  this._width = t1.get$width();
  this._height = t1.get$height();
  this._loadMap$0();
},
 _loadMap$0: function() {
  $.print('loading map image start.');
  this._map = $.FieldMap$(this._width, this._height);
  this._map.initialize$4('pipo-map001.png', this._chipWidth, this._chipHeight, this.get$_createMapData());
},
 _createMapData$0: function() {
  $.print('create map data start.');
  this._mapData = [];
  var t1 = this._width;
  var t2 = this._chipWidth;
  var col = $.add($.div(t1, t2), 2);
  if (typeof col !== 'number')
    return this._createMapData$0$bailout(1, t2, col, 0, 0);
  var t4 = this._height;
  var t5 = this._chipHeight;
  var row = $.add($.div(t4, t5), 2);
  if (typeof row !== 'number')
    return this._createMapData$0$bailout(2, row, t2, col, t5);
  var posX = -t2;
  var posY = -t5;
  for (var t1 = row / 2, t3 = col / 2, posX0 = posX, y = 0; y < row; ++y) {
    for (var t4 = y === t1, x = 0; x < col; ++x) {
      if (t4)
        $.add$1(this._mapData, $.MapChipData$(posX0, posY, 10));
      else {
        var t6 = x === t3;
        var t7 = this._mapData;
        if (t6)
          $.add$1(t7, $.MapChipData$(posX0, posY, 10));
        else
          $.add$1(t7, $.MapChipData$(posX0, posY, 0));
      }
      posX0 += t2;
    }
    posY += t5;
    posX0 = posX;
  }
  this._start$0();
},
 _createMapData$0$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      t2 = env0;
      col = env1;
      break;
    case 2:
      row = env0;
      t2 = env1;
      col = env2;
      t5 = env3;
      break;
  }
  switch (state) {
    case 0:
      $.print('create map data start.');
      this._mapData = [];
      var t1 = this._width;
      var t2 = this._chipWidth;
      var col = $.add($.div(t1, t2), 2);
    case 1:
      state = 0;
      var t4 = this._height;
      var t5 = this._chipHeight;
      var row = $.add($.div(t4, t5), 2);
    case 2:
      state = 0;
      var posX = -t2;
      var posY = -t5;
      for (var y = 0; $.ltB(y, row); ++y) {
        for (var x = 0; $.ltB(x, col); ++x) {
          if (y === $.div(row, 2))
            $.add$1(this._mapData, $.MapChipData$(posX, posY, 10));
          else {
            t1 = x === $.div(col, 2);
            var t3 = this._mapData;
            if (t1)
              $.add$1(t3, $.MapChipData$(posX, posY, 10));
            else
              $.add$1(t3, $.MapChipData$(posX, posY, 0));
          }
          posX += t2;
        }
        posX = -t2;
        posY += t5;
      }
      this._start$0();
  }
},
 get$_createMapData: function() { return new $.BoundClosure(this, '_createMapData$0'); },
 _start$0: function() {
  $.print('animation start.');
  this.redraw$0();
},
 redraw$0: function() {
  $.window().requestAnimationFrame$1(this.get$update());
},
 update$1: function(time) {
  var context = this._stage.get$context2d();
  switch (this._distance) {
    case 0:
      this._moveLeft$0();
      break;
    case 1:
      this._moveRight$0();
      break;
    case 2:
      this._moveTop$0();
      break;
    case 3:
      this._moveBottom$0();
      break;
  }
  this._fillBackground$1(context);
  this._draw$1(context);
  this.redraw$0();
},
 get$update: function() { return new $.BoundClosure0(this, 'update$1'); },
 _moveLeft$0: function() {
  $.forEach(this._mapData, new $.AnimationMap__moveLeft_anon(this));
},
 _moveRight$0: function() {
  $.forEach(this._mapData, new $.AnimationMap__moveRight_anon(this));
},
 _moveTop$0: function() {
  $.forEach(this._mapData, new $.AnimationMap__moveTop_anon(this));
},
 _moveBottom$0: function() {
  $.forEach(this._mapData, new $.AnimationMap__moveBottom_anon(this));
},
 _draw$1: function(context) {
  $.forEach(this._mapData, new $.AnimationMap__draw_anon(this, context));
},
 _fillBackground$1: function(context) {
  $.forEach(this._mapData, new $.AnimationMap__fillBackground_anon(this, context));
},
 AnimationMap$1: function(_stage) {
  this._initialize$0();
}
};

$$.MapChipData = {"":
 ["_x", "_y", "_id?"],
 "super": "Object",
 get$x: function() {
  return this._x;
},
 get$y: function() {
  return this._y;
},
 get$id: function() {
  return this._id;
},
 set$x: function(x) {
  this._x = x;
},
 set$y: function(y) {
  this._y = y;
}
};

$$.FieldMap = {"":
 ["_canvasWidth", "_canvasHeight", "_image", "_chipWidth?", "_chipHeight?", "positions", "_chipCount"],
 "super": "Object",
 initialize$4: function(source, chipWidth, chipHeight, callback) {
  this._chipWidth = chipWidth;
  this._chipHeight = chipHeight;
  this._loadImage$2(source, callback);
},
 draw$4: function(context, chipId, posX, posY) {
  var t1 = this._image;
  var t2 = $.index(this.positions, chipId).get$x();
  var t3 = $.index(this.positions, chipId).get$y();
  var t4 = this._chipWidth;
  var t5 = this._chipHeight;
  context.drawImage$9(t1, t2, t3, t4, t5, posX, posY, t4, t5);
},
 _loadImage$2: function(source, callback) {
  this._image = $._ElementFactoryProvider_Element$tag('img');
  this._image.set$src(source);
  $.add$1(this._image.get$on().get$load(), new $.FieldMap__loadImage_anon(this, callback));
},
 _setupImagePositions$0: function() {
  var col = $.div(this._image.get$width(), this._chipWidth);
  if (typeof col !== 'number')
    return this._setupImagePositions$0$bailout(1, col, 0);
  var row = $.div(this._image.get$height(), this._chipHeight);
  if (typeof row !== 'number')
    return this._setupImagePositions$0$bailout(2, row, col);
  this.positions = [];
  for (var posX = 0, posY = 0, y = 0; y < row; ++y) {
    for (var x = 0; x < col; ++x) {
      $.add$1(this.positions, $._PointFactoryProvider_Point(posX, posY));
      var t1 = this._chipWidth;
      if (typeof t1 !== 'number')
        throw $.iae(t1);
      posX += t1;
    }
    t1 = this._chipHeight;
    if (typeof t1 !== 'number')
      throw $.iae(t1);
    posY += t1;
    posX = 0;
  }
  this._chipCount = col * row;
  $.print('map image col:' + $.S(col) + ' row:' + $.S(row) + ' chip count:' + $.S(this._chipCount));
},
 _setupImagePositions$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      col = env0;
      break;
    case 2:
      row = env0;
      col = env1;
      break;
  }
  switch (state) {
    case 0:
      var col = $.div(this._image.get$width(), this._chipWidth);
    case 1:
      state = 0;
      var row = $.div(this._image.get$height(), this._chipHeight);
    case 2:
      state = 0;
      this.positions = [];
      for (var posX = 0, posY = 0, y = 0; $.ltB(y, row); ++y) {
        for (var x = 0; $.ltB(x, col); ++x) {
          $.add$1(this.positions, $._PointFactoryProvider_Point(posX, posY));
          var t1 = this._chipWidth;
          if (typeof t1 !== 'number')
            throw $.iae(t1);
          posX += t1;
        }
        t1 = this._chipHeight;
        if (typeof t1 !== 'number')
          throw $.iae(t1);
        posY += t1;
        posX = 0;
      }
      this._chipCount = $.mul(col, row);
      $.print('map image col:' + $.S(col) + ' row:' + $.S(row) + ' chip count:' + $.S(this._chipCount));
  }
}
};

$$._AbstractWorkerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._AudioContextEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$complete: function() {
  return this.operator$index$1('complete');
},
 complete$1: function(arg0) { return this.get$complete().call$1(arg0); }
};

$$._BatteryManagerEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._BodyElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$load: function() {
  return this.operator$index$1('load');
}
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
},
 get$load: function() {
  return this.operator$index$1('load');
},
 get$reset: function() {
  return this.operator$index$1('reset');
},
 reset$0: function() { return this.get$reset().call$0(); }
};

$$._ElementEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
},
 get$load: function() {
  return this.operator$index$1('load');
},
 get$reset: function() {
  return this.operator$index$1('reset');
},
 reset$0: function() { return this.get$reset().call$0(); }
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
 remove$2: function(listener, useCapture) {
  this._remove$2(listener, useCapture);
  return this;
},
 remove$1: function(listener) {
  return this.remove$2(listener,false)
},
 _add$2: function(listener, useCapture) {
  this._ptr.$dom_addEventListener$3(this._type, listener, useCapture);
},
 _remove$2: function(listener, useCapture) {
  this._ptr.$dom_removeEventListener$3(this._type, listener, useCapture);
}
};

$$._FileReaderEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$load: function() {
  return this.operator$index$1('load');
}
};

$$._FileWriterEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl"
};

$$._FrameSetElementEventsImpl = {"":
 ["_ptr"],
 "super": "_ElementEventsImpl",
 get$load: function() {
  return this.operator$index$1('load');
}
};

$$._HttpRequestEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$load: function() {
  return this.operator$index$1('load');
}
};

$$._HttpRequestUploadEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$load: function() {
  return this.operator$index$1('load');
}
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
 "super": "_EventsImpl",
 get$complete: function() {
  return this.operator$index$1('complete');
},
 complete$1: function(arg0) { return this.get$complete().call$1(arg0); }
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
},
 get$close: function() {
  return this.operator$index$1('close');
},
 close$0: function() { return this.get$close().call$0(); }
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
},
 get$load: function() {
  return this.operator$index$1('load');
},
 get$reset: function() {
  return this.operator$index$1('reset');
},
 reset$0: function() { return this.get$reset().call$0(); }
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
 "super": "_EventsImpl",
 get$close: function() {
  return this.operator$index$1('close');
},
 close$0: function() { return this.get$close().call$0(); }
};

$$._WindowEventsImpl = {"":
 ["_ptr"],
 "super": "_EventsImpl",
 get$click: function() {
  return this.operator$index$1('click');
},
 get$load: function() {
  return this.operator$index$1('load');
},
 get$reset: function() {
  return this.operator$index$1('reset');
},
 reset$0: function() { return this.get$reset().call$0(); }
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
    throw $.$$throw($.CTC11);
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
        throw $.$$throw($.CTC11);
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

$$._Manager = {"":
 ["nextIsolateId=", "currentManagerId?", "nextManagerId", "currentContext=", "rootContext=", "topEventLoop?", "fromCommandLine?", "isWorker?", "supportsWorkers", "isolates?", "mainManager?", "managers?"],
 "super": "Object",
 get$useWorkers: function() {
  return this.supportsWorkers;
},
 get$needSerialization: function() {
  return this.get$useWorkers();
},
 _nativeDetectEnvironment$0: function() {
    this.isWorker = $isWorker;
    this.supportsWorkers = $supportsWorkers;
    this.fromCommandLine = typeof(window) == 'undefined';
  
},
 _nativeInitWorkerMessageHandler$0: function() {
    $globalThis.onmessage = function (e) {
      _IsolateNatives._processWorkerMessage(this.mainManager, e);
    }
  
},
 maybeCloseWorker$0: function() {
  if ($.isEmpty(this.isolates) === true)
    this.mainManager.postMessage$1($._serializeMessage($.makeLiteralMap(['command', 'close'])));
},
 _Manager$0: function() {
  this._nativeDetectEnvironment$0();
  this.topEventLoop = $._EventLoop$();
  this.isolates = $.HashMapImplementation$('int', '_IsolateContext');
  this.managers = $.HashMapImplementation$('int', '_ManagerStub');
  if (this.isWorker === true) {
    this.mainManager = $._MainManagerStub$();
    this._nativeInitWorkerMessageHandler$0();
  }
}
};

$$._IsolateContext = {"":
 ["id?", "ports?", "isolateStatics"],
 "super": "Object",
 initGlobals$0: function() {
$initGlobals(this);
},
 eval$1: function(code) {
  var old = $._globalState().get$currentContext();
  $._globalState().set$currentContext(this);
  this._setGlobals$0();
  var result = null;
  try {
    result = code.call$0();
  } finally {
    var t1 = old;
    $._globalState().set$currentContext(t1);
    t1 = old;
    if (!(t1 == null))
      t1._setGlobals$0();
  }
  return result;
},
 _setGlobals$0: function() {
$setGlobals(this);
},
 lookup$1: function(portId) {
  return $.index(this.ports, portId);
},
 register$2: function(portId, port) {
  var t1 = this.ports;
  if (t1.containsKey$1(portId) === true)
    throw $.$$throw($.ExceptionImplementation$('Registry: ports must be registered only once.'));
  $.indexSet(t1, portId, port);
  $.indexSet($._globalState().get$isolates(), this.id, this);
},
 unregister$1: function(portId) {
  var t1 = this.ports;
  t1.remove$1(portId);
  if ($.isEmpty(t1) === true)
    $._globalState().get$isolates().remove$1(this.id);
},
 _IsolateContext$0: function() {
  var t1 = $._globalState();
  var t2 = t1.get$nextIsolateId();
  t1.set$nextIsolateId($.add(t2, 1));
  this.id = t2;
  this.ports = $.HashMapImplementation$('int', 'ReceivePort');
  this.initGlobals$0();
}
};

$$._EventLoop = {"":
 ["events"],
 "super": "Object",
 enqueue$3: function(isolate, fn, msg) {
  $.addLast(this.events, $._IsolateEvent$(isolate, fn, msg));
},
 dequeue$0: function() {
  var t1 = this.events;
  if ($.isEmpty(t1) === true)
    return;
  return t1.removeFirst$0();
},
 runIteration$0: function() {
  var event$ = this.dequeue$0();
  if (event$ == null) {
    if ($._globalState().get$isWorker() === true)
      $._globalState().maybeCloseWorker$0();
    else if (!($._globalState().get$rootContext() == null) && $._globalState().get$isolates().containsKey$1($._globalState().get$rootContext().get$id()) === true && $._globalState().get$fromCommandLine() === true && $.isEmpty($._globalState().get$rootContext().get$ports()) === true)
      throw $.$$throw($.ExceptionImplementation$('Program exited with open ReceivePorts.'));
    return false;
  }
  event$.process$0();
  return true;
},
 _runHelper$0: function() {
  if (!($._window() == null))
    new $._EventLoop__runHelper_next(this).call$0();
  else
    for (; this.runIteration$0() === true;)
      ;
},
 run$0: function() {
  if ($._globalState().get$isWorker() !== true)
    this._runHelper$0();
  else
    try {
      this._runHelper$0();
    } catch (exception) {
      var t1 = $.unwrapException(exception);
      var e = t1;
      var trace = $.getTraceFromException(exception);
      $._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command', 'error', 'msg', $.S(e) + '\n' + $.S(trace)])));
    }

}
};

$$._IsolateEvent = {"":
 ["isolate", "fn", "message"],
 "super": "Object",
 process$0: function() {
  this.isolate.eval$1(this.fn);
}
};

$$._MainManagerStub = {"":
 [],
 "super": "Object",
 get$id: function() {
  return 0;
},
 postMessage$1: function(msg) {
$globalThis.postMessage(msg);
}
};

$$._BaseSendPort = {"":
 ["_isolateId?"],
 "super": "Object",
 _checkReplyTo$1: function(replyTo) {
  if (!(replyTo == null) && !(typeof replyTo === 'object' && replyTo !== null && !!replyTo.is$_NativeJsSendPort) && !(typeof replyTo === 'object' && replyTo !== null && !!replyTo.is$_WorkerSendPort) && !(typeof replyTo === 'object' && replyTo !== null && !!replyTo.is$_BufferingSendPort))
    throw $.$$throw($.ExceptionImplementation$('SendPort.send: Illegal replyTo port type'));
},
 call$1: function(message) {
  var completer = $.CompleterImpl$();
  var port = $._ReceivePortImpl$();
  this.send$2(message, port.toSendPort$0());
  port.receive$1(new $._BaseSendPort_call_anon(port, completer));
  return completer.get$future();
},
 is$SendPort: true
};

$$._NativeJsSendPort = {"":
 ["_receivePort?", "_isolateId"],
 "super": "_BaseSendPort",
 send$2: function(message, replyTo) {
  $._waitForPendingPorts([message, replyTo], new $._NativeJsSendPort_send_anon(this, message, replyTo));
},
 operator$eq$1: function(other) {
  return typeof other === 'object' && other !== null && !!other.is$_NativeJsSendPort && $.eqB(this._receivePort, other._receivePort);
},
 hashCode$0: function() {
  return this._receivePort.get$_lib1_id();
},
 is$_NativeJsSendPort: true,
 is$SendPort: true
};

$$._WorkerSendPort = {"":
 ["_workerId?", "_receivePortId", "_isolateId"],
 "super": "_BaseSendPort",
 send$2: function(message, replyTo) {
  $._waitForPendingPorts([message, replyTo], new $._WorkerSendPort_send_anon(this, message, replyTo));
},
 operator$eq$1: function(other) {
  if (typeof other === 'object' && other !== null && !!other.is$_WorkerSendPort)
    var t1 = $.eqB(this._workerId, other._workerId) && $.eqB(this._isolateId, other._isolateId) && $.eqB(this._receivePortId, other._receivePortId);
  else
    t1 = false;
  return t1;
},
 hashCode$0: function() {
  return $.xor($.xor($.shl(this._workerId, 16), $.shl(this._isolateId, 8)), this._receivePortId);
},
 is$_WorkerSendPort: true,
 is$SendPort: true
};

$$._ReceivePortImpl = {"":
 ["_lib1_id?", "_callback?"],
 "super": "Object",
 _callback$2: function(arg0, arg1) { return this._callback.call$2(arg0, arg1); },
 receive$1: function(onMessage) {
  this._callback = onMessage;
},
 close$0: function() {
  this._callback = null;
  $._globalState().get$currentContext().unregister$1(this._lib1_id);
},
 toSendPort$0: function() {
  return $._NativeJsSendPort$(this, $._globalState().get$currentContext().get$id());
},
 _ReceivePortImpl$0: function() {
  $._globalState().get$currentContext().register$2(this._lib1_id, this);
}
};

$$._PendingSendPortFinder = {"":
 ["ports?", "_visited"],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x) {
},
 visitList$1: function(list) {
  var t1 = this._visited;
  if (!($.index(t1, list) == null))
    return;
  $.indexSet(t1, list, true);
  $.forEach(list, new $._PendingSendPortFinder_visitList_anon(this));
},
 visitMap$1: function(map) {
  var t1 = this._visited;
  if (!($.index(t1, map) == null))
    return;
  $.indexSet(t1, map, true);
  $.forEach(map.getValues$0(), new $._PendingSendPortFinder_visitMap_anon(this));
},
 visitSendPort$1: function(port) {
  if (!!port.is$_BufferingSendPort && port._port == null)
    this.ports.push(port.get$_futurePort());
},
 _PendingSendPortFinder$0: function() {
  this._visited = $._JsVisitedMap$();
}
};

$$._JsSerializer = {"":
 ["_nextFreeRefId", "_visited"],
 "super": "_Serializer",
 visitSendPort$1: function(x) {
  if (typeof x === 'object' && x !== null && !!x.is$_NativeJsSendPort)
    return this.visitNativeJsSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_WorkerSendPort)
    return this.visitWorkerSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_BufferingSendPort)
    return this.visitBufferingSendPort$1(x);
  throw $.$$throw('Illegal underlying port ' + $.S(x));
},
 visitNativeJsSendPort$1: function(port) {
  return ['sendport', $._globalState().get$currentManagerId(), port._isolateId, port._receivePort.get$_lib1_id()];
},
 visitWorkerSendPort$1: function(port) {
  return ['sendport', port._workerId, port._isolateId, port._receivePortId];
},
 visitBufferingSendPort$1: function(port) {
  var t1 = port._port;
  if (!(t1 == null))
    return this.visitSendPort$1(t1);
  else
    throw $.$$throw('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');
},
 _JsSerializer$0: function() {
  this._visited = $._JsVisitedMap$();
}
};

$$._JsCopier = {"":
 ["_visited"],
 "super": "_Copier",
 visitSendPort$1: function(x) {
  if (typeof x === 'object' && x !== null && !!x.is$_NativeJsSendPort)
    return this.visitNativeJsSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_WorkerSendPort)
    return this.visitWorkerSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_BufferingSendPort)
    return this.visitBufferingSendPort$1(x);
  throw $.$$throw('Illegal underlying port ' + $.S(this.get$p()));
},
 visitNativeJsSendPort$1: function(port) {
  return $._NativeJsSendPort$(port._receivePort, port._isolateId);
},
 visitWorkerSendPort$1: function(port) {
  return $._WorkerSendPort$(port._workerId, port._isolateId, port._receivePortId);
},
 visitBufferingSendPort$1: function(port) {
  var t1 = port._port;
  if (!(t1 == null))
    return this.visitSendPort$1(t1);
  else
    throw $.$$throw('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');
},
 _JsCopier$0: function() {
  this._visited = $._JsVisitedMap$();
}
};

$$._JsDeserializer = {"":
 ["_deserialized"],
 "super": "_Deserializer",
 deserializeSendPort$1: function(x) {
  var managerId = $.index(x, 1);
  var isolateId = $.index(x, 2);
  var receivePortId = $.index(x, 3);
  if ($.eqB(managerId, $._globalState().get$currentManagerId())) {
    var isolate = $.index($._globalState().get$isolates(), isolateId);
    if (isolate == null)
      return;
    return $._NativeJsSendPort$(isolate.lookup$1(receivePortId), isolateId);
  } else
    return $._WorkerSendPort$(managerId, isolateId, receivePortId);
}
};

$$._JsVisitedMap = {"":
 ["tagged"],
 "super": "Object",
 operator$index$1: function(object) {
  return this._getAttachedInfo$1(object);
},
 operator$indexSet$2: function(object, info) {
  $.add$1(this.tagged, object);
  this._setAttachedInfo$2(object, info);
},
 reset$0: function() {
  this.tagged = $.ListImplementation_List(null);
},
 cleanup$0: function() {
  var length$ = $.get$length(this.tagged);
  if (typeof length$ !== 'number')
    return this.cleanup$0$bailout(1, length$);
  var i = 0;
  for (; i < length$; ++i)
    this._clearAttachedInfo$1($.index(this.tagged, i));
  this.tagged = null;
},
 cleanup$0$bailout: function(state, length$) {
  var i = 0;
  for (; $.ltB(i, length$); ++i)
    this._clearAttachedInfo$1($.index(this.tagged, i));
  this.tagged = null;
},
 _clearAttachedInfo$1: function(o) {
o['__MessageTraverser__attached_info__'] = (void 0);
},
 _setAttachedInfo$2: function(o, info) {
o['__MessageTraverser__attached_info__'] = info;
},
 _getAttachedInfo$1: function(o) {
return o['__MessageTraverser__attached_info__'];
}
};

$$._MessageTraverserVisitedMap = {"":
 [],
 "super": "Object",
 operator$index$1: function(object) {
  return;
},
 operator$indexSet$2: function(object, info) {
},
 reset$0: function() {
},
 cleanup$0: function() {
}
};

$$._MessageTraverser = {"":
 [],
 "super": "Object",
 traverse$1: function(x) {
  if ($._MessageTraverser_isPrimitive(x))
    return this.visitPrimitive$1(x);
  var t1 = this._visited;
  t1.reset$0();
  var result = null;
  try {
    result = this._dispatch$1(x);
  } finally {
    t1.cleanup$0();
  }
  return result;
},
 _dispatch$1: function(x) {
  if ($._MessageTraverser_isPrimitive(x))
    return this.visitPrimitive$1(x);
  if (typeof x === 'object' && x !== null && (x.constructor === Array || x.is$List()))
    return this.visitList$1(x);
  if (typeof x === 'object' && x !== null && x.is$Map())
    return this.visitMap$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$SendPort)
    return this.visitSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$SendPortSync)
    return this.visitSendPortSync$1(x);
  return this.visitObject$1(x);
},
 visitObject$1: function(x) {
  throw $.$$throw('Message serialization: Illegal value ' + $.S(x) + ' passed');
}
};

$$._Copier = {"":
 [],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x) {
  return x;
},
 visitList$1: function(list) {
  if (typeof list !== 'object' || list === null || list.constructor !== Array && !list.is$JavaScriptIndexingBehavior())
    return this.visitList$1$bailout(1, list);
  var t1 = this._visited;
  var copy = t1.operator$index$1(list);
  if (!(copy == null))
    return copy;
  var len = list.length;
  copy = $.ListImplementation_List(len);
  t1.operator$indexSet$2(list, copy);
  for (var i = 0; i < len; ++i) {
    if (i < 0 || i >= list.length)
      throw $.ioore(i);
    t1 = this._dispatch$1(list[i]);
    if (i < 0 || i >= copy.length)
      throw $.ioore(i);
    copy[i] = t1;
  }
  return copy;
},
 visitList$1$bailout: function(state, list) {
  var t1 = this._visited;
  var copy = $.index(t1, list);
  if (!(copy == null))
    return copy;
  var len = $.get$length(list);
  copy = $.ListImplementation_List(len);
  $.indexSet(t1, list, copy);
  for (var i = 0; $.ltB(i, len); ++i) {
    t1 = this._dispatch$1($.index(list, i));
    if (i < 0 || i >= copy.length)
      throw $.ioore(i);
    copy[i] = t1;
  }
  return copy;
},
 visitMap$1: function(map) {
  var t1 = {};
  var t2 = this._visited;
  t1.copy_10 = $.index(t2, map);
  var t3 = t1.copy_10;
  if (!(t3 == null))
    return t3;
  t1.copy_10 = $.HashMapImplementation$();
  $.indexSet(t2, map, t1.copy_10);
  map.forEach$1(new $._Copier_visitMap_anon(this, t1));
  return t1.copy_10;
}
};

$$._Serializer = {"":
 [],
 "super": "_MessageTraverser",
 visitPrimitive$1: function(x) {
  return x;
},
 visitList$1: function(list) {
  var t1 = this._visited;
  var copyId = $.index(t1, list);
  if (!(copyId == null))
    return ['ref', copyId];
  var id = this._nextFreeRefId;
  this._nextFreeRefId = id + 1;
  $.indexSet(t1, list, id);
  return ['list', id, this._serializeList$1(list)];
},
 visitMap$1: function(map) {
  var t1 = this._visited;
  var copyId = $.index(t1, map);
  if (!(copyId == null))
    return ['ref', copyId];
  var id = this._nextFreeRefId;
  this._nextFreeRefId = id + 1;
  $.indexSet(t1, map, id);
  return ['map', id, this._serializeList$1(map.getKeys$0()), this._serializeList$1(map.getValues$0())];
},
 _serializeList$1: function(list) {
  if (typeof list !== 'string' && (typeof list !== 'object' || list === null || list.constructor !== Array && !list.is$JavaScriptIndexingBehavior()))
    return this._serializeList$1$bailout(1, list);
  var len = list.length;
  var result = $.ListImplementation_List(len);
  for (var i = 0; i < len; ++i) {
    if (i < 0 || i >= list.length)
      throw $.ioore(i);
    var t1 = this._dispatch$1(list[i]);
    if (i < 0 || i >= result.length)
      throw $.ioore(i);
    result[i] = t1;
  }
  return result;
},
 _serializeList$1$bailout: function(state, list) {
  var len = $.get$length(list);
  var result = $.ListImplementation_List(len);
  for (var i = 0; $.ltB(i, len); ++i) {
    var t1 = this._dispatch$1($.index(list, i));
    if (i < 0 || i >= result.length)
      throw $.ioore(i);
    result[i] = t1;
  }
  return result;
}
};

$$._Deserializer = {"":
 [],
 "super": "Object",
 deserialize$1: function(x) {
  if ($._Deserializer_isPrimitive(x))
    return x;
  this._deserialized = $.HashMapImplementation$();
  return this._deserializeHelper$1(x);
},
 _deserializeHelper$1: function(x) {
  if ($._Deserializer_isPrimitive(x))
    return x;
  switch ($.index(x, 0)) {
    case 'ref':
      return this._deserializeRef$1(x);
    case 'list':
      return this._deserializeList$1(x);
    case 'map':
      return this._deserializeMap$1(x);
    case 'sendport':
      return this.deserializeSendPort$1(x);
    default:
      return this.deserializeObject$1(x);
  }
},
 _deserializeRef$1: function(x) {
  var id = $.index(x, 1);
  return $.index(this._deserialized, id);
},
 _deserializeList$1: function(x) {
  var id = $.index(x, 1);
  var dartList = $.index(x, 2);
  if (typeof dartList !== 'object' || dartList === null || (dartList.constructor !== Array || !!dartList.immutable$list) && !dartList.is$JavaScriptIndexingBehavior())
    return this._deserializeList$1$bailout(1, dartList, id);
  $.indexSet(this._deserialized, id, dartList);
  var len = dartList.length;
  for (var i = 0; i < len; ++i) {
    if (i < 0 || i >= dartList.length)
      throw $.ioore(i);
    var t1 = this._deserializeHelper$1(dartList[i]);
    if (i < 0 || i >= dartList.length)
      throw $.ioore(i);
    dartList[i] = t1;
  }
  return dartList;
},
 _deserializeList$1$bailout: function(state, dartList, id) {
  $.indexSet(this._deserialized, id, dartList);
  var len = $.get$length(dartList);
  for (var i = 0; $.ltB(i, len); ++i)
    $.indexSet(dartList, i, this._deserializeHelper$1($.index(dartList, i)));
  return dartList;
},
 _deserializeMap$1: function(x) {
  var result = $.HashMapImplementation$();
  var id = $.index(x, 1);
  $.indexSet(this._deserialized, id, result);
  var keys = $.index(x, 2);
  if (typeof keys !== 'string' && (typeof keys !== 'object' || keys === null || keys.constructor !== Array && !keys.is$JavaScriptIndexingBehavior()))
    return this._deserializeMap$1$bailout(1, x, result, keys);
  var values = $.index(x, 3);
  if (typeof values !== 'string' && (typeof values !== 'object' || values === null || values.constructor !== Array && !values.is$JavaScriptIndexingBehavior()))
    return this._deserializeMap$1$bailout(2, values, result, keys);
  var len = keys.length;
  for (var i = 0; i < len; ++i) {
    if (i < 0 || i >= keys.length)
      throw $.ioore(i);
    var key = this._deserializeHelper$1(keys[i]);
    if (i < 0 || i >= values.length)
      throw $.ioore(i);
    result.operator$indexSet$2(key, this._deserializeHelper$1(values[i]));
  }
  return result;
},
 _deserializeMap$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var x = env0;
      result = env1;
      keys = env2;
      break;
    case 2:
      values = env0;
      result = env1;
      keys = env2;
      break;
  }
  switch (state) {
    case 0:
      var result = $.HashMapImplementation$();
      var id = $.index(x, 1);
      $.indexSet(this._deserialized, id, result);
      var keys = $.index(x, 2);
    case 1:
      state = 0;
      var values = $.index(x, 3);
    case 2:
      state = 0;
      var len = $.get$length(keys);
      for (var i = 0; $.ltB(i, len); ++i)
        result.operator$indexSet$2(this._deserializeHelper$1($.index(keys, i)), this._deserializeHelper$1($.index(values, i)));
      return result;
  }
},
 deserializeObject$1: function(x) {
  throw $.$$throw('Unexpected serialized object');
}
};

$$._Timer = {"":
 ["_once", "_handle"],
 "super": "Object",
 _Timer$repeating$2: function(milliSeconds, callback) {
  this._handle = $._window().setInterval$2(new $.anon0(this, callback), milliSeconds);
},
 _Timer$2: function(milliSeconds, callback) {
  this._handle = $._window().setTimeout$2(new $.anon(this, callback), milliSeconds);
}
};

$$.main_anon = {"":
 ["animationMap_0"],
 "super": "Closure",
 call$1: function(event$) {
  this.animationMap_0.set$distance(0);
  return 0;
}
};

$$.main_anon0 = {"":
 ["animationMap_1"],
 "super": "Closure",
 call$1: function(event$) {
  this.animationMap_1.set$distance(1);
  return 1;
}
};

$$.main_anon1 = {"":
 ["animationMap_2"],
 "super": "Closure",
 call$1: function(event$) {
  this.animationMap_2.set$distance(2);
  return 2;
}
};

$$.main_anon2 = {"":
 ["animationMap_3"],
 "super": "Closure",
 call$1: function(event$) {
  this.animationMap_3.set$distance(3);
  return 3;
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
    throw $.$$throw($.CTC2);
  if (typeof e === 'object' && e !== null && !!e.is$RegExp)
    throw $.$$throw($.CTC3);
  if (typeof e === 'object' && e !== null && e.is$_FileImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$File())
    throw $.$$throw($.CTC4);
  if (typeof e === 'object' && e !== null && e.is$_BlobImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$Blob())
    throw $.$$throw($.CTC5);
  if (typeof e === 'object' && e !== null && e.is$_FileListImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$FileList())
    throw $.$$throw($.CTC6);
  if (typeof e === 'object' && e !== null && e.is$_ImageDataImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ImageData())
    throw $.$$throw($.CTC6);
  if (typeof e === 'object' && e !== null && e.is$_ArrayBufferImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ArrayBuffer())
    throw $.$$throw($.CTC7);
  if (typeof e === 'object' && e !== null && e.is$_ArrayBufferViewImpl())
    return e;
  if (typeof e === 'object' && e !== null && e.is$ArrayBufferView())
    throw $.$$throw($.CTC8);
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
  throw $.$$throw($.CTC9);
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
        throw $.$$throw($.CTC2);
      if (typeof e === 'object' && e !== null && !!e.is$RegExp)
        throw $.$$throw($.CTC3);
      if (typeof e === 'object' && e !== null && e.is$_FileImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$File())
        throw $.$$throw($.CTC4);
      if (typeof e === 'object' && e !== null && e.is$_BlobImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$Blob())
        throw $.$$throw($.CTC5);
      if (typeof e === 'object' && e !== null && e.is$_FileListImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$FileList())
        throw $.$$throw($.CTC6);
      if (typeof e === 'object' && e !== null && e.is$_ImageDataImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ImageData())
        throw $.$$throw($.CTC6);
      if (typeof e === 'object' && e !== null && e.is$_ArrayBufferImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ArrayBuffer())
        throw $.$$throw($.CTC7);
      if (typeof e === 'object' && e !== null && e.is$_ArrayBufferViewImpl())
        return e;
      if (typeof e === 'object' && e !== null && e.is$ArrayBufferView())
        throw $.$$throw($.CTC8);
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
      throw $.$$throw($.CTC9);
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

$$.FieldMap__loadImage_anon = {"":
 ["this_1", "callback_0"],
 "super": "Closure",
 call$1: function(event$) {
  $.print('image on load.');
  this.this_1._setupImagePositions$0();
  this.callback_0.call$0();
}
};

$$.AnimationMap__draw_anon = {"":
 ["this_1", "context_0"],
 "super": "Closure",
 call$1: function(data) {
  this.this_1.get$_map().draw$4(this.context_0, data.get$id(), data.get$x(), data.get$y());
}
};

$$.AnimationMap__fillBackground_anon = {"":
 ["this_1", "context_0"],
 "super": "Closure",
 call$1: function(data) {
  this.this_1.get$_map().draw$4(this.context_0, 0, data.get$x(), data.get$y());
}
};

$$.AnimationMap__moveBottom_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(data) {
  data.set$y($.add(data.get$y(), 1));
  var t1 = data.get$y();
  var t2 = this.this_0;
  if ($.geB(t1, t2.get$_height()))
    data.set$y($.neg(t2.get$_chipHeight()));
}
};

$$.AnimationMap__moveTop_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(data) {
  data.set$y($.sub(data.get$y(), 1));
  var t1 = data.get$y();
  var t2 = this.this_0;
  if ($.leB($.add(t1, t2.get$_chipHeight()), 0))
    data.set$y(t2.get$_height());
}
};

$$.AnimationMap__moveRight_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(data) {
  data.set$x($.add(data.get$x(), 1));
  var t1 = data.get$x();
  var t2 = this.this_0;
  if ($.geB(t1, t2.get$_width()))
    data.set$x($.neg(t2.get$_chipWidth()));
}
};

$$.AnimationMap__moveLeft_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(data) {
  data.set$x($.sub(data.get$x(), 1));
  var t1 = data.get$x();
  var t2 = this.this_0;
  if ($.leB($.add(t1, t2.get$_chipWidth()), 0))
    data.set$x(t2.get$_width());
}
};

$$.startRootIsolate_anon = {"":
 [],
 "super": "Closure",
 call$0: function() {
  $._TimerFactory__factory = $._timerFactory;
  return;
}
};

$$.DoubleLinkedQueue_length__ = {"":
 ["box_0"],
 "super": "Closure",
 call$1: function(element) {
  var t1 = this.box_0;
  t1.counter_1 = $.add(t1.counter_1, 1);
}
};

$$._convertNativeToDart_AcceptStructuredClone_findSlot = {"":
 ["copies_1", "values_0"],
 "super": "Closure",
 call$1: function(value) {
  var t1 = this.values_0;
  var length$ = t1.length;
  for (var i = 0; i < length$; ++i) {
    if (i < 0 || i >= t1.length)
      throw $.ioore(i);
    var t2 = t1[i];
    if (t2 == null ? value == null : t2 === value)
      return i;
  }
  t1.push(value);
  this.copies_1.push(null);
  return length$;
}
};

$$._convertNativeToDart_AcceptStructuredClone_readSlot = {"":
 ["copies_2"],
 "super": "Closure",
 call$1: function(i) {
  var t1 = this.copies_2;
  if (i !== (i | 0))
    throw $.iae(i);
  if (i < 0 || i >= t1.length)
    throw $.ioore(i);
  return t1[i];
}
};

$$._convertNativeToDart_AcceptStructuredClone_writeSlot = {"":
 ["copies_3"],
 "super": "Closure",
 call$2: function(i, x) {
  var t1 = this.copies_3;
  if (i !== (i | 0))
    throw $.iae(i);
  if (i < 0 || i >= t1.length)
    throw $.ioore(i);
  t1[i] = x;
}
};

$$._convertNativeToDart_AcceptStructuredClone_walk = {"":
 ["writeSlot_6", "findSlot_5", "readSlot_4"],
 "super": "Closure",
 call$1: function(e) {
  if (typeof e !== 'object' || e === null || (e.constructor !== Array || !!e.immutable$list) && !e.is$JavaScriptIndexingBehavior())
    return this.call$1$bailout(1, e, 0, 0);
  if (e instanceof Date)
    throw $.$$throw($.CTC2);
  if (e instanceof RegExp)
    throw $.$$throw($.CTC3);
  if ($._isJavaScriptSimpleObject(e)) {
    var slot = this.findSlot_5.call$1(e);
    var copy = this.readSlot_4.call$1(slot);
    if (!(copy == null))
      return copy;
    copy = $.makeLiteralMap([]);
    if (typeof copy !== 'object' || copy === null || (copy.constructor !== Array || !!copy.immutable$list) && !copy.is$JavaScriptIndexingBehavior())
      return this.call$1$bailout(2, e, slot, copy);
    this.writeSlot_6.call$2(slot, copy);
    for (var t1 = $.iterator(Object.keys(e)); t1.hasNext$0() === true;) {
      var t2 = t1.next$0();
      var t3 = this.call$1(e[t2]);
      if (t2 !== (t2 | 0))
        throw $.iae(t2);
      if (t2 < 0 || t2 >= copy.length)
        throw $.ioore(t2);
      copy[t2] = t3;
    }
    return copy;
  }
  if (e instanceof Array) {
    slot = this.findSlot_5.call$1(e);
    copy = this.readSlot_4.call$1(slot);
    if (!(copy == null))
      return copy;
    this.writeSlot_6.call$2(slot, e);
    var length$ = e.length;
    for (var i = 0; i < length$; ++i) {
      if (i < 0 || i >= e.length)
        throw $.ioore(i);
      t1 = this.call$1(e[i]);
      if (i < 0 || i >= e.length)
        throw $.ioore(i);
      e[i] = t1;
    }
    return e;
  }
  return e;
},
 call$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var e = env0;
      break;
    case 2:
      e = env0;
      slot = env1;
      copy = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      if (e == null)
        return e;
      if (typeof e === 'boolean')
        return e;
      if (typeof e === 'number')
        return e;
      if (typeof e === 'string')
        return e;
      if (e instanceof Date)
        throw $.$$throw($.CTC2);
      if (e instanceof RegExp)
        throw $.$$throw($.CTC3);
    case 2:
      if (state === 2 || state === 0 && $._isJavaScriptSimpleObject(e))
        switch (state) {
          case 0:
            var slot = this.findSlot_5.call$1(e);
            var copy = this.readSlot_4.call$1(slot);
            if (!(copy == null))
              return copy;
            copy = $.makeLiteralMap([]);
          case 2:
            state = 0;
            this.writeSlot_6.call$2(slot, copy);
            for (var t1 = $.iterator(Object.keys(e)); t1.hasNext$0() === true;) {
              var t2 = t1.next$0();
              $.indexSet(copy, t2, this.call$1(e[t2]));
            }
            return copy;
        }
      if (e instanceof Array) {
        slot = this.findSlot_5.call$1(e);
        copy = this.readSlot_4.call$1(slot);
        if (!(copy == null))
          return copy;
        this.writeSlot_6.call$2(slot, e);
        var length$ = $.get$length(e);
        for (var i = 0; $.ltB(i, length$); ++i)
          $.indexSet(e, i, this.call$1($.index(e, i)));
        return e;
      }
      return e;
  }
}
};

$$.LinkedHashMapImplementation_forEach__ = {"":
 ["f_0"],
 "super": "Closure",
 call$1: function(entry) {
  this.f_0.call$2(entry.get$key(), entry.get$value());
}
};

$$._convertNativeToDart_IDBKey_containsDate = {"":
 [],
 "super": "Closure",
 call$1: function(object) {
  if (object instanceof Date)
    return true;
  if (typeof object === 'object' && object !== null && (object.constructor === Array || object.is$List())) {
    if (typeof object !== 'object' || object === null || object.constructor !== Array && !object.is$JavaScriptIndexingBehavior())
      return this.call$1$bailout(1, object);
    for (var i = 0; t1 = object.length, i < t1; ++i) {
      if (i < 0 || i >= t1)
        throw $.ioore(i);
      if (this.call$1(object[i]) === true)
        return true;
    }
  }
  return false;
  var t1;
},
 call$1$bailout: function(state, env0) {
  switch (state) {
    case 1:
      var object = env0;
      break;
  }
  switch (state) {
    case 0:
      if (object instanceof Date)
        return true;
    case 1:
      if (state === 1 || state === 0 && typeof object === 'object' && object !== null && (object.constructor === Array || object.is$List()))
        switch (state) {
          case 0:
          case 1:
            state = 0;
            for (var i = 0; $.ltB(i, $.get$length(object)); ++i)
              if (this.call$1($.index(object, i)) === true)
                return true;
        }
      return false;
  }
}
};

$$._BaseSendPort_call_anon = {"":
 ["port_1", "completer_0"],
 "super": "Closure",
 call$2: function(value, ignoreReplyTo) {
  this.port_1.close$0();
  var t1 = typeof value === 'object' && value !== null && !!value.is$Exception;
  var t2 = this.completer_0;
  if (t1)
    t2.completeException$1(value);
  else
    t2.complete$1(value);
}
};

$$._WorkerSendPort_send_anon = {"":
 ["this_2", "message_1", "replyTo_0"],
 "super": "Closure",
 call$0: function() {
  var t1 = this.this_2;
  var t2 = this.replyTo_0;
  t1._checkReplyTo$1(t2);
  var workerMessage = $._serializeMessage($.makeLiteralMap(['command', 'message', 'port', t1, 'msg', this.message_1, 'replyTo', t2]));
  if ($._globalState().get$isWorker() === true)
    $._globalState().get$mainManager().postMessage$1(workerMessage);
  else
    $.index($._globalState().get$managers(), t1.get$_workerId()).postMessage$1(workerMessage);
}
};

$$._waitForPendingPorts_anon = {"":
 ["callback_0"],
 "super": "Closure",
 call$1: function(_) {
  return this.callback_0.call$0();
}
};

$$.Futures_wait_anon = {"":
 ["completer_5", "pos_4", "box_0", "result_3", "values_2"],
 "super": "Closure",
 call$1: function(value) {
  var t1 = this.values_2;
  var t2 = this.pos_4;
  if (t2 < 0 || t2 >= t1.length)
    throw $.ioore(t2);
  t1[t2] = value;
  t2 = this.box_0;
  var remaining = $.sub(t2.remaining_1, 1);
  t2.remaining_1 = remaining;
  if ($.eqB(remaining, 0) && this.result_3.get$isComplete() !== true)
    this.completer_5.complete$1(t1);
}
};

$$.Futures_wait_anon0 = {"":
 ["future_8", "completer_7", "result_6"],
 "super": "Closure",
 call$1: function(exception) {
  if (this.result_6.get$isComplete() !== true)
    this.completer_7.completeException$2(exception, this.future_8.get$stackTrace());
  return true;
}
};

$$._PendingSendPortFinder_visitList_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(e) {
  return this.this_0._dispatch$1(e);
}
};

$$._PendingSendPortFinder_visitMap_anon = {"":
 ["this_0"],
 "super": "Closure",
 call$1: function(e) {
  return this.this_0._dispatch$1(e);
}
};

$$._StorageImpl_getValues_anon = {"":
 ["values_0"],
 "super": "Closure",
 call$2: function(k, v) {
  return this.values_0.push(v);
}
};

$$.HashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$2: function(key, value) {
  var t1 = this.list_2;
  var t2 = this.box_0;
  var t3 = t2.i_1;
  t2.i_1 = $.add(t3, 1);
  if (t3 !== (t3 | 0))
    throw $.iae(t3);
  if (t3 < 0 || t3 >= t1.length)
    throw $.ioore(t3);
  t1[t3] = value;
}
};

$$.LinkedHashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$1: function(entry) {
  var t1 = this.list_2;
  var t2 = this.box_0;
  var t3 = t2.index_1;
  t2.index_1 = $.add(t3, 1);
  t2 = entry.get$value();
  if (t3 !== (t3 | 0))
    throw $.iae(t3);
  if (t3 < 0 || t3 >= t1.length)
    throw $.ioore(t3);
  t1[t3] = t2;
}
};

$$._NativeJsSendPort_send_anon = {"":
 ["this_5", "message_4", "replyTo_3"],
 "super": "Closure",
 call$0: function() {
  var t1 = {};
  var t2 = this.this_5;
  var t3 = this.replyTo_3;
  t2._checkReplyTo$1(t3);
  var isolate = $.index($._globalState().get$isolates(), t2.get$_isolateId());
  if (isolate == null)
    return;
  if (t2.get$_receivePort().get$_callback() == null)
    return;
  var shouldSerialize = !($._globalState().get$currentContext() == null) && !$.eqB($._globalState().get$currentContext().get$id(), t2.get$_isolateId());
  var msg = this.message_4;
  t1.msg_1 = msg;
  t1.reply_2 = t3;
  if (shouldSerialize) {
    t1.msg_1 = $._serializeMessage(t1.msg_1);
    t1.reply_2 = $._serializeMessage(t1.reply_2);
  }
  $._globalState().get$topEventLoop().enqueue$3(isolate, new $._NativeJsSendPort_send_anon0(t2, t1, shouldSerialize), 'receive ' + $.S(msg));
}
};

$$._NativeJsSendPort_send_anon0 = {"":
 ["this_7", "box_0", "shouldSerialize_6"],
 "super": "Closure",
 call$0: function() {
  var t1 = this.this_7;
  if (!(t1.get$_receivePort().get$_callback() == null)) {
    if (this.shouldSerialize_6 === true) {
      var t2 = this.box_0;
      t2.msg_1 = $._deserializeMessage(t2.msg_1);
      t2.reply_2 = $._deserializeMessage(t2.reply_2);
    }
    t1 = t1.get$_receivePort();
    t2 = this.box_0;
    t1._callback$2(t2.msg_1, t2.reply_2);
  }
}
};

$$._StorageImpl_getKeys_anon = {"":
 ["keys_0"],
 "super": "Closure",
 call$2: function(k, v) {
  return this.keys_0.push(k);
}
};

$$.HashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$2: function(key, value) {
  var t1 = this.list_2;
  var t2 = this.box_0;
  var t3 = t2.i_10;
  t2.i_10 = $.add(t3, 1);
  if (t3 !== (t3 | 0))
    throw $.iae(t3);
  if (t3 < 0 || t3 >= t1.length)
    throw $.ioore(t3);
  t1[t3] = key;
}
};

$$.LinkedHashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 "super": "Closure",
 call$1: function(entry) {
  var t1 = this.list_2;
  var t2 = this.box_0;
  var t3 = t2.index_10;
  t2.index_10 = $.add(t3, 1);
  t2 = entry.get$key();
  if (t3 !== (t3 | 0))
    throw $.iae(t3);
  if (t3 < 0 || t3 >= t1.length)
    throw $.ioore(t3);
  t1[t3] = t2;
}
};

$$._Copier_visitMap_anon = {"":
 ["this_2", "box_0"],
 "super": "Closure",
 call$2: function(key, val) {
  var t1 = this.box_0.copy_10;
  var t2 = this.this_2;
  $.indexSet(t1, t2._dispatch$1(key), t2._dispatch$1(val));
}
};

$$._EventLoop__runHelper_next = {"":
 ["this_0"],
 "super": "Closure",
 call$0: function() {
  if (this.this_0.runIteration$0() !== true)
    return;
  $._window().setTimeout$2(this, 0);
}
};

$$.anon = {"":
 ["this_1", "callback_0"],
 "super": "Closure",
 call$0: function() {
  return this.callback_0.call$1(this.this_1);
}
};

$$.anon0 = {"":
 ["this_1", "callback_0"],
 "super": "Closure",
 call$0: function() {
  return this.callback_0.call$1(this.this_1);
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
call$0: function() { return this.self[this.target](); }
};
$$.BoundClosure0 = {'':
 ['self', 'target'],
 'super': 'Closure',
call$1: function(p0) { return this.self[this.target](p0); }
};
$.div$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a / b;
  return a.operator$div$1(b);
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

$._NativeJsSendPort$ = function(_receivePort, isolateId) {
  return new $._NativeJsSendPort(_receivePort, isolateId);
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

$.FutureAlreadyCompleteException$ = function() {
  return new $.FutureAlreadyCompleteException();
};

$.set$length = function(receiver, newLength) {
  if ($.isJsArray(receiver)) {
    $.checkNull(newLength);
    if (newLength < 0)
      throw $.$$throw($.IndexOutOfRangeException$(newLength));
    $.checkGrowable(receiver, 'set length');
    receiver.length = newLength;
  } else
    receiver.set$length(newLength);
  return newLength;
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
    return $.invokeClosure.call$5(closure, $._currentIsolate(), arity, arguments[0], arguments[1]);
  };
  closure.$identity = function$;
  return function$;
};

$._TextTrackListEventsImpl$ = function(_ptr) {
  return new $._TextTrackListEventsImpl(_ptr);
};

$.StackTrace$ = function(stack) {
  return new $.StackTrace(stack);
};

$.ObjectNotClosureException$ = function() {
  return new $.ObjectNotClosureException();
};

$._MediaStreamTrackEventsImpl$ = function(_ptr) {
  return new $._MediaStreamTrackEventsImpl(_ptr);
};

$._JsVisitedMap$ = function() {
  return new $._JsVisitedMap(null);
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

$._fillStatics = function(context) {
  $globals = context.isolateStatics;
  $static_init();

};

$.print = function(object) {
  $.PrintImplementation_print(object);
};

$.PrintImplementation_print = function(obj) {
  $.Primitives_printString(obj);
};

$.ListIterator$ = function(list, T) {
  var t1 = new $.ListIterator(0, list);
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
};

$._JavaScriptAudioNodeEventsImpl$ = function(_ptr) {
  return new $._JavaScriptAudioNodeEventsImpl(_ptr);
};

$.StackOverflowException$ = function() {
  return new $.StackOverflowException();
};

$.forEach = function(receiver, f) {
  if (!$.isJsArray(receiver))
    return receiver.forEach$1(f);
  else
    return $.Collections_forEach(receiver, f);
};

$.Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true;)
    f.call$1(t1.next$0());
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver))
    return receiver.length === 0;
  return receiver.isEmpty$0();
};

$._Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true;)
    f.call$1(t1.next$0());
};

$._IDBTransactionEventsImpl$ = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$.dynamicFunction = function(name$) {
  var f = Object.prototype[name$];
  if (!(f == null) && !!f.methods)
    return f.methods;
  var methods = {};
  var dartMethod = Object.getPrototypeOf($.CTC13)[name$];
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

$._Timer$repeating = function(milliSeconds, callback) {
  var t1 = new $._Timer(false, null);
  t1._Timer$repeating$2(milliSeconds, callback);
  return t1;
};

$._EventSourceEventsImpl$ = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
};

$._convertNativeToDart_AcceptStructuredClone = function(object) {
  var values = [];
  var copies = [];
  var t1 = new $._convertNativeToDart_AcceptStructuredClone_findSlot(copies, values);
  var t2 = new $._convertNativeToDart_AcceptStructuredClone_readSlot(copies);
  return new $._convertNativeToDart_AcceptStructuredClone_walk(new $._convertNativeToDart_AcceptStructuredClone_writeSlot(copies), t1, t2).call$1(object);
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

$.AnimationMap$ = function(_stage) {
  var t1 = new $.AnimationMap(_stage, null, null, null, null, 40, 40, 0);
  t1.AnimationMap$1(_stage);
  return t1;
};

$.floor = function(receiver) {
  return Math.floor(receiver);
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

$._WebSocketEventsImpl$ = function(_ptr) {
  return new $._WebSocketEventsImpl(_ptr);
};

$.shr = function(a, b) {
  if ($.checkNumbers(a, b)) {
    if (b < 0)
      throw $.$$throw($.IllegalArgumentException$(b));
    if (a > 0) {
      if (b > 31)
        return 0;
      return a >>> b;
    }
    if (b > 31)
      b = 31;
    return (a >> b) >>> 0;
  }
  return a.operator$shr$1(b);
};

$._convertDartToNative_SerializedScriptValue = function(value) {
  return $._convertDartToNative_PrepareForStructuredClone(value);
};

$._deserializeMessage = function(message) {
  if ($._globalState().get$needSerialization() === true)
    return $._JsDeserializer$().deserialize$1(message);
  else
    return message;
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

$.and = function(a, b) {
  if ($.checkNumbers(a, b))
    return (a & b) >>> 0;
  return a.operator$and$1(b);
};

$._JsCopier$ = function() {
  var t1 = new $._JsCopier($._MessageTraverserVisitedMap$());
  t1._JsCopier$0();
  return t1;
};

$._MediaStreamEventsImpl$ = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$.setRuntimeTypeInfo = function(target, typeInfo) {
  if (!(target == null))
    target.builtin$typeInfo = typeInfo;
};

$.hashCode = function(receiver) {
  if (typeof receiver === 'number')
    return receiver & 0x1FFFFFFF;
  if (!(typeof receiver === 'string'))
    return receiver.hashCode$0();
  var length$ = receiver.length;
  for (var hash = 0, i = 0; i < length$; ++i) {
    var hash0 = 536870911 & hash + receiver.charCodeAt(i);
    var hash1 = 536870911 & hash0 + 524287 & hash0 << 10;
    hash1 = (hash1 ^ $.shr(hash1, 6)) >>> 0;
    hash = hash1;
  }
  hash0 = 536870911 & hash + 67108863 & hash << 3;
  hash0 = (hash0 ^ $.shr(hash0, 11)) >>> 0;
  return 536870911 & hash0 + 16383 & hash0 << 15;
};

$.FutureImpl_FutureImpl$immediate = function(value, T) {
  var res = $.FutureImpl$();
  res._setValue$1(value);
  return res;
};

$.mul$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a * b;
  return a.operator$mul$1(b);
};

$._waitForPendingPorts = function(message, callback) {
  var finder = $._PendingSendPortFinder$();
  finder.traverse$1(message);
  $.Futures_wait(finder.ports).then$1(new $._waitForPendingPorts_anon(callback));
};

$.gt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a > b : $.gt$slow(a, b);
};

$._IsolateContext$ = function() {
  var t1 = new $._IsolateContext(null, null, null);
  t1._IsolateContext$0();
  return t1;
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

$.getTypeNameOf = function(obj) {
  if ($._getTypeNameOf == null)
    $._getTypeNameOf = $.getFunctionForTypeNameOf();
  return $._getTypeNameOf.call$1(obj);
};

$.ListImplementation_List = function(length$, E) {
  return $.Primitives_newList(length$);
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

$._BodyElementEventsImpl$ = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$.neg = function(a) {
  if (typeof a === "number")
    return -a;
  return a.negate$0();
};

$.add$1 = function(receiver, value) {
  if ($.isJsArray(receiver)) {
    $.checkGrowable(receiver, 'add');
    receiver.push(value);
    return;
  }
  return receiver.add$1(value);
};

$._Timer$ = function(milliSeconds, callback) {
  var t1 = new $._Timer(true, null);
  t1._Timer$2(milliSeconds, callback);
  return t1;
};

$.get$length = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver))
    return receiver.length;
  else
    return receiver.get$length();
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

$.main = function() {
  var animationMap = $.AnimationMap$($.query('#stage'));
  $.add$1($.query('#left').get$on().get$click(), new $.main_anon(animationMap));
  $.add$1($.query('#right').get$on().get$click(), new $.main_anon0(animationMap));
  $.add$1($.query('#top').get$on().get$click(), new $.main_anon1(animationMap));
  $.add$1($.query('#bottom').get$on().get$click(), new $.main_anon2(animationMap));
};

$.iterator = function(receiver) {
  if ($.isJsArray(receiver))
    return $.ListIterator$(receiver);
  return receiver.iterator$0();
};

$.ceil = function(receiver) {
  return Math.ceil(receiver);
};

$.Maps_mapToString = function(m) {
  var result = $.StringBufferImpl$('');
  $.Maps__emitMap(m, result, $.ListImplementation_List(null));
  return result.toString$0();
};

$.UnsupportedOperationException$ = function(_message) {
  return new $.UnsupportedOperationException(_message);
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
    return $._callInIsolate(isolate, new $.invokeClosure_anon(closure));
  else if ($.eqB(numberOfArguments, 1))
    return $._callInIsolate(isolate, new $.invokeClosure_anon0(closure, arg1));
  else if ($.eqB(numberOfArguments, 2))
    return $._callInIsolate(isolate, new $.invokeClosure_anon1(closure, arg1, arg2));
  else
    throw $.$$throw($.ExceptionImplementation$('Unsupported number of arguments for wrapped closure'));
};

$.MetaInfo$ = function(_tag, _tags, _set) {
  return new $.MetaInfo(_tag, _tags, _set);
};

$._HttpRequestEventsImpl$ = function(_ptr) {
  return new $._HttpRequestEventsImpl(_ptr);
};

$.addLast = function(receiver, value) {
  if (!$.isJsArray(receiver))
    return receiver.addLast$1(value);
  $.checkGrowable(receiver, 'addLast');
  receiver.push(value);
};

$.geB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a >= b : $.ge$slow(a, b) === true;
};

$._isJavaScriptSimpleObject = function(value) {
  return Object.getPrototypeOf(value) === Object.prototype;
};

$.ioore = function(index) {
  throw $.$$throw($.IndexOutOfRangeException$(index));
};

$._JsDeserializer$ = function() {
  return new $._JsDeserializer(null);
};

$._callInIsolate = function(isolate, function$) {
  isolate.eval$1(function$);
  $._globalState().get$topEventLoop().run$0();
};

$.Primitives_printString = function(string) {
  if (typeof dartPrint == "function") {
    dartPrint(string);
    return;
  }
  if (typeof console == "object") {
    console.log(string);
    return;
  }
  if (typeof write == "function") {
    write(string);
    write("\n");
  }
};

$._convertNativeToDart_IDBKey = function(nativeKey) {
  if (new $._convertNativeToDart_IDBKey_containsDate().call$1(nativeKey) === true)
    throw $.$$throw($.CTC16);
  return nativeKey;
};

$.leB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a <= b : $.le$slow(a, b) === true;
};

$.dynamicSetMetadata = function(inputTable) {
  var t1 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t1);
};

$._IDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBRequestEventsImpl(_ptr);
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

$._SharedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$.add = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : $.add$slow(a, b);
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

$.DoubleLinkedQueue$ = function(E) {
  var t1 = new $.DoubleLinkedQueue(null);
  $.setRuntimeTypeInfo(t1, { 'E': E });
  t1.DoubleLinkedQueue$0();
  return t1;
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

$._globalState = function() {
return $globalState;
};

$._globalState0 = function(val) {
$globalState = val;
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

$.getRuntimeTypeInfo = function(target) {
  if (target == null)
    return;
  var res = target.builtin$typeInfo;
  return res == null ? {} : res;
};

$.window = function() {
return window;
};

$.HashMapImplementation$ = function(K, V) {
  var t1 = new $.HashMapImplementation(null, null, null, null, null);
  $.setRuntimeTypeInfo(t1, { 'K': K, 'V': V });
  t1.HashMapImplementation$0();
  return t1;
};

$._SVGElementInstanceEventsImpl$ = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$._FixedSizeListIterator$ = function(array, T) {
  var t1 = new $._FixedSizeListIterator($.get$length(array), array, 0);
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
};

$._MainManagerStub$ = function() {
  return new $._MainManagerStub();
};

$._FileReaderEventsImpl$ = function(_ptr) {
  return new $._FileReaderEventsImpl(_ptr);
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$.HashMapImplementation__nextProbe = function(currentProbe, numberOfProbes, length$) {
  return $.and($.add(currentProbe, numberOfProbes), $.sub(length$, 1));
};

$.makeLiteralMap = function(keyValuePairs) {
  var iterator = $.iterator(keyValuePairs);
  var result = $.LinkedHashMapImplementation$();
  for (; iterator.hasNext$0() === true;)
    result.operator$indexSet$2(iterator.next$0(), iterator.next$0());
  return result;
};

$.CompleterImpl$ = function(T) {
  var t1 = new $.CompleterImpl($.FutureImpl$());
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
};

$.HashMapImplementation__computeLoadLimit = function(capacity) {
  return $.tdiv(capacity * 3, 4);
};

$.NoMoreElementsException$ = function() {
  return new $.NoMoreElementsException();
};

$._WindowEventsImpl$ = function(_ptr) {
  return new $._WindowEventsImpl(_ptr);
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

$._DOMApplicationCacheEventsImpl$ = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
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

$._document = function() {
return document;
};

$.FieldMap$ = function(_canvasWidth, _canvasHeight) {
  return new $.FieldMap(_canvasWidth, _canvasHeight, null, null, null, null, null);
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

$._timerFactory = function(millis, callback, repeating) {
  return repeating === true ? $._Timer$repeating(millis, callback) : $._Timer$(millis, callback);
};

$._PointFactoryProvider_Point = function(x, y) {
return new WebKitPoint(x, y);
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

$.ltB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a < b : $.lt$slow(a, b) === true;
};

$.tdiv = function(a, b) {
  if ($.checkNumbers(a, b))
    return $.truncate(a / b);
  return a.operator$tdiv$1(b);
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
        return $.NullPointerException$(null, $.CTC10);
    else if ($.eqB(type, 'undefined_method'))
      if (typeof name$ === 'string' && $.startsWith(name$, 'call$') === true)
        return $.ObjectNotClosureException$();
      else
        return $.NoSuchMethodException$('', name$, [], null);
    var ieErrorCode = ex.number & 0xffff;
    var ieFacilityNumber = ex.number>>16 & 0x1FFF;
    if (typeof message === 'string')
      if ($.endsWith(message, 'is null') === true || $.endsWith(message, 'is undefined') === true || $.endsWith(message, 'is null or undefined') === true)
        return $.NullPointerException$(null, $.CTC10);
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

$._ReceivePortImpl$ = function() {
  var t1 = $._ReceivePortImpl__nextFreeId;
  $._ReceivePortImpl__nextFreeId = $.add(t1, 1);
  t1 = new $._ReceivePortImpl(t1, null);
  t1._ReceivePortImpl$0();
  return t1;
};

$.NoSuchMethodException$ = function(_receiver, _functionName, _arguments, existingArgumentNames) {
  return new $.NoSuchMethodException(_receiver, _functionName, _arguments, existingArgumentNames);
};

$.stringJoinUnchecked = function(array, separator) {
  return array.join(separator);
};

$._WorkerSendPort$ = function(_workerId, isolateId, _receivePortId) {
  return new $._WorkerSendPort(_workerId, _receivePortId, isolateId);
};

$.S = function(value) {
  var res = $.toString(value);
  if (!(typeof res === 'string'))
    throw $.$$throw($.IllegalArgumentException$(value));
  return res;
};

$.checkString = function(value) {
  if (!(typeof value === 'string')) {
    $.checkNull(value);
    throw $.$$throw($.IllegalArgumentException$(value));
  }
  return value;
};

$._DoubleLinkedQueueIterator$ = function(_sentinel, E) {
  var t1 = new $._DoubleLinkedQueueIterator(_sentinel, null);
  $.setRuntimeTypeInfo(t1, { 'E': E });
  t1._DoubleLinkedQueueIterator$1(_sentinel);
  return t1;
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

$.startRootIsolate = function(entry) {
  var t1 = $._Manager$();
  $._globalState0(t1);
  if ($._globalState().get$isWorker() === true)
    return;
  var rootContext = $._IsolateContext$();
  $._globalState().set$rootContext(rootContext);
  $._fillStatics(rootContext);
  $._globalState().set$currentContext(rootContext);
  if (!($._window() == null))
    rootContext.eval$1(new $.startRootIsolate_anon());
  rootContext.eval$1(entry);
  $._globalState().get$topEventLoop().run$0();
};

$._ElementFactoryProvider_Element$tag = function(tag) {
return document.createElement(tag)
};

$.lt$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a < b;
  return a.operator$lt$1(b);
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

$._DedicatedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$.truncate = function(receiver) {
  return receiver < 0 ? $.ceil(receiver) : $.floor(receiver);
};

$._EventLoop$ = function() {
  return new $._EventLoop($.DoubleLinkedQueue$('_IsolateEvent'));
};

$.substringUnchecked = function(receiver, startIndex, endIndex) {
  return receiver.substring(startIndex, endIndex);
};

$.contains = function(userAgent, name$) {
  return !(userAgent.indexOf(name$) === -1);
};

$._convertNativeToDart_IDBAny = function(object) {
  return $._convertNativeToDart_AcceptStructuredClone(object);
};

$._AudioContextEventsImpl$ = function(_ptr) {
  return new $._AudioContextEventsImpl(_ptr);
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

$._dynamicMetadata = function(table) {
  $dynamicMetadata = table;
};

$._dynamicMetadata0 = function() {
  if (typeof($dynamicMetadata) === 'undefined') {
    var t1 = [];
    $._dynamicMetadata(t1);
  }
  return $dynamicMetadata;
};

$._SpeechRecognitionEventsImpl$ = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$.add$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a + b;
  return a.operator$add$1(b);
};

$.IllegalArgumentException$ = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$._HttpRequestUploadEventsImpl$ = function(_ptr) {
  return new $._HttpRequestUploadEventsImpl(_ptr);
};

$._PendingSendPortFinder$ = function() {
  var t1 = $._MessageTraverserVisitedMap$();
  t1 = new $._PendingSendPortFinder([], t1);
  t1._PendingSendPortFinder$0();
  return t1;
};

$.Futures_wait = function(futures) {
  var t1 = {};
  if (typeof futures !== 'string' && (typeof futures !== 'object' || futures === null || futures.constructor !== Array && !futures.is$JavaScriptIndexingBehavior()))
    return $.Futures_wait$bailout(1, futures, t1);
  if ($.isEmpty(futures) === true)
    return $.FutureImpl_FutureImpl$immediate($.CTC10, 'List');
  var completer = $.CompleterImpl$('List');
  var result = completer.get$future();
  t1.remaining_1 = futures.length;
  var values = $.ListImplementation_List(futures.length);
  for (var i = 0; t2 = futures.length, i < t2; ++i) {
    if (i < 0 || i >= t2)
      throw $.ioore(i);
    var future = futures[i];
    future.then$1(new $.Futures_wait_anon(completer, i, t1, result, values));
    future.handleException$1(new $.Futures_wait_anon0(future, completer, result));
  }
  return result;
  var t2;
};

$.checkNull = function(object) {
  if (object == null)
    throw $.$$throw($.NullPointerException$(null, $.CTC10));
  return object;
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

$.div = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a / b : $.div$slow(a, b);
};

$.Collections__containsRef = function(c, ref) {
  for (var t1 = $.iterator(c); t1.hasNext$0() === true;) {
    var t2 = t1.next$0();
    if (t2 == null ? ref == null : t2 === ref)
      return true;
  }
  return false;
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

$.MapChipData$ = function(_x, _y, _id) {
  return new $.MapChipData(_x, _y, _id);
};

$._MessagePortEventsImpl$ = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$.getTraceFromException = function(exception) {
  return $.StackTrace$(exception.stack);
};

$._IsolateEvent$ = function(isolate, fn, message) {
  return new $._IsolateEvent(isolate, fn, message);
};

$.Maps__emitMap = function(m, result, visiting) {
  var t1 = {};
  $.add$1(visiting, m);
  $.add$1(result, '{');
  t1.first_1 = true;
  $.forEach(m, new $.Maps__emitMap_anon(result, t1, visiting));
  $.add$1(result, '}');
  $.removeLast(visiting);
};

$._MessageTraverser_isPrimitive = function(x) {
  return x == null || typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean';
};

$._Deserializer_isPrimitive = function(x) {
  return x == null || typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean';
};

$.propertySet = function(object, property, value) {
  object[property] = value;
};

$._BatteryManagerEventsImpl$ = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$._IDBOpenDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBOpenDBRequestEventsImpl(_ptr);
};

$.checkMutable = function(list, reason) {
  if (!!(list.immutable$list))
    throw $.$$throw($.UnsupportedOperationException$(reason));
};

$.checkGrowable = function(list, reason) {
  if (!!(list.fixed$length))
    throw $.$$throw($.UnsupportedOperationException$(reason));
};

$._serializeMessage = function(message) {
  if ($._globalState().get$needSerialization() === true)
    return $._JsSerializer$().traverse$1(message);
  else
    return $._JsCopier$().traverse$1(message);
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

$.le$slow = function(a, b) {
  if ($.checkNumbers(a, b))
    return a <= b;
  return a.operator$le$1(b);
};

$.KeyValuePair$ = function(key, value, K, V) {
  var t1 = new $.KeyValuePair(key, value);
  $.setRuntimeTypeInfo(t1, { 'K': K, 'V': V });
  return t1;
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

$.xor = function(a, b) {
  if ($.checkNumbers(a, b))
    return (a ^ b) >>> 0;
  return a.operator$xor$1(b);
};

$._window = function() {
  return typeof window != "undefined" ? window : null;
};

$.substring$1 = function(receiver, startIndex) {
  if (!(typeof receiver === 'string'))
    return receiver.substring$1(startIndex);
  return $.substring$2(receiver, startIndex, null);
};

$._IDBVersionChangeRequestEventsImpl$ = function(_ptr) {
  return new $._IDBVersionChangeRequestEventsImpl(_ptr);
};

$._MessageTraverserVisitedMap$ = function() {
  return new $._MessageTraverserVisitedMap();
};

$.FutureNotCompleteException$ = function() {
  return new $.FutureNotCompleteException();
};

$._JsSerializer$ = function() {
  var t1 = new $._JsSerializer(0, $._MessageTraverserVisitedMap$());
  t1._JsSerializer$0();
  return t1;
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

$.LinkedHashMapImplementation$ = function(K, V) {
  var t1 = new $.LinkedHashMapImplementation(null, null);
  $.setRuntimeTypeInfo(t1, { 'K': K, 'V': V });
  t1.LinkedHashMapImplementation$0();
  return t1;
};

$.NullPointerException$ = function(functionName, arguments$) {
  return new $.NullPointerException(functionName, arguments$);
};

$._DoubleLinkedQueueEntrySentinel$ = function(E) {
  var t1 = new $._DoubleLinkedQueueEntrySentinel(null, null, null);
  $.setRuntimeTypeInfo(t1, { 'E': E });
  t1.DoubleLinkedQueueEntry$1(null);
  t1._DoubleLinkedQueueEntrySentinel$0();
  return t1;
};

$.FutureImpl$ = function(T) {
  var t1 = new $.FutureImpl(false, null, null, null, false, [], [], []);
  $.setRuntimeTypeInfo(t1, { 'T': T });
  return t1;
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

$.shl = function(a, b) {
  if ($.checkNumbers(a, b)) {
    if (b < 0)
      throw $.$$throw($.IllegalArgumentException$(b));
    if (b > 31)
      return 0;
    return (a << b) >>> 0;
  }
  return a.operator$shl$1(b);
};

$.Primitives_objectToString = function(object) {
  return 'Instance of \'' + $.S($.Primitives_objectTypeName(object)) + '\'';
};

$._currentIsolate = function() {
  return $._globalState().get$currentContext();
};

$.lt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a < b : $.lt$slow(a, b);
};

$._FileWriterEventsImpl$ = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
};

$._Manager$ = function() {
  var t1 = new $._Manager(0, 0, 1, null, null, null, null, null, null, null, null, null);
  t1._Manager$0();
  return t1;
};

$.regExpGetNative = function(regExp) {
  var r = regExp._re;
  return r == null ? regExp._re = $.regExpMakeNative(regExp, false) : r;
};

$._NotificationEventsImpl$ = function(_ptr) {
  return new $._NotificationEventsImpl(_ptr);
};

$.sub = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a - b : $.sub$slow(a, b);
};

$.DoubleLinkedQueueEntry$ = function(e, E) {
  var t1 = new $.DoubleLinkedQueueEntry(null, null, null);
  $.setRuntimeTypeInfo(t1, { 'E': E });
  t1.DoubleLinkedQueueEntry$1(e);
  return t1;
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

$.Futures_wait$bailout = function(state, futures, t1) {
  if ($.isEmpty(futures) === true)
    return $.FutureImpl_FutureImpl$immediate($.CTC10, 'List');
  var completer = $.CompleterImpl$('List');
  var result = completer.get$future();
  t1.remaining_1 = $.get$length(futures);
  var values = $.ListImplementation_List($.get$length(futures));
  for (var i = 0; $.ltB(i, $.get$length(futures)); ++i) {
    var future = $.index(futures, i);
    future.then$1(new $.Futures_wait_anon(completer, i, t1, result, values));
    future.handleException$1(new $.Futures_wait_anon0(future, completer, result));
  }
  return result;
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
$._timerFactory.call$3 = $._timerFactory;
$._timerFactory.$name = "_timerFactory";
$.typeNameInOpera.call$1 = $.typeNameInOpera;
$.typeNameInOpera.$name = "typeNameInOpera";
Isolate.$finishClasses($$);
$$ = {};
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC10 = Isolate.makeConstantList([]);
$.CTC17 = 'structured clone of RegExp';
$.CTC3 = new Isolate.$isolateProperties.NotImplementedException('structured clone of RegExp');
$.CTC18 = 'structured clone of Blob';
$.CTC5 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Blob');
$.CTC11 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC19 = false;
$.CTC20 = '^#[_a-zA-Z]\\w*$';
$.CTC = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC21 = 'structured clone of File';
$.CTC4 = new Isolate.$isolateProperties.NotImplementedException('structured clone of File');
$.CTC22 = 'structured clone of other type';
$.CTC9 = new Isolate.$isolateProperties.NotImplementedException('structured clone of other type');
$.CTC23 = 'Cannot add to immutable List.';
$.CTC1 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot add to immutable List.');
$.CTC24 = 'IDBKey containing Date';
$.CTC16 = new Isolate.$isolateProperties.NotImplementedException('IDBKey containing Date');
$.CTC25 = 'Cannot removeLast on immutable List.';
$.CTC12 = new Isolate.$isolateProperties.UnsupportedOperationException('Cannot removeLast on immutable List.');
$.CTC26 = 'structured clone of Date';
$.CTC2 = new Isolate.$isolateProperties.NotImplementedException('structured clone of Date');
$.CTC14 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC15 = new Isolate.$isolateProperties.EmptyQueueException();
$.CTC27 = 'structured clone of ArrayBuffer';
$.CTC7 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBuffer');
$.CTC13 = new Isolate.$isolateProperties.Object();
$.CTC28 = 'structured clone of FileList';
$.CTC6 = new Isolate.$isolateProperties.NotImplementedException('structured clone of FileList');
$.CTC29 = null;
$.CTC0 = new Isolate.$isolateProperties.NullPointerException(null, Isolate.$isolateProperties.CTC10);
$.CTC30 = 'structured clone of ArrayBufferView';
$.CTC8 = new Isolate.$isolateProperties.NotImplementedException('structured clone of ArrayBufferView');
$.HashMapImplementation__DELETED_KEY = Isolate.$isolateProperties.CTC14;
$.HashMapImplementation__INITIAL_CAPACITY = 8;
$._ReceivePortImpl__nextFreeId = 1;
$._TimerFactory__factory = null;
$.Primitives_DOLLAR_CHAR_VALUE = 36;
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

$.$defineNativeClass('Attr', ["value="], {
});

$.$defineNativeClass('AudioBuffer', ["length?"], {
});

$.$defineNativeClass('AudioContext', [], {
 get$on: function() {
  return $._AudioContextEventsImpl$(this);
}
});

$.$defineNativeClass('AudioParam', ["value="], {
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

$.$defineNativeClass('HTMLButtonElement', ["value="], {
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
 setProperty$3: function(propertyName, value, priority) {
  return this.setProperty(propertyName,value,priority);
},
 get$clear: function() {
  return this.getPropertyValue$1('clear');
},
 clear$0: function() { return this.get$clear().call$0(); },
 get$height: function() {
  return this.getPropertyValue$1('height');
},
 set$src: function(value) {
  this.setProperty$3('src', value, '');
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
},
 get$context2d: function() {
  return this.getContext$1('2d');
}
});

$.$defineNativeClass('CanvasRenderingContext2D', [], {
 drawImage$9: function(canvas_OR_image_OR_video, sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh, dx, dy, dw, dh) {
  return this.drawImage(canvas_OR_image_OR_video,sx_OR_x,sy_OR_y,sw_OR_width,height_OR_sh,dx,dy,dw,dh);
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
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

$.$defineNativeClass('DOMSettableTokenList', ["value="], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('DOMTokenList', ["length?"], {
 add$1: function(token) {
  return this.add(token);
},
 remove$1: function(token) {
  return this.remove(token);
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
},
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
},
 postMessage$1: function(message) {
  return this.postMessage(message);
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
 get$id: function() {
  return '';
},
 get$parent: function() {
  return;
},
 click$0: function() {
},
 get$click: function() { return new $.BoundClosure(this, 'click$0'); },
 get$on: function() {
  return $._ElementEventsImpl$(this);
},
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
}
});

$.$defineNativeClass('Element', ["id?"], {
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
 get$click: function() { return new $.BoundClosure(this, 'click$0'); },
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
}
});

$.$defineNativeClass('HTMLEmbedElement', ["height?", "src!", "width?"], {
});

$.$defineNativeClass('Entry', [], {
 remove$2: function(successCallback, errorCallback) {
  return this.remove($.convertDartClosureToJS(successCallback, 0),$.convertDartClosureToJS(errorCallback, 1));
},
 remove$1: function(successCallback) {
  successCallback = $.convertDartClosureToJS(successCallback, 0);
  return this.remove(successCallback);
}
});

$.$defineNativeClass('EntryArray', ["length?"], {
});

$.$defineNativeClass('EntryArraySync', ["length?"], {
});

$.$defineNativeClass('EntrySync', [], {
 remove$0: function() {
  return this.remove();
}
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
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('FileWriter', ["length?"], {
 get$on: function() {
  return $._FileWriterEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; },
 is$ArrayBufferView: function() { return true; }
});

$.$defineNativeClass('HTMLFormElement', ["length?"], {
 reset$0: function() {
  return this.reset();
}
});

$.$defineNativeClass('HTMLFrameElement', ["height?", "src!", "width?"], {
});

$.$defineNativeClass('HTMLFrameSetElement', [], {
 get$on: function() {
  return $._FrameSetElementEventsImpl$(this);
}
});

$.$defineNativeClass('Gamepad', ["id?"], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 remove$1: function(index) {
  return this.remove(index);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBCursor', [], {
 get$key: function() {
  return $._convertNativeToDart_IDBKey(this.get$_key());
},
 get$_key: function() {
return this.key;
}
});

$.$defineNativeClass('IDBCursorWithValue', [], {
 get$value: function() {
  return $._convertNativeToDart_IDBAny(this.get$_lib_value());
},
 get$_lib_value: function() {
return this.value;
}
});

$.$defineNativeClass('IDBDatabase', [], {
 get$on: function() {
  return $._IDBDatabaseEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }

}
});

$.$defineNativeClass('IDBTransaction', [], {
 get$on: function() {
  return $._IDBTransactionEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('IDBVersionChangeRequest', [], {
 get$on: function() {
  return $._IDBVersionChangeRequestEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLIFrameElement', ["height?", "src!", "width?"], {
});

$.$defineNativeClass('ImageData', ["height?", "width?"], {
 is$_ImageDataImpl: function() { return true; },
 is$ImageData: function() { return true; }
});

$.$defineNativeClass('HTMLImageElement', ["height?", "src!", "width?", "x?", "y?"], {
 complete$1: function(arg0) { return this.complete.call$1(arg0); }
});

$.$defineNativeClass('HTMLInputElement', ["height?", "src!", "value=", "width?"], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLLIElement', ["value="], {
});

$.$defineNativeClass('LocalMediaStream', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLMediaElement', ["src!"], {
 get$on: function() {
  return $._MediaElementEventsImpl$(this);
},
 load$0: function() {
  return this.load();
},
 get$load: function() { return new $.BoundClosure(this, 'load$0'); }
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('MediaSource', [], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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

},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
  {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 remove$1: function(track) {
  return this.remove(track);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('MessageEvent', ["ports?"], {
});

$.$defineNativeClass('MessagePort', [], {
 get$on: function() {
  return $._MessagePortEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 close$0: function() {
  return this.close();
},
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
},
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLMeterElement', ["value="], {
});

$.$defineNativeClass('MouseEvent', ["x?", "y?"], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Node', [], {
 remove$0: function() {
  if (!(this.get$parent() == null))
    this.get$parent().$dom_removeChild$1(this);
  return this;
},
 get$parent: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$parent')) {
  {
return this.parentNode;
}
  } else {
    return Object.prototype.get$parent.call(this);
  }

},
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
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
 addLast$1: function(value) {
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
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLObjectElement', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLOptionElement', ["value="], {
});

$.$defineNativeClass('HTMLOutputElement', ["value="], {
});

$.$defineNativeClass('HTMLParamElement', ["value="], {
});

$.$defineNativeClass('PeerConnection00', [], {
 get$on: function() {
  return $._PeerConnection00EventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('WebKitPoint', ["x=", "y="], {
});

$.$defineNativeClass('HTMLPreElement', ["width?"], {
});

$.$defineNativeClass('HTMLProgressElement', ["value="], {
});

$.$defineNativeClass('RTCPeerConnection', [], {
 get$on: function() {
  return $._RTCPeerConnectionEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('RadioNodeList', ["value="], {
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

$.$defineNativeClass('SVGAngle', ["value="], {
});

$.$defineNativeClass('SVGCursorElement', ["x?", "y?"], {
});

$.$defineNativeClass('SVGElement', [], {
 get$id: function() {
return this.id;
}
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

$.$defineNativeClass('SVGFEBlendElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEColorMatrixElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEComponentTransferElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFECompositeElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEConvolveMatrixElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEDiffuseLightingElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEDisplacementMapElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEDropShadowElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEFloodElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEGaussianBlurElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEImageElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEMergeElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEMorphologyElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEOffsetElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFEPointLightElement', ["x?", "y?"], {
});

$.$defineNativeClass('SVGFESpecularLightingElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFESpotLightElement', ["x?", "y?"], {
});

$.$defineNativeClass('SVGFETileElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFETurbulenceElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGFilterElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGForeignObjectElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGGlyphRefElement', ["x=", "y="], {
});

$.$defineNativeClass('SVGImageElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGLength', ["value="], {
});

$.$defineNativeClass('SVGLengthList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGMaskElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGNumber', ["value="], {
});

$.$defineNativeClass('SVGNumberList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGPathSegArcAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegArcRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicSmoothAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicSmoothRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticSmoothAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticSmoothRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegLinetoAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegLinetoHorizontalAbs', ["x="], {
});

$.$defineNativeClass('SVGPathSegLinetoHorizontalRel', ["x="], {
});

$.$defineNativeClass('SVGPathSegLinetoRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegLinetoVerticalAbs', ["y="], {
});

$.$defineNativeClass('SVGPathSegLinetoVerticalRel', ["y="], {
});

$.$defineNativeClass('SVGPathSegList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGPathSegMovetoAbs', ["x=", "y="], {
});

$.$defineNativeClass('SVGPathSegMovetoRel', ["x=", "y="], {
});

$.$defineNativeClass('SVGPatternElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGPoint', ["x=", "y="], {
});

$.$defineNativeClass('SVGPointList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGRect', ["height?", "width?", "x=", "y="], {
});

$.$defineNativeClass('SVGRectElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGSVGElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('SVGStringList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGTextPositioningElement', ["x?", "y?"], {
});

$.$defineNativeClass('SVGTransformList', [], {
 clear$0: function() {
  return this.clear();
}
});

$.$defineNativeClass('SVGUseElement', ["height?", "width?", "x?", "y?"], {
});

$.$defineNativeClass('Screen', ["height?", "width?"], {
});

$.$defineNativeClass('HTMLScriptElement', ["src!"], {
});

$.$defineNativeClass('HTMLSelectElement', ["length=", "value="], {
});

$.$defineNativeClass('SharedWorkerContext', [], {
 get$on: function() {
  return $._SharedWorkerContextEventsImpl$(this);
}
});

$.$defineNativeClass('SourceBufferList', ["length?"], {
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('HTMLSourceElement', ["src!"], {
});

$.$defineNativeClass('SpeechGrammar', ["src!"], {
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('SpeechRecognitionResult', ["length?"], {
});

$.$defineNativeClass('SpeechRecognitionResultList', ["length?"], {
});

$.$defineNativeClass('Storage', [], {
 containsKey$1: function(key) {
  return !(this.$dom_getItem$1(key) == null);
},
 operator$index$1: function(key) {
  return this.$dom_getItem$1(key);
},
 operator$indexSet$2: function(key, value) {
  return this.$dom_setItem$2(key, value);
},
 remove$1: function(key) {
  var value = this.operator$index$1(key);
  this.$dom_removeItem$1(key);
  return value;
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
 getKeys$0: function() {
  var keys = [];
  this.forEach$1(new $._StorageImpl_getKeys_anon(keys));
  return keys;
},
 getValues$0: function() {
  var values = [];
  this.forEach$1(new $._StorageImpl_getValues_anon(values));
  return values;
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
 $dom_removeItem$1: function(key) {
  return this.removeItem(key);
},
 $dom_setItem$2: function(key, data) {
  return this.setItem(key,data);
},
 is$Map: function() { return true; }
});

$.$defineNativeClass('StorageEvent', ["key?"], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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

$.$defineNativeClass('HTMLTextAreaElement', ["value="], {
});

$.$defineNativeClass('TextMetrics', ["width?"], {
});

$.$defineNativeClass('TextTrack', [], {
 get$on: function() {
  return $._TextTrackEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('TextTrackCue', ["id?", "text!"], {
 get$on: function() {
  return $._TextTrackCueEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
},
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTrackElement', ["src!"], {
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
 addLast$1: function(value) {
  throw $.$$throw($.CTC1);
},
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
},
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
},
 removeLast$0: function() {
  throw $.$$throw($.CTC12);
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
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
}
});

$.$defineNativeClass('WebSocket', [], {
 get$on: function() {
  return $._WebSocketEventsImpl$(this);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 close$2: function(code, reason) {
  return this.close(code,reason);
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
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
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 setInterval$2: function(handler, timeout) {
  return this.setInterval($.convertDartClosureToJS(handler, 0),timeout);
},
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
}
});

$.$defineNativeClass('Worker', [], {
 get$on: function() {
  return $._WorkerEventsImpl$(this);
},
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
},
 postMessage$1: function(message) {
  return this.postMessage(message);
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
},
 close$0: function() {
  return this.close();
},
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
},
 setInterval$2: function(handler, timeout) {
  return this.setInterval($.convertDartClosureToJS(handler, 0),timeout);
},
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
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

$.$defineNativeClass('XSLTProcessor', [], {
 reset$0: function() {
  return this.reset();
}
});

$.$defineNativeClass('Worker', [], {
 get$id: function() {
return this.id;
},
 postMessage$1: function(msg) {
return this.postMessage(msg);
}
});

$.$defineNativeClass('DOMWindow', [], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
},
 setInterval$2: function(handler, timeout) {
  return this.setInterval($.convertDartClosureToJS(handler, 0),timeout);
}
});

// 223 dynamic classes.
// 335 classes
// 30 !leaf
(function(){
  var v0/*class(_Uint8ArrayImpl)*/ = 'Uint8Array|Uint8ClampedArray|Uint8ClampedArray';
  var v1/*class(_SVGTextPositioningElementImpl)*/ = 'SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement';
  var v2/*class(_SVGElementImpl)*/ = [v1/*class(_SVGTextPositioningElementImpl)*/,v1/*class(_SVGTextPositioningElementImpl)*/,v1/*class(_SVGTextPositioningElementImpl)*/,v1/*class(_SVGTextPositioningElementImpl)*/,'SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPathElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGTextContentElement|SVGTextPathElement|SVGTextPathElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGClipPathElement|SVGCircleElement|SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement'].join('|');
  var v3/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement|HTMLVideoElement|HTMLAudioElement';
  var v4/*class(_ElementImpl)*/ = [v2/*class(_SVGElementImpl)*/,v3/*class(_MediaElementImpl)*/,v2/*class(_SVGElementImpl)*/,v3/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDataListElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v5/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot|ShadowRoot';
  var v6/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument|SVGDocument';
  var v7/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|CDATASection|Comment|Text|CDATASection|CDATASection|Comment';
  var v8/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v9/*class(_NodeImpl)*/ = [v4/*class(_ElementImpl)*/,v5/*class(_DocumentFragmentImpl)*/,v6/*class(_DocumentImpl)*/,v7/*class(_CharacterDataImpl)*/,v4/*class(_ElementImpl)*/,v5/*class(_DocumentFragmentImpl)*/,v6/*class(_DocumentImpl)*/,v7/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v10/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream|LocalMediaStream';
  var v11/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest';
  var v12/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker|Worker|SharedWorker';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['SVGTextPositioningElement', v1/*class(_SVGTextPositioningElementImpl)*/],
    ['AbstractWorker', v12/*class(_AbstractWorkerImpl)*/],
    ['Uint8Array', v0/*class(_Uint8ArrayImpl)*/],
    ['ArrayBufferView', [v0/*class(_Uint8ArrayImpl)*/,v0/*class(_Uint8ArrayImpl)*/,'ArrayBufferView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView|Uint32Array|Uint16Array|Int8Array|Int32Array|Int16Array|Float64Array|Float32Array|DataView'].join('|')],
    ['AudioParam', 'AudioParam|AudioGain|AudioGain'],
    ['Blob', 'Blob|File|File'],
    ['WorkerContext', v8/*class(_WorkerContextImpl)*/],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['CharacterData', v7/*class(_CharacterDataImpl)*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList|DOMSettableTokenList'],
    ['HTMLDocument', v6/*class(_DocumentImpl)*/],
    ['DocumentFragment', v5/*class(_DocumentFragmentImpl)*/],
    ['SVGElement', v2/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v3/*class(_MediaElementImpl)*/],
    ['Element', v4/*class(_ElementImpl)*/],
    ['Entry', 'Entry|FileEntry|DirectoryEntry|FileEntry|DirectoryEntry'],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync|FileEntrySync|DirectoryEntrySync'],
    ['Node', v9/*class(_NodeImpl)*/],
    ['MediaStream', v10/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v11/*class(_IDBRequestImpl)*/],
    ['EventTarget', [v8/*class(_WorkerContextImpl)*/,v9/*class(_NodeImpl)*/,v10/*class(_MediaStreamImpl)*/,v11/*class(_IDBRequestImpl)*/,v12/*class(_AbstractWorkerImpl)*/,v8/*class(_WorkerContextImpl)*/,v9/*class(_NodeImpl)*/,v10/*class(_MediaStreamImpl)*/,v11/*class(_IDBRequestImpl)*/,v12/*class(_AbstractWorkerImpl)*/,'EventTarget|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext|DOMWindow|WebSocket|WebKitNamedFlow|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|SourceBufferList|SVGElementInstance|RTCPeerConnection|Performance|PeerConnection00|Notification|MessagePort|MediaStreamTrackList|MediaStreamTrack|MediaSource|MediaController|IDBTransaction|IDBDatabase|XMLHttpRequestUpload|XMLHttpRequest|FileWriter|FileReader|EventSource|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLOptionsCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue|IDBCursorWithValue'],
    ['MouseEvent', 'MouseEvent|WheelEvent|WheelEvent'],
    ['NodeList', 'NodeList|RadioNodeList|RadioNodeList']];
$.dynamicSetMetadata(table);
})();

var $globalThis = $;
var $globalState;
var $globals;
var $isWorker;
var $supportsWorkers;
var $thisScriptUrl;
function $static_init(){};

function $initGlobals(context) {
  context.isolateStatics = new Isolate();
}
function $setGlobals(context) {
  $ = context.isolateStatics;
  $globalThis = $;
}
$.main.call$0 = $.main
if (typeof document != 'undefined' && document.readyState != 'complete') {
  document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {
      $.startRootIsolate($.main);
    }
  }, false);
} else {
  $.startRootIsolate($.main);
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

//@ sourceMappingURL=example04.dart.js.map