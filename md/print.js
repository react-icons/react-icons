
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPrint extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 5v6.6h-20v-6.6h20z m1.6 15c1 0 1.8-0.7 1.8-1.6s-0.8-1.8-1.8-1.8-1.6 0.8-1.6 1.8 0.7 1.6 1.6 1.6z m-5 11.6v-8.2h-13.2v8.2h13.2z m5-18.2c2.8 0 5 2.2 5 5v10h-6.6v6.6h-20v-6.6h-6.6v-10c0-2.8 2.2-5 5-5h23.2z"/></g>
            </IconBase>
        );
    }
}
