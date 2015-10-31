
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaGgCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16.2 28.6l5.7-5.8-5.8-5.8-1.9 1.8 4 4-2 2.1-5.9-5.9 5.9-5.9 0.9 0.8 1.8-1.8-2.7-2.7-9.6 9.6z m7.6-0.2l9.6-9.6-9.6-9.6-5.7 5.8 5.8 5.8 1.9-1.8-4-4 2-2.1 5.9 5.9-5.9 5.9-0.9-0.8-1.8 1.8z m15.1-9.5q0 3.8-1.5 7.3t-4 6.1-6.1 4-7.3 1.5-7.3-1.5-6.1-4-4-6.1-1.5-7.3 1.5-7.3 4-6.1 6.1-4 7.3-1.5 7.3 1.5 6.1 4 4 6.1 1.5 7.3z"/></g>
            </IconBase>
        );
    }
}
