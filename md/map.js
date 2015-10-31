
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMap extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m34.2 5l-0.3 0-8.9 3.5-10-3.5-9.4 3.2c-0.3 0.1-0.6 0.4-0.6 0.8v25.2c0 0.4 0.4 0.8 0.8 0.8l0.3 0 8.9-3.5 10 3.5 9.4-3.2c0.4-0.1 0.6-0.4 0.6-0.8v-25.2c0-0.4-0.4-0.8-0.8-0.8z m-9.2 26.7l-10-3.5v-19.9l10 3.6v19.8z"/></g>
            </IconBase>
        );
    }
}
