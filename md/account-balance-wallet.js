
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAccountBalanceWallet extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m26.6 22.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-6.6 4.1v-13.2h16.6v13.2h-16.6z m15 3.4v1.6c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h23.2c1.8 0 3.4 1.6 3.4 3.4v1.6h-15c-1.9 0-3.4 1.6-3.4 3.4v13.2c0 1.8 1.5 3.4 3.4 3.4h15z"/></g>
            </IconBase>
        );
    }
}
