
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoOcticonGraph extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 35v2.5h-40v-37.5h2.5v35h37.5z m-27.5-2.5h-5v-12.5h5v12.5z m10 0h-5v-25h5v25z m10 0h-5v-17.5h5v17.5z"/></g>
            </IconBase>
        );
    }
}
