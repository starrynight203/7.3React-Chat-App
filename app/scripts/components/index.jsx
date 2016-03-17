var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// Component just for my header
var HeaderComponent = React.createClass({
  render: function(){
        return (
          <div>
            <header className="header">Grumpy Cat Chat</header>
          </div>
        );
      }
});

var ConvoArea = React.createClass({
  render: function(){
    return (
      <div>
        <div className="convo"></div>
      </div>
    )
  }
});

// Component for the area you add your chat comments
var TextArea = React.createClass({
  handleClick: function(){
    console.log("it works!!")
    console.log(this.props.collection)
    this.props.collection.each(function(msg){
      console.log(msg.get('content'))
      // var content = msg.get('content')
      // var username = msg.get('username')
      // var created_at = msg.get('created_at')
    })
    var ChatMessage = {"content":$(".form-control").val(),"time": Date.now()};
    this.props.collection.create(ChatMessage);
  },
  render: function(){
        return (
          <div>
            <form>
              <textarea className="form-control chat-text" placeholder="Chat here..." rows="2"></textarea>
              <button onClick={this.handleClick} type="button" className="add-comment"><i className="fa fa-comment"></i>
                Comment</button>
            </form>
          </div>
        );
      }
});



module.exports = {
  'HeaderComponent': HeaderComponent,
  'ConvoArea': ConvoArea,
  'TextArea': TextArea
}
