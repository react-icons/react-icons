
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTerminal extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.9625 4.9625h-30c-1.3825000000000003 0-2.5 1.1174999999999997-2.5 2.5v25c0 1.3800000000000026 1.1174999999999997 2.5 2.5 2.5h30c1.3800000000000026 0 2.5-1.1199999999999974 2.5-2.5v-25c0-1.3825000000000003-1.1199999999999974-2.5-2.5-2.5z m-27.5 17.5l5-5-5-5 2.5-2.5 7.5 7.5-7.5 7.5-2.5-2.5z m20 2.5h-10v-2.5h10v2.5z"/></g>
            </IconBase>
        );
    }
}
