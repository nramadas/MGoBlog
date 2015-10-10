import React    from "react";
import {MIXINS} from "./utils/styles";

const V = React.PropTypes;

export default class ConditionalRender extends React.Component {
    static propTypes = {
        shouldRenderChildren: V.bool.isRequired,
    };

    render() {
        return (
            <div>
                {this.props.shouldRenderChildren ? this.props.children : null}
            </div>
        )
    }
}
