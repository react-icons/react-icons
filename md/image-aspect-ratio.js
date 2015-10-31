
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdImageAspectRatio extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m26.7 16.7h-3.4v3.3h3.4v-3.3z m0 6.6h-3.4v3.4h3.4v-3.4z m-13.4-6.6h-3.3v3.3h3.3v-3.3z m6.7 0h-3.3v3.3h3.3v-3.3z m13.3-10h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z"/></g>
            </IconBase>
        );
    }
}
