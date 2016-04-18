
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSpaceBar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 15h3.4v10h-26.8v-10h3.4v6.6h20v-6.6z"/></g>
            </IconBase>
        );
    }
}
