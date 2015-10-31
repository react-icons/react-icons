
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdStarBorder extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.7 15.4l-12-1-4.7-11.1-4.7 11.1-12 1 9.1 7.9-2.7 11.7 10.3-6.2 10.3 6.2-2.7-11.7 9.1-7.9z m-16.7 10.3l-6.3 3.8 1.7-7.2-5.5-4.8 7.3-0.6 2.8-6.7 2.9 6.7 7.3 0.6-5.6 4.8 1.7 7.2-6.3-3.8z"/></g>
            </IconBase>
        );
    }
}
