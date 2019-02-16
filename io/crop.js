
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoCrop extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 37.5v-3.7h5v3.7h-5z m5-10h5v5h-30v-20h-5v-5h5v-5h5v25h15v-15h-13.7v-5h18.7v20z"/></g>
            </IconBase>
        );
    }
}
