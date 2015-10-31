
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoOcticonPerson extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m27.5 15h-15c-1.4 0-2.5 1.1-2.5 2.5v12.5h5v7.5c0 1.4 1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5v-7.5h5v-12.5c0-1.4-1.1-2.5-2.5-2.5z m0 12.5h-2.5v-5h-2.5v15h-5v-15h-2.5v5h-2.5v-10h15v10z m0-20c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5 3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5z m-7.5 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></g>
            </IconBase>
        );
    }
}
