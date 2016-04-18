
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAccountBox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m10 28.4v1.6h20v-1.6c0-3.4-6.6-5.2-10-5.2s-10 1.8-10 5.2z m15-13.4c0-2.7-2.3-5-5-5s-5 2.3-5 5 2.3 5 5 5 5-2.3 5-5z m-20-6.6c0-1.8 1.5-3.4 3.4-3.4h23.2c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2z"/></g>
            </IconBase>
        );
    }
}
