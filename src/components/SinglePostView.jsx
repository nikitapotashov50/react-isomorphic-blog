var React = require('react/addons');
var PostStore = require('../stores/PostStore');

var SinglePostView = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount : function() {
        PostStore.listen(this.onChange);
    },

    componentWillUnMount : function() {
        PostStore.unlisten(this.onChange);
    },

    onChange : function(state){
        this.setState(state);
    },

    getInitialState : function(){
        return PostStore.getState();
    },

    render : function() {
        return (
            <div>
                {this.state.currentPost.slug}
            </div>
        )
    }
});

module.exports = SinglePostView;