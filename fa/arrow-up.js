
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaArrowUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m37.5 21.7q0 1.1-0.9 2l-1.6 1.7q-0.9 0.8-2.1 0.8-1.2 0-2-0.8l-6.5-6.6v15.7q0 1.2-0.9 1.9t-2 0.7h-2.9q-1.1 0-2-0.7t-0.8-1.9v-15.7l-6.6 6.6q-0.8 0.8-2 0.8t-2-0.8l-1.7-1.7q-0.8-0.9-0.8-2 0-1.2 0.8-2.1l14.6-14.5q0.7-0.8 2-0.8 1.2 0 2 0.8l14.5 14.5q0.9 0.9 0.9 2.1z"/></g>
            </IconBase>
        );
    }
}
