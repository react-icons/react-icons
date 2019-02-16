
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoAlert extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"/></g>
            </IconBase>
        );
    }
}
