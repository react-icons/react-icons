
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaStickyNote extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25.4 26.3v8.8h-19.6q-0.8 0-1.4-0.6t-0.6-1.4v-28.4q0-0.8 0.6-1.4t1.4-0.6h28.4q0.8 0 1.4 0.6t0.6 1.4v19.6h-8.8q-0.8 0-1.4 0.6t-0.6 1.4z m2.7 0.7h8q-0.3 1.7-1.3 2.8l-3.9 3.9q-1.1 1-2.8 1.3v-8z"/></g>
            </IconBase>
        );
    }
}
