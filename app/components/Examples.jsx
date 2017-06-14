var React = require('react');
var {Link} = require('react-router');

//var Examples = React.createClass({
//  render: function(){
//    return(
//      <h3>Examples Component</h3>
//    );
//  }
//});

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <li>
        <Link to='/?location=Edinburgh'>Edinburgh, Scotland</Link>
      </li>
      <li>
        <Link to='/?location=Longmont'>Longmont, Colorado</Link>
      </li>
    </div>
  )
};

module.exports = Examples;
