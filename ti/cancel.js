
var React = require('react');
var IconBase = require('../IconBase');

export default class TiCancel extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711c-.691.36-1.463.584-2.295.584-2.757 0-5-2.243-5-5zm9.416 2.295l-6.711-6.711c.691-.36 1.463-.584 2.295-.584 2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z"/></g>
            </IconBase>
        );
    }
}
