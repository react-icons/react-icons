
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAspectRatio extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 20h-3.4v5h-5v3.3h8.4v-8.3z m-20-5h5v-3.3h-8.4v8.3h3.4v-5z m23.3-10h-30c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-30v-23.4h30v23.4z"/></g>
            </IconBase>
        );
    }
}
