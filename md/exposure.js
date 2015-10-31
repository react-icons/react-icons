
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdExposure extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 28.3v3.4h3.3v-3.4h3.4v-3.3h-3.4v-3.3h-3.3v3.3h-3.3v3.3h3.3z m8.3-25h-26.6c-1.9 0-3.4 1.5-3.4 3.4v26.6c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-26.6c0-1.9-1.5-3.4-3.4-3.4z m-25 5h10v3.4h-10v-3.4z m25 25h-26.6l26.6-26.6v26.6z"/></g>
            </IconBase>
        );
    }
}
