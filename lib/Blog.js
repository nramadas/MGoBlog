import React    from "react";
import Spinner  from "./Spinner";
import Entry    from "./Entry";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";
import fetch    from "./utils/fetch";

const V = React.PropTypes;

const STYLE = {
    entry: {
        position: "relative",
        padding: 10,
        borderBottom: `1px solid ${COLORS.white}`,
    },
};

const renderContent = (data) => {
    return data.map(({nid, title}) => {
        return (
            <div>
                <Entry postId={nid} title={title}/>
            </div>
        );
    })
};

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`/homepage/${this.props.page}`)
            .then(data => this.setState({data}));
    }

    render() {
        return (
            <div>
                {this.state.data ? renderContent(this.state.data) : <Spinner />}
            </div>
        )
    }
}
