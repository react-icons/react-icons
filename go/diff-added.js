
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoDiffAdded extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.5 12.5h-5v5h-5v5h5v5h5v-5h5v-5h-5v-5z m12.5-10h-30s-2.5 1.3-2.5 2.5v30s1.3 2.5 2.5 2.5h30s2.5-1.2 2.5-2.5v-30s-1.2-2.5-2.5-2.5z m-2.5 28.8c0 0.6-0.7 1.2-1.2 1.2h-22.5s-1.3-0.5-1.3-1.2v-22.5s0.6-1.3 1.3-1.3h22.5s1.2 0.6 1.2 1.3v22.5z"/></g>
            </IconBase>
        );
    }
}
