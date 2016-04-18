
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoPrimitiveDot extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m10 20c0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10s-4.5 10-10 10c-5.5 0-10-4.5-10-10z"/></g>
            </IconBase>
        );
    }
}
