
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewCarousel extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></g>
            </IconBase>
        );
    }
}
