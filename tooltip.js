var React = require('react');
require('../styleSheets/tooltip.css');
var ToolTip = React.createClass({
    render(){
        if (this.props.right)
            return (
                <div className="tooltip right" style={this.props.style}>
                    {this.props.children}
                </div>
            );
        else if (this.props.left)
            return (
                <div className="tooltip left" style={this.props.style}>
                    {this.props.children}
                </div>
            );
        else if (this.props.top)
            return (
                <div className="tooltip top" style={this.props.style}>
                    {this.props.children}
                </div>
            );
        else
            return (
                <div className="tooltip bottom" style={this.props.style}>
                    {this.props.children}
                </div>
            )
    }
});
module.exports = ToolTip;