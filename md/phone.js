
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhone extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m11 18c2.4 4.7 6.3 8.6 11 11l3.7-3.7c0.4-0.4 1.1-0.6 1.7-0.4 1.9 0.6 3.9 1 5.9 1 1 0 1.7 0.7 1.7 1.6v5.8c0 1-0.7 1.7-1.7 1.7-15.6 0-28.3-12.7-28.3-28.3 0-1 0.8-1.7 1.7-1.7h5.8c0.9 0 1.7 0.7 1.7 1.7 0 2 0.3 4 0.9 5.9 0.2 0.6 0.1 1.2-0.4 1.7l-3.7 3.7z"/></g>
            </IconBase>
        );
    }
}
