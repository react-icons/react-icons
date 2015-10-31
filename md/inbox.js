
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdInbox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3l0 23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m0 20h-6.7c0 2.8-2.2 5-5 5s-5-2.2-5-5h-6.7v-16.7h23.4v16.7z m-5-8.3h-3.4v-5h-6.6v5h-3.4l6.7 6.6 6.7-6.6z"/></g>
            </IconBase>
        );
    }
}
