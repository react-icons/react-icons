
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAddAlarm extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.1 5.7l-2.1-2.6-7.7 6.4 2.2 2.6 7.6-6.4z m23.6 3.8l-7.7-6.4-2.1 2.6 7.6 6.4 2.2-2.6z m-16.7-2.8c-8.3 0-15 6.7-15 15s6.7 15 15 15c8.3 0 15-6.7 15-15s-6.7-15-15-15z m0 26.6c-6.4 0-11.7-5.2-11.7-11.6s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.6-11.7 11.6z m1.7-18.3h-3.4v5h-5v3.3h5v5h3.4v-5h5v-3.3h-5v-5z"/></g>
            </IconBase>
        );
    }
}
