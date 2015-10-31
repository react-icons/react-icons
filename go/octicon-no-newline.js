
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoOcticonNoNewline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 12.5v7.5c0 1.4-1.1 2.5-2.5 2.5h-7.5v5l-7.5-7.5 7.5-7.5v5h5v-5h5z m-20 7.5c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z m-16.2 4.1l10.3-10.4c-1.2-0.7-2.6-1.2-4.1-1.2-4.1 0-7.5 3.4-7.5 7.5 0 1.5 0.5 2.9 1.3 4.1z m13.7-4.1c0-1.5-0.5-2.9-1.2-4.1l-10.4 10.3c1.2 0.8 2.6 1.3 4.1 1.3 4.1 0 7.5-3.4 7.5-7.5z"/></g>
            </IconBase>
        );
    }
}
