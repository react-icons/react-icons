
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAlarm extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.7 9.5l-7.7-6.4-2.1 2.6 7.6 6.4 2.2-2.6z m-23.6-3.8l-2.1-2.6-7.7 6.4 2.2 2.6 7.6-6.4z m7.7 7.6h-2.5v10l8 4.8 1.2-2.1-6.7-3.9v-8.8z m-0.8-6.6c-8.3 0-15 6.7-15 15s6.7 15 15 15c8.3 0 15-6.7 15-15s-6.7-15-15-15z m0 26.6c-6.4 0-11.7-5.2-11.7-11.6s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.6-11.7 11.6z"/></g>
            </IconBase>
        );
    }
}
