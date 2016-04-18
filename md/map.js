
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMap extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 31.6v-19.7l-10-3.5v19.7z m9.1-26.6c0.5 0 0.9 0.4 0.9 0.9v25.1c0 0.4-0.3 0.7-0.6 0.8l-9.4 3.2-10-3.5-8.9 3.4-0.2 0.1c-0.5 0-0.9-0.4-0.9-0.9v-25.1c0-0.4 0.3-0.7 0.6-0.8l9.4-3.2 10 3.5 8.9-3.4z"/></g>
            </IconBase>
        );
    }
}
