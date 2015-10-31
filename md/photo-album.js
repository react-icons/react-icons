
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPhotoAlbum extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 3.3h-20c-1.8 0-3.3 1.5-3.3 3.4v26.6c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4v-26.6c0-1.9-1.5-3.4-3.3-3.4z m-20 3.4h8.3v13.3l-4.1-2.5-4.2 2.5v-13.3z m0 25l5-6.5 3.6 4.3 5-6.4 6.4 8.6h-20z"/></g>
            </IconBase>
        );
    }
}
