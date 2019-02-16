
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoLock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.5 17.5h-2.5v-7.5s-5-10-10-10-10 5-10 10v7.5h-2.5s-2.5 1.3-2.5 2.5v17.5s1.3 2.5 2.5 2.5h25s2.5-1.2 2.5-2.5v-17.5s-1.2-2.5-2.5-2.5z m-7.5 5h-15v2.5h15v2.5h-15v2.5h15v2.5h-15v2.5h15v2.5h-17.5v-17.5h17.5v2.5z m0-5h-10v-7.5s2.5-5 5-5 5 2.5 5 5v7.5z"/></g>
            </IconBase>
        );
    }
}
