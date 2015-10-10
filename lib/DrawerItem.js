import React    from "react";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";

const V = React.PropTypes;

const margin = 25;
const iconSize = 24;

const STYLE = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
    },

    icon: {
        ...MIXINS.pickAbsolute(margin, null, null, margin),
        height: iconSize,
        width: iconSize,
        textAlign: "center",
        lineHeight: `${iconSize}px`,
        color: COLORS.maize,
    },

    title: {
        ...MIXINS.pickAbsolute(margin, null, null, 2 * margin + iconSize),
        height: 24,
        lineHeight: `${iconSize}px`,
        color: COLORS.blue,
    },
};

export default class DrawerItem extends React.Component {
    static propTypes = {
        icon: V.string.isRequired,
        title: V.string.isRequired,
        onSelected: V.func,
    };

    static defaultProps = {
        onSelected: () => {},
    };

    render() {
        return (
            <div style={STYLE.container} onClick={this.props.onSelected}>
                <i className={`fa fa-${this.props.icon}`} style={STYLE.icon}/>
                <div style={STYLE.title}>{this.props.title}</div>
            </div>
        )
    }
}
