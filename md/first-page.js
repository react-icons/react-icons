
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdFirstPage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m10 10h3.4v20h-3.4v-20z m20.7 17.7l-2.3 2.3-10-10 10-10 2.3 2.3-7.7 7.7z"/></g>
            </IconBase>
        );
    }
}
