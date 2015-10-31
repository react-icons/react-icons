
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdLocalMovies extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 5v3.3h-3.3v-3.3h-13.4v3.3h-3.3v-3.3h-3.3v30h3.3v-3.3h3.3v3.3h13.4v-3.3h3.3v3.3h3.3v-30h-3.3z m-16.7 23.3h-3.3v-3.3h3.3v3.3z m0-6.6h-3.3v-3.4h3.3v3.4z m0-6.7h-3.3v-3.3h3.3v3.3z m16.7 13.3h-3.3v-3.3h3.3v3.3z m0-6.6h-3.3v-3.4h3.3v3.4z m0-6.7h-3.3v-3.3h3.3v3.3z"/></g>
            </IconBase>
        );
    }
}
