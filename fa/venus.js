
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaVenus extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m33.2 12.9q0 4.9-3.3 8.5t-8.1 4.2v5.8h5q0.3 0 0.5 0.2t0.2 0.5v1.5q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5h-5q-0.3 0-0.5-0.2t-0.2-0.5v-1.5q0-0.3 0.2-0.5t0.5-0.2h5v-5.8q-3.3-0.3-6-2.3t-4.2-5-1.2-6.5q0.3-3 1.8-5.5t4.1-4.2 5.5-2q3.8-0.4 7.1 1.2t5.3 4.7 1.9 6.9z m-22.8 0q0 4.1 2.9 7t7.1 3 7-3 3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1z"/></g>
            </IconBase>
        );
    }
}
