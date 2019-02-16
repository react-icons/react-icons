
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFlag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m24 10h9.4v16.6h-11.8l-0.6-3.2h-9.4v11.6h-3.2v-28.4h15z"/></g>
            </IconBase>
        );
    }
}
