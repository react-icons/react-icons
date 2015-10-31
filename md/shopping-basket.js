
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdShoppingBasket extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m28.7 15l-7.3-10.9c-0.3-0.5-0.9-0.7-1.4-0.7-0.5 0-1.1 0.2-1.4 0.7l-7.3 10.9h-8c-0.9 0-1.6 0.8-1.6 1.7 0 0.1 0 0.3 0 0.4l4.3 15.5c0.4 1.4 1.6 2.4 3.2 2.4h21.6c1.6 0 2.9-1 3.3-2.4l4.2-15.5 0-0.4c0-0.9-0.7-1.7-1.6-1.7h-8z m-13.7 0l5-7.3 5 7.3h-10z m5 13.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z"/></g>
            </IconBase>
        );
    }
}
