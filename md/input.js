
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdInput extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 5h-30c-1.8 0-3.3 1.5-3.3 3.3v6.7h3.3v-6.7h30v23.4h-30v-6.7h-3.3v6.7c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-16.7 21.7l6.7-6.7-6.7-6.7v5h-16.6v3.4h16.6v5z"/></g>
            </IconBase>
        );
    }
}
