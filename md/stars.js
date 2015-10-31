
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdStars extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7c9.2 0 16.7-7.5 16.7-16.7s-7.5-16.7-16.7-16.7z m7.1 26.7l-7.1-4.2-7.1 4.2 1.9-8-6.2-5.4 8.2-0.7 3.2-7.6 3.2 7.6 8.2 0.7-6.2 5.4 1.9 8z"/></g>
            </IconBase>
        );
    }
}
