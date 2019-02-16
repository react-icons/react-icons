
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoMilestone extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m31 7.5h-27.5v10h27.5l5-5-5-5z m-10 7.5h-5v-5h5v5z m0-15h-5v5h5v-5z m-5 40h5v-20h-5v20z"/></g>
            </IconBase>
        );
    }
}
