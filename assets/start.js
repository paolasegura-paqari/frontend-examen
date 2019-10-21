var configuration = {
	url: 'http://localhost:3000/todos/',
	container: null
}
window.onload = function(){
  configuration.container = $("#container .list-group");
  new Tasks(configuration);
}
