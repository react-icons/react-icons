
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPersonPinCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 23.4c2.8 0 5.2-1.4 6.6-3.6 0-2.2-4.4-3.5-6.6-3.5s-6.6 1.3-6.6 3.5c1.4 2.2 3.8 3.6 6.6 3.6z m0-16.8c-1.8 0-3.4 1.6-3.4 3.4 0 1.9 1.6 3.4 3.4 3.4s3.4-1.5 3.4-3.4c0-1.8-1.6-3.4-3.4-3.4z m0-3.2c6.4 0 11.6 5.2 11.6 11.6 0 8.7-11.6 21.6-11.6 21.6s-11.6-12.8-11.6-21.6c0-6.4 5.2-11.6 11.6-11.6z"/></g>
            </IconBase>
        );
    }
}
