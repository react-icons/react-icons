
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPortrait extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 20.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.8 1.6 3.7 3.7 3.7z m7.5 6.7c0-2.5-5-3.8-7.5-3.8s-7.5 1.3-7.5 3.8v1.2h15v-1.2z m4.2-22.1h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m0 26.7h-23.4v-23.4h23.4v23.4z"/></g>
            </IconBase>
        );
    }
}
