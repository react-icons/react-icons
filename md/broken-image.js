
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBrokenImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 8.3v11l-5-5-6.7 6.7-6.6-6.7-6.7 6.7-5-5v-7.7c0-1.8 1.5-3.3 3.3-3.3h23.4c1.8 0 3.3 1.5 3.3 3.3z m-5 10.7l5 5.1v7.6c0 1.8-1.5 3.3-3.3 3.3h-23.4c-1.8 0-3.3-1.5-3.3-3.3v-11l5 5 6.7-6.7 6.6 6.7 6.7-6.7z"/></g>
            </IconBase>
        );
    }
}
