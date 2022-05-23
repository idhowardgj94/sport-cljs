goog.provide('sports.app');
sports.app.test_red = (function sports$app$test_red(){
return cljss.core.css("sports_app__test-red",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".sports_app__test-red{color:red;}"], null),cljs.core.PersistentVector.EMPTY);
});
sports.app.app = (function sports$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lg:container.mx-auto.px-4","div.lg:container.mx-auto.px-4",520558591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-md.rounded.shadow-lg.mx-auto.test","div.max-w-md.rounded.shadow-lg.mx-auto.test",248306068),"hi"], null)], null);
});
sports.app.start = (function sports$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sports.app.app], null),document.getElementById("app"));
});
sports.app.init = (function sports$app$init(){
console.log("init");

return sports.app.start();
});
sports.app.stop = (function sports$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=sports.app.js.map
