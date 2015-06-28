var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var PostPreview = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    loadPost : function(e){
        e.preventDefault();
        var self = this;
        PostActions.loadSinglePost(this.props.post.id,function(){
           self.context.router.transitionTo('/post/'+self.props.post.id+'/'+self.props.post.slug);
        });
    },

    render : function() {
        return (
            <div>
                <a href="#" onClick={this.loadPost}>Post Id : {this.props.post.id}</a>
            </div>
        )
    }
});

module.exports = PostPreview;