
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBlock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 33.4c7.3 0 13.4-6.1 13.4-13.4 0-3-1.1-5.9-2.9-8.2l-18.7 18.7c2.3 1.8 5.2 2.9 8.2 2.9z m-13.4-13.4c0 3 1.1 5.9 2.9 8.2l18.7-18.7c-2.3-1.8-5.2-2.9-8.2-2.9-7.3 0-13.4 6.1-13.4 13.4z m13.4-16.6c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"/></g>
            </IconBase>
        );
    }
}
