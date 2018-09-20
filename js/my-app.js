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
  		},
		
	
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		
		{
		path: '/info-productouno/',
    	url: 'info-productouno.html',
    	name: 'info-productouno',
  		},
		
		{
		path: '/info-productodos/',
    	url: 'info-productodos.html',
    	name: 'info-productodos',
  		},
		
		{
		path: '/info-productotres/',
    	url: 'info-productotres.html',
    	name: 'info-productotres',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

