
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoInfo extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 15c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m0-12.5c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z m0 30c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5 12.5 5.6 12.5 12.5-5.6 12.5-12.5 12.5z m2.5-12.5c0-1.2-1.2-2.5-2.5-2.5h-2.5s-2.5 1.3-2.5 2.5h2.5v7.5s1.3 2.5 2.5 2.5h2.5s2.5-1.2 2.5-2.5h-2.5v-7.5z"/></g>
            </IconBase>
        );
    }
}
