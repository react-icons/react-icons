
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaStickyNote extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.8 25.2v7.2h-16.1q-0.7 0-1.2-0.5t-0.5-1.1v-23.4q0-0.7 0.5-1.2t1.2-0.4h23.3q0.7 0 1.2 0.4t0.5 1.2v16.1h-7.3q-0.6 0-1.1 0.5t-0.5 1.2z m2.2 0.6h6.6q-0.2 1.4-1.1 2.3l-3.2 3.1q-0.9 0.9-2.3 1.2v-6.6z"/></g>
            </IconBase>
        );
    }
}
