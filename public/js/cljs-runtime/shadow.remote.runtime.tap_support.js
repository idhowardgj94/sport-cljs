goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50575,p__50576){
var map__50577 = p__50575;
var map__50577__$1 = (((((!((map__50577 == null))))?(((((map__50577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50577):map__50577);
var svc = map__50577__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50578 = p__50576;
var map__50578__$1 = (((((!((map__50578 == null))))?(((((map__50578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50578):map__50578);
var msg = map__50578__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50578__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50578__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50578__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50578__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50621,p__50622){
var map__50623 = p__50621;
var map__50623__$1 = (((((!((map__50623 == null))))?(((((map__50623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50623):map__50623);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50624 = p__50622;
var map__50624__$1 = (((((!((map__50624 == null))))?(((((map__50624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50624):map__50624);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50624__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50627,p__50628){
var map__50629 = p__50627;
var map__50629__$1 = (((((!((map__50629 == null))))?(((((map__50629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50629):map__50629);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50630 = p__50628;
var map__50630__$1 = (((((!((map__50630 == null))))?(((((map__50630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50630):map__50630);
var msg = map__50630__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50630__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50633,tid){
var map__50634 = p__50633;
var map__50634__$1 = (((((!((map__50634 == null))))?(((((map__50634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50634):map__50634);
var svc = map__50634__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50640 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50641 = null;
var count__50642 = (0);
var i__50643 = (0);
while(true){
if((i__50643 < count__50642)){
var vec__50650 = chunk__50641.cljs$core$IIndexed$_nth$arity$2(null,i__50643);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50650,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50650,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50674 = seq__50640;
var G__50675 = chunk__50641;
var G__50676 = count__50642;
var G__50677 = (i__50643 + (1));
seq__50640 = G__50674;
chunk__50641 = G__50675;
count__50642 = G__50676;
i__50643 = G__50677;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50640);
if(temp__5753__auto__){
var seq__50640__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50640__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50640__$1);
var G__50679 = cljs.core.chunk_rest(seq__50640__$1);
var G__50680 = c__4556__auto__;
var G__50681 = cljs.core.count(c__4556__auto__);
var G__50682 = (0);
seq__50640 = G__50679;
chunk__50641 = G__50680;
count__50642 = G__50681;
i__50643 = G__50682;
continue;
} else {
var vec__50653 = cljs.core.first(seq__50640__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50687 = cljs.core.next(seq__50640__$1);
var G__50688 = null;
var G__50689 = (0);
var G__50690 = (0);
seq__50640 = G__50687;
chunk__50641 = G__50688;
count__50642 = G__50689;
i__50643 = G__50690;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50636_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50636_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50637_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50637_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50638_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50638_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50639_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50639_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50661){
var map__50662 = p__50661;
var map__50662__$1 = (((((!((map__50662 == null))))?(((((map__50662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50662):map__50662);
var svc = map__50662__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
