class Task {}

Task.createElement = function(type, row){
  var element;
  if(type=="checkbox"){
    element = $('<input>').addClass("form-check-input")
        .attr("type","checkbox")
        .attr("id","inlineCheckbox"+row.id)
        .attr("value", row.completado?"completado":"a realizar");
    if(row.completado)element.attr("checked","");
  } else if(type=="label"){
    element = $('<label>').addClass("form-check-label")
        .attr("for","inlineCheckbox"+row.id)
        .html(row.descripcion);
  } else if(type=="deleteIcon"){
    element = $('<button>').attr("type","button")
        .addClass("btn-lg btn-outline-secondary waves-effect px-3")
        .attr("for","inlineCheckbox"+row.id)
        .append('<i class="fas fa-window-close" aria-hidden="true"></i>');
  }
  return element; 
}

Task.rowParent = function(child){
  return child.parent().parent();
}

Task.disabled = function(rowCont){
  rowCont.addClass("disabled");
  rowCont.find("button").attr("disabled","");
  rowCont.find("input").attr("disabled","");
}

Task.remove = function(rowCont){
  rowCont.remove();
}

Task.enabled = function(rowCont){
  rowCont.removeClass("disabled");
  rowCont.find("button").removeAttr("disabled");
  rowCont.find("input").removeAttr("disabled");
}

Task.compare = function(element,input){
  var title = element.descripcion.toLowerCase();
  var searched = input.target.value.toLowerCase();
  var elementList = Task.rowParent($("#inlineCheckbox"+element.id));
  return title.indexOf(searched)>-1;
}

Task.filter = function (filters, task){
  var elementList = Task.rowParent($("#inlineCheckbox"+task.id));
  var filter = true;
  for (var i = 0; i < filters.length; i++) {
    filter &= ( filters[i].filter(task) );
  }
  if(filter)elementList.removeClass("d-none");
  else elementList.addClass("d-none");
  return filter;
}