
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCameraRoll extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m23.3 8.3c0-1.8-1.5-3.3-3.3-3.3h-1.7v-1.7c0-0.9-0.7-1.6-1.6-1.6h-6.7c-0.9 0-1.7 0.7-1.7 1.6v1.7h-1.6c-1.9 0-3.4 1.5-3.4 3.3v25c0 1.9 1.5 3.4 3.4 3.4h13.3c1.8 0 3.3-1.5 3.3-3.4h13.4v-25h-13.4z m-3.3 21.7h-3.3v-3.3h3.3v3.3z m0-15h-3.3v-3.3h3.3v3.3z m6.7 15h-3.4v-3.3h3.4v3.3z m0-15h-3.4v-3.3h3.4v3.3z m6.6 15h-3.3v-3.3h3.3v3.3z m0-15h-3.3v-3.3h3.3v3.3z"/></g>
            </IconBase>
        );
    }
}
