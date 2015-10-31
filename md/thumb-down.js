
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdThumbDown extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m25 5h-15c-1.4 0-2.6 0.8-3.1 2l-5 11.8c-0.1 0.4-0.2 0.8-0.2 1.2v3.2l0 0 0 0.1c0 1.9 1.5 3.4 3.3 3.4h10.5l-1.6 7.6 0 0.5c0 0.7 0.3 1.3 0.7 1.8l1.8 1.7 11-10.9c0.6-0.6 0.9-1.5 0.9-2.4v-16.7c0-1.8-1.5-3.3-3.3-3.3z m6.7 0v20h6.6v-20h-6.6z"/></g>
            </IconBase>
        );
    }
}
