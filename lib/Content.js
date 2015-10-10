import React    from "react";
import Blog     from "./Blog";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";

const V = React.PropTypes;

const STYLE = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
    },
};

const renderPage = (viewType, viewPage) => {
    switch (viewType) {
        case "blog":
            return <Blog page={viewPage} />

        default:
            return null;
    }
};

export default class Content extends React.Component {
    static propTypes = {
        viewType: V.string.isRequired,
        viewPage: V.number.isRequired,
    };

    render() {
        return (
            <div style={STYLE.container}>
                {renderPage(this.props.viewType, this.props.viewPage)}
            </div>
        )
    }
}
