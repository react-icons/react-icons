
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaStackOverflow extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.8 36.4h-25v-10.7h-3.6v14.3h32.1v-14.3h-3.5v10.7z m-21.1-11.7l0.8-3.5 17.5 3.7-0.8 3.5z m2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2z m4.5-8l2.3-2.7 13.7 11.4-2.3 2.8z m8.9-8.4l10.6 14.3-2.8 2.2-10.7-14.4z m-16 32.8v-3.5h17.8v3.5h-17.8z"/></g>
            </IconBase>
        );
    }
}
