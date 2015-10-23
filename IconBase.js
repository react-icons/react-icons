import React from 'react';

class IconBase extends React.Component {
    render() {
        let styles = {
            fill: "#000",
            verticalAlign: "middle",
            width: this.props.size,
            height: this.props.size
        };
        return (
            <svg viewBox={this.props.viewBox}
                 preserveAspectRatio="xMidYMid meet" fit
                 style={{...styles, ...this.props.style}} >
                {this.props.children}
            </svg>
        );
    }
};

IconBase.defaultProps = {
    size: 24
};

IconBase.propTypes = {
    size: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    style: React.PropTypes.object
};

export default IconBase;
