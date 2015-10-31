
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPersonOutline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 9.8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.5-3.5-3.5 1.6-3.5 3.5-3.5m0 15c4.9 0 10.2 2.5 10.2 3.5v1.9h-20.4v-1.9c0-1 5.3-3.5 10.2-3.5m0-18.1c-3.7 0-6.7 3-6.7 6.6s3 6.7 6.7 6.7 6.7-3 6.7-6.7-3-6.6-6.7-6.6z m0 15c-4.4 0-13.3 2.2-13.3 6.6v5h26.6v-5c0-4.4-8.8-6.6-13.3-6.6z"/></g>
            </IconBase>
        );
    }
}
