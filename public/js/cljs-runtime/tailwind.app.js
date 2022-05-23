goog.provide('tailwind.app');
tailwind.app.app = (function tailwind$app$app(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auth?","auth?",-1680451378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tailwind.db.state)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailwind.views.authenticated], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailwind.views.public$], null);
}
});
tailwind.app.start = (function tailwind$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailwind.app.app], null),document.getElementById("app"));
});
tailwind.app.init = (function tailwind$app$init(){
console.log("init");

return tailwind.app.start();
});
tailwind.app.stop = (function tailwind$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=tailwind.app.js.map
