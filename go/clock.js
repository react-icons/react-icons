
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoClock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 22.5h10l2.5-2.5-2.5-2.5h-5v-7.5l-2.5-2.5-2.5 2.5v12.5z m2.5-20c-9.7 0-17.5 7.8-17.5 17.5s7.8 17.5 17.5 17.5 17.5-7.8 17.5-17.5-7.8-17.5-17.5-17.5z m0 30c-6.9 0-12.5-5.6-12.5-12.5 0-6.9 5.6-12.5 12.5-12.5 6.9 0 12.5 5.6 12.5 12.5 0 6.9-5.6 12.5-12.5 12.5z"/></g>
            </IconBase>
        );
    }
}
