
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoUnfold extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.5 15h5v-7.5h5l-7.5-7.5-7.5 7.5h5v7.5z m7.5-5v2.5h8.8l-5 5h-17.5l-5-5h8.7v-2.5h-12.5v2.5l6.3 6.3-6.3 6.2v2.5h12.5v-2.5h-8.7l5-5h17.5l5 5h-8.8v2.5h12.5v-2.5l-6.2-6.2 6.2-6.3v-2.5h-12.5z m-2.5 12.5h-5v7.5h-5l7.5 7.5 7.5-7.5h-5v-7.5z"/></g>
            </IconBase>
        );
    }
}
