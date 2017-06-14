var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

/*onButtonClick: function (e){
  e.preventDefault();

  var nameRef = this.refs.name;
  var name = nameRef.value;
  nameRef.value = "";

  if(typeof name === "string" && name.length > 0) {

    this.setState({
      name: name,
      message: message
    });
  }
},*/