
var React = require('react');
var IconBase = require('../IconBase');

export default class MdHourglassFull extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></g>
            </IconBase>
        );
    }
}
