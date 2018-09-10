// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: 'inicio',
  		}
		]
	[
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

