
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoMoveLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m0 32.5h7.5v-25h-7.5v25z m27.5-17.5v-7.5l-15 12.5 15 12.5v-7.5h12.5v-10h-12.5z"/></g>
            </IconBase>
        );
    }
}
