
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBlock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m-13.3 16.7c0-7.4 5.9-13.3 13.3-13.3 3.1 0 5.9 1 8.2 2.8l-18.7 18.7c-1.8-2.3-2.8-5.1-2.8-8.2z m13.3 13.3c-3.1 0-5.9-1-8.2-2.8l18.7-18.7c1.8 2.3 2.8 5.1 2.8 8.2 0 7.4-5.9 13.3-13.3 13.3z"/></g>
            </IconBase>
        );
    }
}
