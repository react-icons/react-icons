
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBatteryChargingFull extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m18.4 33.4l6.6-12.5h-3.4v-9.3l-6.6 12.5h3.4v9.3z m7.7-26.8c1.2 0 2.3 1.1 2.3 2.3v25.6c0 1.2-1.1 2.1-2.3 2.1h-12.2c-1.2 0-2.3-0.9-2.3-2.1v-25.6c0-1.2 1.1-2.3 2.3-2.3h2.7v-3.2h6.8v3.2h2.7z"/></g>
            </IconBase>
        );
    }
}
