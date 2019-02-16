
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdThumbUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m38.4 16.6l-0.1 0.2h0.1v3.2c0 0.5-0.1 0.9-0.3 1.3l-5.1 11.7c-0.4 1.1-1.6 2-3 2h-15c-1.8 0-3.4-1.6-3.4-3.4v-16.6c0-0.9 0.4-1.7 1.1-2.3l10.9-11.1 1.8 1.8c0.5 0.5 0.7 1.1 0.7 1.8v0.5l-1.6 7.7h10.5c1.8 0 3.4 1.4 3.4 3.2z m-36.8 18.4v-20h6.8v20h-6.8z"/></g>
            </IconBase>
        );
    }
}
