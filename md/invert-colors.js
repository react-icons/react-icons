
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdInvertColors extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m29.4 13.2l-9.4-9.4-9.4 9.4c-5.2 5.2-5.2 13.7 0 18.9 2.6 2.6 6 3.9 9.4 3.9 3.4 0 6.8-1.3 9.4-3.9 5.2-5.2 5.2-13.7 0-18.9z m-9.4 19.4c-2.7 0-5.2-1-7.1-2.9-1.9-1.9-2.9-4.4-2.9-7s1-5.2 2.9-7.1l7.1-7.1v24.2z"/></g>
            </IconBase>
        );
    }
}
