
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoDrag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m0 13.8v-2.5h40v2.5h-40z m0 7.5v-2.5h40v2.5h-40z m0 7.5v-2.5h40v2.5h-40z"/></g>
            </IconBase>
        );
    }
}
