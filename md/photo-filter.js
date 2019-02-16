
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoFilter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.1 17.9l4.5 2.1-4.5 2.1-2.1 4.5-2.1-4.5-4.5-2.1 4.5-2.1 2.1-4.5z m6.3-1.3l-1.6-3.4-3.4-1.6 3.4-1.5 1.6-3.5 1.5 3.5 3.5 1.5-3.5 1.6z m3.3 0h3.3v15c0 1.8-1.5 3.4-3.3 3.4h-23.3c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h15v3.4h-15v23.2h23.3v-15z"/></g>
            </IconBase>
        );
    }
}
