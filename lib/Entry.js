import React    from "react";
import Spinner  from "./Spinner";
import {COLORS} from "./utils/styles";
import {MIXINS} from "./utils/styles";
import fetch    from "./utils/fetch";

const V = React.PropTypes;

const STYLE = {
    item: {

    },
};

const renderContent = (data) => {
    return (
        <div style={STYLE.item}>
            <div dangerouslySetInnerHTML={{
                __html: data.teaser,
            }}>
            </div>
        </div>
    )
};

export default class Entry extends React.Component {
    static propTypes = {
        postId: V.string.isRequired,
        title: V.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`/post/${this.props.postId}`)
            .then(data => this.setState(data));
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.data
                    ? renderContent(this.state.data)
                    : this.props.title}
            </div>
        )
    }
}
