
let React = require('react');
let IconBase = require('react-icon-base');

export default class TiCancel extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 6.7c-7.4 0-13.3 6-13.3 13.3s6 13.3 13.3 13.3 13.3-5.9 13.3-13.3-5.9-13.3-13.3-13.3z m-8.3 13.3c0-1.4 0.3-2.7 0.9-3.8l11.2 11.2c-1.1 0.6-2.4 0.9-3.8 0.9-4.6 0-8.3-3.7-8.3-8.3z m15.7 3.8l-11.2-11.2c1.1-0.6 2.4-0.9 3.8-0.9 4.6 0 8.3 3.7 8.3 8.3 0 1.4-0.3 2.7-0.9 3.8z"/></g>
            </IconBase>
        );
    }
}
