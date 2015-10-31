
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiLockClosedOutline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><circle cx="20" cy="28.333333333333336" r="2.166666666666667"/><path d="m28.3 16.7h-1.6v-3.4c0-3.6-3-6.6-6.7-6.6s-6.7 3-6.7 6.6v3.4h-1.6c-1.9 0-3.4 1.5-3.4 3.3v11.7c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-11.7c0-1.8-1.5-3.3-3.4-3.3z m-11.6-3.4c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v5h-6.6v-5z m11.6 18.4h-16.6v-11.7h16.6l0 11.7z"/></g>
            </IconBase>
        );
    }
}
