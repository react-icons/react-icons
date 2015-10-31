
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBorderOuter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.7 11.7h-3.4v3.3h3.4v-3.3z m0 6.6h-3.4v3.4h3.4v-3.4z m6.6 0h-3.3v3.4h3.3v-3.4z m-23.3-13.3v30h30v-30h-30z m26.7 26.7h-23.4v-23.4h23.4v23.4z m-10-6.7h-3.4v3.3h3.4v-3.3z m-6.7-6.7h-3.3v3.4h3.3v-3.4z"/></g>
            </IconBase>
        );
    }
}
