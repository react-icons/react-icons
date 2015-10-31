
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCloudCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m7.5 23.4h-14.2c-2.7 0-5-2.3-5-5s2.3-5 5-5l0.3 0c0.7-2.9 3.3-5 6.4-5 3.7 0 6.7 3 6.7 6.6h0.8c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z"/></g>
            </IconBase>
        );
    }
}
