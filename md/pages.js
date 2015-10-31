
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPages extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 8.3v10h8.3l-1.6-6.6 6.6 1.6v-8.3h-10c-1.8 0-3.3 1.5-3.3 3.3z m8.3 13.4h-8.3v10c0 1.8 1.5 3.3 3.3 3.3h10v-8.3l-6.6 1.6 1.6-6.6z m15 6.6l-6.6-1.6v8.3h10c1.8 0 3.3-1.5 3.3-3.3v-10h-8.3l1.6 6.6z m3.4-23.3h-10v8.3l6.6-1.6-1.6 6.6h8.3v-10c0-1.8-1.5-3.3-3.3-3.3z"/></g>
            </IconBase>
        );
    }
}
