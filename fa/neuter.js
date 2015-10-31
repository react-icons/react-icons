
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaNeuter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.8 12.2q0 4.6-3.1 8.1t-7.7 3.9v12.9q0 0.3-0.2 0.5t-0.5 0.2h-1.3q-0.3 0-0.5-0.2t-0.2-0.5v-12.9q-4.6-0.5-7.7-3.9t-3.1-8.1q0-2.5 1-4.8t2.6-3.8 3.8-2.6 4.7-1 4.8 1 3.8 2.6 2.6 3.8 1 4.8z m-12.2 9.4q4 0 6.7-2.8t2.8-6.6-2.8-6.7-6.7-2.8-6.6 2.8-2.8 6.7 2.8 6.6 6.6 2.8z"/></g>
            </IconBase>
        );
    }
}
