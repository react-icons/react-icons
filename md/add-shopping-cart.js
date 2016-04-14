
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAddShoppingCart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m12 24.6c0 0.2 0.1 0.4 0.3 0.4h19.3v3.4h-20c-1.8 0-3.2-1.6-3.2-3.4 0-0.5 0.1-1.1 0.3-1.6l2.3-4.1-6-12.7h-3.4v-3.2h5.5c1.1 2.2 2.1 4.4 3.1 6.6 1.4 2.8 2.7 5.6 4 8.4h11.7c2.2-3.9 4.4-7.8 6.4-11.8l2.9 1.7-6.4 11.6c-0.5 1-1.6 1.7-2.9 1.7h-12.4l-1.5 2.8z m16.4 5.4c1.8 0 3.2 1.6 3.2 3.4s-1.4 3.2-3.2 3.2-3.4-1.4-3.4-3.2 1.6-3.4 3.4-3.4z m-16.8 0c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.2-3.4 3.2-3.2-1.4-3.2-3.2 1.4-3.4 3.2-3.4z m6.8-15v-5h-5v-3.4h5v-5h3.2v5h5v3.4h-5v5h-3.2z"/></g>
            </IconBase>
        );
    }
}
