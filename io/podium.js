
let React = require('react');
let IconBase = require('react-icon-base');

export default class IoPodium extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m0 35v-15h10v15h-10z m12.5 0v-22.5h10v22.5h-10z m12.5 0v-10h10v10h-10z"/></g>
            </IconBase>
        );
    }
}
