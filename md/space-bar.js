
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSpaceBar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 15v6.7h-20v-6.7h-3.3v10h26.6v-10z"/></g>
            </IconBase>
        );
    }
}
