var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts : function(e){
        e.preventDefault();
        PostActions.loadAllPosts((function(){
           this.context.router.transitionTo('postListView');
        }).bind(this));
    },

    render : function() {
        return (
            <div className="header">
                <a href="#" onClick={this.showAllPosts}><h1>React Isomorphic Blog</h1></a>
            </div>
        )
    }
});

module.exports = Header;