
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaEraser extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.6 30.6l7-7.9h-16l-6.9 7.9h15.9z m21-22.3q0.4 0.7 0.2 1.5t-0.6 1.3l-18.6 21.3q-0.8 0.9-2 0.9h-15.9q-0.8 0-1.5-0.4t-1-1.2q-0.3-0.7-0.2-1.5t0.7-1.3l18.6-21.3q0.8-0.9 2-0.9h15.9q0.8 0 1.5 0.4t0.9 1.2z"/></g>
            </IconBase>
        );
    }
}
