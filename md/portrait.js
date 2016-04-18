
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPortrait extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.6 31.6v-23.2h-23.2v23.2h23.2z m0-26.6c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z m-4.1 22.1v1.3h-15v-1.3c0-2.5 5-3.7 7.5-3.7s7.5 1.2 7.5 3.7z m-7.5-6.7c-2 0-3.7-1.7-3.7-3.8s1.7-3.7 3.7-3.7 3.8 1.7 3.8 3.7-1.8 3.8-3.8 3.8z"/></g>
            </IconBase>
        );
    }
}
