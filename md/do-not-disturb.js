
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDoNotDisturb extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m0 30c-7.4 0-13.3-5.9-13.3-13.3 0-3.1 1-5.9 2.8-8.2l18.7 18.7c-2.3 1.8-5.1 2.8-8.2 2.8z m10.5-5.1l-18.7-18.7c2.3-1.8 5.1-2.8 8.2-2.8 7.4 0 13.3 5.9 13.3 13.3 0 3.1-1 5.9-2.8 8.2z"/></g>
            </IconBase>
        );
    }
}
