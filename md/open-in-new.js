
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdOpenInNew extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.7 31.7h-23.4v-23.4h11.7v-3.3h-11.7c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-11.7h-3.3v11.7z m-8.4-26.7v3.3h6l-16.4 16.4 2.4 2.4 16.4-16.4v6h3.3v-11.7h-11.7z"/></g>
            </IconBase>
        );
    }
}
