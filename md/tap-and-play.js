
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdTapAndPlay extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m28.4 1.7c1.8 0 3.2 1.5 3.2 3.3v28.4c0 1.8-1.4 3.2-3.2 3.2h-3.6c-0.1-2.3-0.7-4.5-1.5-6.6h5.1v-21.6h-16.8v10c-1.1-0.5-2.1-0.9-3.2-1.1v-12.3c0-1.8 1.4-3.4 3.2-3.4z m-25 18.3c10.1 0 18.2 8.2 18.2 18.4h-3.2c0-8.3-6.8-15-15-15v-3.4z m0 13.4c2.7 0 5 2.2 5 5h-5v-5z m0-6.8c6.4 0 11.6 5.3 11.6 11.8h-3.4c0-4.6-3.6-8.4-8.2-8.4v-3.4z"/></g>
            </IconBase>
        );
    }
}
