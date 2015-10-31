
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBackspace extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.7 5h-25c-1.2 0-2.1 0.6-2.7 1.5l-9 13.5 9 13.5c0.6 0.9 1.5 1.5 2.7 1.5h25c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-5 21l-2.4 2.3-6-5.9-5.9 5.9-2.4-2.3 6-6-6-6 2.4-2.3 5.9 6 6-6 2.4 2.3-6 6 6 6z"/></g>
            </IconBase>
        );
    }
}
