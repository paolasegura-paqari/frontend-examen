class Tasks {
  titles = {
    val_all: "Todos",
    val_todo: "A realizar",
    val_completed: "Completados"
  }
  checksTasks = null;
  deleteIcons = null;
  constructor ( config ) {
    this.container = config.container;
    this.titleLabel = $("span.title").find("h1");
    this.url =  config.url;
    this.filters = [];
    this.getAll("start");
  }

  getAll = function (startFunction){
    var self = this;
    $.ajax({
      url: this.url,
      type: 'GET',
      contentType: 'application/json',
      success: function(data){self[startFunction](data);}
    });
  }

  start = function (data){
    this.tasks = data;
    this.loadingData();
    this.handlingEventsElement();
    this.handlingEventsFilter();
    this.enableButtons();
  }

  loadingData = function(){
    this.sortTasks();
    var element,forminline, checkbox, label, deleteIcon;
    for (var i = 0; i < this.tasks.length; i++) {
      element = $('<li>').addClass("list-group-item");
      forminline = $('<div>').addClass('form-check form-check-inline');
      checkbox =  Task.createElement("checkbox", this.tasks[i]);
      label =  Task.createElement("label", this.tasks[i]);
      deleteIcon =  Task.createElement("deleteIcon", this.tasks[i]);
      forminline.append(checkbox).append(label).append(deleteIcon);
      element.append(forminline);
      this.container.append(element);
    }
    this.checksTasks = this.container.find("input.form-check-input");
    this.deleteIcons = this.container.find("button");
  }

  handlingEventsElement = function(){
    var self = this;
    self.checksTasks.click( function(){
      var check = $(this);
      var element = self.tasks.find(function(e){
        return ("inlineCheckbox"+e.id)==check.attr("id");
      });
      element.completado = check.is(':checked');
      self.updateElement(element, Task.rowParent(check) );
      // self.updateElement(element, Task.rowParent(check), self.tasks);
    });
    self.deleteIcons.click( function(){
      var deleteBtn = $(this);
      var element = self.tasks.find(function(e){
        return ("inlineCheckbox"+e.id)==deleteBtn.attr("for");
      });
      self.deleteElement(element, Task.rowParent(deleteBtn) );
      // self.deleteElement(element, Task.rowParent(deleteBtn), self.tasks);
    });
    return self;
  }

  handlingEventsFilter = function(){
    var self = this;
    $("div.custom-radio > input.custom-control-input").click(function(){
      var typeFilter = $(this).attr("id");
      var filterFunc = function(e){return true;};//default todos
      if( typeFilter == "val_todo" ){//value to do
        filterFunc = function(e){return !e.completado;};
      }else if( typeFilter == "val_completed" ){
        filterFunc = function(e){return e.completado;};
      }
      self.addFilter({
        filter: filterFunc,
        type: "radio",
        typeFilter: typeFilter
      });
      self.applyFilters();
    });

    $("input#searchText")[0].addEventListener('input', function(input){
      self.addFilter({
        filter: function(el){return Task.compare(el,input);},
        type: "search"
      });
      self.applyFilters();
    });
    return self;
  }

  addFilter = function(filter){
    for (var i = 0; i < this.filters.length; i++) {
      if( filter.type == this.filters[i].type ){
        this.filters.splice(i, 1);
      }
    }
    this.filters.push(filter);
  }

  enableButtons = function(){
    $("input#val_all").attr("checked","");
  }

  updateElement = function(elem, rowCont){
    var self = this;
    Task.disabled(rowCont);
    $.ajax({
      url: self.url+elem.id,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(elem),
      success: function(data) {
        
        setTimeout(function(){Task.enabled(rowCont);},1000);
        var element =  self.tasks.find(function(e){
          if(e.id==data.id){e=data;}
          return e.id==data.id;
        });
        self.sortTasks();

      }
    });
  }

  sortTasks = function(){
    this.tasks.sort(function(a,b){
      if( (a.completado && b.completado) ||
        (!a.completado && !b.completado) ){
        return a.orden-b.orden;
      }
      else if (a.completado){
        return +1;
      }else { //b completado
        return -1;
      }
    });
    for (var i = 0; i < this.tasks.length; i++) {
      var elementList = $("#inlineCheckbox"+this.tasks[i].id)
                        .parent().parent();
      this.container.append(elementList);
    }
  }

  deleteElement = function(elem, rowCont){
    var self = this;
    var isIt, index = 0;
    Task.disabled(rowCont);
    $.ajax({
      url: self.url+elem.id,
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify(elem),
      success: function(data) {
        setTimeout(function(){Task.remove(rowCont);},1000);
        var element =  self.tasks.find(function(e){
          index++;
          if(isIt = (e.id==data.id)){
            self.tasks.splice(index,1);
          }
          return isIt;
        });
        self.sortTasks();
      }
    });
  }

  applyFilters = function (){
    for (var i = 0; i < this.tasks.length; i++) {
      Task.filter(this.filters,this.tasks[i]);
    }
    var filterTitle = this.filters.find(function(e){
      return e.type=="radio";
    }).typeFilter;
    this.titleLabel.html(this.titles[filterTitle]);
    this.sortTasks();
  }
}