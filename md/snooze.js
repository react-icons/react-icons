
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSnooze extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.1 5.7l-2.1-2.6-7.7 6.4 2.2 2.6 7.6-6.4z m23.6 3.8l-7.7-6.4-2.1 2.6 7.6 6.4 2.2-2.6z m-16.7-2.8c-8.3 0-15 6.7-15 15s6.7 15 15 15c8.3 0 15-6.7 15-15s-6.7-15-15-15z m0 26.6c-6.4 0-11.7-5.2-11.7-11.6s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.6-11.7 11.6z m-5-15h6.1l-6.1 7v3h10v-3.3h-6.1l6.1-7v-3h-10v3.3z"/></g>
            </IconBase>
        );
    }
}
