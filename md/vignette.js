
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdVignette extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 30c7.3 0 13.4-4.5 13.4-10s-6.1-10-13.4-10-13.4 4.5-13.4 10 6.1 10 13.4 10z m15-25c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-30c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h30z"/></g>
            </IconBase>
        );
    }
}
