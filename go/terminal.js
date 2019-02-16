
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoTerminal extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 5h-30c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.3 1.1 2.5 2.5 2.5h30c1.3 0 2.5-1.2 2.5-2.5v-25c0-1.4-1.2-2.5-2.5-2.5z m-27.5 17.5l5-5-5-5 2.5-2.5 7.5 7.5-7.5 7.5-2.5-2.5z m20 2.5h-10v-2.5h10v2.5z"/></g>
            </IconBase>
        );
    }
}
