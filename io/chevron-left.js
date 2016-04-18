
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoChevronLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m16.7 20l13.1 13.6c0.3 0.3 0.3 0.9 0 1.2l-2.4 2.5c-0.3 0.3-0.9 0.3-1.2 0l-16-16.7c-0.1-0.1-0.2-0.4-0.2-0.6s0.1-0.5 0.2-0.6l16-16.7c0.3-0.3 0.9-0.2 1.2 0.1l2.4 2.4c0.3 0.3 0.3 0.9 0 1.2l-13.1 13.6z"/></g>
            </IconBase>
        );
    }
}
