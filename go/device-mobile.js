
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoDeviceMobile extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 0h-20c-1.4 0-2.5 1.1-2.5 2.5v35c0 1.4 1.1 2.5 2.5 2.5h20c1.4 0 2.5-1.1 2.5-2.5v-35c0-1.4-1.1-2.5-2.5-2.5z m-11.2 2.5h2.5c0.6 0 1.2 0.6 1.2 1.3s-0.6 1.2-1.2 1.2h-2.5c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3z m2.5 35h-2.5c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3h2.5c0.6 0 1.2 0.6 1.2 1.3s-0.6 1.2-1.2 1.2z m8.7-5h-20v-25h20v25z"/></g>
            </IconBase>
        );
    }
}
