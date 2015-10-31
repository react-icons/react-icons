
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDirections extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m36.2 18.8l-15-15c-0.7-0.6-1.7-0.6-2.4 0l-15 15c-0.6 0.7-0.6 1.7 0 2.4l15 15c0.7 0.6 1.7 0.6 2.4 0l15-15c0.6-0.7 0.6-1.7 0-2.4z m-12.9 5.4v-4.2h-6.6v5h-3.4v-6.7c0-0.9 0.8-1.6 1.7-1.6h8.3v-4.2l5.9 5.8-5.9 5.9z"/></g>
            </IconBase>
        );
    }
}
