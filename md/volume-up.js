
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdVolumeUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 15v10h6.7l8.3 8.3v-26.6l-8.3 8.3h-6.7z m22.5 5c0-2.9-1.7-5.5-4.2-6.7v13.4c2.5-1.2 4.2-3.8 4.2-6.7z m-4.2-14.6v3.4c4.9 1.5 8.4 5.9 8.4 11.2s-3.5 9.8-8.4 11.2v3.4c6.7-1.5 11.7-7.5 11.7-14.6s-5-13.1-11.7-14.6z"/></g>
            </IconBase>
        );
    }
}
