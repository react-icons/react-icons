
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdScreenLockPortrait extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16.7 26.7h6.6c1 0 1.7-0.8 1.7-1.7v-5c0-0.9-0.7-1.7-1.7-1.7v-1.6c0-1.9-1.5-3.4-3.3-3.4-1.8 0-3.3 1.5-3.3 3.4v1.6c-0.9 0-1.7 0.8-1.7 1.7v5c0 0.9 0.8 1.7 1.7 1.7z m1.3-10c0-1.1 0.9-2 2-2 1.1 0 2 0.9 2 2v1.6h-4v-1.6z m10.3-15h-16.6c-1.9 0-3.4 1.5-3.4 3.3v30c0 1.8 1.5 3.3 3.4 3.3h16.6c1.9 0 3.4-1.5 3.4-3.3v-30c0-1.8-1.5-3.3-3.4-3.3z m0 30h-16.6v-23.4h16.6v23.4z"/></g>
            </IconBase>
        );
    }
}
