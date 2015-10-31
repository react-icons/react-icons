
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiDivide extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><circle cx="20" cy="10" r="3.75"/><circle cx="20" cy="30" r="3.75"/><path d="m30 16.7h-20c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h20c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z"/></g>
            </IconBase>
        );
    }
}
