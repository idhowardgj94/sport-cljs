
shadow.cljs.devtools.client.env.module_loaded('main');

try { sports.app.init(); } catch (e) { console.error("An error occurred when calling (sports.app/init)"); throw(e); }