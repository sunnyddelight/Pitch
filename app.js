var app=angular.module("pitch", []);

app.controller("pitch_me",['$scope',function($scope){
  $scope.item_rows=[
  [
    {'title' : 'Edge', 'source' : 'images/edge_img.png', 'description':'interactive coding education'},
    {'title' : 'Mermlets', 'source' : 'images/mermlets.png', 'description':'interactive coding education'},
    {'title' : 'iRide', 'source' : 'images/edge_img.png', 'description':'college cleaning service'}
  ],
  [
    {'title' : 'Meremlets', 'source' : 'images/edge_img.png', 'description':'interactive coding education'},
    {'title' : 'Edge', 'source' : 'images/mermlets.png', 'description':'interactive coding education'}
  ]
    ];

}]);