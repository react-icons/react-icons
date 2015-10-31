
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDataUsage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.7 3.4v5.1c5.6 0.8 10 5.6 10 11.5 0 1.5-0.3 2.9-0.8 4.2l4.3 2.6c0.9-2.1 1.5-4.4 1.5-6.8 0-8.6-6.6-15.7-15-16.6z m-1.7 28.3c-6.4 0-11.7-5.2-11.7-11.7 0-5.9 4.4-10.7 10-11.5v-5.1c-8.4 0.9-15 7.9-15 16.6 0 9.2 7.5 16.7 16.7 16.7 5.5 0 10.4-2.7 13.4-6.8l-4.3-2.6c-2.1 2.7-5.4 4.4-9.1 4.4z"/></g>
            </IconBase>
        );
    }
}
