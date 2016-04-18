
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdLibraryMusic extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m6.6 10v23.4h23.4v3.2h-23.4c-1.8 0-3.2-1.4-3.2-3.2v-23.4h3.2z m23.4 1.6v-3.2h-6.6v9.1c-0.7-0.6-1.6-0.9-2.5-0.9-2.3 0-4.3 2-4.3 4.3s2 4.1 4.3 4.1 4.1-1.9 4.1-4.1v-9.3h5z m3.4-8.2c1.8 0 3.2 1.4 3.2 3.2v20c0 1.8-1.4 3.4-3.2 3.4h-20c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.2 3.4-3.2h20z"/></g>
            </IconBase>
        );
    }
}
