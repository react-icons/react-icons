
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSimCard extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.3 6.7c0-1.9-1.5-3.4-3.3-3.4h-13.3l-10 10v20c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4l0-26.6z m-18.3 25h-3.3v-3.4h3.3v3.4z m13.3 0h-3.3v-3.4h3.3v3.4z m-13.3-6.7h-3.3v-6.7h3.3v6.7z m6.7 6.7h-3.4v-6.7h3.4v6.7z m0-10h-3.4v-3.4h3.4v3.4z m6.6 3.3h-3.3v-6.7h3.3v6.7z"/></g>
            </IconBase>
        );
    }
}
