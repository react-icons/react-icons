
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPieChart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.3 19l9.5 9.5q-1.8 1.8-4.3 2.9t-5.2 1q-3.6 0-6.7-1.8t-4.8-4.8q-1.8-3.1-1.8-6.7t1.8-6.7q1.8-3.1 4.8-4.8t6.7-1.8v13.2z m3.3 0.1h13.4q0 2.7-1 5.2t-3 4.3l-9.4-9.5z m12.3-2.2h-13.3v-13.4q3.6 0 6.6 1.8t4.9 4.9q1.8 3 1.8 6.7z"/></g>
            </IconBase>
        );
    }
}
