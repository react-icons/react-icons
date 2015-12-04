
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoBrowser extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15 7.5h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m30 25h-30v-20h30v20z m0-22.5h-15v-2.5h15v2.5z m2.5-2.5c0-1.3812499999999996-1.1187499999999986-2.5-2.5-2.5h-30c-1.38125 0-2.5 1.1187499999999995-2.5 2.5v25c0 1.3812500000000014 1.11875 2.5 2.5 2.5h30c1.3812500000000014 0 2.5-1.1187499999999986 2.5-2.5v-25z"/></g>
            </IconBase>
        );
    }
}
