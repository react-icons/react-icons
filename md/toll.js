
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdToll extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 6.7c-7.4 0-13.3 5.9-13.3 13.3s5.9 13.3 13.3 13.3 13.3-5.9 13.3-13.3-5.9-13.3-13.3-13.3z m0 23.3c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z m-20-10c0-4.3 2.8-8.1 6.7-9.4v-3.5c-5.8 1.5-10 6.7-10 12.9s4.2 11.4 10 12.9v-3.5c-3.9-1.4-6.7-5.1-6.7-9.4z"/></g>
            </IconBase>
        );
    }
}
