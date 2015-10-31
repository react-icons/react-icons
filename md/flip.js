
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFlip extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 35h3.3v-3.3h-3.3v3.3z m6.7-20h3.3v-3.3h-3.3v3.3z m-26.7-6.7v23.4c0 1.8 1.5 3.3 3.3 3.3h6.7v-3.3h-6.7v-23.4h6.7v-3.3h-6.7c-1.8 0-3.3 1.5-3.3 3.3z m26.7-3.3v3.3h3.3c0-1.8-1.5-3.3-3.3-3.3z m-13.4 33.3h3.4v-36.6h-3.4v36.6z m13.4-10h3.3v-3.3h-3.3v3.3z m-6.7-20h3.3v-3.3h-3.3v3.3z m6.7 13.4h3.3v-3.4h-3.3v3.4z m0 13.3c1.8 0 3.3-1.5 3.3-3.3h-3.3v3.3z"/></g>
            </IconBase>
        );
    }
}
