var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render : function() {
        return (
            <div className="header">
                <h1>React Isomorphic Blog</h1>
            </div>
        )
    }
});

module.exports = Header;