import React                from "react";
import Header               from "./Header";
import Content              from "./Content";
import Drawer               from "./Drawer";
import {COLORS}             from "./utils/styles";
import {MIXINS}             from "./utils/styles";
import createHeaderActions  from "./actions/header";
import createDrawerActions  from "./actions/drawer";

const V = React.PropTypes;
const ANIM_DUR = "0.3s";

const STYLE = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
    },

    main: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
        ...MIXINS.forceHardwareAcceleration(),
        ...MIXINS.transition({left: ANIM_DUR, right: ANIM_DUR}),
    },

    header: {
        ...MIXINS.pickAbsolute(0, 0, null, 0),
        ...MIXINS.boxShadow(COLORS.slate, 0, 0, "10px", 0),
        height: 50,
    },

    content: {
        ...MIXINS.pickAbsolute(50, 0, 0, 0),
    },

    drawer: {
        ...MIXINS.pickAbsolute(0, "100%", 0, "-100%"),
        ...MIXINS.forceHardwareAcceleration(),
        ...MIXINS.transition({left: ANIM_DUR, right: ANIM_DUR}),
        backgroundColor: "white",
    },
};

export default class App extends React.Component {
    static propTypes = {
        shouldRenderDrawer: V.bool.isRequired,
        currentViewType: V.string.isRequired,
        currentViewPage: V.number.isRequired,
    };

    render() {
        const headerActions = createHeaderActions(this.props.inventory, this.props.store);
        const drawerActions = createDrawerActions(this.props.inventory, this.props.store);

        const drawerStyle = {
            ...STYLE.drawer,
            left: this.props.shouldRenderDrawer ? 0 : "-100%",
            right: this.props.shouldRenderDrawer ? 0 : "100%",
        };

        const mainStyle = {
            ...STYLE.main,
            left: this.props.shouldRenderDrawer ? "100%" : 0,
            rigth: this.props.shouldRenderDrawer ? "-100%" : 0,
        };

        return (
            <div style={STYLE.container}>
                <div style={mainStyle}>
                    <div style={STYLE.header}>
                        <Header onMenuClicked={headerActions.fireMenuClick}/>
                    </div>
                    <div style={STYLE.content}>
                        <Content
                            viewType={this.props.currentViewType}
                            viewPage={this.props.currentViewPage}
                        />
                    </div>
                </div>
                <div style={drawerStyle}>
                    <Drawer
                        onMenuClose={headerActions.fireMenuClick}
                        onNavigateTo={(type) => {
                            drawerActions.fireDrawerItemClick(type);
                            headerActions.fireMenuClick();
                        }}
                    />
                </div>
            </div>
        )
    }
}
