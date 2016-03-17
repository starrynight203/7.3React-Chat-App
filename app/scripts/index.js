var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var models = require('./Models/models');
var messageCollection = new models.ChatCollection();

var messagingComponent = require('./components/index.jsx');
var TextArea = messagingComponent.TextArea;
var HeaderComponent = messagingComponent.HeaderComponent;
var ConvoArea = messagingComponent.ConvoArea;

ReactDOM.render(
  React.createElement(HeaderComponent),
  document.getElementById('app')
);

ReactDOM.render(
  React.createElement(ConvoArea),
  document.getElementById('convo')
);

ReactDOM.render(
  React.createElement(TextArea, {collection: messageCollection}),
  document.getElementById('chat-area')
);

messageCollection.fetch();

// $('button').click(function(){
//   $('.buttonLabel').html('Loading...');
// //$('.buttonLabel').append('Loading...');
// starWarsPlanet.fetch().done(function(){
//   starWarsPlanet.each(function(planet){
//     $('.buttonLabel').html('Submit');
//     console.log(planet.get('name') + ', population = (' + planet.get("population") +')');
//   // var planetStats = planet.get("name") + '(' + planet.get("population") +')';
//     });
//   });
// });
