import React        from "react";
import DrawerItem   from "./DrawerItem";
import {COLORS}     from "./utils/styles";
import {MIXINS}     from "./utils/styles";

const V = React.PropTypes;

const STYLE = {
    constainer: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
    },

    header: {
        ...MIXINS.pickAbsolute(0, 0, null, 0),
        ...MIXINS.boxShadow(COLORS.slate, 0, 0, "10px", 0),
        height: 50,
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

    title: {
        ...MIXINS.pickAbsolute(null, null, 5, 53),
        height: 40,
        lineHeight: "40px",
        fontSize: 18,
        color: COLORS.maize,
    },

    content: {
        ...MIXINS.pickAbsolute(50, 0, 0, 0),
    },

    item: {
        position: "relative",
        height: 74,
        borderBottom: `1px solid ${COLORS.white}`,
    },
};

export default class Drawer extends React.Component {
    static propTypes = {
        onMenuClose: V.func,
        onNavigateTo: V.func,
    };

    static defaultProps = {
        onMenuClose: () => {},
        onNavigateTo: () => {},
    };

    render() {
        return (
            <div>
                <div style={STYLE.header}>
                    <i
                        className="fa fa-angle-left"
                        style={STYLE.icon}
                        onClick={this.props.onMenuClose}
                    />
                    <div style={STYLE.title}>
                        Main Menu
                    </div>
                </div>
                <div style={STYLE.content}>
                    {[
                        {icon: "pie-chart", title: "The Blog", type: "blog"},
                        {icon: "server", title: "Boards", type: "boards"},
                        {icon: "book", title: "Diaries", type: "diaries"},
                    ].map(({icon, title, type}) => {
                        return (
                            <div style={STYLE.item} key={title}>
                                <DrawerItem
                                    icon={icon}
                                    title={title}
                                    onSelected={() => this.props.onNavigateTo(type)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
