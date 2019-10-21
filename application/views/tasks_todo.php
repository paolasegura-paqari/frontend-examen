<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<body>
  <div id="container">
    <form>
      <span class="title"><h1>Todos</h1></span>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="... escribir para buscar" name="filterTasks" id="searchText">
      </div>
      <div class="form-group row checkboxes">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="val_all" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="val_all">Todos</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="val_todo" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="val_todo">A realizar</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="val_completed" name="customRadioInline" class="custom-control-input">
          <label class="custom-control-label" for="val_completed">Completados</label>
        </div>
      </div>
      <ul class="list-group">
        <li class="list-group-item d-none">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="prueba" value="option1">
            <label class="form-check-label" for="prueba">Hacer la tarea</label>
            <button type="button" class="btn-lg btn-outline-secondary waves-effect px-3"><i class="fas fa-window-close" aria-hidden="true"></i></button>
          </div>
        </li>
      </ul>
    </form>
  </div>
</body>