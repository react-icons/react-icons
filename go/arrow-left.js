
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoArrowLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.5 15v-7.5l-15 12.5 15 12.5v-7.5h10v-10h-10z"/></g>
            </IconBase>
        );
    }
}
