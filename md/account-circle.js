
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAccountCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m0 5c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z m0 23.7c-4.2 0-7.9-2.1-10-5.4 0.1-3.3 6.7-5.1 10-5.1 3.3 0 9.9 1.8 10 5.1-2.1 3.3-5.8 5.4-10 5.4z"/></g>
            </IconBase>
        );
    }
}
