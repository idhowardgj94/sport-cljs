goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50100){
var map__50101 = p__50100;
var map__50101__$1 = (((((!((map__50101 == null))))?(((((map__50101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50101):map__50101);
var m = map__50101__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50106_50320 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50107_50321 = null;
var count__50108_50322 = (0);
var i__50109_50323 = (0);
while(true){
if((i__50109_50323 < count__50108_50322)){
var f_50324 = chunk__50107_50321.cljs$core$IIndexed$_nth$arity$2(null,i__50109_50323);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50324], 0));


var G__50325 = seq__50106_50320;
var G__50326 = chunk__50107_50321;
var G__50327 = count__50108_50322;
var G__50328 = (i__50109_50323 + (1));
seq__50106_50320 = G__50325;
chunk__50107_50321 = G__50326;
count__50108_50322 = G__50327;
i__50109_50323 = G__50328;
continue;
} else {
var temp__5753__auto___50329 = cljs.core.seq(seq__50106_50320);
if(temp__5753__auto___50329){
var seq__50106_50330__$1 = temp__5753__auto___50329;
if(cljs.core.chunked_seq_QMARK_(seq__50106_50330__$1)){
var c__4556__auto___50331 = cljs.core.chunk_first(seq__50106_50330__$1);
var G__50332 = cljs.core.chunk_rest(seq__50106_50330__$1);
var G__50333 = c__4556__auto___50331;
var G__50334 = cljs.core.count(c__4556__auto___50331);
var G__50335 = (0);
seq__50106_50320 = G__50332;
chunk__50107_50321 = G__50333;
count__50108_50322 = G__50334;
i__50109_50323 = G__50335;
continue;
} else {
var f_50336 = cljs.core.first(seq__50106_50330__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50336], 0));


var G__50338 = cljs.core.next(seq__50106_50330__$1);
var G__50339 = null;
var G__50340 = (0);
var G__50341 = (0);
seq__50106_50320 = G__50338;
chunk__50107_50321 = G__50339;
count__50108_50322 = G__50340;
i__50109_50323 = G__50341;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50342 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50342], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50342)))?cljs.core.second(arglists_50342):arglists_50342)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50116_50348 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50117_50349 = null;
var count__50118_50350 = (0);
var i__50119_50351 = (0);
while(true){
if((i__50119_50351 < count__50118_50350)){
var vec__50132_50352 = chunk__50117_50349.cljs$core$IIndexed$_nth$arity$2(null,i__50119_50351);
var name_50353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50132_50352,(0),null);
var map__50135_50354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50132_50352,(1),null);
var map__50135_50355__$1 = (((((!((map__50135_50354 == null))))?(((((map__50135_50354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50135_50354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50135_50354):map__50135_50354);
var doc_50356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50135_50355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50135_50355__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50353], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50357], 0));

if(cljs.core.truth_(doc_50356)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50356], 0));
} else {
}


var G__50359 = seq__50116_50348;
var G__50360 = chunk__50117_50349;
var G__50361 = count__50118_50350;
var G__50362 = (i__50119_50351 + (1));
seq__50116_50348 = G__50359;
chunk__50117_50349 = G__50360;
count__50118_50350 = G__50361;
i__50119_50351 = G__50362;
continue;
} else {
var temp__5753__auto___50363 = cljs.core.seq(seq__50116_50348);
if(temp__5753__auto___50363){
var seq__50116_50364__$1 = temp__5753__auto___50363;
if(cljs.core.chunked_seq_QMARK_(seq__50116_50364__$1)){
var c__4556__auto___50365 = cljs.core.chunk_first(seq__50116_50364__$1);
var G__50366 = cljs.core.chunk_rest(seq__50116_50364__$1);
var G__50367 = c__4556__auto___50365;
var G__50368 = cljs.core.count(c__4556__auto___50365);
var G__50369 = (0);
seq__50116_50348 = G__50366;
chunk__50117_50349 = G__50367;
count__50118_50350 = G__50368;
i__50119_50351 = G__50369;
continue;
} else {
var vec__50137_50370 = cljs.core.first(seq__50116_50364__$1);
var name_50371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50137_50370,(0),null);
var map__50140_50372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50137_50370,(1),null);
var map__50140_50373__$1 = (((((!((map__50140_50372 == null))))?(((((map__50140_50372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50140_50372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50140_50372):map__50140_50372);
var doc_50374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50140_50373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50140_50373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50375], 0));

if(cljs.core.truth_(doc_50374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50374], 0));
} else {
}


var G__50380 = cljs.core.next(seq__50116_50364__$1);
var G__50381 = null;
var G__50382 = (0);
var G__50383 = (0);
seq__50116_50348 = G__50380;
chunk__50117_50349 = G__50381;
count__50118_50350 = G__50382;
i__50119_50351 = G__50383;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50142 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50143 = null;
var count__50144 = (0);
var i__50145 = (0);
while(true){
if((i__50145 < count__50144)){
var role = chunk__50143.cljs$core$IIndexed$_nth$arity$2(null,i__50145);
var temp__5753__auto___50384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50384__$1)){
var spec_50385 = temp__5753__auto___50384__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50385)], 0));
} else {
}


var G__50386 = seq__50142;
var G__50387 = chunk__50143;
var G__50388 = count__50144;
var G__50389 = (i__50145 + (1));
seq__50142 = G__50386;
chunk__50143 = G__50387;
count__50144 = G__50388;
i__50145 = G__50389;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50142);
if(temp__5753__auto____$1){
var seq__50142__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50142__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50142__$1);
var G__50390 = cljs.core.chunk_rest(seq__50142__$1);
var G__50391 = c__4556__auto__;
var G__50392 = cljs.core.count(c__4556__auto__);
var G__50393 = (0);
seq__50142 = G__50390;
chunk__50143 = G__50391;
count__50144 = G__50392;
i__50145 = G__50393;
continue;
} else {
var role = cljs.core.first(seq__50142__$1);
var temp__5753__auto___50394__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50394__$2)){
var spec_50395 = temp__5753__auto___50394__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50395)], 0));
} else {
}


var G__50396 = cljs.core.next(seq__50142__$1);
var G__50397 = null;
var G__50398 = (0);
var G__50399 = (0);
seq__50142 = G__50396;
chunk__50143 = G__50397;
count__50144 = G__50398;
i__50145 = G__50399;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50408 = cljs.core.ex_cause(t);
via = G__50407;
t = G__50408;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50153 = datafied_throwable;
var map__50153__$1 = (((((!((map__50153 == null))))?(((((map__50153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50153):map__50153);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50153__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50154 = cljs.core.last(via);
var map__50154__$1 = (((((!((map__50154 == null))))?(((((map__50154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50154):map__50154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50155 = data;
var map__50155__$1 = (((((!((map__50155 == null))))?(((((map__50155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50155):map__50155);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50156 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50156__$1 = (((((!((map__50156 == null))))?(((((map__50156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50156):map__50156);
var top_data = map__50156__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50185 = phase;
var G__50185__$1 = (((G__50185 instanceof cljs.core.Keyword))?G__50185.fqn:null);
switch (G__50185__$1) {
case "read-source":
var map__50186 = data;
var map__50186__$1 = (((((!((map__50186 == null))))?(((((map__50186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50186):map__50186);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50186__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50186__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50206 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50206__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50206,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50206);
var G__50206__$2 = (cljs.core.truth_((function (){var fexpr__50212 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50212.cljs$core$IFn$_invoke$arity$1 ? fexpr__50212.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50212.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50206__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50206__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50206__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50228 = top_data;
var G__50228__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50228,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50228);
var G__50228__$2 = (cljs.core.truth_((function (){var fexpr__50229 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50229.cljs$core$IFn$_invoke$arity$1 ? fexpr__50229.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50229.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50228__$1);
var G__50228__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50228__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50228__$2);
var G__50228__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50228__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50228__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50228__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50228__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50237 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50237,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50237,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50237,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50237,(3),null);
var G__50240 = top_data;
var G__50240__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50240,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50240);
var G__50240__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50240__$1);
var G__50240__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50240__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50240__$2);
var G__50240__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50240__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50240__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50240__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50240__$4;
}

break;
case "execution":
var vec__50255 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50152_SHARP_){
var or__4126__auto__ = (p1__50152_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50263.cljs$core$IFn$_invoke$arity$1 ? fexpr__50263.cljs$core$IFn$_invoke$arity$1(p1__50152_SHARP_) : fexpr__50263.call(null,p1__50152_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50268__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50268,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50268);
var G__50268__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50268__$1);
var G__50268__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50268__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50268__$2);
var G__50268__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50268__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50268__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50185__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50276){
var map__50277 = p__50276;
var map__50277__$1 = (((((!((map__50277 == null))))?(((((map__50277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50277):map__50277);
var triage_data = map__50277__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50280 = phase;
var G__50280__$1 = (((G__50280 instanceof cljs.core.Keyword))?G__50280.fqn:null);
switch (G__50280__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50281 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50283 = loc;
var G__50284 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50285_50417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50286_50418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50287_50419 = true;
var _STAR_print_fn_STAR__temp_val__50288_50420 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50287_50419);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50288_50420);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50273_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50273_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50286_50418);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50285_50417);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50281,G__50282,G__50283,G__50284) : format.call(null,G__50281,G__50282,G__50283,G__50284));

break;
case "macroexpansion":
var G__50289 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50290 = cause_type;
var G__50291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50292 = loc;
var G__50293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50289,G__50290,G__50291,G__50292,G__50293) : format.call(null,G__50289,G__50290,G__50291,G__50292,G__50293));

break;
case "compile-syntax-check":
var G__50294 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50295 = cause_type;
var G__50296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50297 = loc;
var G__50298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50294,G__50295,G__50296,G__50297,G__50298) : format.call(null,G__50294,G__50295,G__50296,G__50297,G__50298));

break;
case "compilation":
var G__50299 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50300 = cause_type;
var G__50301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50302 = loc;
var G__50303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50299,G__50300,G__50301,G__50302,G__50303) : format.call(null,G__50299,G__50300,G__50301,G__50302,G__50303));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50305 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50306 = symbol;
var G__50307 = loc;
var G__50308 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50309_50428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50310_50429 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50311_50430 = true;
var _STAR_print_fn_STAR__temp_val__50312_50431 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50311_50430);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50312_50431);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50274_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50274_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50310_50429);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50309_50428);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50305,G__50306,G__50307,G__50308) : format.call(null,G__50305,G__50306,G__50307,G__50308));
} else {
var G__50313 = "Execution error%s at %s(%s).\n%s\n";
var G__50314 = cause_type;
var G__50315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50316 = loc;
var G__50317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50313,G__50314,G__50315,G__50316,G__50317) : format.call(null,G__50313,G__50314,G__50315,G__50316,G__50317));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50280__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
