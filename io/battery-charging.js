
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoBatteryCharging extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m0.8 30c-0.5 0-0.8-0.3-0.8-0.8v-18.4c0-0.5 0.3-0.8 0.8-0.8h29.7c0.5 0 0.8 0.3 0.8 0.8v4.2h2.9c0.5 0 0.8 0.3 0.8 0.8v8.4c0 0.5-0.3 0.8-0.8 0.8h-2.9v4.2c0 0.5-0.3 0.8-0.8 0.8h-29.7z m16.8-17.5l-7.8 8.7h4.7l-2.1 6.3 7.8-8.7h-4.7z"/></g>
            </IconBase>
        );
    }
}
