
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAddAPhoto extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m16.3 23.4c0-3 2.4-5.4 5.3-5.4s5.4 2.4 5.4 5.4-2.4 5.3-5.4 5.3-5.3-2.4-5.3-5.3z m5.3 8.2c4.7 0 8.4-3.6 8.4-8.2s-3.7-8.4-8.4-8.4-8.2 3.8-8.2 8.4 3.6 8.2 8.2 8.2z m-11.6-15v-5h5v-5h11.6l3.1 3.4h5.3c1.8 0 3.4 1.6 3.4 3.4v20c0 1.8-1.6 3.2-3.4 3.2h-26.6c-1.8 0-3.4-1.4-3.4-3.2v-16.8h5z m-5-10v-5h3.4v5h5v3.4h-5v5h-3.4v-5h-5v-3.4h5z"/></g>
            </IconBase>
        );
    }
}
