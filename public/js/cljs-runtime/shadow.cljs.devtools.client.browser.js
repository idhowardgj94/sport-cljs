goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51438 = arguments.length;
var i__4737__auto___51439 = (0);
while(true){
if((i__4737__auto___51439 < len__4736__auto___51438)){
args__4742__auto__.push((arguments[i__4737__auto___51439]));

var G__51440 = (i__4737__auto___51439 + (1));
i__4737__auto___51439 = G__51440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51161){
var G__51162 = cljs.core.first(seq51161);
var seq51161__$1 = cljs.core.next(seq51161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51162,seq51161__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51167 = cljs.core.seq(sources);
var chunk__51168 = null;
var count__51169 = (0);
var i__51170 = (0);
while(true){
if((i__51170 < count__51169)){
var map__51182 = chunk__51168.cljs$core$IIndexed$_nth$arity$2(null,i__51170);
var map__51182__$1 = (((((!((map__51182 == null))))?(((((map__51182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51182):map__51182);
var src = map__51182__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51185){var e_51442 = e51185;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51442);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51442.message)].join('')));
}

var G__51443 = seq__51167;
var G__51444 = chunk__51168;
var G__51445 = count__51169;
var G__51446 = (i__51170 + (1));
seq__51167 = G__51443;
chunk__51168 = G__51444;
count__51169 = G__51445;
i__51170 = G__51446;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51167);
if(temp__5753__auto__){
var seq__51167__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51167__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51167__$1);
var G__51448 = cljs.core.chunk_rest(seq__51167__$1);
var G__51449 = c__4556__auto__;
var G__51450 = cljs.core.count(c__4556__auto__);
var G__51451 = (0);
seq__51167 = G__51448;
chunk__51168 = G__51449;
count__51169 = G__51450;
i__51170 = G__51451;
continue;
} else {
var map__51186 = cljs.core.first(seq__51167__$1);
var map__51186__$1 = (((((!((map__51186 == null))))?(((((map__51186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51186):map__51186);
var src = map__51186__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51189){var e_51452 = e51189;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51452);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51452.message)].join('')));
}

var G__51456 = cljs.core.next(seq__51167__$1);
var G__51457 = null;
var G__51458 = (0);
var G__51459 = (0);
seq__51167 = G__51456;
chunk__51168 = G__51457;
count__51169 = G__51458;
i__51170 = G__51459;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51192 = cljs.core.seq(js_requires);
var chunk__51193 = null;
var count__51194 = (0);
var i__51195 = (0);
while(true){
if((i__51195 < count__51194)){
var js_ns = chunk__51193.cljs$core$IIndexed$_nth$arity$2(null,i__51195);
var require_str_51460 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51460);


var G__51461 = seq__51192;
var G__51462 = chunk__51193;
var G__51463 = count__51194;
var G__51464 = (i__51195 + (1));
seq__51192 = G__51461;
chunk__51193 = G__51462;
count__51194 = G__51463;
i__51195 = G__51464;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51192);
if(temp__5753__auto__){
var seq__51192__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51192__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51192__$1);
var G__51465 = cljs.core.chunk_rest(seq__51192__$1);
var G__51466 = c__4556__auto__;
var G__51467 = cljs.core.count(c__4556__auto__);
var G__51468 = (0);
seq__51192 = G__51465;
chunk__51193 = G__51466;
count__51194 = G__51467;
i__51195 = G__51468;
continue;
} else {
var js_ns = cljs.core.first(seq__51192__$1);
var require_str_51469 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51469);


var G__51470 = cljs.core.next(seq__51192__$1);
var G__51471 = null;
var G__51472 = (0);
var G__51473 = (0);
seq__51192 = G__51470;
chunk__51193 = G__51471;
count__51194 = G__51472;
i__51195 = G__51473;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51197){
var map__51198 = p__51197;
var map__51198__$1 = (((((!((map__51198 == null))))?(((((map__51198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51198):map__51198);
var msg = map__51198__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51200(s__51201){
return (new cljs.core.LazySeq(null,(function (){
var s__51201__$1 = s__51201;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51201__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__51206 = cljs.core.first(xs__6308__auto__);
var map__51206__$1 = (((((!((map__51206 == null))))?(((((map__51206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51206):map__51206);
var src = map__51206__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51206__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51206__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51201__$1,map__51206,map__51206__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51198,map__51198__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51200_$_iter__51202(s__51203){
return (new cljs.core.LazySeq(null,((function (s__51201__$1,map__51206,map__51206__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51198,map__51198__$1,msg,info,reload_info){
return (function (){
var s__51203__$1 = s__51203;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51203__$1);
if(temp__5753__auto____$1){
var s__51203__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51203__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51203__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51205 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51204 = (0);
while(true){
if((i__51204 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51204);
cljs.core.chunk_append(b__51205,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51474 = (i__51204 + (1));
i__51204 = G__51474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51205),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51200_$_iter__51202(cljs.core.chunk_rest(s__51203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51205),null);
}
} else {
var warning = cljs.core.first(s__51203__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51200_$_iter__51202(cljs.core.rest(s__51203__$2)));
}
} else {
return null;
}
break;
}
});})(s__51201__$1,map__51206,map__51206__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51198,map__51198__$1,msg,info,reload_info))
,null,null));
});})(s__51201__$1,map__51206,map__51206__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51198,map__51198__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51200(cljs.core.rest(s__51201__$1)));
} else {
var G__51475 = cljs.core.rest(s__51201__$1);
s__51201__$1 = G__51475;
continue;
}
} else {
var G__51476 = cljs.core.rest(s__51201__$1);
s__51201__$1 = G__51476;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51208_51477 = cljs.core.seq(warnings);
var chunk__51209_51478 = null;
var count__51210_51479 = (0);
var i__51211_51480 = (0);
while(true){
if((i__51211_51480 < count__51210_51479)){
var map__51221_51481 = chunk__51209_51478.cljs$core$IIndexed$_nth$arity$2(null,i__51211_51480);
var map__51221_51482__$1 = (((((!((map__51221_51481 == null))))?(((((map__51221_51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51221_51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51221_51481):map__51221_51481);
var w_51483 = map__51221_51482__$1;
var msg_51484__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221_51482__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221_51482__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221_51482__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221_51482__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51487)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51485),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51486),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51484__$1)].join(''));


var G__51488 = seq__51208_51477;
var G__51489 = chunk__51209_51478;
var G__51490 = count__51210_51479;
var G__51491 = (i__51211_51480 + (1));
seq__51208_51477 = G__51488;
chunk__51209_51478 = G__51489;
count__51210_51479 = G__51490;
i__51211_51480 = G__51491;
continue;
} else {
var temp__5753__auto___51493 = cljs.core.seq(seq__51208_51477);
if(temp__5753__auto___51493){
var seq__51208_51495__$1 = temp__5753__auto___51493;
if(cljs.core.chunked_seq_QMARK_(seq__51208_51495__$1)){
var c__4556__auto___51499 = cljs.core.chunk_first(seq__51208_51495__$1);
var G__51500 = cljs.core.chunk_rest(seq__51208_51495__$1);
var G__51501 = c__4556__auto___51499;
var G__51502 = cljs.core.count(c__4556__auto___51499);
var G__51503 = (0);
seq__51208_51477 = G__51500;
chunk__51209_51478 = G__51501;
count__51210_51479 = G__51502;
i__51211_51480 = G__51503;
continue;
} else {
var map__51225_51507 = cljs.core.first(seq__51208_51495__$1);
var map__51225_51508__$1 = (((((!((map__51225_51507 == null))))?(((((map__51225_51507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51225_51507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51225_51507):map__51225_51507);
var w_51509 = map__51225_51508__$1;
var msg_51510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51225_51508__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51225_51508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51225_51508__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51225_51508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51513)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51511),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51512),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51510__$1)].join(''));


var G__51522 = cljs.core.next(seq__51208_51495__$1);
var G__51523 = null;
var G__51524 = (0);
var G__51525 = (0);
seq__51208_51477 = G__51522;
chunk__51209_51478 = G__51523;
count__51210_51479 = G__51524;
i__51211_51480 = G__51525;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51196_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51196_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51228){
var map__51229 = p__51228;
var map__51229__$1 = (((((!((map__51229 == null))))?(((((map__51229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51229):map__51229);
var msg = map__51229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51231 = cljs.core.seq(updates);
var chunk__51233 = null;
var count__51234 = (0);
var i__51235 = (0);
while(true){
if((i__51235 < count__51234)){
var path = chunk__51233.cljs$core$IIndexed$_nth$arity$2(null,i__51235);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51266_51547 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51270_51548 = null;
var count__51271_51549 = (0);
var i__51272_51550 = (0);
while(true){
if((i__51272_51550 < count__51271_51549)){
var node_51551 = chunk__51270_51548.cljs$core$IIndexed$_nth$arity$2(null,i__51272_51550);
if(cljs.core.not(node_51551.shadow$old)){
var path_match_51556 = shadow.cljs.devtools.client.browser.match_paths(node_51551.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51556)){
var new_link_51557 = (function (){var G__51278 = node_51551.cloneNode(true);
G__51278.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51556),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51278;
})();
(node_51551.shadow$old = true);

(new_link_51557.onload = ((function (seq__51266_51547,chunk__51270_51548,count__51271_51549,i__51272_51550,seq__51231,chunk__51233,count__51234,i__51235,new_link_51557,path_match_51556,node_51551,path,map__51229,map__51229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51551);
});})(seq__51266_51547,chunk__51270_51548,count__51271_51549,i__51272_51550,seq__51231,chunk__51233,count__51234,i__51235,new_link_51557,path_match_51556,node_51551,path,map__51229,map__51229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51556], 0));

goog.dom.insertSiblingAfter(new_link_51557,node_51551);


var G__51566 = seq__51266_51547;
var G__51567 = chunk__51270_51548;
var G__51568 = count__51271_51549;
var G__51569 = (i__51272_51550 + (1));
seq__51266_51547 = G__51566;
chunk__51270_51548 = G__51567;
count__51271_51549 = G__51568;
i__51272_51550 = G__51569;
continue;
} else {
var G__51570 = seq__51266_51547;
var G__51571 = chunk__51270_51548;
var G__51572 = count__51271_51549;
var G__51573 = (i__51272_51550 + (1));
seq__51266_51547 = G__51570;
chunk__51270_51548 = G__51571;
count__51271_51549 = G__51572;
i__51272_51550 = G__51573;
continue;
}
} else {
var G__51575 = seq__51266_51547;
var G__51577 = chunk__51270_51548;
var G__51578 = count__51271_51549;
var G__51580 = (i__51272_51550 + (1));
seq__51266_51547 = G__51575;
chunk__51270_51548 = G__51577;
count__51271_51549 = G__51578;
i__51272_51550 = G__51580;
continue;
}
} else {
var temp__5753__auto___51583 = cljs.core.seq(seq__51266_51547);
if(temp__5753__auto___51583){
var seq__51266_51584__$1 = temp__5753__auto___51583;
if(cljs.core.chunked_seq_QMARK_(seq__51266_51584__$1)){
var c__4556__auto___51585 = cljs.core.chunk_first(seq__51266_51584__$1);
var G__51586 = cljs.core.chunk_rest(seq__51266_51584__$1);
var G__51587 = c__4556__auto___51585;
var G__51588 = cljs.core.count(c__4556__auto___51585);
var G__51589 = (0);
seq__51266_51547 = G__51586;
chunk__51270_51548 = G__51587;
count__51271_51549 = G__51588;
i__51272_51550 = G__51589;
continue;
} else {
var node_51590 = cljs.core.first(seq__51266_51584__$1);
if(cljs.core.not(node_51590.shadow$old)){
var path_match_51594 = shadow.cljs.devtools.client.browser.match_paths(node_51590.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51594)){
var new_link_51595 = (function (){var G__51279 = node_51590.cloneNode(true);
G__51279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51594),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51279;
})();
(node_51590.shadow$old = true);

(new_link_51595.onload = ((function (seq__51266_51547,chunk__51270_51548,count__51271_51549,i__51272_51550,seq__51231,chunk__51233,count__51234,i__51235,new_link_51595,path_match_51594,node_51590,seq__51266_51584__$1,temp__5753__auto___51583,path,map__51229,map__51229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51590);
});})(seq__51266_51547,chunk__51270_51548,count__51271_51549,i__51272_51550,seq__51231,chunk__51233,count__51234,i__51235,new_link_51595,path_match_51594,node_51590,seq__51266_51584__$1,temp__5753__auto___51583,path,map__51229,map__51229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51594], 0));

goog.dom.insertSiblingAfter(new_link_51595,node_51590);


var G__51598 = cljs.core.next(seq__51266_51584__$1);
var G__51599 = null;
var G__51600 = (0);
var G__51601 = (0);
seq__51266_51547 = G__51598;
chunk__51270_51548 = G__51599;
count__51271_51549 = G__51600;
i__51272_51550 = G__51601;
continue;
} else {
var G__51602 = cljs.core.next(seq__51266_51584__$1);
var G__51603 = null;
var G__51604 = (0);
var G__51605 = (0);
seq__51266_51547 = G__51602;
chunk__51270_51548 = G__51603;
count__51271_51549 = G__51604;
i__51272_51550 = G__51605;
continue;
}
} else {
var G__51606 = cljs.core.next(seq__51266_51584__$1);
var G__51607 = null;
var G__51608 = (0);
var G__51609 = (0);
seq__51266_51547 = G__51606;
chunk__51270_51548 = G__51607;
count__51271_51549 = G__51608;
i__51272_51550 = G__51609;
continue;
}
}
} else {
}
}
break;
}


var G__51610 = seq__51231;
var G__51611 = chunk__51233;
var G__51612 = count__51234;
var G__51613 = (i__51235 + (1));
seq__51231 = G__51610;
chunk__51233 = G__51611;
count__51234 = G__51612;
i__51235 = G__51613;
continue;
} else {
var G__51614 = seq__51231;
var G__51615 = chunk__51233;
var G__51616 = count__51234;
var G__51617 = (i__51235 + (1));
seq__51231 = G__51614;
chunk__51233 = G__51615;
count__51234 = G__51616;
i__51235 = G__51617;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51231);
if(temp__5753__auto__){
var seq__51231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51231__$1);
var G__51619 = cljs.core.chunk_rest(seq__51231__$1);
var G__51620 = c__4556__auto__;
var G__51621 = cljs.core.count(c__4556__auto__);
var G__51622 = (0);
seq__51231 = G__51619;
chunk__51233 = G__51620;
count__51234 = G__51621;
i__51235 = G__51622;
continue;
} else {
var path = cljs.core.first(seq__51231__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51280_51624 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51284_51625 = null;
var count__51285_51626 = (0);
var i__51286_51627 = (0);
while(true){
if((i__51286_51627 < count__51285_51626)){
var node_51630 = chunk__51284_51625.cljs$core$IIndexed$_nth$arity$2(null,i__51286_51627);
if(cljs.core.not(node_51630.shadow$old)){
var path_match_51632 = shadow.cljs.devtools.client.browser.match_paths(node_51630.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51632)){
var new_link_51633 = (function (){var G__51292 = node_51630.cloneNode(true);
G__51292.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51632),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51292;
})();
(node_51630.shadow$old = true);

(new_link_51633.onload = ((function (seq__51280_51624,chunk__51284_51625,count__51285_51626,i__51286_51627,seq__51231,chunk__51233,count__51234,i__51235,new_link_51633,path_match_51632,node_51630,path,seq__51231__$1,temp__5753__auto__,map__51229,map__51229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51630);
});})(seq__51280_51624,chunk__51284_51625,count__51285_51626,i__51286_51627,seq__51231,chunk__51233,count__51234,i__51235,new_link_51633,path_match_51632,node_51630,path,seq__51231__$1,temp__5753__auto__,map__51229,map__51229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51632], 0));

goog.dom.insertSiblingAfter(new_link_51633,node_51630);


var G__51636 = seq__51280_51624;
var G__51637 = chunk__51284_51625;
var G__51638 = count__51285_51626;
var G__51639 = (i__51286_51627 + (1));
seq__51280_51624 = G__51636;
chunk__51284_51625 = G__51637;
count__51285_51626 = G__51638;
i__51286_51627 = G__51639;
continue;
} else {
var G__51640 = seq__51280_51624;
var G__51641 = chunk__51284_51625;
var G__51642 = count__51285_51626;
var G__51643 = (i__51286_51627 + (1));
seq__51280_51624 = G__51640;
chunk__51284_51625 = G__51641;
count__51285_51626 = G__51642;
i__51286_51627 = G__51643;
continue;
}
} else {
var G__51644 = seq__51280_51624;
var G__51645 = chunk__51284_51625;
var G__51646 = count__51285_51626;
var G__51647 = (i__51286_51627 + (1));
seq__51280_51624 = G__51644;
chunk__51284_51625 = G__51645;
count__51285_51626 = G__51646;
i__51286_51627 = G__51647;
continue;
}
} else {
var temp__5753__auto___51648__$1 = cljs.core.seq(seq__51280_51624);
if(temp__5753__auto___51648__$1){
var seq__51280_51649__$1 = temp__5753__auto___51648__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51280_51649__$1)){
var c__4556__auto___51650 = cljs.core.chunk_first(seq__51280_51649__$1);
var G__51651 = cljs.core.chunk_rest(seq__51280_51649__$1);
var G__51652 = c__4556__auto___51650;
var G__51653 = cljs.core.count(c__4556__auto___51650);
var G__51654 = (0);
seq__51280_51624 = G__51651;
chunk__51284_51625 = G__51652;
count__51285_51626 = G__51653;
i__51286_51627 = G__51654;
continue;
} else {
var node_51655 = cljs.core.first(seq__51280_51649__$1);
if(cljs.core.not(node_51655.shadow$old)){
var path_match_51656 = shadow.cljs.devtools.client.browser.match_paths(node_51655.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51656)){
var new_link_51658 = (function (){var G__51293 = node_51655.cloneNode(true);
G__51293.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51656),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51293;
})();
(node_51655.shadow$old = true);

(new_link_51658.onload = ((function (seq__51280_51624,chunk__51284_51625,count__51285_51626,i__51286_51627,seq__51231,chunk__51233,count__51234,i__51235,new_link_51658,path_match_51656,node_51655,seq__51280_51649__$1,temp__5753__auto___51648__$1,path,seq__51231__$1,temp__5753__auto__,map__51229,map__51229__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51655);
});})(seq__51280_51624,chunk__51284_51625,count__51285_51626,i__51286_51627,seq__51231,chunk__51233,count__51234,i__51235,new_link_51658,path_match_51656,node_51655,seq__51280_51649__$1,temp__5753__auto___51648__$1,path,seq__51231__$1,temp__5753__auto__,map__51229,map__51229__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51656], 0));

goog.dom.insertSiblingAfter(new_link_51658,node_51655);


var G__51663 = cljs.core.next(seq__51280_51649__$1);
var G__51664 = null;
var G__51665 = (0);
var G__51666 = (0);
seq__51280_51624 = G__51663;
chunk__51284_51625 = G__51664;
count__51285_51626 = G__51665;
i__51286_51627 = G__51666;
continue;
} else {
var G__51667 = cljs.core.next(seq__51280_51649__$1);
var G__51668 = null;
var G__51669 = (0);
var G__51670 = (0);
seq__51280_51624 = G__51667;
chunk__51284_51625 = G__51668;
count__51285_51626 = G__51669;
i__51286_51627 = G__51670;
continue;
}
} else {
var G__51671 = cljs.core.next(seq__51280_51649__$1);
var G__51672 = null;
var G__51673 = (0);
var G__51674 = (0);
seq__51280_51624 = G__51671;
chunk__51284_51625 = G__51672;
count__51285_51626 = G__51673;
i__51286_51627 = G__51674;
continue;
}
}
} else {
}
}
break;
}


var G__51675 = cljs.core.next(seq__51231__$1);
var G__51676 = null;
var G__51677 = (0);
var G__51678 = (0);
seq__51231 = G__51675;
chunk__51233 = G__51676;
count__51234 = G__51677;
i__51235 = G__51678;
continue;
} else {
var G__51679 = cljs.core.next(seq__51231__$1);
var G__51680 = null;
var G__51681 = (0);
var G__51682 = (0);
seq__51231 = G__51679;
chunk__51233 = G__51680;
count__51234 = G__51681;
i__51235 = G__51682;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51294){
var map__51295 = p__51294;
var map__51295__$1 = (((((!((map__51295 == null))))?(((((map__51295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51295):map__51295);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51295__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51300){
var map__51301 = p__51300;
var map__51301__$1 = (((((!((map__51301 == null))))?(((((map__51301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51301):map__51301);
var _ = map__51301__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51301__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51303,done,error){
var map__51304 = p__51303;
var map__51304__$1 = (((((!((map__51304 == null))))?(((((map__51304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51304):map__51304);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51316,done,error){
var map__51318 = p__51316;
var map__51318__$1 = (((((!((map__51318 == null))))?(((((map__51318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51318):map__51318);
var msg = map__51318__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51334){
var map__51335 = p__51334;
var map__51335__$1 = (((((!((map__51335 == null))))?(((((map__51335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51335):map__51335);
var src = map__51335__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51335__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51347 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51347) : done.call(null,G__51347));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51348){
var map__51349 = p__51348;
var map__51349__$1 = (((((!((map__51349 == null))))?(((((map__51349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51349):map__51349);
var msg__$1 = map__51349__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51349__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51354){var ex = e51354;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51418){
var map__51419 = p__51418;
var map__51419__$1 = (((((!((map__51419 == null))))?(((((map__51419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51419):map__51419);
var env = map__51419__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51419__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51424){
var map__51425 = p__51424;
var map__51425__$1 = (((((!((map__51425 == null))))?(((((map__51425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51425):map__51425);
var msg = map__51425__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51425__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51428){
var map__51429 = p__51428;
var map__51429__$1 = (((((!((map__51429 == null))))?(((((map__51429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51429):map__51429);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51434){
var map__51435 = p__51434;
var map__51435__$1 = (((((!((map__51435 == null))))?(((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51435):map__51435);
var svc = map__51435__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
