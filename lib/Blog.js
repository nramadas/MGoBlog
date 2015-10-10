import React    from "react";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";
import fetch    from "./utils/fetch";

const V = React.PropTypes;

export default class Blog extends React.Component {
    componentDidMount() {
        fetch(`/homepage/${this.props.page}`)
            .then(stuff => console.log(stuff));
    }

    render() {
        return (
            <div></div>
        )
    }
}
