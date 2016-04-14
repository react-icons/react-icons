
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdScreenLockPortrait extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m28.4 31.6v-23.2h-16.8v23.2h16.8z m0-30c1.8 0 3.2 1.6 3.2 3.4v30c0 1.8-1.4 3.4-3.2 3.4h-16.8c-1.8 0-3.2-1.6-3.2-3.4v-30c0-1.8 1.4-3.4 3.2-3.4h16.8z m-10.4 15v1.8h4v-1.8c0-1.1-0.9-1.9-2-1.9s-2 0.8-2 1.9z m-1.4 10c-0.9 0-1.6-0.7-1.6-1.6v-5c0-0.9 0.7-1.6 1.6-1.6v-1.8c0-1.8 1.5-3.2 3.4-3.2 1.8 0 3.4 1.4 3.4 3.2v1.8c0.9 0 1.6 0.7 1.6 1.6v5c0 0.9-0.7 1.6-1.6 1.6h-6.8z"/></g>
            </IconBase>
        );
    }
}
