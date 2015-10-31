
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdTexture extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.5 5.1l-27.4 27.4c0.2 0.6 0.5 1.1 0.9 1.5 0.4 0.4 0.9 0.7 1.5 0.9l27.4-27.4c-0.3-1.2-1.2-2.1-2.4-2.4z m-12.7-0.1l-14.8 14.8v4.7l19.5-19.5h-4.7z m-11.5 0c-1.8 0-3.3 1.5-3.3 3.3v3.4l6.7-6.7h-3.4z m23.4 30c0.9 0 1.7-0.4 2.3-1 0.6-0.6 1-1.4 1-2.3v-3.4l-6.7 6.7h3.4z m-16.2 0h4.7l14.8-14.8v-4.7l-19.5 19.5z"/></g>
            </IconBase>
        );
    }
}
