
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCameraFront extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16.7 33.3h-8.4v3.4h8.4v3.3l5-5-5-5v3.3z m6.6 0v3.4h8.4v-3.4h-8.4z m-3.3-20c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3-3.3 1.5-3.3 3.3 1.5 3.3 3.3 3.3z m8.3-13.3h-16.6c-1.9 0-3.4 1.5-3.4 3.3v23.4c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-23.4c0-1.8-1.5-3.3-3.4-3.3z m-16.6 3.3h16.6v17.5c0-2.8-5.5-4.1-8.3-4.1s-8.3 1.3-8.3 4.1v-17.5z"/></g>
            </IconBase>
        );
    }
}
