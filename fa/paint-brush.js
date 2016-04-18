
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPaintBrush extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36 0q1.6 0 2.8 1t1.2 2.6q0 1.4-1 3.4-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8l14.2-12.9q1.4-1.2 2.9-1.2z m-20.2 23.1q0.8 1.7 2.3 2.9t3.4 1.7l0 1.6q0.1 4.7-2.9 7.7t-7.8 3q-2.7 0-4.8-1t-3.4-2.9-2-4.1-0.6-4.9q0.2 0.1 0.9 0.7t1.4 1 1.3 0.8 1 0.4q1 0 1.3-0.8 0.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-0.6 2.8-0.2z"/></g>
            </IconBase>
        );
    }
}
