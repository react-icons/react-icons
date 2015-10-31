
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdMyLocation extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 13.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7-3-6.7-6.7-6.7z m14.9 5c-0.8-6.9-6.3-12.4-13.2-13.2v-3.4h-3.4v3.4c-6.9 0.8-12.4 6.3-13.2 13.2h-3.4v3.4h3.4c0.8 6.9 6.3 12.4 13.2 13.2v3.4h3.4v-3.4c6.9-0.8 12.4-6.3 13.2-13.2h3.4v-3.4h-3.4z m-14.9 13.4c-6.4 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.7-11.7 11.7z"/></g>
            </IconBase>
        );
    }
}
