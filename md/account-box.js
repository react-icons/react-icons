
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAccountBox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 8.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3h-23.4c-1.8 0-3.3 1.5-3.3 3.3z m20 6.7c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z m-15 13.3c0-3.3 6.7-5.1 10-5.1s10 1.8 10 5.1v1.7h-20v-1.7z"/></g>
            </IconBase>
        );
    }
}
