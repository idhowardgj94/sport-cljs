goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47254 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47254(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47256 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47256(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46587 = coll;
var G__46588 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46587,G__46588) : shadow.dom.lazy_native_coll_seq.call(null,G__46587,G__46588));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46608 = arguments.length;
switch (G__46608) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46610 = arguments.length;
switch (G__46610) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46612 = arguments.length;
switch (G__46612) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46620 = arguments.length;
switch (G__46620) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46622 = arguments.length;
switch (G__46622) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46626 = arguments.length;
switch (G__46626) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46627){if((e46627 instanceof Object)){
var e = e46627;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46627;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46632 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46633 = null;
var count__46634 = (0);
var i__46635 = (0);
while(true){
if((i__46635 < count__46634)){
var el = chunk__46633.cljs$core$IIndexed$_nth$arity$2(null,i__46635);
var handler_47306__$1 = ((function (seq__46632,chunk__46633,count__46634,i__46635,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46632,chunk__46633,count__46634,i__46635,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47306__$1);


var G__47312 = seq__46632;
var G__47313 = chunk__46633;
var G__47314 = count__46634;
var G__47315 = (i__46635 + (1));
seq__46632 = G__47312;
chunk__46633 = G__47313;
count__46634 = G__47314;
i__46635 = G__47315;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46632);
if(temp__5753__auto__){
var seq__46632__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46632__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46632__$1);
var G__47316 = cljs.core.chunk_rest(seq__46632__$1);
var G__47317 = c__4556__auto__;
var G__47318 = cljs.core.count(c__4556__auto__);
var G__47319 = (0);
seq__46632 = G__47316;
chunk__46633 = G__47317;
count__46634 = G__47318;
i__46635 = G__47319;
continue;
} else {
var el = cljs.core.first(seq__46632__$1);
var handler_47320__$1 = ((function (seq__46632,chunk__46633,count__46634,i__46635,el,seq__46632__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46632,chunk__46633,count__46634,i__46635,el,seq__46632__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47320__$1);


var G__47322 = cljs.core.next(seq__46632__$1);
var G__47323 = null;
var G__47324 = (0);
var G__47325 = (0);
seq__46632 = G__47322;
chunk__46633 = G__47323;
count__46634 = G__47324;
i__46635 = G__47325;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46646 = arguments.length;
switch (G__46646) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46647 = cljs.core.seq(events);
var chunk__46648 = null;
var count__46649 = (0);
var i__46650 = (0);
while(true){
if((i__46650 < count__46649)){
var vec__46657 = chunk__46648.cljs$core$IIndexed$_nth$arity$2(null,i__46650);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46657,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47331 = seq__46647;
var G__47332 = chunk__46648;
var G__47333 = count__46649;
var G__47334 = (i__46650 + (1));
seq__46647 = G__47331;
chunk__46648 = G__47332;
count__46649 = G__47333;
i__46650 = G__47334;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46647);
if(temp__5753__auto__){
var seq__46647__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46647__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46647__$1);
var G__47336 = cljs.core.chunk_rest(seq__46647__$1);
var G__47337 = c__4556__auto__;
var G__47338 = cljs.core.count(c__4556__auto__);
var G__47339 = (0);
seq__46647 = G__47336;
chunk__46648 = G__47337;
count__46649 = G__47338;
i__46650 = G__47339;
continue;
} else {
var vec__46663 = cljs.core.first(seq__46647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46663,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47343 = cljs.core.next(seq__46647__$1);
var G__47344 = null;
var G__47345 = (0);
var G__47346 = (0);
seq__46647 = G__47343;
chunk__46648 = G__47344;
count__46649 = G__47345;
i__46650 = G__47346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46666 = cljs.core.seq(styles);
var chunk__46667 = null;
var count__46668 = (0);
var i__46669 = (0);
while(true){
if((i__46669 < count__46668)){
var vec__46678 = chunk__46667.cljs$core$IIndexed$_nth$arity$2(null,i__46669);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47388 = seq__46666;
var G__47389 = chunk__46667;
var G__47390 = count__46668;
var G__47391 = (i__46669 + (1));
seq__46666 = G__47388;
chunk__46667 = G__47389;
count__46668 = G__47390;
i__46669 = G__47391;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46666);
if(temp__5753__auto__){
var seq__46666__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46666__$1);
var G__47396 = cljs.core.chunk_rest(seq__46666__$1);
var G__47397 = c__4556__auto__;
var G__47398 = cljs.core.count(c__4556__auto__);
var G__47399 = (0);
seq__46666 = G__47396;
chunk__46667 = G__47397;
count__46668 = G__47398;
i__46669 = G__47399;
continue;
} else {
var vec__46683 = cljs.core.first(seq__46666__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47400 = cljs.core.next(seq__46666__$1);
var G__47401 = null;
var G__47402 = (0);
var G__47403 = (0);
seq__46666 = G__47400;
chunk__46667 = G__47401;
count__46668 = G__47402;
i__46669 = G__47403;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46689_47404 = key;
var G__46689_47405__$1 = (((G__46689_47404 instanceof cljs.core.Keyword))?G__46689_47404.fqn:null);
switch (G__46689_47405__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47410 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_47410,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_47410,"aria-");
}
})())){
el.setAttribute(ks_47410,value);
} else {
(el[ks_47410] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46703){
var map__46704 = p__46703;
var map__46704__$1 = (((((!((map__46704 == null))))?(((((map__46704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46704):map__46704);
var props = map__46704__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46704__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46706 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46706,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46706,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46706,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46710 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46710,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46710;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46712 = arguments.length;
switch (G__46712) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46721){
var vec__46722 = p__46721;
var seq__46723 = cljs.core.seq(vec__46722);
var first__46724 = cljs.core.first(seq__46723);
var seq__46723__$1 = cljs.core.next(seq__46723);
var nn = first__46724;
var first__46724__$1 = cljs.core.first(seq__46723__$1);
var seq__46723__$2 = cljs.core.next(seq__46723__$1);
var np = first__46724__$1;
var nc = seq__46723__$2;
var node = vec__46722;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46727 = nn;
var G__46728 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46727,G__46728) : create_fn.call(null,G__46727,G__46728));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46729 = nn;
var G__46730 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46729,G__46730) : create_fn.call(null,G__46729,G__46730));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46733 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46733,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46733,(1),null);
var seq__46736_47449 = cljs.core.seq(node_children);
var chunk__46737_47450 = null;
var count__46738_47451 = (0);
var i__46739_47452 = (0);
while(true){
if((i__46739_47452 < count__46738_47451)){
var child_struct_47454 = chunk__46737_47450.cljs$core$IIndexed$_nth$arity$2(null,i__46739_47452);
var children_47457 = shadow.dom.dom_node(child_struct_47454);
if(cljs.core.seq_QMARK_(children_47457)){
var seq__46765_47458 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47457));
var chunk__46767_47459 = null;
var count__46768_47460 = (0);
var i__46769_47461 = (0);
while(true){
if((i__46769_47461 < count__46768_47460)){
var child_47469 = chunk__46767_47459.cljs$core$IIndexed$_nth$arity$2(null,i__46769_47461);
if(cljs.core.truth_(child_47469)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47469);


var G__47471 = seq__46765_47458;
var G__47472 = chunk__46767_47459;
var G__47473 = count__46768_47460;
var G__47474 = (i__46769_47461 + (1));
seq__46765_47458 = G__47471;
chunk__46767_47459 = G__47472;
count__46768_47460 = G__47473;
i__46769_47461 = G__47474;
continue;
} else {
var G__47476 = seq__46765_47458;
var G__47477 = chunk__46767_47459;
var G__47478 = count__46768_47460;
var G__47479 = (i__46769_47461 + (1));
seq__46765_47458 = G__47476;
chunk__46767_47459 = G__47477;
count__46768_47460 = G__47478;
i__46769_47461 = G__47479;
continue;
}
} else {
var temp__5753__auto___47480 = cljs.core.seq(seq__46765_47458);
if(temp__5753__auto___47480){
var seq__46765_47482__$1 = temp__5753__auto___47480;
if(cljs.core.chunked_seq_QMARK_(seq__46765_47482__$1)){
var c__4556__auto___47485 = cljs.core.chunk_first(seq__46765_47482__$1);
var G__47487 = cljs.core.chunk_rest(seq__46765_47482__$1);
var G__47488 = c__4556__auto___47485;
var G__47489 = cljs.core.count(c__4556__auto___47485);
var G__47490 = (0);
seq__46765_47458 = G__47487;
chunk__46767_47459 = G__47488;
count__46768_47460 = G__47489;
i__46769_47461 = G__47490;
continue;
} else {
var child_47491 = cljs.core.first(seq__46765_47482__$1);
if(cljs.core.truth_(child_47491)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47491);


var G__47495 = cljs.core.next(seq__46765_47482__$1);
var G__47496 = null;
var G__47497 = (0);
var G__47498 = (0);
seq__46765_47458 = G__47495;
chunk__46767_47459 = G__47496;
count__46768_47460 = G__47497;
i__46769_47461 = G__47498;
continue;
} else {
var G__47499 = cljs.core.next(seq__46765_47482__$1);
var G__47500 = null;
var G__47501 = (0);
var G__47502 = (0);
seq__46765_47458 = G__47499;
chunk__46767_47459 = G__47500;
count__46768_47460 = G__47501;
i__46769_47461 = G__47502;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47457);
}


var G__47503 = seq__46736_47449;
var G__47504 = chunk__46737_47450;
var G__47505 = count__46738_47451;
var G__47506 = (i__46739_47452 + (1));
seq__46736_47449 = G__47503;
chunk__46737_47450 = G__47504;
count__46738_47451 = G__47505;
i__46739_47452 = G__47506;
continue;
} else {
var temp__5753__auto___47507 = cljs.core.seq(seq__46736_47449);
if(temp__5753__auto___47507){
var seq__46736_47510__$1 = temp__5753__auto___47507;
if(cljs.core.chunked_seq_QMARK_(seq__46736_47510__$1)){
var c__4556__auto___47511 = cljs.core.chunk_first(seq__46736_47510__$1);
var G__47512 = cljs.core.chunk_rest(seq__46736_47510__$1);
var G__47513 = c__4556__auto___47511;
var G__47514 = cljs.core.count(c__4556__auto___47511);
var G__47515 = (0);
seq__46736_47449 = G__47512;
chunk__46737_47450 = G__47513;
count__46738_47451 = G__47514;
i__46739_47452 = G__47515;
continue;
} else {
var child_struct_47519 = cljs.core.first(seq__46736_47510__$1);
var children_47520 = shadow.dom.dom_node(child_struct_47519);
if(cljs.core.seq_QMARK_(children_47520)){
var seq__46798_47521 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47520));
var chunk__46800_47522 = null;
var count__46801_47523 = (0);
var i__46802_47524 = (0);
while(true){
if((i__46802_47524 < count__46801_47523)){
var child_47526 = chunk__46800_47522.cljs$core$IIndexed$_nth$arity$2(null,i__46802_47524);
if(cljs.core.truth_(child_47526)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47526);


var G__47527 = seq__46798_47521;
var G__47528 = chunk__46800_47522;
var G__47529 = count__46801_47523;
var G__47530 = (i__46802_47524 + (1));
seq__46798_47521 = G__47527;
chunk__46800_47522 = G__47528;
count__46801_47523 = G__47529;
i__46802_47524 = G__47530;
continue;
} else {
var G__47531 = seq__46798_47521;
var G__47532 = chunk__46800_47522;
var G__47533 = count__46801_47523;
var G__47534 = (i__46802_47524 + (1));
seq__46798_47521 = G__47531;
chunk__46800_47522 = G__47532;
count__46801_47523 = G__47533;
i__46802_47524 = G__47534;
continue;
}
} else {
var temp__5753__auto___47536__$1 = cljs.core.seq(seq__46798_47521);
if(temp__5753__auto___47536__$1){
var seq__46798_47538__$1 = temp__5753__auto___47536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46798_47538__$1)){
var c__4556__auto___47539 = cljs.core.chunk_first(seq__46798_47538__$1);
var G__47540 = cljs.core.chunk_rest(seq__46798_47538__$1);
var G__47541 = c__4556__auto___47539;
var G__47542 = cljs.core.count(c__4556__auto___47539);
var G__47543 = (0);
seq__46798_47521 = G__47540;
chunk__46800_47522 = G__47541;
count__46801_47523 = G__47542;
i__46802_47524 = G__47543;
continue;
} else {
var child_47547 = cljs.core.first(seq__46798_47538__$1);
if(cljs.core.truth_(child_47547)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47547);


var G__47549 = cljs.core.next(seq__46798_47538__$1);
var G__47550 = null;
var G__47551 = (0);
var G__47552 = (0);
seq__46798_47521 = G__47549;
chunk__46800_47522 = G__47550;
count__46801_47523 = G__47551;
i__46802_47524 = G__47552;
continue;
} else {
var G__47553 = cljs.core.next(seq__46798_47538__$1);
var G__47554 = null;
var G__47555 = (0);
var G__47556 = (0);
seq__46798_47521 = G__47553;
chunk__46800_47522 = G__47554;
count__46801_47523 = G__47555;
i__46802_47524 = G__47556;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47520);
}


var G__47557 = cljs.core.next(seq__46736_47510__$1);
var G__47558 = null;
var G__47559 = (0);
var G__47560 = (0);
seq__46736_47449 = G__47557;
chunk__46737_47450 = G__47558;
count__46738_47451 = G__47559;
i__46739_47452 = G__47560;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46807 = cljs.core.seq(node);
var chunk__46808 = null;
var count__46809 = (0);
var i__46810 = (0);
while(true){
if((i__46810 < count__46809)){
var n = chunk__46808.cljs$core$IIndexed$_nth$arity$2(null,i__46810);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47570 = seq__46807;
var G__47571 = chunk__46808;
var G__47572 = count__46809;
var G__47573 = (i__46810 + (1));
seq__46807 = G__47570;
chunk__46808 = G__47571;
count__46809 = G__47572;
i__46810 = G__47573;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46807);
if(temp__5753__auto__){
var seq__46807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46807__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46807__$1);
var G__47575 = cljs.core.chunk_rest(seq__46807__$1);
var G__47576 = c__4556__auto__;
var G__47577 = cljs.core.count(c__4556__auto__);
var G__47578 = (0);
seq__46807 = G__47575;
chunk__46808 = G__47576;
count__46809 = G__47577;
i__46810 = G__47578;
continue;
} else {
var n = cljs.core.first(seq__46807__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47581 = cljs.core.next(seq__46807__$1);
var G__47582 = null;
var G__47583 = (0);
var G__47584 = (0);
seq__46807 = G__47581;
chunk__46808 = G__47582;
count__46809 = G__47583;
i__46810 = G__47584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46823 = arguments.length;
switch (G__46823) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46828 = arguments.length;
switch (G__46828) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46852 = arguments.length;
switch (G__46852) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47610 = arguments.length;
var i__4737__auto___47611 = (0);
while(true){
if((i__4737__auto___47611 < len__4736__auto___47610)){
args__4742__auto__.push((arguments[i__4737__auto___47611]));

var G__47612 = (i__4737__auto___47611 + (1));
i__4737__auto___47611 = G__47612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46871_47641 = cljs.core.seq(nodes);
var chunk__46872_47642 = null;
var count__46873_47643 = (0);
var i__46874_47644 = (0);
while(true){
if((i__46874_47644 < count__46873_47643)){
var node_47645 = chunk__46872_47642.cljs$core$IIndexed$_nth$arity$2(null,i__46874_47644);
fragment.appendChild(shadow.dom._to_dom(node_47645));


var G__47646 = seq__46871_47641;
var G__47647 = chunk__46872_47642;
var G__47648 = count__46873_47643;
var G__47649 = (i__46874_47644 + (1));
seq__46871_47641 = G__47646;
chunk__46872_47642 = G__47647;
count__46873_47643 = G__47648;
i__46874_47644 = G__47649;
continue;
} else {
var temp__5753__auto___47650 = cljs.core.seq(seq__46871_47641);
if(temp__5753__auto___47650){
var seq__46871_47651__$1 = temp__5753__auto___47650;
if(cljs.core.chunked_seq_QMARK_(seq__46871_47651__$1)){
var c__4556__auto___47652 = cljs.core.chunk_first(seq__46871_47651__$1);
var G__47653 = cljs.core.chunk_rest(seq__46871_47651__$1);
var G__47654 = c__4556__auto___47652;
var G__47655 = cljs.core.count(c__4556__auto___47652);
var G__47656 = (0);
seq__46871_47641 = G__47653;
chunk__46872_47642 = G__47654;
count__46873_47643 = G__47655;
i__46874_47644 = G__47656;
continue;
} else {
var node_47657 = cljs.core.first(seq__46871_47651__$1);
fragment.appendChild(shadow.dom._to_dom(node_47657));


var G__47658 = cljs.core.next(seq__46871_47651__$1);
var G__47659 = null;
var G__47660 = (0);
var G__47661 = (0);
seq__46871_47641 = G__47658;
chunk__46872_47642 = G__47659;
count__46873_47643 = G__47660;
i__46874_47644 = G__47661;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46868){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46868));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46880_47680 = cljs.core.seq(scripts);
var chunk__46881_47681 = null;
var count__46882_47682 = (0);
var i__46883_47683 = (0);
while(true){
if((i__46883_47683 < count__46882_47682)){
var vec__46890_47704 = chunk__46881_47681.cljs$core$IIndexed$_nth$arity$2(null,i__46883_47683);
var script_tag_47705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46890_47704,(0),null);
var script_body_47706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46890_47704,(1),null);
eval(script_body_47706);


var G__47710 = seq__46880_47680;
var G__47711 = chunk__46881_47681;
var G__47712 = count__46882_47682;
var G__47713 = (i__46883_47683 + (1));
seq__46880_47680 = G__47710;
chunk__46881_47681 = G__47711;
count__46882_47682 = G__47712;
i__46883_47683 = G__47713;
continue;
} else {
var temp__5753__auto___47715 = cljs.core.seq(seq__46880_47680);
if(temp__5753__auto___47715){
var seq__46880_47717__$1 = temp__5753__auto___47715;
if(cljs.core.chunked_seq_QMARK_(seq__46880_47717__$1)){
var c__4556__auto___47718 = cljs.core.chunk_first(seq__46880_47717__$1);
var G__47719 = cljs.core.chunk_rest(seq__46880_47717__$1);
var G__47720 = c__4556__auto___47718;
var G__47721 = cljs.core.count(c__4556__auto___47718);
var G__47722 = (0);
seq__46880_47680 = G__47719;
chunk__46881_47681 = G__47720;
count__46882_47682 = G__47721;
i__46883_47683 = G__47722;
continue;
} else {
var vec__46893_47724 = cljs.core.first(seq__46880_47717__$1);
var script_tag_47725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46893_47724,(0),null);
var script_body_47726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46893_47724,(1),null);
eval(script_body_47726);


var G__47728 = cljs.core.next(seq__46880_47717__$1);
var G__47729 = null;
var G__47730 = (0);
var G__47731 = (0);
seq__46880_47680 = G__47728;
chunk__46881_47681 = G__47729;
count__46882_47682 = G__47730;
i__46883_47683 = G__47731;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46897){
var vec__46899 = p__46897;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46899,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46899,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46911 = arguments.length;
switch (G__46911) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46969 = cljs.core.seq(style_keys);
var chunk__46970 = null;
var count__46971 = (0);
var i__46972 = (0);
while(true){
if((i__46972 < count__46971)){
var it = chunk__46970.cljs$core$IIndexed$_nth$arity$2(null,i__46972);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47747 = seq__46969;
var G__47748 = chunk__46970;
var G__47749 = count__46971;
var G__47750 = (i__46972 + (1));
seq__46969 = G__47747;
chunk__46970 = G__47748;
count__46971 = G__47749;
i__46972 = G__47750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46969);
if(temp__5753__auto__){
var seq__46969__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46969__$1);
var G__47752 = cljs.core.chunk_rest(seq__46969__$1);
var G__47753 = c__4556__auto__;
var G__47754 = cljs.core.count(c__4556__auto__);
var G__47755 = (0);
seq__46969 = G__47752;
chunk__46970 = G__47753;
count__46971 = G__47754;
i__46972 = G__47755;
continue;
} else {
var it = cljs.core.first(seq__46969__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47757 = cljs.core.next(seq__46969__$1);
var G__47758 = null;
var G__47759 = (0);
var G__47760 = (0);
seq__46969 = G__47757;
chunk__46970 = G__47758;
count__46971 = G__47759;
i__46972 = G__47760;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46974,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46980 = k46974;
var G__46980__$1 = (((G__46980 instanceof cljs.core.Keyword))?G__46980.fqn:null);
switch (G__46980__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46974,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46981){
var vec__46982 = p__46981;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46973){
var self__ = this;
var G__46973__$1 = this;
return (new cljs.core.RecordIter((0),G__46973__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46975,other46976){
var self__ = this;
var this46975__$1 = this;
return (((!((other46976 == null)))) && ((this46975__$1.constructor === other46976.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46975__$1.x,other46976.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46975__$1.y,other46976.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46975__$1.__extmap,other46976.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46973){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46994 = cljs.core.keyword_identical_QMARK_;
var expr__46995 = k__4388__auto__;
if(cljs.core.truth_((pred__46994.cljs$core$IFn$_invoke$arity$2 ? pred__46994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46995) : pred__46994.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46995)))){
return (new shadow.dom.Coordinate(G__46973,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46994.cljs$core$IFn$_invoke$arity$2 ? pred__46994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46995) : pred__46994.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46995)))){
return (new shadow.dom.Coordinate(self__.x,G__46973,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46973),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46973){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46973,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46979){
var extmap__4419__auto__ = (function (){var G__47000 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46979,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47000);
} else {
return G__47000;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46979),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46979),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47005,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47009 = k47005;
var G__47009__$1 = (((G__47009 instanceof cljs.core.Keyword))?G__47009.fqn:null);
switch (G__47009__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47005,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47010){
var vec__47011 = p__47010;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47004){
var self__ = this;
var G__47004__$1 = this;
return (new cljs.core.RecordIter((0),G__47004__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47006,other47007){
var self__ = this;
var this47006__$1 = this;
return (((!((other47007 == null)))) && ((this47006__$1.constructor === other47007.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47006__$1.w,other47007.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47006__$1.h,other47007.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47006__$1.__extmap,other47007.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47004){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47044 = cljs.core.keyword_identical_QMARK_;
var expr__47045 = k__4388__auto__;
if(cljs.core.truth_((pred__47044.cljs$core$IFn$_invoke$arity$2 ? pred__47044.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47045) : pred__47044.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47045)))){
return (new shadow.dom.Size(G__47004,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47044.cljs$core$IFn$_invoke$arity$2 ? pred__47044.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47045) : pred__47044.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47045)))){
return (new shadow.dom.Size(self__.w,G__47004,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47004),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47004){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47004,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47008){
var extmap__4419__auto__ = (function (){var G__47065 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47008,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47008)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47065);
} else {
return G__47065;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47008),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47008),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__47887 = (i + (1));
var G__47888 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47887;
ret = G__47888;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47095){
var vec__47096 = p__47095;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47096,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47100 = arguments.length;
switch (G__47100) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47909 = ps;
var G__47910 = (i + (1));
el__$1 = G__47909;
i = G__47910;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47117 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47124_47914 = cljs.core.seq(props);
var chunk__47125_47915 = null;
var count__47126_47916 = (0);
var i__47127_47917 = (0);
while(true){
if((i__47127_47917 < count__47126_47916)){
var vec__47139_47918 = chunk__47125_47915.cljs$core$IIndexed$_nth$arity$2(null,i__47127_47917);
var k_47919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47139_47918,(0),null);
var v_47920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47139_47918,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47919);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47919),v_47920);


var G__47921 = seq__47124_47914;
var G__47922 = chunk__47125_47915;
var G__47923 = count__47126_47916;
var G__47924 = (i__47127_47917 + (1));
seq__47124_47914 = G__47921;
chunk__47125_47915 = G__47922;
count__47126_47916 = G__47923;
i__47127_47917 = G__47924;
continue;
} else {
var temp__5753__auto___47925 = cljs.core.seq(seq__47124_47914);
if(temp__5753__auto___47925){
var seq__47124_47926__$1 = temp__5753__auto___47925;
if(cljs.core.chunked_seq_QMARK_(seq__47124_47926__$1)){
var c__4556__auto___47927 = cljs.core.chunk_first(seq__47124_47926__$1);
var G__47928 = cljs.core.chunk_rest(seq__47124_47926__$1);
var G__47929 = c__4556__auto___47927;
var G__47930 = cljs.core.count(c__4556__auto___47927);
var G__47931 = (0);
seq__47124_47914 = G__47928;
chunk__47125_47915 = G__47929;
count__47126_47916 = G__47930;
i__47127_47917 = G__47931;
continue;
} else {
var vec__47146_47932 = cljs.core.first(seq__47124_47926__$1);
var k_47933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146_47932,(0),null);
var v_47934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47146_47932,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47933);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47933),v_47934);


var G__47936 = cljs.core.next(seq__47124_47926__$1);
var G__47937 = null;
var G__47938 = (0);
var G__47939 = (0);
seq__47124_47914 = G__47936;
chunk__47125_47915 = G__47937;
count__47126_47916 = G__47938;
i__47127_47917 = G__47939;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47163 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(1),null);
var seq__47167_47941 = cljs.core.seq(node_children);
var chunk__47169_47942 = null;
var count__47170_47943 = (0);
var i__47171_47944 = (0);
while(true){
if((i__47171_47944 < count__47170_47943)){
var child_struct_47945 = chunk__47169_47942.cljs$core$IIndexed$_nth$arity$2(null,i__47171_47944);
if((!((child_struct_47945 == null)))){
if(typeof child_struct_47945 === 'string'){
var text_47946 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47946),child_struct_47945].join(''));
} else {
var children_47947 = shadow.dom.svg_node(child_struct_47945);
if(cljs.core.seq_QMARK_(children_47947)){
var seq__47199_47949 = cljs.core.seq(children_47947);
var chunk__47201_47950 = null;
var count__47202_47951 = (0);
var i__47203_47952 = (0);
while(true){
if((i__47203_47952 < count__47202_47951)){
var child_47953 = chunk__47201_47950.cljs$core$IIndexed$_nth$arity$2(null,i__47203_47952);
if(cljs.core.truth_(child_47953)){
node.appendChild(child_47953);


var G__47954 = seq__47199_47949;
var G__47955 = chunk__47201_47950;
var G__47956 = count__47202_47951;
var G__47957 = (i__47203_47952 + (1));
seq__47199_47949 = G__47954;
chunk__47201_47950 = G__47955;
count__47202_47951 = G__47956;
i__47203_47952 = G__47957;
continue;
} else {
var G__47962 = seq__47199_47949;
var G__47963 = chunk__47201_47950;
var G__47964 = count__47202_47951;
var G__47965 = (i__47203_47952 + (1));
seq__47199_47949 = G__47962;
chunk__47201_47950 = G__47963;
count__47202_47951 = G__47964;
i__47203_47952 = G__47965;
continue;
}
} else {
var temp__5753__auto___47966 = cljs.core.seq(seq__47199_47949);
if(temp__5753__auto___47966){
var seq__47199_47968__$1 = temp__5753__auto___47966;
if(cljs.core.chunked_seq_QMARK_(seq__47199_47968__$1)){
var c__4556__auto___47969 = cljs.core.chunk_first(seq__47199_47968__$1);
var G__47970 = cljs.core.chunk_rest(seq__47199_47968__$1);
var G__47971 = c__4556__auto___47969;
var G__47972 = cljs.core.count(c__4556__auto___47969);
var G__47973 = (0);
seq__47199_47949 = G__47970;
chunk__47201_47950 = G__47971;
count__47202_47951 = G__47972;
i__47203_47952 = G__47973;
continue;
} else {
var child_47974 = cljs.core.first(seq__47199_47968__$1);
if(cljs.core.truth_(child_47974)){
node.appendChild(child_47974);


var G__47975 = cljs.core.next(seq__47199_47968__$1);
var G__47976 = null;
var G__47977 = (0);
var G__47978 = (0);
seq__47199_47949 = G__47975;
chunk__47201_47950 = G__47976;
count__47202_47951 = G__47977;
i__47203_47952 = G__47978;
continue;
} else {
var G__47979 = cljs.core.next(seq__47199_47968__$1);
var G__47980 = null;
var G__47981 = (0);
var G__47982 = (0);
seq__47199_47949 = G__47979;
chunk__47201_47950 = G__47980;
count__47202_47951 = G__47981;
i__47203_47952 = G__47982;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47947);
}
}


var G__47983 = seq__47167_47941;
var G__47984 = chunk__47169_47942;
var G__47985 = count__47170_47943;
var G__47986 = (i__47171_47944 + (1));
seq__47167_47941 = G__47983;
chunk__47169_47942 = G__47984;
count__47170_47943 = G__47985;
i__47171_47944 = G__47986;
continue;
} else {
var G__47988 = seq__47167_47941;
var G__47989 = chunk__47169_47942;
var G__47990 = count__47170_47943;
var G__47991 = (i__47171_47944 + (1));
seq__47167_47941 = G__47988;
chunk__47169_47942 = G__47989;
count__47170_47943 = G__47990;
i__47171_47944 = G__47991;
continue;
}
} else {
var temp__5753__auto___47992 = cljs.core.seq(seq__47167_47941);
if(temp__5753__auto___47992){
var seq__47167_47993__$1 = temp__5753__auto___47992;
if(cljs.core.chunked_seq_QMARK_(seq__47167_47993__$1)){
var c__4556__auto___47994 = cljs.core.chunk_first(seq__47167_47993__$1);
var G__48030 = cljs.core.chunk_rest(seq__47167_47993__$1);
var G__48031 = c__4556__auto___47994;
var G__48032 = cljs.core.count(c__4556__auto___47994);
var G__48033 = (0);
seq__47167_47941 = G__48030;
chunk__47169_47942 = G__48031;
count__47170_47943 = G__48032;
i__47171_47944 = G__48033;
continue;
} else {
var child_struct_48034 = cljs.core.first(seq__47167_47993__$1);
if((!((child_struct_48034 == null)))){
if(typeof child_struct_48034 === 'string'){
var text_48035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48035),child_struct_48034].join(''));
} else {
var children_48037 = shadow.dom.svg_node(child_struct_48034);
if(cljs.core.seq_QMARK_(children_48037)){
var seq__47206_48038 = cljs.core.seq(children_48037);
var chunk__47208_48039 = null;
var count__47209_48040 = (0);
var i__47210_48041 = (0);
while(true){
if((i__47210_48041 < count__47209_48040)){
var child_48043 = chunk__47208_48039.cljs$core$IIndexed$_nth$arity$2(null,i__47210_48041);
if(cljs.core.truth_(child_48043)){
node.appendChild(child_48043);


var G__48044 = seq__47206_48038;
var G__48045 = chunk__47208_48039;
var G__48046 = count__47209_48040;
var G__48047 = (i__47210_48041 + (1));
seq__47206_48038 = G__48044;
chunk__47208_48039 = G__48045;
count__47209_48040 = G__48046;
i__47210_48041 = G__48047;
continue;
} else {
var G__48048 = seq__47206_48038;
var G__48049 = chunk__47208_48039;
var G__48050 = count__47209_48040;
var G__48051 = (i__47210_48041 + (1));
seq__47206_48038 = G__48048;
chunk__47208_48039 = G__48049;
count__47209_48040 = G__48050;
i__47210_48041 = G__48051;
continue;
}
} else {
var temp__5753__auto___48052__$1 = cljs.core.seq(seq__47206_48038);
if(temp__5753__auto___48052__$1){
var seq__47206_48053__$1 = temp__5753__auto___48052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47206_48053__$1)){
var c__4556__auto___48054 = cljs.core.chunk_first(seq__47206_48053__$1);
var G__48055 = cljs.core.chunk_rest(seq__47206_48053__$1);
var G__48056 = c__4556__auto___48054;
var G__48057 = cljs.core.count(c__4556__auto___48054);
var G__48058 = (0);
seq__47206_48038 = G__48055;
chunk__47208_48039 = G__48056;
count__47209_48040 = G__48057;
i__47210_48041 = G__48058;
continue;
} else {
var child_48059 = cljs.core.first(seq__47206_48053__$1);
if(cljs.core.truth_(child_48059)){
node.appendChild(child_48059);


var G__48060 = cljs.core.next(seq__47206_48053__$1);
var G__48061 = null;
var G__48062 = (0);
var G__48063 = (0);
seq__47206_48038 = G__48060;
chunk__47208_48039 = G__48061;
count__47209_48040 = G__48062;
i__47210_48041 = G__48063;
continue;
} else {
var G__48064 = cljs.core.next(seq__47206_48053__$1);
var G__48065 = null;
var G__48066 = (0);
var G__48067 = (0);
seq__47206_48038 = G__48064;
chunk__47208_48039 = G__48065;
count__47209_48040 = G__48066;
i__47210_48041 = G__48067;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48037);
}
}


var G__48068 = cljs.core.next(seq__47167_47993__$1);
var G__48069 = null;
var G__48070 = (0);
var G__48071 = (0);
seq__47167_47941 = G__48068;
chunk__47169_47942 = G__48069;
count__47170_47943 = G__48070;
i__47171_47944 = G__48071;
continue;
} else {
var G__48072 = cljs.core.next(seq__47167_47993__$1);
var G__48073 = null;
var G__48074 = (0);
var G__48075 = (0);
seq__47167_47941 = G__48072;
chunk__47169_47942 = G__48073;
count__47170_47943 = G__48074;
i__47171_47944 = G__48075;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48082 = arguments.length;
var i__4737__auto___48083 = (0);
while(true){
if((i__4737__auto___48083 < len__4736__auto___48082)){
args__4742__auto__.push((arguments[i__4737__auto___48083]));

var G__48085 = (i__4737__auto___48083 + (1));
i__4737__auto___48083 = G__48085;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47215){
var G__47216 = cljs.core.first(seq47215);
var seq47215__$1 = cljs.core.next(seq47215);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47216,seq47215__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47221 = arguments.length;
switch (G__47221) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__43718__auto___48099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43719__auto__ = (function (){var switch__43596__auto__ = (function (state_47228){
var state_val_47229 = (state_47228[(1)]);
if((state_val_47229 === (1))){
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47228__$1,(2),once_or_cleanup);
} else {
if((state_val_47229 === (2))){
var inst_47225 = (state_47228[(2)]);
var inst_47226 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47228__$1 = (function (){var statearr_47232 = state_47228;
(statearr_47232[(7)] = inst_47225);

return statearr_47232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47228__$1,inst_47226);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43597__auto__ = null;
var shadow$dom$state_machine__43597__auto____0 = (function (){
var statearr_47233 = [null,null,null,null,null,null,null,null];
(statearr_47233[(0)] = shadow$dom$state_machine__43597__auto__);

(statearr_47233[(1)] = (1));

return statearr_47233;
});
var shadow$dom$state_machine__43597__auto____1 = (function (state_47228){
while(true){
var ret_value__43598__auto__ = (function (){try{while(true){
var result__43599__auto__ = switch__43596__auto__(state_47228);
if(cljs.core.keyword_identical_QMARK_(result__43599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43599__auto__;
}
break;
}
}catch (e47235){var ex__43600__auto__ = e47235;
var statearr_47236_48105 = state_47228;
(statearr_47236_48105[(2)] = ex__43600__auto__);


if(cljs.core.seq((state_47228[(4)]))){
var statearr_47238_48106 = state_47228;
(statearr_47238_48106[(1)] = cljs.core.first((state_47228[(4)])));

} else {
throw ex__43600__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_47228;
state_47228 = G__48108;
continue;
} else {
return ret_value__43598__auto__;
}
break;
}
});
shadow$dom$state_machine__43597__auto__ = function(state_47228){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43597__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43597__auto____1.call(this,state_47228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43597__auto____0;
shadow$dom$state_machine__43597__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43597__auto____1;
return shadow$dom$state_machine__43597__auto__;
})()
})();
var state__43720__auto__ = (function (){var statearr_47240 = f__43719__auto__();
(statearr_47240[(6)] = c__43718__auto___48099);

return statearr_47240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43720__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
