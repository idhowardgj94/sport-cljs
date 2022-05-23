goog.provide('tailwind.events');
tailwind.events.login = (function tailwind$events$login(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailwind.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),true);
});
tailwind.events.logout = (function tailwind$events$logout(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailwind.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),false);
});
tailwind.events.toggle_user_dropdown = (function tailwind$events$toggle_user_dropdown(){
var dropdown = new cljs.core.Keyword(null,"user-dropdown?","user-dropdown?",-240280967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tailwind.db.state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailwind.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"user-dropdown?","user-dropdown?",-240280967),cljs.core.not(dropdown));
});

//# sourceMappingURL=tailwind.events.js.map
