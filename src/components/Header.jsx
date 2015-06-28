var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render : function() {
        return (
            <div>
                Header
            </div>
        )
    }
});

module.exports = Header;