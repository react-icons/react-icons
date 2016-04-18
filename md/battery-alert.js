
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBatteryAlert extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.6 23.4v-8.4h-3.2v8.4h3.2z m0 6.6v-3.4h-3.2v3.4h3.2z m4.5-23.4c1.2 0 2.3 1.1 2.3 2.3v25.6c0 1.2-1.1 2.1-2.3 2.1h-12.2c-1.2 0-2.3-0.9-2.3-2.1v-25.6c0-1.2 1.1-2.3 2.3-2.3h2.7v-3.2h6.8v3.2h2.7z"/></g>
            </IconBase>
        );
    }
}
