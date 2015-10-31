
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiPlus extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 16.7h-6.7v-6.7c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3l0.1 6.7h-6.8c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3l6.8-0.1-0.1 6.8c0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3v-6.8l6.7 0.1c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z"/></g>
            </IconBase>
        );
    }
}
