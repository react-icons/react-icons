
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdNotifications extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 26.6l3.4 3.4v1.6h-26.8v-1.6l3.4-3.4v-8.2c0-5.2 2.7-9.4 7.5-10.6v-1.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1.2c4.8 1.2 7.5 5.5 7.5 10.6v8.2z m-10 10c-1.9 0-3.4-1.4-3.4-3.2h6.8c0 1.8-1.6 3.2-3.4 3.2z"/></g>
            </IconBase>
        );
    }
}
