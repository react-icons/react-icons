
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoWand extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15 18.8l3.8-3.8 3.7 3.8-3.7 3.7z m-15 15l13.8-13.8 3.7 3.8-13.7 13.7z m17.5-26.3v-5h2.5v5h-2.5z m13.6 0.6l-3.5 3.5-1.8-1.7 3.6-3.5z m-21.2 3.5l-3.5-3.5 1.7-1.7 3.5 3.5z m19.5 19.5l-3.6-3.5 1.8-1.8 3.5 3.6z m0.6-11.1v-2.5h5v2.5h-5z"/></g>
            </IconBase>
        );
    }
}
