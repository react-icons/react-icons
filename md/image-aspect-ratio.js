
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdImageAspectRatio extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m33.4 30v-20h-26.8v20h26.8z m0-23.4c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h26.8z m-13.4 10v3.4h-3.4v-3.4h3.4z m-6.6 0v3.4h-3.4v-3.4h3.4z m13.2 6.8v3.2h-3.2v-3.2h3.2z m0-6.8v3.4h-3.2v-3.4h3.2z"/></g>
            </IconBase>
        );
    }
}
