
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSatellite extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-23.4 3.3h5c0 2.8-2.2 5-5 5v-5z m0 11.7v-3.3c4.6 0 8.4-3.8 8.4-8.4h3.3c0 6.5-5.2 11.7-11.7 11.7z m0 10l5.9-7.5 4.1 5 5.9-7.5 7.5 10h-23.4z"/></g>
            </IconBase>
        );
    }
}
