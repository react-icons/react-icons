
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdGamepad extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 12.5v-9.2h-10v9.2l5 5 5-5z m-12.5 2.5h-9.2v10h9.2l5-5-5-5z m2.5 12.5v9.2h10v-9.2l-5-5-5 5z m12.5-12.5l-5 5 5 5h9.2v-10h-9.2z"/></g>
            </IconBase>
        );
    }
}
