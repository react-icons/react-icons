
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiDropbox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 21.5l8.8 5.8 6.2-5.1-8.8-5.5z m8.8-15.5l-8.8 5.8 6.2 4.9 8.8-5.5z m21.2 5.8l-8.8-5.8-6.2 5.2 8.8 5.5z m-15 10.4l6.2 5.1 8.8-5.8-6.2-4.8z m0 2l-6.2 5.1-2.6-1.8v2l8.8 5.3 8.8-5.3v-2l-2.6 1.8z"/></g>
            </IconBase>
        );
    }
}
