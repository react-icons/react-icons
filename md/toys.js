
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdToys extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 20c0 5-4.1 9.1-9.1 9.1s-9.3-4.1-9.3-9.1h18.4z m0 0c-5 0-9.1-4.1-9.1-9.1s4.1-9.3 9.1-9.3v18.4z m0 0c5 0 9.1 4.1 9.1 9.1s-4.1 9.3-9.1 9.3v-18.4z m0 0c0-5 4.1-9.1 9.1-9.1s9.3 4.1 9.3 9.1h-18.4z"/></g>
            </IconBase>
        );
    }
}
