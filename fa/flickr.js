
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaFlickr extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30.1 2.7q2.5 0 4.3 1.8t1.8 4.3v20.2q0 2.5-1.8 4.3t-4.3 1.8h-20.2q-2.5 0-4.3-1.8t-1.8-4.3v-20.2q0-2.5 1.8-4.3t4.3-1.8h20.2z m-11.6 16.2q0-1.9-1.3-3.2t-3.1-1.3-3.2 1.3-1.3 3.2 1.3 3.2 3.2 1.3 3.1-1.3 1.3-3.2z m11.9 0q0-1.9-1.3-3.2t-3.2-1.3-3.1 1.3-1.3 3.2 1.3 3.2 3.1 1.3 3.2-1.3 1.3-3.2z"/></g>
            </IconBase>
        );
    }
}
