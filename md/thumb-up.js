
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdThumbUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m1.7 35h6.6v-20h-6.6v20z m36.6-18.3c0-1.9-1.5-3.4-3.3-3.4h-10.5l1.6-7.6 0-0.5c0-0.7-0.3-1.3-0.7-1.8l-1.8-1.7-10.9 11c-0.7 0.6-1 1.4-1 2.3v16.7c0 1.8 1.5 3.3 3.3 3.3h15c1.4 0 2.6-0.8 3.1-2l5-11.8c0.2-0.4 0.2-0.8 0.2-1.2v-3.2l0 0 0-0.1z"/></g>
            </IconBase>
        );
    }
}
