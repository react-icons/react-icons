
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMoveToInbox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m26.6 16.6l-6.6 6.8-6.6-6.8h3.2v-5h6.8v5h3.2z m5 8.4v-16.6h-23.3v16.6h6.7c0 2.7 2.3 5 5 5s5-2.3 5-5h6.6z m0-20c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.3c-1.9 0-3.3-1.6-3.3-3.4v-23.2c0-1.8 1.4-3.4 3.3-3.4h23.3z"/></g>
            </IconBase>
        );
    }
}
