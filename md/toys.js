
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdToys extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 20c0-5 4.2-9.2 9.2-9.2s9.1 4.2 9.1 9.2h-18.3z m0 0c0 5-4.2 9.2-9.2 9.2s-9.1-4.2-9.1-9.2h18.3z m0 0c-5 0-9.2-4.2-9.2-9.2s4.2-9.1 9.2-9.1v18.3z m0 0c5 0 9.2 4.2 9.2 9.2s-4.2 9.1-9.2 9.1v-18.3z"/></g>
            </IconBase>
        );
    }
}
