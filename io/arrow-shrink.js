
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoArrowShrink extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 7.2l-6.4 6.4 3.9 3.9h-10v-10l3.9 3.9 6.4-6.4z m0 25.6l-2.2 2.2-6.4-6.4-3.9 3.9v-10h10l-3.9 3.9z m-30 0l6.4-6.4-3.9-3.9h10v10l-3.9-3.9-6.4 6.4z m0-25.6l2.2-2.2 6.4 6.4 3.9-3.9v10h-10l3.9-3.9z"/></g>
            </IconBase>
        );
    }
}
