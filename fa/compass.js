
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCompass extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.3 23l5.4-2.7-5.4-2.7v5.4z m8.1-12.5v11.4l-10.8 5.4v-11.4z m6.1 8.4q0-3.1-1.6-5.8t-4.1-4.1-5.8-1.6-5.8 1.6-4.1 4.1-1.6 5.8 1.6 5.8 4.1 4.1 5.8 1.6 5.8-1.6 4.1-4.1 1.6-5.8z m4.7 0q0 4.4-2.2 8.1t-5.9 5.9-8.1 2.2-8.1-2.2-5.9-5.9-2.2-8.1 2.2-8.1 5.9-5.9 8.1-2.2 8.1 2.2 5.9 5.9 2.2 8.1z"/></g>
            </IconBase>
        );
    }
}
