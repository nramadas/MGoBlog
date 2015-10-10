import React    from "react";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";

const V = React.PropTypes;

const STYLE = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
        backgroundColor: COLORS.blue,
    },

    icon: {
        ...MIXINS.pickAbsolute(null, null, 5, 10),
        height: 40,
        width: 30,
        lineHeight: "40px",
        fontSize: 24,
        textAlign: "center",
        color: "white",
    },

    text: {
        ...MIXINS.pickAbsolute(null, null, 5, 53),
        height: 40,
        lineHeight: "40px",
        fontSize: 18,
        color: COLORS.maize,
    },
};

export default class Header extends React.Component {
    static propTypes = {
        onMenuClicked: V.func,
    };

    static defaultProps = {
        onMenuClicked: () => {},
    };

    render() {
        return (
            <div style={STYLE.container}>
                <i
                    className="fa fa-bars"
                    style={STYLE.icon}
                    onClick={this.props.onMenuClicked}
                />
                <div style={STYLE.text}>MGoBlog</div>
            </div>
        )
    }
}
