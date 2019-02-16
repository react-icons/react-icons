
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdCloudUpload extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m23.4 21.6h5l-8.4-8.2-8.4 8.2h5v6.8h6.8v-6.8z m8.9-4.9c4.3 0.3 7.7 3.9 7.7 8.3 0 4.6-3.7 8.4-8.4 8.4h-21.6c-5.5 0-10-4.5-10-10 0-5.2 3.9-9.4 8.9-10 2.1-3.9 6.3-6.8 11.1-6.8 6.1 0 11.1 4.3 12.3 10.1z"/></g>
            </IconBase>
        );
    }
}
