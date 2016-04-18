
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoQuote extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m7.5 20v10h10v-10h-5s0-5 5-5v-5s-10 0-10 10z m25-5v-5s-10 0-10 10v10h10v-10h-5s0-5 5-5z"/></g>
            </IconBase>
        );
    }
}
