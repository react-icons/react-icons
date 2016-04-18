
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoPlusRound extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.6 17.5c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.5-2.4 2.5h-10.1v10.1c0 1.3-1.1 2.4-2.5 2.4s-2.5-1.1-2.5-2.4v-10.1h-10.1c-1.3 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5h10.1v-10.1c0-1.3 1.1-2.4 2.5-2.4s2.5 1.1 2.5 2.4v10.1h10.1z"/></g>
            </IconBase>
        );
    }
}
