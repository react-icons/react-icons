
var React = require('react');
var IconBase = require('../IconBase');

export default class TiChartArea extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M20 6c0-.587-.257-1.167-.75-1.562-.863-.69-2.121-.551-2.812.312l-2.789 3.486-2.449-1.836c-.864-.648-2.087-.493-2.762.351l-4 5c-.294.368-.438.811-.438 1.249v3h16v-10zM20 19h-16c-.552 0-1 .447-1 1s.448 1 1 1h16c.552 0 1-.447 1-1s-.448-1-1-1z"/></g>
            </IconBase>
        );
    }
}
