
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoOcticonTag extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m19.3 6.8c-1.1-1.1-2.7-1.8-4.4-1.8h-6.1c-3.5 0-6.3 2.8-6.3 6.2v6.2c0 1.7 0.7 3.3 1.8 4.4l15.2 15.2c1 1 2.5 1 3.5 0l11.5-11.5c1-1 1-2.5 0-3.5l-15.2-15.2z m-13.4 13.4c-0.7-0.7-1.1-1.7-1.1-2.8v-6.2c0-2.1 1.8-3.9 4-3.9h6.1c1.1 0 2.1 0.4 2.8 1.1l15.4 15.3-11.9 11.9-15.3-15.4z m1.6-10.2h5v5h-5v-5z"/></g>
            </IconBase>
        );
    }
}
