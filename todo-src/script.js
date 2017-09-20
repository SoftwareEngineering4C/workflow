<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://code.angularjs.org/1.4.3/angular.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body ng-app="app">
    <h1 class="text-center">My little to do app!</h1>

    <div id="todo" class="col-xs-6 col-xs-offset-3" ng-controller="MainCtrl">

        <div class="input-group">
          <input type="text" class="form-control" placeholder="Item to add to todo list" ng-model="newItem">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" ng-click="addItem()">
              Add
              <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
            </button>
          </span>
        </div><!-- /input-group -->

      <h2>stuff i gotta do asap</h2>

      <ul class="list-group">
        <!-- http://www.w3schools.com/css/css_float.asp -->
        <li class="list-group-item clearfix" ng-repeat="do in todos">


          <button class="btn btn-danger pull-right" type="button" ng-click="deleteItem(do)">
            <span class="glyphicon glyphicon-trash " aria-hidden="true"></span>
          </button>

          <!-- Edit Button added here -->
          <span ng-hide="do.editing">{{do.name}} <button  class="btn btn-info pull-right" ng-click="editItem(do)">Edit</button></span>
          <input ng-show="do.editing" ng-model="do.name"  autofocus />

          <button ng-show="do.editing" ng-click="doneEditing(do)">Save</button>
          <button ng-show="do.editing" ng-click="Cancel(do)">Cancel</button>



        </li>
      </ul>
    </div>

  </body>

</html>
