var Backbone = require('backbone');

var Chat = Backbone.Model.extend({

});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  parse: function(data){
    return data;
  }
});

module.exports = {
  'Chat': Chat,
  'ChatCollection': ChatCollection
}
