
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoAlbum extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m10 31.6h20l-6.4-8.5-5 6.4-3.6-4.3z m0-25v13.4l4.1-2.5 4.3 2.5v-13.4h-8.4z m20-3.2c1.8 0 3.4 1.4 3.4 3.2v26.8c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2v-26.8c0-1.8 1.6-3.2 3.4-3.2h20z"/></g>
            </IconBase>
        );
    }
}
