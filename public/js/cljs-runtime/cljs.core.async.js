goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43801 = arguments.length;
switch (G__43801) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43805 = (function (f,blockable,meta43806){
this.f = f;
this.blockable = blockable;
this.meta43806 = meta43806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43807,meta43806__$1){
var self__ = this;
var _43807__$1 = this;
return (new cljs.core.async.t_cljs$core$async43805(self__.f,self__.blockable,meta43806__$1));
}));

(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43807){
var self__ = this;
var _43807__$1 = this;
return self__.meta43806;
}));

(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43806","meta43806",-650320014,null)], null);
}));

(cljs.core.async.t_cljs$core$async43805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43805");

(cljs.core.async.t_cljs$core$async43805.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43805.
 */
cljs.core.async.__GT_t_cljs$core$async43805 = (function cljs$core$async$__GT_t_cljs$core$async43805(f__$1,blockable__$1,meta43806){
return (new cljs.core.async.t_cljs$core$async43805(f__$1,blockable__$1,meta43806));
});

}

return (new cljs.core.async.t_cljs$core$async43805(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43838 = arguments.length;
switch (G__43838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43853 = arguments.length;
switch (G__43853) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43880 = arguments.length;
switch (G__43880) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46589 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46589) : fn1.call(null,val_46589));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46589) : fn1.call(null,val_46589));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43897 = arguments.length;
switch (G__43897) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___46603 = n;
var x_46604 = (0);
while(true){
if((x_46604 < n__4613__auto___46603)){
(a[x_46604] = x_46604);

var G__46605 = (x_46604 + (1));
x_46604 = G__46605;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43909 = (function (flag,meta43910){
this.flag = flag;
this.meta43910 = meta43910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43911,meta43910__$1){
var self__ = this;
var _43911__$1 = this;
return (new cljs.core.async.t_cljs$core$async43909(self__.flag,meta43910__$1));
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43911){
var self__ = this;
var _43911__$1 = this;
return self__.meta43910;
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43910","meta43910",197068927,null)], null);
}));

(cljs.core.async.t_cljs$core$async43909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43909");

(cljs.core.async.t_cljs$core$async43909.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43909.
 */
cljs.core.async.__GT_t_cljs$core$async43909 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43909(flag__$1,meta43910){
return (new cljs.core.async.t_cljs$core$async43909(flag__$1,meta43910));
});

}

return (new cljs.core.async.t_cljs$core$async43909(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43912 = (function (flag,cb,meta43913){
this.flag = flag;
this.cb = cb;
this.meta43913 = meta43913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43914,meta43913__$1){
var self__ = this;
var _43914__$1 = this;
return (new cljs.core.async.t_cljs$core$async43912(self__.flag,self__.cb,meta43913__$1));
}));

(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43914){
var self__ = this;
var _43914__$1 = this;
return self__.meta43913;
}));

(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43913","meta43913",1764165610,null)], null);
}));

(cljs.core.async.t_cljs$core$async43912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43912");

(cljs.core.async.t_cljs$core$async43912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43912.
 */
cljs.core.async.__GT_t_cljs$core$async43912 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43912(flag__$1,cb__$1,meta43913){
return (new cljs.core.async.t_cljs$core$async43912(flag__$1,cb__$1,meta43913));
});

}

return (new cljs.core.async.t_cljs$core$async43912(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43920_SHARP_){
var G__43928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43920_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43928) : fret.call(null,G__43928));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43921_SHARP_){
var G__43929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43921_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43929) : fret.call(null,G__43929));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46643 = (i + (1));
i = G__46643;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46660 = arguments.length;
var i__4737__auto___46661 = (0);
while(true){
if((i__4737__auto___46661 < len__4736__auto___46660)){
args__4742__auto__.push((arguments[i__4737__auto___46661]));

var G__46662 = (i__4737__auto___46661 + (1));
i__4737__auto___46661 = G__46662;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43937){
var map__43938 = p__43937;
var map__43938__$1 = (((((!((map__43938 == null))))?(((((map__43938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43938):map__43938);
var opts = map__43938__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43931){
var G__43932 = cljs.core.first(seq43931);
var seq43931__$1 = cljs.core.next(seq43931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43932,seq43931__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43948 = arguments.length;
switch (G__43948) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43718__auto___46677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_43976){
var state_val_43977 = (state_43976[(1)]);
if((state_val_43977 === (7))){
var inst_43972 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_43982_46681 = state_43976__$1;
(statearr_43982_46681[(2)] = inst_43972);

(statearr_43982_46681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (1))){
var state_43976__$1 = state_43976;
var statearr_43983_46682 = state_43976__$1;
(statearr_43983_46682[(2)] = null);

(statearr_43983_46682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (4))){
var inst_43951 = (state_43976[(7)]);
var inst_43951__$1 = (state_43976[(2)]);
var inst_43953 = (inst_43951__$1 == null);
var state_43976__$1 = (function (){var statearr_43984 = state_43976;
(statearr_43984[(7)] = inst_43951__$1);

return statearr_43984;
})();
if(cljs.core.truth_(inst_43953)){
var statearr_43986_46686 = state_43976__$1;
(statearr_43986_46686[(1)] = (5));

} else {
var statearr_43993_46687 = state_43976__$1;
(statearr_43993_46687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (13))){
var state_43976__$1 = state_43976;
var statearr_43997_46688 = state_43976__$1;
(statearr_43997_46688[(2)] = null);

(statearr_43997_46688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (6))){
var inst_43951 = (state_43976[(7)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43976__$1,(11),to,inst_43951);
} else {
if((state_val_43977 === (3))){
var inst_43974 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43976__$1,inst_43974);
} else {
if((state_val_43977 === (12))){
var state_43976__$1 = state_43976;
var statearr_43998_46692 = state_43976__$1;
(statearr_43998_46692[(2)] = null);

(statearr_43998_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (2))){
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43976__$1,(4),from);
} else {
if((state_val_43977 === (11))){
var inst_43964 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
if(cljs.core.truth_(inst_43964)){
var statearr_43999_46694 = state_43976__$1;
(statearr_43999_46694[(1)] = (12));

} else {
var statearr_44000_46695 = state_43976__$1;
(statearr_44000_46695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (9))){
var state_43976__$1 = state_43976;
var statearr_44001_46697 = state_43976__$1;
(statearr_44001_46697[(2)] = null);

(statearr_44001_46697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (5))){
var state_43976__$1 = state_43976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44002_46698 = state_43976__$1;
(statearr_44002_46698[(1)] = (8));

} else {
var statearr_44006_46699 = state_43976__$1;
(statearr_44006_46699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (14))){
var inst_43970 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_44007_46700 = state_43976__$1;
(statearr_44007_46700[(2)] = inst_43970);

(statearr_44007_46700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (10))){
var inst_43961 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_44008_46749 = state_43976__$1;
(statearr_44008_46749[(2)] = inst_43961);

(statearr_44008_46749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (8))){
var inst_43956 = cljs.core.async.close_BANG_(to);
var state_43976__$1 = state_43976;
var statearr_44010_46750 = state_43976__$1;
(statearr_44010_46750[(2)] = inst_43956);

(statearr_44010_46750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_44014 = [null,null,null,null,null,null,null,null];
(statearr_44014[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_44014[(1)] = (1));

return statearr_44014;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_43976){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_43976);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44015){var ex__43600__auto__ = e44015;
var statearr_44016_46751 = state_43976;
(statearr_44016_46751[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_43976[(4)]))){
var statearr_44017_46752 = state_43976;
(statearr_44017_46752[(1)] = cljs.core.first((state_43976[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46753 = state_43976;
state_43976 = G__46753;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_43976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_43976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44018 = f__43719__auto__();
(statearr_44018[(6)] = c__43718__auto___46677);

return statearr_44018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44033){
var vec__44034 = p__44033;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44034,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44034,(1),null);
var job = vec__44034;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43718__auto___46761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44041){
var state_val_44042 = (state_44041[(1)]);
if((state_val_44042 === (1))){
var state_44041__$1 = state_44041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44041__$1,(2),res,v);
} else {
if((state_val_44042 === (2))){
var inst_44038 = (state_44041[(2)]);
var inst_44039 = cljs.core.async.close_BANG_(res);
var state_44041__$1 = (function (){var statearr_44043 = state_44041;
(statearr_44043[(7)] = inst_44038);

return statearr_44043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44041__$1,inst_44039);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_44044 = [null,null,null,null,null,null,null,null];
(statearr_44044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__);

(statearr_44044[(1)] = (1));

return statearr_44044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1 = (function (state_44041){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44041);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44045){var ex__43600__auto__ = e44045;
var statearr_44046_46771 = state_44041;
(statearr_44046_46771[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44041[(4)]))){
var statearr_44047_46772 = state_44041;
(statearr_44047_46772[(1)] = cljs.core.first((state_44041[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46773 = state_44041;
state_44041 = G__46773;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = function(state_44041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1.call(this,state_44041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44048 = f__43719__auto__();
(statearr_44048[(6)] = c__43718__auto___46761);

return statearr_44048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44049){
var vec__44050 = p__44049;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44050,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44050,(1),null);
var job = vec__44050;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___46790 = n;
var __46791 = (0);
while(true){
if((__46791 < n__4613__auto___46790)){
var G__44057_46792 = type;
var G__44057_46793__$1 = (((G__44057_46792 instanceof cljs.core.Keyword))?G__44057_46792.fqn:null);
switch (G__44057_46793__$1) {
case "compute":
var c__43718__auto___46815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46791,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = ((function (__46791,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function (state_44070){
var state_val_44071 = (state_44070[(1)]);
if((state_val_44071 === (1))){
var state_44070__$1 = state_44070;
var statearr_44076_46816 = state_44070__$1;
(statearr_44076_46816[(2)] = null);

(statearr_44076_46816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (2))){
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44070__$1,(4),jobs);
} else {
if((state_val_44071 === (3))){
var inst_44068 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44070__$1,inst_44068);
} else {
if((state_val_44071 === (4))){
var inst_44060 = (state_44070[(2)]);
var inst_44061 = process(inst_44060);
var state_44070__$1 = state_44070;
if(cljs.core.truth_(inst_44061)){
var statearr_44089_46817 = state_44070__$1;
(statearr_44089_46817[(1)] = (5));

} else {
var statearr_44090_46818 = state_44070__$1;
(statearr_44090_46818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (5))){
var state_44070__$1 = state_44070;
var statearr_44091_46819 = state_44070__$1;
(statearr_44091_46819[(2)] = null);

(statearr_44091_46819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (6))){
var state_44070__$1 = state_44070;
var statearr_44092_46820 = state_44070__$1;
(statearr_44092_46820[(2)] = null);

(statearr_44092_46820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44071 === (7))){
var inst_44066 = (state_44070[(2)]);
var state_44070__$1 = state_44070;
var statearr_44093_46821 = state_44070__$1;
(statearr_44093_46821[(2)] = inst_44066);

(statearr_44093_46821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46791,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
;
return ((function (__46791,switch__43596__auto__,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_44094 = [null,null,null,null,null,null,null];
(statearr_44094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__);

(statearr_44094[(1)] = (1));

return statearr_44094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1 = (function (state_44070){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44070);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44095){var ex__43600__auto__ = e44095;
var statearr_44096_46824 = state_44070;
(statearr_44096_46824[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44070[(4)]))){
var statearr_44097_46825 = state_44070;
(statearr_44097_46825[(1)] = cljs.core.first((state_44070[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46826 = state_44070;
state_44070 = G__46826;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = function(state_44070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1.call(this,state_44070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__;
})()
;})(__46791,switch__43596__auto__,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
})();
var state__43720__auto__ = (function (){var statearr_44098 = f__43719__auto__();
(statearr_44098[(6)] = c__43718__auto___46815);

return statearr_44098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
});})(__46791,c__43718__auto___46815,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
);


break;
case "async":
var c__43718__auto___46829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46791,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = ((function (__46791,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function (state_44111){
var state_val_44112 = (state_44111[(1)]);
if((state_val_44112 === (1))){
var state_44111__$1 = state_44111;
var statearr_44113_46830 = state_44111__$1;
(statearr_44113_46830[(2)] = null);

(statearr_44113_46830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (2))){
var state_44111__$1 = state_44111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44111__$1,(4),jobs);
} else {
if((state_val_44112 === (3))){
var inst_44109 = (state_44111[(2)]);
var state_44111__$1 = state_44111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44111__$1,inst_44109);
} else {
if((state_val_44112 === (4))){
var inst_44101 = (state_44111[(2)]);
var inst_44102 = async(inst_44101);
var state_44111__$1 = state_44111;
if(cljs.core.truth_(inst_44102)){
var statearr_44114_46831 = state_44111__$1;
(statearr_44114_46831[(1)] = (5));

} else {
var statearr_44115_46832 = state_44111__$1;
(statearr_44115_46832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (5))){
var state_44111__$1 = state_44111;
var statearr_44116_46833 = state_44111__$1;
(statearr_44116_46833[(2)] = null);

(statearr_44116_46833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (6))){
var state_44111__$1 = state_44111;
var statearr_44118_46834 = state_44111__$1;
(statearr_44118_46834[(2)] = null);

(statearr_44118_46834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (7))){
var inst_44107 = (state_44111[(2)]);
var state_44111__$1 = state_44111;
var statearr_44121_46836 = state_44111__$1;
(statearr_44121_46836[(2)] = inst_44107);

(statearr_44121_46836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46791,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
;
return ((function (__46791,switch__43596__auto__,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_44122 = [null,null,null,null,null,null,null];
(statearr_44122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__);

(statearr_44122[(1)] = (1));

return statearr_44122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1 = (function (state_44111){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44111);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44123){var ex__43600__auto__ = e44123;
var statearr_44124_46853 = state_44111;
(statearr_44124_46853[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44111[(4)]))){
var statearr_44126_46854 = state_44111;
(statearr_44126_46854[(1)] = cljs.core.first((state_44111[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46855 = state_44111;
state_44111 = G__46855;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = function(state_44111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1.call(this,state_44111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__;
})()
;})(__46791,switch__43596__auto__,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
})();
var state__43720__auto__ = (function (){var statearr_44127 = f__43719__auto__();
(statearr_44127[(6)] = c__43718__auto___46829);

return statearr_44127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
});})(__46791,c__43718__auto___46829,G__44057_46792,G__44057_46793__$1,n__4613__auto___46790,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44057_46793__$1)].join('')));

}

var G__46860 = (__46791 + (1));
__46791 = G__46860;
continue;
} else {
}
break;
}

var c__43718__auto___46861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44156){
var state_val_44157 = (state_44156[(1)]);
if((state_val_44157 === (7))){
var inst_44152 = (state_44156[(2)]);
var state_44156__$1 = state_44156;
var statearr_44174_46862 = state_44156__$1;
(statearr_44174_46862[(2)] = inst_44152);

(statearr_44174_46862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (1))){
var state_44156__$1 = state_44156;
var statearr_44178_46863 = state_44156__$1;
(statearr_44178_46863[(2)] = null);

(statearr_44178_46863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (4))){
var inst_44133 = (state_44156[(7)]);
var inst_44133__$1 = (state_44156[(2)]);
var inst_44134 = (inst_44133__$1 == null);
var state_44156__$1 = (function (){var statearr_44182 = state_44156;
(statearr_44182[(7)] = inst_44133__$1);

return statearr_44182;
})();
if(cljs.core.truth_(inst_44134)){
var statearr_44183_46869 = state_44156__$1;
(statearr_44183_46869[(1)] = (5));

} else {
var statearr_44184_46870 = state_44156__$1;
(statearr_44184_46870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (6))){
var inst_44138 = (state_44156[(8)]);
var inst_44133 = (state_44156[(7)]);
var inst_44138__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44140 = [inst_44133,inst_44138__$1];
var inst_44141 = (new cljs.core.PersistentVector(null,2,(5),inst_44139,inst_44140,null));
var state_44156__$1 = (function (){var statearr_44187 = state_44156;
(statearr_44187[(8)] = inst_44138__$1);

return statearr_44187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44156__$1,(8),jobs,inst_44141);
} else {
if((state_val_44157 === (3))){
var inst_44154 = (state_44156[(2)]);
var state_44156__$1 = state_44156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44156__$1,inst_44154);
} else {
if((state_val_44157 === (2))){
var state_44156__$1 = state_44156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44156__$1,(4),from);
} else {
if((state_val_44157 === (9))){
var inst_44149 = (state_44156[(2)]);
var state_44156__$1 = (function (){var statearr_44189 = state_44156;
(statearr_44189[(9)] = inst_44149);

return statearr_44189;
})();
var statearr_44190_46875 = state_44156__$1;
(statearr_44190_46875[(2)] = null);

(statearr_44190_46875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (5))){
var inst_44136 = cljs.core.async.close_BANG_(jobs);
var state_44156__$1 = state_44156;
var statearr_44191_46876 = state_44156__$1;
(statearr_44191_46876[(2)] = inst_44136);

(statearr_44191_46876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (8))){
var inst_44138 = (state_44156[(8)]);
var inst_44143 = (state_44156[(2)]);
var state_44156__$1 = (function (){var statearr_44192 = state_44156;
(statearr_44192[(10)] = inst_44143);

return statearr_44192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44156__$1,(9),results,inst_44138);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_44193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__);

(statearr_44193[(1)] = (1));

return statearr_44193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1 = (function (state_44156){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44156);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44194){var ex__43600__auto__ = e44194;
var statearr_44195_46877 = state_44156;
(statearr_44195_46877[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44156[(4)]))){
var statearr_44198_46878 = state_44156;
(statearr_44198_46878[(1)] = cljs.core.first((state_44156[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46879 = state_44156;
state_44156 = G__46879;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = function(state_44156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1.call(this,state_44156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44201 = f__43719__auto__();
(statearr_44201[(6)] = c__43718__auto___46861);

return statearr_44201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


var c__43718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44243){
var state_val_44244 = (state_44243[(1)]);
if((state_val_44244 === (7))){
var inst_44237 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
var statearr_44252_46920 = state_44243__$1;
(statearr_44252_46920[(2)] = inst_44237);

(statearr_44252_46920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (20))){
var state_44243__$1 = state_44243;
var statearr_44254_46921 = state_44243__$1;
(statearr_44254_46921[(2)] = null);

(statearr_44254_46921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (1))){
var state_44243__$1 = state_44243;
var statearr_44259_46926 = state_44243__$1;
(statearr_44259_46926[(2)] = null);

(statearr_44259_46926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (4))){
var inst_44204 = (state_44243[(7)]);
var inst_44204__$1 = (state_44243[(2)]);
var inst_44205 = (inst_44204__$1 == null);
var state_44243__$1 = (function (){var statearr_44271 = state_44243;
(statearr_44271[(7)] = inst_44204__$1);

return statearr_44271;
})();
if(cljs.core.truth_(inst_44205)){
var statearr_44276_46931 = state_44243__$1;
(statearr_44276_46931[(1)] = (5));

} else {
var statearr_44277_46936 = state_44243__$1;
(statearr_44277_46936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (15))){
var inst_44219 = (state_44243[(8)]);
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44243__$1,(18),to,inst_44219);
} else {
if((state_val_44244 === (21))){
var inst_44232 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
var statearr_44278_46937 = state_44243__$1;
(statearr_44278_46937[(2)] = inst_44232);

(statearr_44278_46937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (13))){
var inst_44234 = (state_44243[(2)]);
var state_44243__$1 = (function (){var statearr_44279 = state_44243;
(statearr_44279[(9)] = inst_44234);

return statearr_44279;
})();
var statearr_44281_46938 = state_44243__$1;
(statearr_44281_46938[(2)] = null);

(statearr_44281_46938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (6))){
var inst_44204 = (state_44243[(7)]);
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44243__$1,(11),inst_44204);
} else {
if((state_val_44244 === (17))){
var inst_44227 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
if(cljs.core.truth_(inst_44227)){
var statearr_44282_46941 = state_44243__$1;
(statearr_44282_46941[(1)] = (19));

} else {
var statearr_44284_46942 = state_44243__$1;
(statearr_44284_46942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (3))){
var inst_44239 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44243__$1,inst_44239);
} else {
if((state_val_44244 === (12))){
var inst_44216 = (state_44243[(10)]);
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44243__$1,(14),inst_44216);
} else {
if((state_val_44244 === (2))){
var state_44243__$1 = state_44243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44243__$1,(4),results);
} else {
if((state_val_44244 === (19))){
var state_44243__$1 = state_44243;
var statearr_44285_46945 = state_44243__$1;
(statearr_44285_46945[(2)] = null);

(statearr_44285_46945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (11))){
var inst_44216 = (state_44243[(2)]);
var state_44243__$1 = (function (){var statearr_44286 = state_44243;
(statearr_44286[(10)] = inst_44216);

return statearr_44286;
})();
var statearr_44287_46947 = state_44243__$1;
(statearr_44287_46947[(2)] = null);

(statearr_44287_46947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (9))){
var state_44243__$1 = state_44243;
var statearr_44288_46948 = state_44243__$1;
(statearr_44288_46948[(2)] = null);

(statearr_44288_46948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (5))){
var state_44243__$1 = state_44243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44289_46953 = state_44243__$1;
(statearr_44289_46953[(1)] = (8));

} else {
var statearr_44290_46954 = state_44243__$1;
(statearr_44290_46954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (14))){
var inst_44219 = (state_44243[(8)]);
var inst_44219__$1 = (state_44243[(2)]);
var inst_44220 = (inst_44219__$1 == null);
var inst_44221 = cljs.core.not(inst_44220);
var state_44243__$1 = (function (){var statearr_44292 = state_44243;
(statearr_44292[(8)] = inst_44219__$1);

return statearr_44292;
})();
if(inst_44221){
var statearr_44293_46962 = state_44243__$1;
(statearr_44293_46962[(1)] = (15));

} else {
var statearr_44294_46963 = state_44243__$1;
(statearr_44294_46963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (16))){
var state_44243__$1 = state_44243;
var statearr_44296_46964 = state_44243__$1;
(statearr_44296_46964[(2)] = false);

(statearr_44296_46964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (10))){
var inst_44213 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
var statearr_44303_46987 = state_44243__$1;
(statearr_44303_46987[(2)] = inst_44213);

(statearr_44303_46987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (18))){
var inst_44224 = (state_44243[(2)]);
var state_44243__$1 = state_44243;
var statearr_44304_46988 = state_44243__$1;
(statearr_44304_46988[(2)] = inst_44224);

(statearr_44304_46988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44244 === (8))){
var inst_44210 = cljs.core.async.close_BANG_(to);
var state_44243__$1 = state_44243;
var statearr_44305_46989 = state_44243__$1;
(statearr_44305_46989[(2)] = inst_44210);

(statearr_44305_46989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_44306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__);

(statearr_44306[(1)] = (1));

return statearr_44306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1 = (function (state_44243){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44243);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44307){var ex__43600__auto__ = e44307;
var statearr_44308_46990 = state_44243;
(statearr_44308_46990[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44243[(4)]))){
var statearr_44309_46991 = state_44243;
(statearr_44309_46991[(1)] = cljs.core.first((state_44243[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46992 = state_44243;
state_44243 = G__46992;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__ = function(state_44243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1.call(this,state_44243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44310 = f__43719__auto__();
(statearr_44310[(6)] = c__43718__auto__);

return statearr_44310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

return c__43718__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44321 = arguments.length;
switch (G__44321) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44325 = arguments.length;
switch (G__44325) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44327 = arguments.length;
switch (G__44327) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43718__auto___47015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44357){
var state_val_44358 = (state_44357[(1)]);
if((state_val_44358 === (7))){
var inst_44353 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44371_47016 = state_44357__$1;
(statearr_44371_47016[(2)] = inst_44353);

(statearr_44371_47016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (1))){
var state_44357__$1 = state_44357;
var statearr_44372_47017 = state_44357__$1;
(statearr_44372_47017[(2)] = null);

(statearr_44372_47017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (4))){
var inst_44334 = (state_44357[(7)]);
var inst_44334__$1 = (state_44357[(2)]);
var inst_44335 = (inst_44334__$1 == null);
var state_44357__$1 = (function (){var statearr_44373 = state_44357;
(statearr_44373[(7)] = inst_44334__$1);

return statearr_44373;
})();
if(cljs.core.truth_(inst_44335)){
var statearr_44374_47018 = state_44357__$1;
(statearr_44374_47018[(1)] = (5));

} else {
var statearr_44375_47019 = state_44357__$1;
(statearr_44375_47019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (13))){
var state_44357__$1 = state_44357;
var statearr_44376_47020 = state_44357__$1;
(statearr_44376_47020[(2)] = null);

(statearr_44376_47020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (6))){
var inst_44334 = (state_44357[(7)]);
var inst_44340 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44334) : p.call(null,inst_44334));
var state_44357__$1 = state_44357;
if(cljs.core.truth_(inst_44340)){
var statearr_44377_47022 = state_44357__$1;
(statearr_44377_47022[(1)] = (9));

} else {
var statearr_44384_47023 = state_44357__$1;
(statearr_44384_47023[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (3))){
var inst_44355 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44357__$1,inst_44355);
} else {
if((state_val_44358 === (12))){
var state_44357__$1 = state_44357;
var statearr_44388_47024 = state_44357__$1;
(statearr_44388_47024[(2)] = null);

(statearr_44388_47024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (2))){
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44357__$1,(4),ch);
} else {
if((state_val_44358 === (11))){
var inst_44334 = (state_44357[(7)]);
var inst_44344 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44357__$1,(8),inst_44344,inst_44334);
} else {
if((state_val_44358 === (9))){
var state_44357__$1 = state_44357;
var statearr_44389_47025 = state_44357__$1;
(statearr_44389_47025[(2)] = tc);

(statearr_44389_47025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (5))){
var inst_44337 = cljs.core.async.close_BANG_(tc);
var inst_44338 = cljs.core.async.close_BANG_(fc);
var state_44357__$1 = (function (){var statearr_44394 = state_44357;
(statearr_44394[(8)] = inst_44337);

return statearr_44394;
})();
var statearr_44396_47026 = state_44357__$1;
(statearr_44396_47026[(2)] = inst_44338);

(statearr_44396_47026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (14))){
var inst_44351 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44397_47027 = state_44357__$1;
(statearr_44397_47027[(2)] = inst_44351);

(statearr_44397_47027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (10))){
var state_44357__$1 = state_44357;
var statearr_44398_47028 = state_44357__$1;
(statearr_44398_47028[(2)] = fc);

(statearr_44398_47028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (8))){
var inst_44346 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
if(cljs.core.truth_(inst_44346)){
var statearr_44400_47032 = state_44357__$1;
(statearr_44400_47032[(1)] = (12));

} else {
var statearr_44401_47033 = state_44357__$1;
(statearr_44401_47033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_44402 = [null,null,null,null,null,null,null,null,null];
(statearr_44402[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_44402[(1)] = (1));

return statearr_44402;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_44357){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44357);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44403){var ex__43600__auto__ = e44403;
var statearr_44404_47038 = state_44357;
(statearr_44404_47038[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44357[(4)]))){
var statearr_44405_47040 = state_44357;
(statearr_44405_47040[(1)] = cljs.core.first((state_44357[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47070 = state_44357;
state_44357 = G__47070;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_44357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_44357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44406 = f__43719__auto__();
(statearr_44406[(6)] = c__43718__auto___47015);

return statearr_44406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44432){
var state_val_44433 = (state_44432[(1)]);
if((state_val_44433 === (7))){
var inst_44428 = (state_44432[(2)]);
var state_44432__$1 = state_44432;
var statearr_44434_47071 = state_44432__$1;
(statearr_44434_47071[(2)] = inst_44428);

(statearr_44434_47071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (1))){
var inst_44411 = init;
var inst_44412 = inst_44411;
var state_44432__$1 = (function (){var statearr_44435 = state_44432;
(statearr_44435[(7)] = inst_44412);

return statearr_44435;
})();
var statearr_44437_47072 = state_44432__$1;
(statearr_44437_47072[(2)] = null);

(statearr_44437_47072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (4))){
var inst_44415 = (state_44432[(8)]);
var inst_44415__$1 = (state_44432[(2)]);
var inst_44416 = (inst_44415__$1 == null);
var state_44432__$1 = (function (){var statearr_44438 = state_44432;
(statearr_44438[(8)] = inst_44415__$1);

return statearr_44438;
})();
if(cljs.core.truth_(inst_44416)){
var statearr_44439_47073 = state_44432__$1;
(statearr_44439_47073[(1)] = (5));

} else {
var statearr_44440_47074 = state_44432__$1;
(statearr_44440_47074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (6))){
var inst_44412 = (state_44432[(7)]);
var inst_44419 = (state_44432[(9)]);
var inst_44415 = (state_44432[(8)]);
var inst_44419__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44412,inst_44415) : f.call(null,inst_44412,inst_44415));
var inst_44420 = cljs.core.reduced_QMARK_(inst_44419__$1);
var state_44432__$1 = (function (){var statearr_44441 = state_44432;
(statearr_44441[(9)] = inst_44419__$1);

return statearr_44441;
})();
if(inst_44420){
var statearr_44442_47075 = state_44432__$1;
(statearr_44442_47075[(1)] = (8));

} else {
var statearr_44443_47076 = state_44432__$1;
(statearr_44443_47076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (3))){
var inst_44430 = (state_44432[(2)]);
var state_44432__$1 = state_44432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44432__$1,inst_44430);
} else {
if((state_val_44433 === (2))){
var state_44432__$1 = state_44432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44432__$1,(4),ch);
} else {
if((state_val_44433 === (9))){
var inst_44419 = (state_44432[(9)]);
var inst_44412 = inst_44419;
var state_44432__$1 = (function (){var statearr_44444 = state_44432;
(statearr_44444[(7)] = inst_44412);

return statearr_44444;
})();
var statearr_44445_47077 = state_44432__$1;
(statearr_44445_47077[(2)] = null);

(statearr_44445_47077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (5))){
var inst_44412 = (state_44432[(7)]);
var state_44432__$1 = state_44432;
var statearr_44446_47079 = state_44432__$1;
(statearr_44446_47079[(2)] = inst_44412);

(statearr_44446_47079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (10))){
var inst_44426 = (state_44432[(2)]);
var state_44432__$1 = state_44432;
var statearr_44447_47081 = state_44432__$1;
(statearr_44447_47081[(2)] = inst_44426);

(statearr_44447_47081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44433 === (8))){
var inst_44419 = (state_44432[(9)]);
var inst_44422 = cljs.core.deref(inst_44419);
var state_44432__$1 = state_44432;
var statearr_44449_47082 = state_44432__$1;
(statearr_44449_47082[(2)] = inst_44422);

(statearr_44449_47082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43597__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43597__auto____0 = (function (){
var statearr_44451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44451[(0)] = cljs$core$async$reduce_$_state_machine__43597__auto__);

(statearr_44451[(1)] = (1));

return statearr_44451;
});
var cljs$core$async$reduce_$_state_machine__43597__auto____1 = (function (state_44432){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44432);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44452){var ex__43600__auto__ = e44452;
var statearr_44453_47105 = state_44432;
(statearr_44453_47105[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44432[(4)]))){
var statearr_44460_47106 = state_44432;
(statearr_44460_47106[(1)] = cljs.core.first((state_44432[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47109 = state_44432;
state_44432 = G__47109;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43597__auto__ = function(state_44432){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43597__auto____1.call(this,state_44432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43597__auto____0;
cljs$core$async$reduce_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43597__auto____1;
return cljs$core$async$reduce_$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44462 = f__43719__auto__();
(statearr_44462[(6)] = c__43718__auto__);

return statearr_44462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

return c__43718__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44468){
var state_val_44469 = (state_44468[(1)]);
if((state_val_44469 === (1))){
var inst_44463 = cljs.core.async.reduce(f__$1,init,ch);
var state_44468__$1 = state_44468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44468__$1,(2),inst_44463);
} else {
if((state_val_44469 === (2))){
var inst_44465 = (state_44468[(2)]);
var inst_44466 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44465) : f__$1.call(null,inst_44465));
var state_44468__$1 = state_44468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44468__$1,inst_44466);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43597__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43597__auto____0 = (function (){
var statearr_44476 = [null,null,null,null,null,null,null];
(statearr_44476[(0)] = cljs$core$async$transduce_$_state_machine__43597__auto__);

(statearr_44476[(1)] = (1));

return statearr_44476;
});
var cljs$core$async$transduce_$_state_machine__43597__auto____1 = (function (state_44468){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44468);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44478){var ex__43600__auto__ = e44478;
var statearr_44479_47111 = state_44468;
(statearr_44479_47111[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44468[(4)]))){
var statearr_44480_47112 = state_44468;
(statearr_44480_47112[(1)] = cljs.core.first((state_44468[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47113 = state_44468;
state_44468 = G__47113;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43597__auto__ = function(state_44468){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43597__auto____1.call(this,state_44468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43597__auto____0;
cljs$core$async$transduce_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43597__auto____1;
return cljs$core$async$transduce_$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44485 = f__43719__auto__();
(statearr_44485[(6)] = c__43718__auto__);

return statearr_44485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

return c__43718__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44490 = arguments.length;
switch (G__44490) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44521){
var state_val_44522 = (state_44521[(1)]);
if((state_val_44522 === (7))){
var inst_44500 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
var statearr_44523_47131 = state_44521__$1;
(statearr_44523_47131[(2)] = inst_44500);

(statearr_44523_47131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (1))){
var inst_44494 = cljs.core.seq(coll);
var inst_44495 = inst_44494;
var state_44521__$1 = (function (){var statearr_44527 = state_44521;
(statearr_44527[(7)] = inst_44495);

return statearr_44527;
})();
var statearr_44528_47132 = state_44521__$1;
(statearr_44528_47132[(2)] = null);

(statearr_44528_47132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (4))){
var inst_44495 = (state_44521[(7)]);
var inst_44498 = cljs.core.first(inst_44495);
var state_44521__$1 = state_44521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44521__$1,(7),ch,inst_44498);
} else {
if((state_val_44522 === (13))){
var inst_44512 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
var statearr_44529_47137 = state_44521__$1;
(statearr_44529_47137[(2)] = inst_44512);

(statearr_44529_47137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (6))){
var inst_44503 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
if(cljs.core.truth_(inst_44503)){
var statearr_44530_47138 = state_44521__$1;
(statearr_44530_47138[(1)] = (8));

} else {
var statearr_44532_47142 = state_44521__$1;
(statearr_44532_47142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (3))){
var inst_44516 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44521__$1,inst_44516);
} else {
if((state_val_44522 === (12))){
var state_44521__$1 = state_44521;
var statearr_44533_47143 = state_44521__$1;
(statearr_44533_47143[(2)] = null);

(statearr_44533_47143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (2))){
var inst_44495 = (state_44521[(7)]);
var state_44521__$1 = state_44521;
if(cljs.core.truth_(inst_44495)){
var statearr_44542_47149 = state_44521__$1;
(statearr_44542_47149[(1)] = (4));

} else {
var statearr_44543_47150 = state_44521__$1;
(statearr_44543_47150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (11))){
var inst_44509 = cljs.core.async.close_BANG_(ch);
var state_44521__$1 = state_44521;
var statearr_44544_47179 = state_44521__$1;
(statearr_44544_47179[(2)] = inst_44509);

(statearr_44544_47179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (9))){
var state_44521__$1 = state_44521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44545_47180 = state_44521__$1;
(statearr_44545_47180[(1)] = (11));

} else {
var statearr_44549_47181 = state_44521__$1;
(statearr_44549_47181[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (5))){
var inst_44495 = (state_44521[(7)]);
var state_44521__$1 = state_44521;
var statearr_44550_47182 = state_44521__$1;
(statearr_44550_47182[(2)] = inst_44495);

(statearr_44550_47182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (10))){
var inst_44514 = (state_44521[(2)]);
var state_44521__$1 = state_44521;
var statearr_44551_47183 = state_44521__$1;
(statearr_44551_47183[(2)] = inst_44514);

(statearr_44551_47183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44522 === (8))){
var inst_44495 = (state_44521[(7)]);
var inst_44505 = cljs.core.next(inst_44495);
var inst_44495__$1 = inst_44505;
var state_44521__$1 = (function (){var statearr_44552 = state_44521;
(statearr_44552[(7)] = inst_44495__$1);

return statearr_44552;
})();
var statearr_44553_47184 = state_44521__$1;
(statearr_44553_47184[(2)] = null);

(statearr_44553_47184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_44554 = [null,null,null,null,null,null,null,null];
(statearr_44554[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_44554[(1)] = (1));

return statearr_44554;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_44521){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44521);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44555){var ex__43600__auto__ = e44555;
var statearr_44560_47185 = state_44521;
(statearr_44560_47185[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44521[(4)]))){
var statearr_44561_47192 = state_44521;
(statearr_44561_47192[(1)] = cljs.core.first((state_44521[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47193 = state_44521;
state_44521 = G__47193;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_44521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_44521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44562 = f__43719__auto__();
(statearr_44562[(6)] = c__43718__auto__);

return statearr_44562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

return c__43718__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44571 = arguments.length;
switch (G__44571) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47195 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47195(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47196 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47196(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47197 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47197(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47198 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47198(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44595 = (function (ch,cs,meta44596){
this.ch = ch;
this.cs = cs;
this.meta44596 = meta44596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44597,meta44596__$1){
var self__ = this;
var _44597__$1 = this;
return (new cljs.core.async.t_cljs$core$async44595(self__.ch,self__.cs,meta44596__$1));
}));

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44597){
var self__ = this;
var _44597__$1 = this;
return self__.meta44596;
}));

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44595.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44596","meta44596",1040306612,null)], null);
}));

(cljs.core.async.t_cljs$core$async44595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44595");

(cljs.core.async.t_cljs$core$async44595.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44595.
 */
cljs.core.async.__GT_t_cljs$core$async44595 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44595(ch__$1,cs__$1,meta44596){
return (new cljs.core.async.t_cljs$core$async44595(ch__$1,cs__$1,meta44596));
});

}

return (new cljs.core.async.t_cljs$core$async44595(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43718__auto___47222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_44754){
var state_val_44755 = (state_44754[(1)]);
if((state_val_44755 === (7))){
var inst_44749 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44756_47223 = state_44754__$1;
(statearr_44756_47223[(2)] = inst_44749);

(statearr_44756_47223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (20))){
var inst_44648 = (state_44754[(7)]);
var inst_44660 = cljs.core.first(inst_44648);
var inst_44661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44660,(0),null);
var inst_44662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44660,(1),null);
var state_44754__$1 = (function (){var statearr_44760 = state_44754;
(statearr_44760[(8)] = inst_44661);

return statearr_44760;
})();
if(cljs.core.truth_(inst_44662)){
var statearr_44761_47230 = state_44754__$1;
(statearr_44761_47230[(1)] = (22));

} else {
var statearr_44762_47231 = state_44754__$1;
(statearr_44762_47231[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (27))){
var inst_44700 = (state_44754[(9)]);
var inst_44695 = (state_44754[(10)]);
var inst_44612 = (state_44754[(11)]);
var inst_44693 = (state_44754[(12)]);
var inst_44700__$1 = cljs.core._nth(inst_44693,inst_44695);
var inst_44701 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44700__$1,inst_44612,done);
var state_44754__$1 = (function (){var statearr_44766 = state_44754;
(statearr_44766[(9)] = inst_44700__$1);

return statearr_44766;
})();
if(cljs.core.truth_(inst_44701)){
var statearr_44768_47234 = state_44754__$1;
(statearr_44768_47234[(1)] = (30));

} else {
var statearr_44769_47237 = state_44754__$1;
(statearr_44769_47237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (1))){
var state_44754__$1 = state_44754;
var statearr_44770_47239 = state_44754__$1;
(statearr_44770_47239[(2)] = null);

(statearr_44770_47239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (24))){
var inst_44648 = (state_44754[(7)]);
var inst_44667 = (state_44754[(2)]);
var inst_44668 = cljs.core.next(inst_44648);
var inst_44621 = inst_44668;
var inst_44622 = null;
var inst_44623 = (0);
var inst_44624 = (0);
var state_44754__$1 = (function (){var statearr_44771 = state_44754;
(statearr_44771[(13)] = inst_44667);

(statearr_44771[(14)] = inst_44621);

(statearr_44771[(15)] = inst_44623);

(statearr_44771[(16)] = inst_44624);

(statearr_44771[(17)] = inst_44622);

return statearr_44771;
})();
var statearr_44772_47241 = state_44754__$1;
(statearr_44772_47241[(2)] = null);

(statearr_44772_47241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (39))){
var state_44754__$1 = state_44754;
var statearr_44784_47242 = state_44754__$1;
(statearr_44784_47242[(2)] = null);

(statearr_44784_47242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (4))){
var inst_44612 = (state_44754[(11)]);
var inst_44612__$1 = (state_44754[(2)]);
var inst_44613 = (inst_44612__$1 == null);
var state_44754__$1 = (function (){var statearr_44787 = state_44754;
(statearr_44787[(11)] = inst_44612__$1);

return statearr_44787;
})();
if(cljs.core.truth_(inst_44613)){
var statearr_44788_47243 = state_44754__$1;
(statearr_44788_47243[(1)] = (5));

} else {
var statearr_44789_47244 = state_44754__$1;
(statearr_44789_47244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (15))){
var inst_44621 = (state_44754[(14)]);
var inst_44623 = (state_44754[(15)]);
var inst_44624 = (state_44754[(16)]);
var inst_44622 = (state_44754[(17)]);
var inst_44642 = (state_44754[(2)]);
var inst_44644 = (inst_44624 + (1));
var tmp44777 = inst_44621;
var tmp44779 = inst_44623;
var tmp44780 = inst_44622;
var inst_44621__$1 = tmp44777;
var inst_44622__$1 = tmp44780;
var inst_44623__$1 = tmp44779;
var inst_44624__$1 = inst_44644;
var state_44754__$1 = (function (){var statearr_44790 = state_44754;
(statearr_44790[(18)] = inst_44642);

(statearr_44790[(14)] = inst_44621__$1);

(statearr_44790[(15)] = inst_44623__$1);

(statearr_44790[(16)] = inst_44624__$1);

(statearr_44790[(17)] = inst_44622__$1);

return statearr_44790;
})();
var statearr_44792_47245 = state_44754__$1;
(statearr_44792_47245[(2)] = null);

(statearr_44792_47245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (21))){
var inst_44671 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44800_47246 = state_44754__$1;
(statearr_44800_47246[(2)] = inst_44671);

(statearr_44800_47246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (31))){
var inst_44700 = (state_44754[(9)]);
var inst_44704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44700);
var state_44754__$1 = state_44754;
var statearr_44803_47247 = state_44754__$1;
(statearr_44803_47247[(2)] = inst_44704);

(statearr_44803_47247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (32))){
var inst_44695 = (state_44754[(10)]);
var inst_44692 = (state_44754[(19)]);
var inst_44694 = (state_44754[(20)]);
var inst_44693 = (state_44754[(12)]);
var inst_44706 = (state_44754[(2)]);
var inst_44707 = (inst_44695 + (1));
var tmp44796 = inst_44692;
var tmp44797 = inst_44694;
var tmp44798 = inst_44693;
var inst_44692__$1 = tmp44796;
var inst_44693__$1 = tmp44798;
var inst_44694__$1 = tmp44797;
var inst_44695__$1 = inst_44707;
var state_44754__$1 = (function (){var statearr_44810 = state_44754;
(statearr_44810[(10)] = inst_44695__$1);

(statearr_44810[(21)] = inst_44706);

(statearr_44810[(19)] = inst_44692__$1);

(statearr_44810[(20)] = inst_44694__$1);

(statearr_44810[(12)] = inst_44693__$1);

return statearr_44810;
})();
var statearr_44816_47248 = state_44754__$1;
(statearr_44816_47248[(2)] = null);

(statearr_44816_47248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (40))){
var inst_44719 = (state_44754[(22)]);
var inst_44723 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44719);
var state_44754__$1 = state_44754;
var statearr_44823_47249 = state_44754__$1;
(statearr_44823_47249[(2)] = inst_44723);

(statearr_44823_47249[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (33))){
var inst_44710 = (state_44754[(23)]);
var inst_44712 = cljs.core.chunked_seq_QMARK_(inst_44710);
var state_44754__$1 = state_44754;
if(inst_44712){
var statearr_44830_47250 = state_44754__$1;
(statearr_44830_47250[(1)] = (36));

} else {
var statearr_44831_47251 = state_44754__$1;
(statearr_44831_47251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (13))){
var inst_44635 = (state_44754[(24)]);
var inst_44639 = cljs.core.async.close_BANG_(inst_44635);
var state_44754__$1 = state_44754;
var statearr_44832_47252 = state_44754__$1;
(statearr_44832_47252[(2)] = inst_44639);

(statearr_44832_47252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (22))){
var inst_44661 = (state_44754[(8)]);
var inst_44664 = cljs.core.async.close_BANG_(inst_44661);
var state_44754__$1 = state_44754;
var statearr_44836_47253 = state_44754__$1;
(statearr_44836_47253[(2)] = inst_44664);

(statearr_44836_47253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (36))){
var inst_44710 = (state_44754[(23)]);
var inst_44714 = cljs.core.chunk_first(inst_44710);
var inst_44715 = cljs.core.chunk_rest(inst_44710);
var inst_44716 = cljs.core.count(inst_44714);
var inst_44692 = inst_44715;
var inst_44693 = inst_44714;
var inst_44694 = inst_44716;
var inst_44695 = (0);
var state_44754__$1 = (function (){var statearr_44837 = state_44754;
(statearr_44837[(10)] = inst_44695);

(statearr_44837[(19)] = inst_44692);

(statearr_44837[(20)] = inst_44694);

(statearr_44837[(12)] = inst_44693);

return statearr_44837;
})();
var statearr_44838_47255 = state_44754__$1;
(statearr_44838_47255[(2)] = null);

(statearr_44838_47255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (41))){
var inst_44710 = (state_44754[(23)]);
var inst_44725 = (state_44754[(2)]);
var inst_44726 = cljs.core.next(inst_44710);
var inst_44692 = inst_44726;
var inst_44693 = null;
var inst_44694 = (0);
var inst_44695 = (0);
var state_44754__$1 = (function (){var statearr_44839 = state_44754;
(statearr_44839[(10)] = inst_44695);

(statearr_44839[(25)] = inst_44725);

(statearr_44839[(19)] = inst_44692);

(statearr_44839[(20)] = inst_44694);

(statearr_44839[(12)] = inst_44693);

return statearr_44839;
})();
var statearr_44843_47257 = state_44754__$1;
(statearr_44843_47257[(2)] = null);

(statearr_44843_47257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (43))){
var state_44754__$1 = state_44754;
var statearr_44844_47264 = state_44754__$1;
(statearr_44844_47264[(2)] = null);

(statearr_44844_47264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (29))){
var inst_44734 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44846_47265 = state_44754__$1;
(statearr_44846_47265[(2)] = inst_44734);

(statearr_44846_47265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (44))){
var inst_44746 = (state_44754[(2)]);
var state_44754__$1 = (function (){var statearr_44847 = state_44754;
(statearr_44847[(26)] = inst_44746);

return statearr_44847;
})();
var statearr_44848_47274 = state_44754__$1;
(statearr_44848_47274[(2)] = null);

(statearr_44848_47274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (6))){
var inst_44681 = (state_44754[(27)]);
var inst_44680 = cljs.core.deref(cs);
var inst_44681__$1 = cljs.core.keys(inst_44680);
var inst_44682 = cljs.core.count(inst_44681__$1);
var inst_44683 = cljs.core.reset_BANG_(dctr,inst_44682);
var inst_44691 = cljs.core.seq(inst_44681__$1);
var inst_44692 = inst_44691;
var inst_44693 = null;
var inst_44694 = (0);
var inst_44695 = (0);
var state_44754__$1 = (function (){var statearr_44851 = state_44754;
(statearr_44851[(28)] = inst_44683);

(statearr_44851[(10)] = inst_44695);

(statearr_44851[(27)] = inst_44681__$1);

(statearr_44851[(19)] = inst_44692);

(statearr_44851[(20)] = inst_44694);

(statearr_44851[(12)] = inst_44693);

return statearr_44851;
})();
var statearr_44852_47279 = state_44754__$1;
(statearr_44852_47279[(2)] = null);

(statearr_44852_47279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (28))){
var inst_44692 = (state_44754[(19)]);
var inst_44710 = (state_44754[(23)]);
var inst_44710__$1 = cljs.core.seq(inst_44692);
var state_44754__$1 = (function (){var statearr_44853 = state_44754;
(statearr_44853[(23)] = inst_44710__$1);

return statearr_44853;
})();
if(inst_44710__$1){
var statearr_44854_47280 = state_44754__$1;
(statearr_44854_47280[(1)] = (33));

} else {
var statearr_44855_47281 = state_44754__$1;
(statearr_44855_47281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (25))){
var inst_44695 = (state_44754[(10)]);
var inst_44694 = (state_44754[(20)]);
var inst_44697 = (inst_44695 < inst_44694);
var inst_44698 = inst_44697;
var state_44754__$1 = state_44754;
if(cljs.core.truth_(inst_44698)){
var statearr_44856_47282 = state_44754__$1;
(statearr_44856_47282[(1)] = (27));

} else {
var statearr_44857_47283 = state_44754__$1;
(statearr_44857_47283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (34))){
var state_44754__$1 = state_44754;
var statearr_44858_47284 = state_44754__$1;
(statearr_44858_47284[(2)] = null);

(statearr_44858_47284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (17))){
var state_44754__$1 = state_44754;
var statearr_44859_47285 = state_44754__$1;
(statearr_44859_47285[(2)] = null);

(statearr_44859_47285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (3))){
var inst_44751 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44754__$1,inst_44751);
} else {
if((state_val_44755 === (12))){
var inst_44676 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44861_47286 = state_44754__$1;
(statearr_44861_47286[(2)] = inst_44676);

(statearr_44861_47286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (2))){
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(4),ch);
} else {
if((state_val_44755 === (23))){
var state_44754__$1 = state_44754;
var statearr_44866_47287 = state_44754__$1;
(statearr_44866_47287[(2)] = null);

(statearr_44866_47287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (35))){
var inst_44732 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44871_47288 = state_44754__$1;
(statearr_44871_47288[(2)] = inst_44732);

(statearr_44871_47288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (19))){
var inst_44648 = (state_44754[(7)]);
var inst_44652 = cljs.core.chunk_first(inst_44648);
var inst_44653 = cljs.core.chunk_rest(inst_44648);
var inst_44654 = cljs.core.count(inst_44652);
var inst_44621 = inst_44653;
var inst_44622 = inst_44652;
var inst_44623 = inst_44654;
var inst_44624 = (0);
var state_44754__$1 = (function (){var statearr_44878 = state_44754;
(statearr_44878[(14)] = inst_44621);

(statearr_44878[(15)] = inst_44623);

(statearr_44878[(16)] = inst_44624);

(statearr_44878[(17)] = inst_44622);

return statearr_44878;
})();
var statearr_44884_47292 = state_44754__$1;
(statearr_44884_47292[(2)] = null);

(statearr_44884_47292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (11))){
var inst_44648 = (state_44754[(7)]);
var inst_44621 = (state_44754[(14)]);
var inst_44648__$1 = cljs.core.seq(inst_44621);
var state_44754__$1 = (function (){var statearr_44890 = state_44754;
(statearr_44890[(7)] = inst_44648__$1);

return statearr_44890;
})();
if(inst_44648__$1){
var statearr_44891_47297 = state_44754__$1;
(statearr_44891_47297[(1)] = (16));

} else {
var statearr_44892_47298 = state_44754__$1;
(statearr_44892_47298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (9))){
var inst_44678 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44893_47335 = state_44754__$1;
(statearr_44893_47335[(2)] = inst_44678);

(statearr_44893_47335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (5))){
var inst_44619 = cljs.core.deref(cs);
var inst_44620 = cljs.core.seq(inst_44619);
var inst_44621 = inst_44620;
var inst_44622 = null;
var inst_44623 = (0);
var inst_44624 = (0);
var state_44754__$1 = (function (){var statearr_44894 = state_44754;
(statearr_44894[(14)] = inst_44621);

(statearr_44894[(15)] = inst_44623);

(statearr_44894[(16)] = inst_44624);

(statearr_44894[(17)] = inst_44622);

return statearr_44894;
})();
var statearr_44895_47347 = state_44754__$1;
(statearr_44895_47347[(2)] = null);

(statearr_44895_47347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (14))){
var state_44754__$1 = state_44754;
var statearr_44896_47352 = state_44754__$1;
(statearr_44896_47352[(2)] = null);

(statearr_44896_47352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (45))){
var inst_44740 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44897_47355 = state_44754__$1;
(statearr_44897_47355[(2)] = inst_44740);

(statearr_44897_47355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (26))){
var inst_44681 = (state_44754[(27)]);
var inst_44736 = (state_44754[(2)]);
var inst_44737 = cljs.core.seq(inst_44681);
var state_44754__$1 = (function (){var statearr_44898 = state_44754;
(statearr_44898[(29)] = inst_44736);

return statearr_44898;
})();
if(inst_44737){
var statearr_44899_47356 = state_44754__$1;
(statearr_44899_47356[(1)] = (42));

} else {
var statearr_44900_47357 = state_44754__$1;
(statearr_44900_47357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (16))){
var inst_44648 = (state_44754[(7)]);
var inst_44650 = cljs.core.chunked_seq_QMARK_(inst_44648);
var state_44754__$1 = state_44754;
if(inst_44650){
var statearr_44906_47358 = state_44754__$1;
(statearr_44906_47358[(1)] = (19));

} else {
var statearr_44911_47359 = state_44754__$1;
(statearr_44911_47359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (38))){
var inst_44729 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44913_47360 = state_44754__$1;
(statearr_44913_47360[(2)] = inst_44729);

(statearr_44913_47360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (30))){
var state_44754__$1 = state_44754;
var statearr_44914_47361 = state_44754__$1;
(statearr_44914_47361[(2)] = null);

(statearr_44914_47361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (10))){
var inst_44624 = (state_44754[(16)]);
var inst_44622 = (state_44754[(17)]);
var inst_44632 = cljs.core._nth(inst_44622,inst_44624);
var inst_44635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44632,(0),null);
var inst_44636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44632,(1),null);
var state_44754__$1 = (function (){var statearr_44924 = state_44754;
(statearr_44924[(24)] = inst_44635);

return statearr_44924;
})();
if(cljs.core.truth_(inst_44636)){
var statearr_44929_47370 = state_44754__$1;
(statearr_44929_47370[(1)] = (13));

} else {
var statearr_44930_47371 = state_44754__$1;
(statearr_44930_47371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (18))){
var inst_44674 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44931_47375 = state_44754__$1;
(statearr_44931_47375[(2)] = inst_44674);

(statearr_44931_47375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (42))){
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(45),dchan);
} else {
if((state_val_44755 === (37))){
var inst_44719 = (state_44754[(22)]);
var inst_44612 = (state_44754[(11)]);
var inst_44710 = (state_44754[(23)]);
var inst_44719__$1 = cljs.core.first(inst_44710);
var inst_44720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44719__$1,inst_44612,done);
var state_44754__$1 = (function (){var statearr_44934 = state_44754;
(statearr_44934[(22)] = inst_44719__$1);

return statearr_44934;
})();
if(cljs.core.truth_(inst_44720)){
var statearr_44935_47376 = state_44754__$1;
(statearr_44935_47376[(1)] = (39));

} else {
var statearr_44940_47377 = state_44754__$1;
(statearr_44940_47377[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (8))){
var inst_44623 = (state_44754[(15)]);
var inst_44624 = (state_44754[(16)]);
var inst_44626 = (inst_44624 < inst_44623);
var inst_44627 = inst_44626;
var state_44754__$1 = state_44754;
if(cljs.core.truth_(inst_44627)){
var statearr_44946_47382 = state_44754__$1;
(statearr_44946_47382[(1)] = (10));

} else {
var statearr_44947_47383 = state_44754__$1;
(statearr_44947_47383[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43597__auto__ = null;
var cljs$core$async$mult_$_state_machine__43597__auto____0 = (function (){
var statearr_44960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44960[(0)] = cljs$core$async$mult_$_state_machine__43597__auto__);

(statearr_44960[(1)] = (1));

return statearr_44960;
});
var cljs$core$async$mult_$_state_machine__43597__auto____1 = (function (state_44754){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_44754);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e44961){var ex__43600__auto__ = e44961;
var statearr_44962_47417 = state_44754;
(statearr_44962_47417[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_44754[(4)]))){
var statearr_44963_47418 = state_44754;
(statearr_44963_47418[(1)] = cljs.core.first((state_44754[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47419 = state_44754;
state_44754 = G__47419;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43597__auto__ = function(state_44754){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43597__auto____1.call(this,state_44754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43597__auto____0;
cljs$core$async$mult_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43597__auto____1;
return cljs$core$async$mult_$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_44964 = f__43719__auto__();
(statearr_44964[(6)] = c__43718__auto___47222);

return statearr_44964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44966 = arguments.length;
switch (G__44966) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47421 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47421(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47422 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47422(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47425 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47425(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47428 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47428(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47430 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47430(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47431 = arguments.length;
var i__4737__auto___47432 = (0);
while(true){
if((i__4737__auto___47432 < len__4736__auto___47431)){
args__4742__auto__.push((arguments[i__4737__auto___47432]));

var G__47433 = (i__4737__auto___47432 + (1));
i__4737__auto___47432 = G__47433;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45065){
var map__45066 = p__45065;
var map__45066__$1 = (((((!((map__45066 == null))))?(((((map__45066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45066):map__45066);
var opts = map__45066__$1;
var statearr_45068_47437 = state;
(statearr_45068_47437[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45069_47438 = state;
(statearr_45069_47438[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45070_47440 = state;
(statearr_45070_47440[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45061){
var G__45062 = cljs.core.first(seq45061);
var seq45061__$1 = cljs.core.next(seq45061);
var G__45063 = cljs.core.first(seq45061__$1);
var seq45061__$2 = cljs.core.next(seq45061__$1);
var G__45064 = cljs.core.first(seq45061__$2);
var seq45061__$3 = cljs.core.next(seq45061__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45062,G__45063,G__45064,seq45061__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45074 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45075){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45075 = meta45075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45076,meta45075__$1){
var self__ = this;
var _45076__$1 = this;
return (new cljs.core.async.t_cljs$core$async45074(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45075__$1));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45076){
var self__ = this;
var _45076__$1 = this;
return self__.meta45075;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45075","meta45075",-2072375312,null)], null);
}));

(cljs.core.async.t_cljs$core$async45074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45074");

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45074.
 */
cljs.core.async.__GT_t_cljs$core$async45074 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45075){
return (new cljs.core.async.t_cljs$core$async45074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45075));
});

}

return (new cljs.core.async.t_cljs$core$async45074(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43718__auto___47444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45203){
var state_val_45204 = (state_45203[(1)]);
if((state_val_45204 === (7))){
var inst_45114 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45205_47445 = state_45203__$1;
(statearr_45205_47445[(2)] = inst_45114);

(statearr_45205_47445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (20))){
var inst_45126 = (state_45203[(7)]);
var state_45203__$1 = state_45203;
var statearr_45206_47447 = state_45203__$1;
(statearr_45206_47447[(2)] = inst_45126);

(statearr_45206_47447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (27))){
var state_45203__$1 = state_45203;
var statearr_45207_47448 = state_45203__$1;
(statearr_45207_47448[(2)] = null);

(statearr_45207_47448[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (1))){
var inst_45101 = (state_45203[(8)]);
var inst_45101__$1 = calc_state();
var inst_45103 = (inst_45101__$1 == null);
var inst_45104 = cljs.core.not(inst_45103);
var state_45203__$1 = (function (){var statearr_45208 = state_45203;
(statearr_45208[(8)] = inst_45101__$1);

return statearr_45208;
})();
if(inst_45104){
var statearr_45209_47453 = state_45203__$1;
(statearr_45209_47453[(1)] = (2));

} else {
var statearr_45210_47455 = state_45203__$1;
(statearr_45210_47455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (24))){
var inst_45177 = (state_45203[(9)]);
var inst_45160 = (state_45203[(10)]);
var inst_45150 = (state_45203[(11)]);
var inst_45177__$1 = (inst_45150.cljs$core$IFn$_invoke$arity$1 ? inst_45150.cljs$core$IFn$_invoke$arity$1(inst_45160) : inst_45150.call(null,inst_45160));
var state_45203__$1 = (function (){var statearr_45212 = state_45203;
(statearr_45212[(9)] = inst_45177__$1);

return statearr_45212;
})();
if(cljs.core.truth_(inst_45177__$1)){
var statearr_45213_47470 = state_45203__$1;
(statearr_45213_47470[(1)] = (29));

} else {
var statearr_45214_47475 = state_45203__$1;
(statearr_45214_47475[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (4))){
var inst_45117 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45117)){
var statearr_45215_47481 = state_45203__$1;
(statearr_45215_47481[(1)] = (8));

} else {
var statearr_45216_47483 = state_45203__$1;
(statearr_45216_47483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (15))){
var inst_45144 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45144)){
var statearr_45217_47484 = state_45203__$1;
(statearr_45217_47484[(1)] = (19));

} else {
var statearr_45219_47486 = state_45203__$1;
(statearr_45219_47486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (21))){
var inst_45149 = (state_45203[(12)]);
var inst_45149__$1 = (state_45203[(2)]);
var inst_45150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45203__$1 = (function (){var statearr_45220 = state_45203;
(statearr_45220[(12)] = inst_45149__$1);

(statearr_45220[(13)] = inst_45151);

(statearr_45220[(11)] = inst_45150);

return statearr_45220;
})();
return cljs.core.async.ioc_alts_BANG_(state_45203__$1,(22),inst_45152);
} else {
if((state_val_45204 === (31))){
var inst_45185 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45185)){
var statearr_45227_47508 = state_45203__$1;
(statearr_45227_47508[(1)] = (32));

} else {
var statearr_45228_47509 = state_45203__$1;
(statearr_45228_47509[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (32))){
var inst_45158 = (state_45203[(14)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45203__$1,(35),out,inst_45158);
} else {
if((state_val_45204 === (33))){
var inst_45149 = (state_45203[(12)]);
var inst_45126 = inst_45149;
var state_45203__$1 = (function (){var statearr_45229 = state_45203;
(statearr_45229[(7)] = inst_45126);

return statearr_45229;
})();
var statearr_45230_47525 = state_45203__$1;
(statearr_45230_47525[(2)] = null);

(statearr_45230_47525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (13))){
var inst_45126 = (state_45203[(7)]);
var inst_45133 = inst_45126.cljs$lang$protocol_mask$partition0$;
var inst_45134 = (inst_45133 & (64));
var inst_45135 = inst_45126.cljs$core$ISeq$;
var inst_45136 = (cljs.core.PROTOCOL_SENTINEL === inst_45135);
var inst_45137 = ((inst_45134) || (inst_45136));
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45137)){
var statearr_45231_47535 = state_45203__$1;
(statearr_45231_47535[(1)] = (16));

} else {
var statearr_45232_47537 = state_45203__$1;
(statearr_45232_47537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (22))){
var inst_45158 = (state_45203[(14)]);
var inst_45160 = (state_45203[(10)]);
var inst_45157 = (state_45203[(2)]);
var inst_45158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45157,(0),null);
var inst_45160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45157,(1),null);
var inst_45161 = (inst_45158__$1 == null);
var inst_45165 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45160__$1,change);
var inst_45166 = ((inst_45161) || (inst_45165));
var state_45203__$1 = (function (){var statearr_45237 = state_45203;
(statearr_45237[(14)] = inst_45158__$1);

(statearr_45237[(10)] = inst_45160__$1);

return statearr_45237;
})();
if(cljs.core.truth_(inst_45166)){
var statearr_45238_47548 = state_45203__$1;
(statearr_45238_47548[(1)] = (23));

} else {
var statearr_45239_47565 = state_45203__$1;
(statearr_45239_47565[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (36))){
var inst_45149 = (state_45203[(12)]);
var inst_45126 = inst_45149;
var state_45203__$1 = (function (){var statearr_45240 = state_45203;
(statearr_45240[(7)] = inst_45126);

return statearr_45240;
})();
var statearr_45241_47566 = state_45203__$1;
(statearr_45241_47566[(2)] = null);

(statearr_45241_47566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (29))){
var inst_45177 = (state_45203[(9)]);
var state_45203__$1 = state_45203;
var statearr_45248_47567 = state_45203__$1;
(statearr_45248_47567[(2)] = inst_45177);

(statearr_45248_47567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (6))){
var state_45203__$1 = state_45203;
var statearr_45255_47568 = state_45203__$1;
(statearr_45255_47568[(2)] = false);

(statearr_45255_47568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (28))){
var inst_45173 = (state_45203[(2)]);
var inst_45174 = calc_state();
var inst_45126 = inst_45174;
var state_45203__$1 = (function (){var statearr_45256 = state_45203;
(statearr_45256[(7)] = inst_45126);

(statearr_45256[(15)] = inst_45173);

return statearr_45256;
})();
var statearr_45257_47569 = state_45203__$1;
(statearr_45257_47569[(2)] = null);

(statearr_45257_47569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (25))){
var inst_45199 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45258_47574 = state_45203__$1;
(statearr_45258_47574[(2)] = inst_45199);

(statearr_45258_47574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (34))){
var inst_45197 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45262_47579 = state_45203__$1;
(statearr_45262_47579[(2)] = inst_45197);

(statearr_45262_47579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (17))){
var state_45203__$1 = state_45203;
var statearr_45263_47580 = state_45203__$1;
(statearr_45263_47580[(2)] = false);

(statearr_45263_47580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (3))){
var state_45203__$1 = state_45203;
var statearr_45276_47585 = state_45203__$1;
(statearr_45276_47585[(2)] = false);

(statearr_45276_47585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (12))){
var inst_45201 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45203__$1,inst_45201);
} else {
if((state_val_45204 === (2))){
var inst_45101 = (state_45203[(8)]);
var inst_45106 = inst_45101.cljs$lang$protocol_mask$partition0$;
var inst_45107 = (inst_45106 & (64));
var inst_45108 = inst_45101.cljs$core$ISeq$;
var inst_45109 = (cljs.core.PROTOCOL_SENTINEL === inst_45108);
var inst_45110 = ((inst_45107) || (inst_45109));
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45110)){
var statearr_45278_47589 = state_45203__$1;
(statearr_45278_47589[(1)] = (5));

} else {
var statearr_45279_47590 = state_45203__$1;
(statearr_45279_47590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (23))){
var inst_45158 = (state_45203[(14)]);
var inst_45168 = (inst_45158 == null);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45168)){
var statearr_45280_47592 = state_45203__$1;
(statearr_45280_47592[(1)] = (26));

} else {
var statearr_45281_47594 = state_45203__$1;
(statearr_45281_47594[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (35))){
var inst_45188 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45188)){
var statearr_45282_47595 = state_45203__$1;
(statearr_45282_47595[(1)] = (36));

} else {
var statearr_45283_47596 = state_45203__$1;
(statearr_45283_47596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (19))){
var inst_45126 = (state_45203[(7)]);
var inst_45146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45126);
var state_45203__$1 = state_45203;
var statearr_45284_47597 = state_45203__$1;
(statearr_45284_47597[(2)] = inst_45146);

(statearr_45284_47597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (11))){
var inst_45126 = (state_45203[(7)]);
var inst_45130 = (inst_45126 == null);
var inst_45131 = cljs.core.not(inst_45130);
var state_45203__$1 = state_45203;
if(inst_45131){
var statearr_45285_47599 = state_45203__$1;
(statearr_45285_47599[(1)] = (13));

} else {
var statearr_45286_47600 = state_45203__$1;
(statearr_45286_47600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (9))){
var inst_45101 = (state_45203[(8)]);
var state_45203__$1 = state_45203;
var statearr_45287_47601 = state_45203__$1;
(statearr_45287_47601[(2)] = inst_45101);

(statearr_45287_47601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (5))){
var state_45203__$1 = state_45203;
var statearr_45288_47603 = state_45203__$1;
(statearr_45288_47603[(2)] = true);

(statearr_45288_47603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (14))){
var state_45203__$1 = state_45203;
var statearr_45289_47605 = state_45203__$1;
(statearr_45289_47605[(2)] = false);

(statearr_45289_47605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (26))){
var inst_45160 = (state_45203[(10)]);
var inst_45170 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45160);
var state_45203__$1 = state_45203;
var statearr_45290_47606 = state_45203__$1;
(statearr_45290_47606[(2)] = inst_45170);

(statearr_45290_47606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (16))){
var state_45203__$1 = state_45203;
var statearr_45292_47607 = state_45203__$1;
(statearr_45292_47607[(2)] = true);

(statearr_45292_47607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (38))){
var inst_45193 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45293_47609 = state_45203__$1;
(statearr_45293_47609[(2)] = inst_45193);

(statearr_45293_47609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (30))){
var inst_45151 = (state_45203[(13)]);
var inst_45160 = (state_45203[(10)]);
var inst_45150 = (state_45203[(11)]);
var inst_45180 = cljs.core.empty_QMARK_(inst_45150);
var inst_45181 = (inst_45151.cljs$core$IFn$_invoke$arity$1 ? inst_45151.cljs$core$IFn$_invoke$arity$1(inst_45160) : inst_45151.call(null,inst_45160));
var inst_45182 = cljs.core.not(inst_45181);
var inst_45183 = ((inst_45180) && (inst_45182));
var state_45203__$1 = state_45203;
var statearr_45297_47634 = state_45203__$1;
(statearr_45297_47634[(2)] = inst_45183);

(statearr_45297_47634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (10))){
var inst_45101 = (state_45203[(8)]);
var inst_45122 = (state_45203[(2)]);
var inst_45123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45122,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45122,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45122,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45126 = inst_45101;
var state_45203__$1 = (function (){var statearr_45298 = state_45203;
(statearr_45298[(16)] = inst_45125);

(statearr_45298[(7)] = inst_45126);

(statearr_45298[(17)] = inst_45123);

(statearr_45298[(18)] = inst_45124);

return statearr_45298;
})();
var statearr_45299_47635 = state_45203__$1;
(statearr_45299_47635[(2)] = null);

(statearr_45299_47635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (18))){
var inst_45141 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45300_47662 = state_45203__$1;
(statearr_45300_47662[(2)] = inst_45141);

(statearr_45300_47662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (37))){
var state_45203__$1 = state_45203;
var statearr_45301_47667 = state_45203__$1;
(statearr_45301_47667[(2)] = null);

(statearr_45301_47667[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (8))){
var inst_45101 = (state_45203[(8)]);
var inst_45119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45101);
var state_45203__$1 = state_45203;
var statearr_45302_47668 = state_45203__$1;
(statearr_45302_47668[(2)] = inst_45119);

(statearr_45302_47668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43597__auto__ = null;
var cljs$core$async$mix_$_state_machine__43597__auto____0 = (function (){
var statearr_45305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45305[(0)] = cljs$core$async$mix_$_state_machine__43597__auto__);

(statearr_45305[(1)] = (1));

return statearr_45305;
});
var cljs$core$async$mix_$_state_machine__43597__auto____1 = (function (state_45203){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45203);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45306){var ex__43600__auto__ = e45306;
var statearr_45308_47707 = state_45203;
(statearr_45308_47707[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45203[(4)]))){
var statearr_45309_47708 = state_45203;
(statearr_45309_47708[(1)] = cljs.core.first((state_45203[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47716 = state_45203;
state_45203 = G__47716;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43597__auto__ = function(state_45203){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43597__auto____1.call(this,state_45203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43597__auto____0;
cljs$core$async$mix_$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43597__auto____1;
return cljs$core$async$mix_$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45310 = f__43719__auto__();
(statearr_45310[(6)] = c__43718__auto___47444);

return statearr_45310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47751 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47751(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47762 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47762(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47765 = (function() {
var G__47766 = null;
var G__47766__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47766__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47766 = function(p,v){
switch(arguments.length){
case 1:
return G__47766__1.call(this,p);
case 2:
return G__47766__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47766.cljs$core$IFn$_invoke$arity$1 = G__47766__1;
G__47766.cljs$core$IFn$_invoke$arity$2 = G__47766__2;
return G__47766;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45336 = arguments.length;
switch (G__45336) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47765(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47765(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45345 = arguments.length;
switch (G__45345) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45343_SHARP_){
if(cljs.core.truth_((p1__45343_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45343_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45343_SHARP_.call(null,topic)))){
return p1__45343_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45343_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45347 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45348){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45348 = meta45348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45349,meta45348__$1){
var self__ = this;
var _45349__$1 = this;
return (new cljs.core.async.t_cljs$core$async45347(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45348__$1));
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45349){
var self__ = this;
var _45349__$1 = this;
return self__.meta45348;
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45348","meta45348",-629733119,null)], null);
}));

(cljs.core.async.t_cljs$core$async45347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45347");

(cljs.core.async.t_cljs$core$async45347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45347.
 */
cljs.core.async.__GT_t_cljs$core$async45347 = (function cljs$core$async$__GT_t_cljs$core$async45347(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45348){
return (new cljs.core.async.t_cljs$core$async45347(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45348));
});

}

return (new cljs.core.async.t_cljs$core$async45347(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43718__auto___47812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45439){
var state_val_45440 = (state_45439[(1)]);
if((state_val_45440 === (7))){
var inst_45435 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45441_47813 = state_45439__$1;
(statearr_45441_47813[(2)] = inst_45435);

(statearr_45441_47813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (20))){
var state_45439__$1 = state_45439;
var statearr_45442_47814 = state_45439__$1;
(statearr_45442_47814[(2)] = null);

(statearr_45442_47814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (1))){
var state_45439__$1 = state_45439;
var statearr_45443_47833 = state_45439__$1;
(statearr_45443_47833[(2)] = null);

(statearr_45443_47833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (24))){
var inst_45418 = (state_45439[(7)]);
var inst_45427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45418);
var state_45439__$1 = state_45439;
var statearr_45445_47837 = state_45439__$1;
(statearr_45445_47837[(2)] = inst_45427);

(statearr_45445_47837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (4))){
var inst_45367 = (state_45439[(8)]);
var inst_45367__$1 = (state_45439[(2)]);
var inst_45368 = (inst_45367__$1 == null);
var state_45439__$1 = (function (){var statearr_45446 = state_45439;
(statearr_45446[(8)] = inst_45367__$1);

return statearr_45446;
})();
if(cljs.core.truth_(inst_45368)){
var statearr_45447_47842 = state_45439__$1;
(statearr_45447_47842[(1)] = (5));

} else {
var statearr_45448_47843 = state_45439__$1;
(statearr_45448_47843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (15))){
var inst_45412 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45450_47851 = state_45439__$1;
(statearr_45450_47851[(2)] = inst_45412);

(statearr_45450_47851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (21))){
var inst_45432 = (state_45439[(2)]);
var state_45439__$1 = (function (){var statearr_45452 = state_45439;
(statearr_45452[(9)] = inst_45432);

return statearr_45452;
})();
var statearr_45454_47852 = state_45439__$1;
(statearr_45454_47852[(2)] = null);

(statearr_45454_47852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (13))){
var inst_45394 = (state_45439[(10)]);
var inst_45396 = cljs.core.chunked_seq_QMARK_(inst_45394);
var state_45439__$1 = state_45439;
if(inst_45396){
var statearr_45456_47853 = state_45439__$1;
(statearr_45456_47853[(1)] = (16));

} else {
var statearr_45457_47854 = state_45439__$1;
(statearr_45457_47854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (22))){
var inst_45424 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
if(cljs.core.truth_(inst_45424)){
var statearr_45458_47855 = state_45439__$1;
(statearr_45458_47855[(1)] = (23));

} else {
var statearr_45459_47856 = state_45439__$1;
(statearr_45459_47856[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (6))){
var inst_45367 = (state_45439[(8)]);
var inst_45420 = (state_45439[(11)]);
var inst_45418 = (state_45439[(7)]);
var inst_45418__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45367) : topic_fn.call(null,inst_45367));
var inst_45419 = cljs.core.deref(mults);
var inst_45420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45419,inst_45418__$1);
var state_45439__$1 = (function (){var statearr_45460 = state_45439;
(statearr_45460[(11)] = inst_45420__$1);

(statearr_45460[(7)] = inst_45418__$1);

return statearr_45460;
})();
if(cljs.core.truth_(inst_45420__$1)){
var statearr_45461_47857 = state_45439__$1;
(statearr_45461_47857[(1)] = (19));

} else {
var statearr_45462_47858 = state_45439__$1;
(statearr_45462_47858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (25))){
var inst_45429 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45463_47859 = state_45439__$1;
(statearr_45463_47859[(2)] = inst_45429);

(statearr_45463_47859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (17))){
var inst_45394 = (state_45439[(10)]);
var inst_45403 = cljs.core.first(inst_45394);
var inst_45404 = cljs.core.async.muxch_STAR_(inst_45403);
var inst_45405 = cljs.core.async.close_BANG_(inst_45404);
var inst_45406 = cljs.core.next(inst_45394);
var inst_45377 = inst_45406;
var inst_45378 = null;
var inst_45379 = (0);
var inst_45380 = (0);
var state_45439__$1 = (function (){var statearr_45466 = state_45439;
(statearr_45466[(12)] = inst_45378);

(statearr_45466[(13)] = inst_45380);

(statearr_45466[(14)] = inst_45405);

(statearr_45466[(15)] = inst_45377);

(statearr_45466[(16)] = inst_45379);

return statearr_45466;
})();
var statearr_45467_47863 = state_45439__$1;
(statearr_45467_47863[(2)] = null);

(statearr_45467_47863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (3))){
var inst_45437 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45439__$1,inst_45437);
} else {
if((state_val_45440 === (12))){
var inst_45414 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45468_47864 = state_45439__$1;
(statearr_45468_47864[(2)] = inst_45414);

(statearr_45468_47864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (2))){
var state_45439__$1 = state_45439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45439__$1,(4),ch);
} else {
if((state_val_45440 === (23))){
var state_45439__$1 = state_45439;
var statearr_45471_47877 = state_45439__$1;
(statearr_45471_47877[(2)] = null);

(statearr_45471_47877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (19))){
var inst_45367 = (state_45439[(8)]);
var inst_45420 = (state_45439[(11)]);
var inst_45422 = cljs.core.async.muxch_STAR_(inst_45420);
var state_45439__$1 = state_45439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45439__$1,(22),inst_45422,inst_45367);
} else {
if((state_val_45440 === (11))){
var inst_45377 = (state_45439[(15)]);
var inst_45394 = (state_45439[(10)]);
var inst_45394__$1 = cljs.core.seq(inst_45377);
var state_45439__$1 = (function (){var statearr_45477 = state_45439;
(statearr_45477[(10)] = inst_45394__$1);

return statearr_45477;
})();
if(inst_45394__$1){
var statearr_45479_47879 = state_45439__$1;
(statearr_45479_47879[(1)] = (13));

} else {
var statearr_45481_47880 = state_45439__$1;
(statearr_45481_47880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (9))){
var inst_45416 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45483_47882 = state_45439__$1;
(statearr_45483_47882[(2)] = inst_45416);

(statearr_45483_47882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (5))){
var inst_45374 = cljs.core.deref(mults);
var inst_45375 = cljs.core.vals(inst_45374);
var inst_45376 = cljs.core.seq(inst_45375);
var inst_45377 = inst_45376;
var inst_45378 = null;
var inst_45379 = (0);
var inst_45380 = (0);
var state_45439__$1 = (function (){var statearr_45485 = state_45439;
(statearr_45485[(12)] = inst_45378);

(statearr_45485[(13)] = inst_45380);

(statearr_45485[(15)] = inst_45377);

(statearr_45485[(16)] = inst_45379);

return statearr_45485;
})();
var statearr_45491_47883 = state_45439__$1;
(statearr_45491_47883[(2)] = null);

(statearr_45491_47883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (14))){
var state_45439__$1 = state_45439;
var statearr_45496_47884 = state_45439__$1;
(statearr_45496_47884[(2)] = null);

(statearr_45496_47884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (16))){
var inst_45394 = (state_45439[(10)]);
var inst_45398 = cljs.core.chunk_first(inst_45394);
var inst_45399 = cljs.core.chunk_rest(inst_45394);
var inst_45400 = cljs.core.count(inst_45398);
var inst_45377 = inst_45399;
var inst_45378 = inst_45398;
var inst_45379 = inst_45400;
var inst_45380 = (0);
var state_45439__$1 = (function (){var statearr_45500 = state_45439;
(statearr_45500[(12)] = inst_45378);

(statearr_45500[(13)] = inst_45380);

(statearr_45500[(15)] = inst_45377);

(statearr_45500[(16)] = inst_45379);

return statearr_45500;
})();
var statearr_45501_47889 = state_45439__$1;
(statearr_45501_47889[(2)] = null);

(statearr_45501_47889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (10))){
var inst_45378 = (state_45439[(12)]);
var inst_45380 = (state_45439[(13)]);
var inst_45377 = (state_45439[(15)]);
var inst_45379 = (state_45439[(16)]);
var inst_45385 = cljs.core._nth(inst_45378,inst_45380);
var inst_45386 = cljs.core.async.muxch_STAR_(inst_45385);
var inst_45387 = cljs.core.async.close_BANG_(inst_45386);
var inst_45388 = (inst_45380 + (1));
var tmp45493 = inst_45378;
var tmp45494 = inst_45377;
var tmp45495 = inst_45379;
var inst_45377__$1 = tmp45494;
var inst_45378__$1 = tmp45493;
var inst_45379__$1 = tmp45495;
var inst_45380__$1 = inst_45388;
var state_45439__$1 = (function (){var statearr_45504 = state_45439;
(statearr_45504[(12)] = inst_45378__$1);

(statearr_45504[(13)] = inst_45380__$1);

(statearr_45504[(17)] = inst_45387);

(statearr_45504[(15)] = inst_45377__$1);

(statearr_45504[(16)] = inst_45379__$1);

return statearr_45504;
})();
var statearr_45505_47893 = state_45439__$1;
(statearr_45505_47893[(2)] = null);

(statearr_45505_47893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (18))){
var inst_45409 = (state_45439[(2)]);
var state_45439__$1 = state_45439;
var statearr_45506_47895 = state_45439__$1;
(statearr_45506_47895[(2)] = inst_45409);

(statearr_45506_47895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45440 === (8))){
var inst_45380 = (state_45439[(13)]);
var inst_45379 = (state_45439[(16)]);
var inst_45382 = (inst_45380 < inst_45379);
var inst_45383 = inst_45382;
var state_45439__$1 = state_45439;
if(cljs.core.truth_(inst_45383)){
var statearr_45508_47896 = state_45439__$1;
(statearr_45508_47896[(1)] = (10));

} else {
var statearr_45509_47897 = state_45439__$1;
(statearr_45509_47897[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_45512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45512[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_45512[(1)] = (1));

return statearr_45512;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_45439){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45439);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45514){var ex__43600__auto__ = e45514;
var statearr_45515_47995 = state_45439;
(statearr_45515_47995[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45439[(4)]))){
var statearr_45518_47996 = state_45439;
(statearr_45518_47996[(1)] = cljs.core.first((state_45439[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48000 = state_45439;
state_45439 = G__48000;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_45439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_45439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45520 = f__43719__auto__();
(statearr_45520[(6)] = c__43718__auto___47812);

return statearr_45520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45525 = arguments.length;
switch (G__45525) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45542 = arguments.length;
switch (G__45542) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45549 = arguments.length;
switch (G__45549) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43718__auto___48079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45612){
var state_val_45613 = (state_45612[(1)]);
if((state_val_45613 === (7))){
var state_45612__$1 = state_45612;
var statearr_45618_48080 = state_45612__$1;
(statearr_45618_48080[(2)] = null);

(statearr_45618_48080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (1))){
var state_45612__$1 = state_45612;
var statearr_45619_48081 = state_45612__$1;
(statearr_45619_48081[(2)] = null);

(statearr_45619_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (4))){
var inst_45557 = (state_45612[(7)]);
var inst_45556 = (state_45612[(8)]);
var inst_45559 = (inst_45557 < inst_45556);
var state_45612__$1 = state_45612;
if(cljs.core.truth_(inst_45559)){
var statearr_45620_48084 = state_45612__$1;
(statearr_45620_48084[(1)] = (6));

} else {
var statearr_45621_48086 = state_45612__$1;
(statearr_45621_48086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (15))){
var inst_45596 = (state_45612[(9)]);
var inst_45602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45596);
var state_45612__$1 = state_45612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45612__$1,(17),out,inst_45602);
} else {
if((state_val_45613 === (13))){
var inst_45596 = (state_45612[(9)]);
var inst_45596__$1 = (state_45612[(2)]);
var inst_45597 = cljs.core.some(cljs.core.nil_QMARK_,inst_45596__$1);
var state_45612__$1 = (function (){var statearr_45624 = state_45612;
(statearr_45624[(9)] = inst_45596__$1);

return statearr_45624;
})();
if(cljs.core.truth_(inst_45597)){
var statearr_45627_48126 = state_45612__$1;
(statearr_45627_48126[(1)] = (14));

} else {
var statearr_45628_48127 = state_45612__$1;
(statearr_45628_48127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (6))){
var state_45612__$1 = state_45612;
var statearr_45630_48128 = state_45612__$1;
(statearr_45630_48128[(2)] = null);

(statearr_45630_48128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (17))){
var inst_45604 = (state_45612[(2)]);
var state_45612__$1 = (function (){var statearr_45636 = state_45612;
(statearr_45636[(10)] = inst_45604);

return statearr_45636;
})();
var statearr_45637_48129 = state_45612__$1;
(statearr_45637_48129[(2)] = null);

(statearr_45637_48129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (3))){
var inst_45609 = (state_45612[(2)]);
var state_45612__$1 = state_45612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45612__$1,inst_45609);
} else {
if((state_val_45613 === (12))){
var _ = (function (){var statearr_45638 = state_45612;
(statearr_45638[(4)] = cljs.core.rest((state_45612[(4)])));

return statearr_45638;
})();
var state_45612__$1 = state_45612;
var ex45635 = (state_45612__$1[(2)]);
var statearr_45639_48132 = state_45612__$1;
(statearr_45639_48132[(5)] = ex45635);


if((ex45635 instanceof Object)){
var statearr_45641_48133 = state_45612__$1;
(statearr_45641_48133[(1)] = (11));

(statearr_45641_48133[(5)] = null);

} else {
throw ex45635;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (2))){
var inst_45555 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45556 = cnt;
var inst_45557 = (0);
var state_45612__$1 = (function (){var statearr_45648 = state_45612;
(statearr_45648[(7)] = inst_45557);

(statearr_45648[(8)] = inst_45556);

(statearr_45648[(11)] = inst_45555);

return statearr_45648;
})();
var statearr_45649_48134 = state_45612__$1;
(statearr_45649_48134[(2)] = null);

(statearr_45649_48134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (11))){
var inst_45574 = (state_45612[(2)]);
var inst_45575 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45612__$1 = (function (){var statearr_45664 = state_45612;
(statearr_45664[(12)] = inst_45574);

return statearr_45664;
})();
var statearr_45665_48138 = state_45612__$1;
(statearr_45665_48138[(2)] = inst_45575);

(statearr_45665_48138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (9))){
var inst_45557 = (state_45612[(7)]);
var _ = (function (){var statearr_45669 = state_45612;
(statearr_45669[(4)] = cljs.core.cons((12),(state_45612[(4)])));

return statearr_45669;
})();
var inst_45581 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45557) : chs__$1.call(null,inst_45557));
var inst_45582 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45557) : done.call(null,inst_45557));
var inst_45584 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45581,inst_45582);
var ___$1 = (function (){var statearr_45670 = state_45612;
(statearr_45670[(4)] = cljs.core.rest((state_45612[(4)])));

return statearr_45670;
})();
var state_45612__$1 = state_45612;
var statearr_45671_48139 = state_45612__$1;
(statearr_45671_48139[(2)] = inst_45584);

(statearr_45671_48139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (5))){
var inst_45594 = (state_45612[(2)]);
var state_45612__$1 = (function (){var statearr_45672 = state_45612;
(statearr_45672[(13)] = inst_45594);

return statearr_45672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45612__$1,(13),dchan);
} else {
if((state_val_45613 === (14))){
var inst_45599 = cljs.core.async.close_BANG_(out);
var state_45612__$1 = state_45612;
var statearr_45673_48140 = state_45612__$1;
(statearr_45673_48140[(2)] = inst_45599);

(statearr_45673_48140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (16))){
var inst_45607 = (state_45612[(2)]);
var state_45612__$1 = state_45612;
var statearr_45674_48141 = state_45612__$1;
(statearr_45674_48141[(2)] = inst_45607);

(statearr_45674_48141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (10))){
var inst_45557 = (state_45612[(7)]);
var inst_45587 = (state_45612[(2)]);
var inst_45588 = (inst_45557 + (1));
var inst_45557__$1 = inst_45588;
var state_45612__$1 = (function (){var statearr_45675 = state_45612;
(statearr_45675[(7)] = inst_45557__$1);

(statearr_45675[(14)] = inst_45587);

return statearr_45675;
})();
var statearr_45676_48149 = state_45612__$1;
(statearr_45676_48149[(2)] = null);

(statearr_45676_48149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45613 === (8))){
var inst_45592 = (state_45612[(2)]);
var state_45612__$1 = state_45612;
var statearr_45677_48154 = state_45612__$1;
(statearr_45677_48154[(2)] = inst_45592);

(statearr_45677_48154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_45679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45679[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_45679[(1)] = (1));

return statearr_45679;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_45612){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45612);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45680){var ex__43600__auto__ = e45680;
var statearr_45683_48159 = state_45612;
(statearr_45683_48159[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45612[(4)]))){
var statearr_45684_48164 = state_45612;
(statearr_45684_48164[(1)] = cljs.core.first((state_45612[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48166 = state_45612;
state_45612 = G__48166;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_45612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_45612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45685 = f__43719__auto__();
(statearr_45685[(6)] = c__43718__auto___48079);

return statearr_45685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45689 = arguments.length;
switch (G__45689) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45722){
var state_val_45723 = (state_45722[(1)]);
if((state_val_45723 === (7))){
var inst_45701 = (state_45722[(7)]);
var inst_45702 = (state_45722[(8)]);
var inst_45701__$1 = (state_45722[(2)]);
var inst_45702__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45701__$1,(0),null);
var inst_45703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45701__$1,(1),null);
var inst_45704 = (inst_45702__$1 == null);
var state_45722__$1 = (function (){var statearr_45735 = state_45722;
(statearr_45735[(9)] = inst_45703);

(statearr_45735[(7)] = inst_45701__$1);

(statearr_45735[(8)] = inst_45702__$1);

return statearr_45735;
})();
if(cljs.core.truth_(inst_45704)){
var statearr_45736_48190 = state_45722__$1;
(statearr_45736_48190[(1)] = (8));

} else {
var statearr_45741_48192 = state_45722__$1;
(statearr_45741_48192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (1))){
var inst_45691 = cljs.core.vec(chs);
var inst_45692 = inst_45691;
var state_45722__$1 = (function (){var statearr_45744 = state_45722;
(statearr_45744[(10)] = inst_45692);

return statearr_45744;
})();
var statearr_45745_48195 = state_45722__$1;
(statearr_45745_48195[(2)] = null);

(statearr_45745_48195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (4))){
var inst_45692 = (state_45722[(10)]);
var state_45722__$1 = state_45722;
return cljs.core.async.ioc_alts_BANG_(state_45722__$1,(7),inst_45692);
} else {
if((state_val_45723 === (6))){
var inst_45718 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45746_48196 = state_45722__$1;
(statearr_45746_48196[(2)] = inst_45718);

(statearr_45746_48196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (3))){
var inst_45720 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45722__$1,inst_45720);
} else {
if((state_val_45723 === (2))){
var inst_45692 = (state_45722[(10)]);
var inst_45694 = cljs.core.count(inst_45692);
var inst_45695 = (inst_45694 > (0));
var state_45722__$1 = state_45722;
if(cljs.core.truth_(inst_45695)){
var statearr_45748_48199 = state_45722__$1;
(statearr_45748_48199[(1)] = (4));

} else {
var statearr_45749_48201 = state_45722__$1;
(statearr_45749_48201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (11))){
var inst_45692 = (state_45722[(10)]);
var inst_45711 = (state_45722[(2)]);
var tmp45747 = inst_45692;
var inst_45692__$1 = tmp45747;
var state_45722__$1 = (function (){var statearr_45750 = state_45722;
(statearr_45750[(11)] = inst_45711);

(statearr_45750[(10)] = inst_45692__$1);

return statearr_45750;
})();
var statearr_45751_48252 = state_45722__$1;
(statearr_45751_48252[(2)] = null);

(statearr_45751_48252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (9))){
var inst_45702 = (state_45722[(8)]);
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45722__$1,(11),out,inst_45702);
} else {
if((state_val_45723 === (5))){
var inst_45716 = cljs.core.async.close_BANG_(out);
var state_45722__$1 = state_45722;
var statearr_45753_48253 = state_45722__$1;
(statearr_45753_48253[(2)] = inst_45716);

(statearr_45753_48253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (10))){
var inst_45714 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45754_48254 = state_45722__$1;
(statearr_45754_48254[(2)] = inst_45714);

(statearr_45754_48254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (8))){
var inst_45692 = (state_45722[(10)]);
var inst_45703 = (state_45722[(9)]);
var inst_45701 = (state_45722[(7)]);
var inst_45702 = (state_45722[(8)]);
var inst_45706 = (function (){var cs = inst_45692;
var vec__45697 = inst_45701;
var v = inst_45702;
var c = inst_45703;
return (function (p1__45687_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45687_SHARP_);
});
})();
var inst_45707 = cljs.core.filterv(inst_45706,inst_45692);
var inst_45692__$1 = inst_45707;
var state_45722__$1 = (function (){var statearr_45755 = state_45722;
(statearr_45755[(10)] = inst_45692__$1);

return statearr_45755;
})();
var statearr_45756_48257 = state_45722__$1;
(statearr_45756_48257[(2)] = null);

(statearr_45756_48257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_45758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45758[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_45758[(1)] = (1));

return statearr_45758;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_45722){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45722);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45760){var ex__43600__auto__ = e45760;
var statearr_45761_48261 = state_45722;
(statearr_45761_48261[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45722[(4)]))){
var statearr_45763_48262 = state_45722;
(statearr_45763_48262[(1)] = cljs.core.first((state_45722[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48264 = state_45722;
state_45722 = G__48264;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_45722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_45722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45766 = f__43719__auto__();
(statearr_45766[(6)] = c__43718__auto___48174);

return statearr_45766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45769 = arguments.length;
switch (G__45769) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45794){
var state_val_45795 = (state_45794[(1)]);
if((state_val_45795 === (7))){
var inst_45776 = (state_45794[(7)]);
var inst_45776__$1 = (state_45794[(2)]);
var inst_45777 = (inst_45776__$1 == null);
var inst_45778 = cljs.core.not(inst_45777);
var state_45794__$1 = (function (){var statearr_45796 = state_45794;
(statearr_45796[(7)] = inst_45776__$1);

return statearr_45796;
})();
if(inst_45778){
var statearr_45797_48267 = state_45794__$1;
(statearr_45797_48267[(1)] = (8));

} else {
var statearr_45798_48269 = state_45794__$1;
(statearr_45798_48269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (1))){
var inst_45771 = (0);
var state_45794__$1 = (function (){var statearr_45799 = state_45794;
(statearr_45799[(8)] = inst_45771);

return statearr_45799;
})();
var statearr_45800_48270 = state_45794__$1;
(statearr_45800_48270[(2)] = null);

(statearr_45800_48270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (4))){
var state_45794__$1 = state_45794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45794__$1,(7),ch);
} else {
if((state_val_45795 === (6))){
var inst_45789 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
var statearr_45801_48279 = state_45794__$1;
(statearr_45801_48279[(2)] = inst_45789);

(statearr_45801_48279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (3))){
var inst_45791 = (state_45794[(2)]);
var inst_45792 = cljs.core.async.close_BANG_(out);
var state_45794__$1 = (function (){var statearr_45802 = state_45794;
(statearr_45802[(9)] = inst_45791);

return statearr_45802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45794__$1,inst_45792);
} else {
if((state_val_45795 === (2))){
var inst_45771 = (state_45794[(8)]);
var inst_45773 = (inst_45771 < n);
var state_45794__$1 = state_45794;
if(cljs.core.truth_(inst_45773)){
var statearr_45804_48281 = state_45794__$1;
(statearr_45804_48281[(1)] = (4));

} else {
var statearr_45806_48282 = state_45794__$1;
(statearr_45806_48282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (11))){
var inst_45771 = (state_45794[(8)]);
var inst_45781 = (state_45794[(2)]);
var inst_45782 = (inst_45771 + (1));
var inst_45771__$1 = inst_45782;
var state_45794__$1 = (function (){var statearr_45807 = state_45794;
(statearr_45807[(10)] = inst_45781);

(statearr_45807[(8)] = inst_45771__$1);

return statearr_45807;
})();
var statearr_45809_48287 = state_45794__$1;
(statearr_45809_48287[(2)] = null);

(statearr_45809_48287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (9))){
var state_45794__$1 = state_45794;
var statearr_45810_48288 = state_45794__$1;
(statearr_45810_48288[(2)] = null);

(statearr_45810_48288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (5))){
var state_45794__$1 = state_45794;
var statearr_45812_48289 = state_45794__$1;
(statearr_45812_48289[(2)] = null);

(statearr_45812_48289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (10))){
var inst_45786 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
var statearr_45813_48290 = state_45794__$1;
(statearr_45813_48290[(2)] = inst_45786);

(statearr_45813_48290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (8))){
var inst_45776 = (state_45794[(7)]);
var state_45794__$1 = state_45794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45794__$1,(11),out,inst_45776);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_45815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45815[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_45815[(1)] = (1));

return statearr_45815;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_45794){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45794);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45825){var ex__43600__auto__ = e45825;
var statearr_45826_48291 = state_45794;
(statearr_45826_48291[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45794[(4)]))){
var statearr_45827_48292 = state_45794;
(statearr_45827_48292[(1)] = cljs.core.first((state_45794[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48293 = state_45794;
state_45794 = G__48293;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_45794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_45794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45828 = f__43719__auto__();
(statearr_45828[(6)] = c__43718__auto___48266);

return statearr_45828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45830 = (function (f,ch,meta45831){
this.f = f;
this.ch = ch;
this.meta45831 = meta45831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45832,meta45831__$1){
var self__ = this;
var _45832__$1 = this;
return (new cljs.core.async.t_cljs$core$async45830(self__.f,self__.ch,meta45831__$1));
}));

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45832){
var self__ = this;
var _45832__$1 = this;
return self__.meta45831;
}));

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45838 = (function (f,ch,meta45831,_,fn1,meta45839){
this.f = f;
this.ch = ch;
this.meta45831 = meta45831;
this._ = _;
this.fn1 = fn1;
this.meta45839 = meta45839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45840,meta45839__$1){
var self__ = this;
var _45840__$1 = this;
return (new cljs.core.async.t_cljs$core$async45838(self__.f,self__.ch,self__.meta45831,self__._,self__.fn1,meta45839__$1));
}));

(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45840){
var self__ = this;
var _45840__$1 = this;
return self__.meta45839;
}));

(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45829_SHARP_){
var G__45842 = (((p1__45829_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45829_SHARP_) : self__.f.call(null,p1__45829_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45842) : f1.call(null,G__45842));
});
}));

(cljs.core.async.t_cljs$core$async45838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45831","meta45831",1528627454,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45830","cljs.core.async/t_cljs$core$async45830",-1276645334,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45839","meta45839",310902474,null)], null);
}));

(cljs.core.async.t_cljs$core$async45838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45838");

(cljs.core.async.t_cljs$core$async45838.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45838.
 */
cljs.core.async.__GT_t_cljs$core$async45838 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45838(f__$1,ch__$1,meta45831__$1,___$2,fn1__$1,meta45839){
return (new cljs.core.async.t_cljs$core$async45838(f__$1,ch__$1,meta45831__$1,___$2,fn1__$1,meta45839));
});

}

return (new cljs.core.async.t_cljs$core$async45838(self__.f,self__.ch,self__.meta45831,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45899 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45899) : self__.f.call(null,G__45899));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45831","meta45831",1528627454,null)], null);
}));

(cljs.core.async.t_cljs$core$async45830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45830");

(cljs.core.async.t_cljs$core$async45830.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45830.
 */
cljs.core.async.__GT_t_cljs$core$async45830 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45830(f__$1,ch__$1,meta45831){
return (new cljs.core.async.t_cljs$core$async45830(f__$1,ch__$1,meta45831));
});

}

return (new cljs.core.async.t_cljs$core$async45830(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45900 = (function (f,ch,meta45901){
this.f = f;
this.ch = ch;
this.meta45901 = meta45901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45902,meta45901__$1){
var self__ = this;
var _45902__$1 = this;
return (new cljs.core.async.t_cljs$core$async45900(self__.f,self__.ch,meta45901__$1));
}));

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45902){
var self__ = this;
var _45902__$1 = this;
return self__.meta45901;
}));

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45901","meta45901",-1934544194,null)], null);
}));

(cljs.core.async.t_cljs$core$async45900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45900");

(cljs.core.async.t_cljs$core$async45900.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45900.
 */
cljs.core.async.__GT_t_cljs$core$async45900 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45900(f__$1,ch__$1,meta45901){
return (new cljs.core.async.t_cljs$core$async45900(f__$1,ch__$1,meta45901));
});

}

return (new cljs.core.async.t_cljs$core$async45900(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45912 = (function (p,ch,meta45913){
this.p = p;
this.ch = ch;
this.meta45913 = meta45913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45914,meta45913__$1){
var self__ = this;
var _45914__$1 = this;
return (new cljs.core.async.t_cljs$core$async45912(self__.p,self__.ch,meta45913__$1));
}));

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45914){
var self__ = this;
var _45914__$1 = this;
return self__.meta45913;
}));

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45913","meta45913",-1934058470,null)], null);
}));

(cljs.core.async.t_cljs$core$async45912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45912");

(cljs.core.async.t_cljs$core$async45912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45912.
 */
cljs.core.async.__GT_t_cljs$core$async45912 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45912(p__$1,ch__$1,meta45913){
return (new cljs.core.async.t_cljs$core$async45912(p__$1,ch__$1,meta45913));
});

}

return (new cljs.core.async.t_cljs$core$async45912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45920 = arguments.length;
switch (G__45920) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_45941){
var state_val_45942 = (state_45941[(1)]);
if((state_val_45942 === (7))){
var inst_45937 = (state_45941[(2)]);
var state_45941__$1 = state_45941;
var statearr_45943_48342 = state_45941__$1;
(statearr_45943_48342[(2)] = inst_45937);

(statearr_45943_48342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (1))){
var state_45941__$1 = state_45941;
var statearr_45944_48343 = state_45941__$1;
(statearr_45944_48343[(2)] = null);

(statearr_45944_48343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (4))){
var inst_45923 = (state_45941[(7)]);
var inst_45923__$1 = (state_45941[(2)]);
var inst_45924 = (inst_45923__$1 == null);
var state_45941__$1 = (function (){var statearr_45945 = state_45941;
(statearr_45945[(7)] = inst_45923__$1);

return statearr_45945;
})();
if(cljs.core.truth_(inst_45924)){
var statearr_45946_48344 = state_45941__$1;
(statearr_45946_48344[(1)] = (5));

} else {
var statearr_45947_48345 = state_45941__$1;
(statearr_45947_48345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (6))){
var inst_45923 = (state_45941[(7)]);
var inst_45928 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45923) : p.call(null,inst_45923));
var state_45941__$1 = state_45941;
if(cljs.core.truth_(inst_45928)){
var statearr_45948_48347 = state_45941__$1;
(statearr_45948_48347[(1)] = (8));

} else {
var statearr_45949_48348 = state_45941__$1;
(statearr_45949_48348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (3))){
var inst_45939 = (state_45941[(2)]);
var state_45941__$1 = state_45941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45941__$1,inst_45939);
} else {
if((state_val_45942 === (2))){
var state_45941__$1 = state_45941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45941__$1,(4),ch);
} else {
if((state_val_45942 === (11))){
var inst_45931 = (state_45941[(2)]);
var state_45941__$1 = state_45941;
var statearr_45950_48349 = state_45941__$1;
(statearr_45950_48349[(2)] = inst_45931);

(statearr_45950_48349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (9))){
var state_45941__$1 = state_45941;
var statearr_45951_48350 = state_45941__$1;
(statearr_45951_48350[(2)] = null);

(statearr_45951_48350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (5))){
var inst_45926 = cljs.core.async.close_BANG_(out);
var state_45941__$1 = state_45941;
var statearr_45952_48351 = state_45941__$1;
(statearr_45952_48351[(2)] = inst_45926);

(statearr_45952_48351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (10))){
var inst_45934 = (state_45941[(2)]);
var state_45941__$1 = (function (){var statearr_45954 = state_45941;
(statearr_45954[(8)] = inst_45934);

return statearr_45954;
})();
var statearr_45955_48352 = state_45941__$1;
(statearr_45955_48352[(2)] = null);

(statearr_45955_48352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45942 === (8))){
var inst_45923 = (state_45941[(7)]);
var state_45941__$1 = state_45941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45941__$1,(11),out,inst_45923);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_45959 = [null,null,null,null,null,null,null,null,null];
(statearr_45959[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_45959[(1)] = (1));

return statearr_45959;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_45941){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_45941);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e45960){var ex__43600__auto__ = e45960;
var statearr_45961_48354 = state_45941;
(statearr_45961_48354[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_45941[(4)]))){
var statearr_45962_48355 = state_45941;
(statearr_45962_48355[(1)] = cljs.core.first((state_45941[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48356 = state_45941;
state_45941 = G__48356;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_45941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_45941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_45963 = f__43719__auto__();
(statearr_45963[(6)] = c__43718__auto___48341);

return statearr_45963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45965 = arguments.length;
switch (G__45965) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43718__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_46053){
var state_val_46054 = (state_46053[(1)]);
if((state_val_46054 === (7))){
var inst_46048 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
var statearr_46056_48425 = state_46053__$1;
(statearr_46056_48425[(2)] = inst_46048);

(statearr_46056_48425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (20))){
var inst_45998 = (state_46053[(7)]);
var inst_46015 = (state_46053[(2)]);
var inst_46016 = cljs.core.next(inst_45998);
var inst_45984 = inst_46016;
var inst_45985 = null;
var inst_45986 = (0);
var inst_45987 = (0);
var state_46053__$1 = (function (){var statearr_46064 = state_46053;
(statearr_46064[(8)] = inst_45984);

(statearr_46064[(9)] = inst_45985);

(statearr_46064[(10)] = inst_45986);

(statearr_46064[(11)] = inst_46015);

(statearr_46064[(12)] = inst_45987);

return statearr_46064;
})();
var statearr_46069_48426 = state_46053__$1;
(statearr_46069_48426[(2)] = null);

(statearr_46069_48426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (1))){
var state_46053__$1 = state_46053;
var statearr_46073_48427 = state_46053__$1;
(statearr_46073_48427[(2)] = null);

(statearr_46073_48427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (4))){
var inst_45973 = (state_46053[(13)]);
var inst_45973__$1 = (state_46053[(2)]);
var inst_45974 = (inst_45973__$1 == null);
var state_46053__$1 = (function (){var statearr_46082 = state_46053;
(statearr_46082[(13)] = inst_45973__$1);

return statearr_46082;
})();
if(cljs.core.truth_(inst_45974)){
var statearr_46083_48428 = state_46053__$1;
(statearr_46083_48428[(1)] = (5));

} else {
var statearr_46084_48429 = state_46053__$1;
(statearr_46084_48429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (15))){
var state_46053__$1 = state_46053;
var statearr_46088_48431 = state_46053__$1;
(statearr_46088_48431[(2)] = null);

(statearr_46088_48431[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (21))){
var state_46053__$1 = state_46053;
var statearr_46093_48432 = state_46053__$1;
(statearr_46093_48432[(2)] = null);

(statearr_46093_48432[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (13))){
var inst_45984 = (state_46053[(8)]);
var inst_45985 = (state_46053[(9)]);
var inst_45986 = (state_46053[(10)]);
var inst_45987 = (state_46053[(12)]);
var inst_45994 = (state_46053[(2)]);
var inst_45995 = (inst_45987 + (1));
var tmp46085 = inst_45984;
var tmp46086 = inst_45985;
var tmp46087 = inst_45986;
var inst_45984__$1 = tmp46085;
var inst_45985__$1 = tmp46086;
var inst_45986__$1 = tmp46087;
var inst_45987__$1 = inst_45995;
var state_46053__$1 = (function (){var statearr_46099 = state_46053;
(statearr_46099[(8)] = inst_45984__$1);

(statearr_46099[(9)] = inst_45985__$1);

(statearr_46099[(14)] = inst_45994);

(statearr_46099[(10)] = inst_45986__$1);

(statearr_46099[(12)] = inst_45987__$1);

return statearr_46099;
})();
var statearr_46100_48434 = state_46053__$1;
(statearr_46100_48434[(2)] = null);

(statearr_46100_48434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (22))){
var state_46053__$1 = state_46053;
var statearr_46107_48437 = state_46053__$1;
(statearr_46107_48437[(2)] = null);

(statearr_46107_48437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (6))){
var inst_45973 = (state_46053[(13)]);
var inst_45982 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45973) : f.call(null,inst_45973));
var inst_45983 = cljs.core.seq(inst_45982);
var inst_45984 = inst_45983;
var inst_45985 = null;
var inst_45986 = (0);
var inst_45987 = (0);
var state_46053__$1 = (function (){var statearr_46108 = state_46053;
(statearr_46108[(8)] = inst_45984);

(statearr_46108[(9)] = inst_45985);

(statearr_46108[(10)] = inst_45986);

(statearr_46108[(12)] = inst_45987);

return statearr_46108;
})();
var statearr_46112_48438 = state_46053__$1;
(statearr_46112_48438[(2)] = null);

(statearr_46112_48438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (17))){
var inst_45998 = (state_46053[(7)]);
var inst_46008 = cljs.core.chunk_first(inst_45998);
var inst_46009 = cljs.core.chunk_rest(inst_45998);
var inst_46010 = cljs.core.count(inst_46008);
var inst_45984 = inst_46009;
var inst_45985 = inst_46008;
var inst_45986 = inst_46010;
var inst_45987 = (0);
var state_46053__$1 = (function (){var statearr_46119 = state_46053;
(statearr_46119[(8)] = inst_45984);

(statearr_46119[(9)] = inst_45985);

(statearr_46119[(10)] = inst_45986);

(statearr_46119[(12)] = inst_45987);

return statearr_46119;
})();
var statearr_46125_48445 = state_46053__$1;
(statearr_46125_48445[(2)] = null);

(statearr_46125_48445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (3))){
var inst_46050 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46053__$1,inst_46050);
} else {
if((state_val_46054 === (12))){
var inst_46027 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
var statearr_46127_48447 = state_46053__$1;
(statearr_46127_48447[(2)] = inst_46027);

(statearr_46127_48447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (2))){
var state_46053__$1 = state_46053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46053__$1,(4),in$);
} else {
if((state_val_46054 === (23))){
var inst_46046 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
var statearr_46128_48448 = state_46053__$1;
(statearr_46128_48448[(2)] = inst_46046);

(statearr_46128_48448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (19))){
var inst_46019 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
var statearr_46129_48449 = state_46053__$1;
(statearr_46129_48449[(2)] = inst_46019);

(statearr_46129_48449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (11))){
var inst_45984 = (state_46053[(8)]);
var inst_45998 = (state_46053[(7)]);
var inst_45998__$1 = cljs.core.seq(inst_45984);
var state_46053__$1 = (function (){var statearr_46130 = state_46053;
(statearr_46130[(7)] = inst_45998__$1);

return statearr_46130;
})();
if(inst_45998__$1){
var statearr_46131_48453 = state_46053__$1;
(statearr_46131_48453[(1)] = (14));

} else {
var statearr_46132_48455 = state_46053__$1;
(statearr_46132_48455[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (9))){
var inst_46029 = (state_46053[(2)]);
var inst_46031 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46053__$1 = (function (){var statearr_46134 = state_46053;
(statearr_46134[(15)] = inst_46029);

return statearr_46134;
})();
if(cljs.core.truth_(inst_46031)){
var statearr_46139_48458 = state_46053__$1;
(statearr_46139_48458[(1)] = (21));

} else {
var statearr_46140_48459 = state_46053__$1;
(statearr_46140_48459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (5))){
var inst_45976 = cljs.core.async.close_BANG_(out);
var state_46053__$1 = state_46053;
var statearr_46141_48460 = state_46053__$1;
(statearr_46141_48460[(2)] = inst_45976);

(statearr_46141_48460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (14))){
var inst_45998 = (state_46053[(7)]);
var inst_46005 = cljs.core.chunked_seq_QMARK_(inst_45998);
var state_46053__$1 = state_46053;
if(inst_46005){
var statearr_46142_48463 = state_46053__$1;
(statearr_46142_48463[(1)] = (17));

} else {
var statearr_46143_48464 = state_46053__$1;
(statearr_46143_48464[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (16))){
var inst_46024 = (state_46053[(2)]);
var state_46053__$1 = state_46053;
var statearr_46144_48499 = state_46053__$1;
(statearr_46144_48499[(2)] = inst_46024);

(statearr_46144_48499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46054 === (10))){
var inst_45985 = (state_46053[(9)]);
var inst_45987 = (state_46053[(12)]);
var inst_45992 = cljs.core._nth(inst_45985,inst_45987);
var state_46053__$1 = state_46053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46053__$1,(13),out,inst_45992);
} else {
if((state_val_46054 === (18))){
var inst_45998 = (state_46053[(7)]);
var inst_46013 = cljs.core.first(inst_45998);
var state_46053__$1 = state_46053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46053__$1,(20),out,inst_46013);
} else {
if((state_val_46054 === (8))){
var inst_45986 = (state_46053[(10)]);
var inst_45987 = (state_46053[(12)]);
var inst_45989 = (inst_45987 < inst_45986);
var inst_45990 = inst_45989;
var state_46053__$1 = state_46053;
if(cljs.core.truth_(inst_45990)){
var statearr_46145_48501 = state_46053__$1;
(statearr_46145_48501[(1)] = (10));

} else {
var statearr_46146_48502 = state_46053__$1;
(statearr_46146_48502[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____0 = (function (){
var statearr_46147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46147[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__);

(statearr_46147[(1)] = (1));

return statearr_46147;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____1 = (function (state_46053){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_46053);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e46148){var ex__43600__auto__ = e46148;
var statearr_46149_48503 = state_46053;
(statearr_46149_48503[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_46053[(4)]))){
var statearr_46150_48504 = state_46053;
(statearr_46150_48504[(1)] = cljs.core.first((state_46053[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48505 = state_46053;
state_46053 = G__48505;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__ = function(state_46053){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____1.call(this,state_46053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43597__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_46151 = f__43719__auto__();
(statearr_46151[(6)] = c__43718__auto__);

return statearr_46151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

return c__43718__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46159 = arguments.length;
switch (G__46159) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46172 = arguments.length;
switch (G__46172) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46180 = arguments.length;
switch (G__46180) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_46209){
var state_val_46210 = (state_46209[(1)]);
if((state_val_46210 === (7))){
var inst_46204 = (state_46209[(2)]);
var state_46209__$1 = state_46209;
var statearr_46213_48522 = state_46209__$1;
(statearr_46213_48522[(2)] = inst_46204);

(statearr_46213_48522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (1))){
var inst_46184 = null;
var state_46209__$1 = (function (){var statearr_46214 = state_46209;
(statearr_46214[(7)] = inst_46184);

return statearr_46214;
})();
var statearr_46215_48527 = state_46209__$1;
(statearr_46215_48527[(2)] = null);

(statearr_46215_48527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (4))){
var inst_46189 = (state_46209[(8)]);
var inst_46189__$1 = (state_46209[(2)]);
var inst_46190 = (inst_46189__$1 == null);
var inst_46191 = cljs.core.not(inst_46190);
var state_46209__$1 = (function (){var statearr_46217 = state_46209;
(statearr_46217[(8)] = inst_46189__$1);

return statearr_46217;
})();
if(inst_46191){
var statearr_46218_48534 = state_46209__$1;
(statearr_46218_48534[(1)] = (5));

} else {
var statearr_46219_48536 = state_46209__$1;
(statearr_46219_48536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (6))){
var state_46209__$1 = state_46209;
var statearr_46220_48543 = state_46209__$1;
(statearr_46220_48543[(2)] = null);

(statearr_46220_48543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (3))){
var inst_46206 = (state_46209[(2)]);
var inst_46207 = cljs.core.async.close_BANG_(out);
var state_46209__$1 = (function (){var statearr_46221 = state_46209;
(statearr_46221[(9)] = inst_46206);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46209__$1,inst_46207);
} else {
if((state_val_46210 === (2))){
var state_46209__$1 = state_46209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46209__$1,(4),ch);
} else {
if((state_val_46210 === (11))){
var inst_46189 = (state_46209[(8)]);
var inst_46198 = (state_46209[(2)]);
var inst_46184 = inst_46189;
var state_46209__$1 = (function (){var statearr_46222 = state_46209;
(statearr_46222[(10)] = inst_46198);

(statearr_46222[(7)] = inst_46184);

return statearr_46222;
})();
var statearr_46223_48551 = state_46209__$1;
(statearr_46223_48551[(2)] = null);

(statearr_46223_48551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (9))){
var inst_46189 = (state_46209[(8)]);
var state_46209__$1 = state_46209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46209__$1,(11),out,inst_46189);
} else {
if((state_val_46210 === (5))){
var inst_46189 = (state_46209[(8)]);
var inst_46184 = (state_46209[(7)]);
var inst_46193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46189,inst_46184);
var state_46209__$1 = state_46209;
if(inst_46193){
var statearr_46228_48559 = state_46209__$1;
(statearr_46228_48559[(1)] = (8));

} else {
var statearr_46230_48560 = state_46209__$1;
(statearr_46230_48560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (10))){
var inst_46201 = (state_46209[(2)]);
var state_46209__$1 = state_46209;
var statearr_46231_48564 = state_46209__$1;
(statearr_46231_48564[(2)] = inst_46201);

(statearr_46231_48564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46210 === (8))){
var inst_46184 = (state_46209[(7)]);
var tmp46225 = inst_46184;
var inst_46184__$1 = tmp46225;
var state_46209__$1 = (function (){var statearr_46232 = state_46209;
(statearr_46232[(7)] = inst_46184__$1);

return statearr_46232;
})();
var statearr_46234_48565 = state_46209__$1;
(statearr_46234_48565[(2)] = null);

(statearr_46234_48565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_46235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46235[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_46235[(1)] = (1));

return statearr_46235;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_46209){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_46209);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e46237){var ex__43600__auto__ = e46237;
var statearr_46238_48566 = state_46209;
(statearr_46238_48566[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_46209[(4)]))){
var statearr_46240_48567 = state_46209;
(statearr_46240_48567[(1)] = cljs.core.first((state_46209[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48568 = state_46209;
state_46209 = G__48568;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_46209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_46209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_46242 = f__43719__auto__();
(statearr_46242[(6)] = c__43718__auto___48515);

return statearr_46242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46248 = arguments.length;
switch (G__46248) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_46292){
var state_val_46293 = (state_46292[(1)]);
if((state_val_46293 === (7))){
var inst_46287 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
var statearr_46294_48572 = state_46292__$1;
(statearr_46294_48572[(2)] = inst_46287);

(statearr_46294_48572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (1))){
var inst_46253 = (new Array(n));
var inst_46254 = inst_46253;
var inst_46255 = (0);
var state_46292__$1 = (function (){var statearr_46297 = state_46292;
(statearr_46297[(7)] = inst_46254);

(statearr_46297[(8)] = inst_46255);

return statearr_46297;
})();
var statearr_46298_48580 = state_46292__$1;
(statearr_46298_48580[(2)] = null);

(statearr_46298_48580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (4))){
var inst_46258 = (state_46292[(9)]);
var inst_46258__$1 = (state_46292[(2)]);
var inst_46259 = (inst_46258__$1 == null);
var inst_46260 = cljs.core.not(inst_46259);
var state_46292__$1 = (function (){var statearr_46299 = state_46292;
(statearr_46299[(9)] = inst_46258__$1);

return statearr_46299;
})();
if(inst_46260){
var statearr_46300_48591 = state_46292__$1;
(statearr_46300_48591[(1)] = (5));

} else {
var statearr_46301_48592 = state_46292__$1;
(statearr_46301_48592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (15))){
var inst_46281 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
var statearr_46303_48593 = state_46292__$1;
(statearr_46303_48593[(2)] = inst_46281);

(statearr_46303_48593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (13))){
var state_46292__$1 = state_46292;
var statearr_46305_48594 = state_46292__$1;
(statearr_46305_48594[(2)] = null);

(statearr_46305_48594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (6))){
var inst_46255 = (state_46292[(8)]);
var inst_46277 = (inst_46255 > (0));
var state_46292__$1 = state_46292;
if(cljs.core.truth_(inst_46277)){
var statearr_46306_48629 = state_46292__$1;
(statearr_46306_48629[(1)] = (12));

} else {
var statearr_46307_48630 = state_46292__$1;
(statearr_46307_48630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (3))){
var inst_46289 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46292__$1,inst_46289);
} else {
if((state_val_46293 === (12))){
var inst_46254 = (state_46292[(7)]);
var inst_46279 = cljs.core.vec(inst_46254);
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46292__$1,(15),out,inst_46279);
} else {
if((state_val_46293 === (2))){
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46292__$1,(4),ch);
} else {
if((state_val_46293 === (11))){
var inst_46270 = (state_46292[(2)]);
var inst_46271 = (new Array(n));
var inst_46254 = inst_46271;
var inst_46255 = (0);
var state_46292__$1 = (function (){var statearr_46308 = state_46292;
(statearr_46308[(7)] = inst_46254);

(statearr_46308[(10)] = inst_46270);

(statearr_46308[(8)] = inst_46255);

return statearr_46308;
})();
var statearr_46311_48632 = state_46292__$1;
(statearr_46311_48632[(2)] = null);

(statearr_46311_48632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (9))){
var inst_46254 = (state_46292[(7)]);
var inst_46268 = cljs.core.vec(inst_46254);
var state_46292__$1 = state_46292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46292__$1,(11),out,inst_46268);
} else {
if((state_val_46293 === (5))){
var inst_46258 = (state_46292[(9)]);
var inst_46254 = (state_46292[(7)]);
var inst_46263 = (state_46292[(11)]);
var inst_46255 = (state_46292[(8)]);
var inst_46262 = (inst_46254[inst_46255] = inst_46258);
var inst_46263__$1 = (inst_46255 + (1));
var inst_46264 = (inst_46263__$1 < n);
var state_46292__$1 = (function (){var statearr_46313 = state_46292;
(statearr_46313[(12)] = inst_46262);

(statearr_46313[(11)] = inst_46263__$1);

return statearr_46313;
})();
if(cljs.core.truth_(inst_46264)){
var statearr_46315_48633 = state_46292__$1;
(statearr_46315_48633[(1)] = (8));

} else {
var statearr_46316_48634 = state_46292__$1;
(statearr_46316_48634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (14))){
var inst_46284 = (state_46292[(2)]);
var inst_46285 = cljs.core.async.close_BANG_(out);
var state_46292__$1 = (function (){var statearr_46318 = state_46292;
(statearr_46318[(13)] = inst_46284);

return statearr_46318;
})();
var statearr_46319_48635 = state_46292__$1;
(statearr_46319_48635[(2)] = inst_46285);

(statearr_46319_48635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (10))){
var inst_46274 = (state_46292[(2)]);
var state_46292__$1 = state_46292;
var statearr_46322_48636 = state_46292__$1;
(statearr_46322_48636[(2)] = inst_46274);

(statearr_46322_48636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46293 === (8))){
var inst_46254 = (state_46292[(7)]);
var inst_46263 = (state_46292[(11)]);
var tmp46317 = inst_46254;
var inst_46254__$1 = tmp46317;
var inst_46255 = inst_46263;
var state_46292__$1 = (function (){var statearr_46324 = state_46292;
(statearr_46324[(7)] = inst_46254__$1);

(statearr_46324[(8)] = inst_46255);

return statearr_46324;
})();
var statearr_46326_48640 = state_46292__$1;
(statearr_46326_48640[(2)] = null);

(statearr_46326_48640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_46331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46331[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_46331[(1)] = (1));

return statearr_46331;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_46292){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_46292);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e46335){var ex__43600__auto__ = e46335;
var statearr_46336_48644 = state_46292;
(statearr_46336_48644[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_46292[(4)]))){
var statearr_46337_48645 = state_46292;
(statearr_46337_48645[(1)] = cljs.core.first((state_46292[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_46292;
state_46292 = G__48646;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_46292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_46292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_46340 = f__43719__auto__();
(statearr_46340[(6)] = c__43718__auto___48571);

return statearr_46340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46345 = arguments.length;
switch (G__46345) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43718__auto___48648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_46509){
var state_val_46510 = (state_46509[(1)]);
if((state_val_46510 === (7))){
var inst_46505 = (state_46509[(2)]);
var state_46509__$1 = state_46509;
var statearr_46513_48649 = state_46509__$1;
(statearr_46513_48649[(2)] = inst_46505);

(statearr_46513_48649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (1))){
var inst_46353 = [];
var inst_46354 = inst_46353;
var inst_46355 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46509__$1 = (function (){var statearr_46514 = state_46509;
(statearr_46514[(7)] = inst_46354);

(statearr_46514[(8)] = inst_46355);

return statearr_46514;
})();
var statearr_46515_48650 = state_46509__$1;
(statearr_46515_48650[(2)] = null);

(statearr_46515_48650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (4))){
var inst_46360 = (state_46509[(9)]);
var inst_46360__$1 = (state_46509[(2)]);
var inst_46361 = (inst_46360__$1 == null);
var inst_46362 = cljs.core.not(inst_46361);
var state_46509__$1 = (function (){var statearr_46516 = state_46509;
(statearr_46516[(9)] = inst_46360__$1);

return statearr_46516;
})();
if(inst_46362){
var statearr_46517_48688 = state_46509__$1;
(statearr_46517_48688[(1)] = (5));

} else {
var statearr_46518_48689 = state_46509__$1;
(statearr_46518_48689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (15))){
var inst_46499 = (state_46509[(2)]);
var state_46509__$1 = state_46509;
var statearr_46521_48690 = state_46509__$1;
(statearr_46521_48690[(2)] = inst_46499);

(statearr_46521_48690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (13))){
var state_46509__$1 = state_46509;
var statearr_46522_48691 = state_46509__$1;
(statearr_46522_48691[(2)] = null);

(statearr_46522_48691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (6))){
var inst_46354 = (state_46509[(7)]);
var inst_46494 = inst_46354.length;
var inst_46495 = (inst_46494 > (0));
var state_46509__$1 = state_46509;
if(cljs.core.truth_(inst_46495)){
var statearr_46523_48692 = state_46509__$1;
(statearr_46523_48692[(1)] = (12));

} else {
var statearr_46524_48693 = state_46509__$1;
(statearr_46524_48693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (3))){
var inst_46507 = (state_46509[(2)]);
var state_46509__$1 = state_46509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46509__$1,inst_46507);
} else {
if((state_val_46510 === (12))){
var inst_46354 = (state_46509[(7)]);
var inst_46497 = cljs.core.vec(inst_46354);
var state_46509__$1 = state_46509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46509__$1,(15),out,inst_46497);
} else {
if((state_val_46510 === (2))){
var state_46509__$1 = state_46509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46509__$1,(4),ch);
} else {
if((state_val_46510 === (11))){
var inst_46364 = (state_46509[(10)]);
var inst_46360 = (state_46509[(9)]);
var inst_46487 = (state_46509[(2)]);
var inst_46488 = [];
var inst_46489 = inst_46488.push(inst_46360);
var inst_46354 = inst_46488;
var inst_46355 = inst_46364;
var state_46509__$1 = (function (){var statearr_46525 = state_46509;
(statearr_46525[(7)] = inst_46354);

(statearr_46525[(8)] = inst_46355);

(statearr_46525[(11)] = inst_46489);

(statearr_46525[(12)] = inst_46487);

return statearr_46525;
})();
var statearr_46526_48699 = state_46509__$1;
(statearr_46526_48699[(2)] = null);

(statearr_46526_48699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (9))){
var inst_46354 = (state_46509[(7)]);
var inst_46485 = cljs.core.vec(inst_46354);
var state_46509__$1 = state_46509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46509__$1,(11),out,inst_46485);
} else {
if((state_val_46510 === (5))){
var inst_46364 = (state_46509[(10)]);
var inst_46360 = (state_46509[(9)]);
var inst_46355 = (state_46509[(8)]);
var inst_46364__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46360) : f.call(null,inst_46360));
var inst_46478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46364__$1,inst_46355);
var inst_46479 = cljs.core.keyword_identical_QMARK_(inst_46355,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46480 = ((inst_46478) || (inst_46479));
var state_46509__$1 = (function (){var statearr_46528 = state_46509;
(statearr_46528[(10)] = inst_46364__$1);

return statearr_46528;
})();
if(cljs.core.truth_(inst_46480)){
var statearr_46529_48700 = state_46509__$1;
(statearr_46529_48700[(1)] = (8));

} else {
var statearr_46530_48701 = state_46509__$1;
(statearr_46530_48701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (14))){
var inst_46502 = (state_46509[(2)]);
var inst_46503 = cljs.core.async.close_BANG_(out);
var state_46509__$1 = (function (){var statearr_46533 = state_46509;
(statearr_46533[(13)] = inst_46502);

return statearr_46533;
})();
var statearr_46534_48702 = state_46509__$1;
(statearr_46534_48702[(2)] = inst_46503);

(statearr_46534_48702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (10))){
var inst_46492 = (state_46509[(2)]);
var state_46509__$1 = state_46509;
var statearr_46535_48707 = state_46509__$1;
(statearr_46535_48707[(2)] = inst_46492);

(statearr_46535_48707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46510 === (8))){
var inst_46354 = (state_46509[(7)]);
var inst_46364 = (state_46509[(10)]);
var inst_46360 = (state_46509[(9)]);
var inst_46482 = inst_46354.push(inst_46360);
var tmp46531 = inst_46354;
var inst_46354__$1 = tmp46531;
var inst_46355 = inst_46364;
var state_46509__$1 = (function (){var statearr_46539 = state_46509;
(statearr_46539[(7)] = inst_46354__$1);

(statearr_46539[(8)] = inst_46355);

(statearr_46539[(14)] = inst_46482);

return statearr_46539;
})();
var statearr_46540_48710 = state_46509__$1;
(statearr_46540_48710[(2)] = null);

(statearr_46540_48710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43597__auto__ = null;
var cljs$core$async$state_machine__43597__auto____0 = (function (){
var statearr_46541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46541[(0)] = cljs$core$async$state_machine__43597__auto__);

(statearr_46541[(1)] = (1));

return statearr_46541;
});
var cljs$core$async$state_machine__43597__auto____1 = (function (state_46509){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_46509);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e46542){var ex__43600__auto__ = e46542;
var statearr_46544_48713 = state_46509;
(statearr_46544_48713[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_46509[(4)]))){
var statearr_46547_48732 = state_46509;
(statearr_46547_48732[(1)] = cljs.core.first((state_46509[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48737 = state_46509;
state_46509 = G__48737;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
cljs$core$async$state_machine__43597__auto__ = function(state_46509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43597__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43597__auto____1.call(this,state_46509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43597__auto____0;
cljs$core$async$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43597__auto____1;
return cljs$core$async$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_46548 = f__43719__auto__();
(statearr_46548[(6)] = c__43718__auto___48648);

return statearr_46548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
