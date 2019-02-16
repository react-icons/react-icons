
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBackspace extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31.6 26l-5.9-6 5.9-6-2.3-2.4-5.9 6.1-6.1-6.1-2.3 2.4 6 6-6 6 2.3 2.4 6.1-6.1 5.9 6.1z m5-21c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-25c-1.1 0-2-0.6-2.6-1.5l-9-13.5 9-13.5c0.6-0.9 1.5-1.5 2.6-1.5h25z"/></g>
            </IconBase>
        );
    }
}
