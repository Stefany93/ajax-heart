// Connecting to the server using AJAX behind the scenes.
function server_connect(){
// We declare the $connection variable which will hold the
// core object depending on the browser. Now we have set it 
// equal to false since we do not know the user's browser 
// yet and we haven't defined the variable with the proper 
// object.
	var connection = false;
// We check whether the browser is any browser but IE 6 -
// Since IE 7, that MS browser supports the XMLHttpRequest object.
		if(window.XMLHttpRequest){
// If the browser supports the object and it doesn't 
// return 'undefined' make a new instance of the object and
// assign it to the $connection variable.
// If not, set $connection to false which means
// this browser doesn't support the XMLHttpObject
// and that means the user has IE version below 7.
			if(typeof XMLHttpRequest != "undefined"){
				try{
					connection = new XMLHttpRequest();
				}catch(e){
					connection = false;
				}
			}
// If the above evaluation fails,
// we make a new evaluation to set $connection with the
// right object, in this case, for IE 6 -
		}else if(window.ActiveXObject){
			try{
				connection = new ActiveXObject('Microsoft.XMLHTTP');
			}catch(e){
				try{
					connection = new ActiveXObject('Msxml2.XMLHTTP');
				}catch(e){
					connection = false;
				}
			}
		}
// The return value of this function is
// either the right AJAX server connection object
// or false which means that AJAX cannot connect for some reason.
		return connection;
}
// We set the object to a variable and now we can use its properties
// and methods when connecting to the server behind the scenes.
	var connection = server_connect();
// It's easy :-)