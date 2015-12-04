
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoFold extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m37.5 10h-8.75l-2.5 2.5h7.5l-5 5h-17.5l-5-5h7.5l-2.5-2.5h-8.75v2.5l6.25 6.25-6.25 6.25v2.5h8.75l2.5-2.5h-7.5l5-5h17.5l5 5h-7.5l2.5 2.5h8.75v-2.5l-6.25-6.25 6.25-6.25v-2.5z m-10-2.5h-5v-7.5h-5v7.5h-5l7.5 7.5 7.5-7.5z m-15 22.5h5v7.5h5v-7.5h5l-7.5-7.5-7.5 7.5z"/></g>
            </IconBase>
        );
    }
}
