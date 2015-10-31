
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdSyncProblem extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m5 20c0 3.7 1.5 7 3.9 9.4l-3.9 3.9h10v-10l-3.7 3.8c-1.8-1.8-3-4.3-3-7.1 0-4.3 2.8-8.1 6.7-9.4v-3.5c-5.7 1.5-10 6.7-10 12.9z m13.3 8.3h3.4v-3.3h-3.4v3.3z m16.7-21.6h-10v10l3.7-3.8c1.8 1.9 3 4.3 3 7.1 0 4.4-2.8 8.1-6.7 9.4v3.5c5.8-1.5 10-6.7 10-12.9 0-3.7-1.5-7-3.9-9.4l3.9-3.9z m-16.7 15h3.4v-10h-3.4v10z"/></g>
            </IconBase>
        );
    }
}
