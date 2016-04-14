
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdGamepad extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m27.5 15h9.1v10h-9.1l-5-5z m-12.5 12.5l5-5 5 5v9.1h-10v-9.1z m-2.5-12.5l5 5-5 5h-9.1v-10h9.1z m12.5-2.5l-5 5-5-5v-9.1h10v9.1z"/></g>
            </IconBase>
        );
    }
}
