import ReactDOM         from "react-dom";
import React            from "react";
import Inventory        from "storablejs/Inventory";
import Manager          from "storablejs/Manager";
import Store            from "storablejs/Store";
import StoreDebugger    from "storable-react/StoreDebugger";
import Connect          from "storable-react/Connect";
import App              from "./App.js";

window.createApp = (container) => {
    const initialState = {
        drawer: {
            isOpen: false,
        },

        currentView: {
            type: "blog",
            params: {
                page: 0,
            },
        },
    };

    const inventory = new Inventory();
    const manager = new Manager(inventory);
    const store = new Store(inventory, manager);
    store.emit(initialState);

    ReactDOM.render(
        <div>
            <Connect store={store} keyPaths={[
                ["drawer", "isOpen", {alias: "shouldRenderDrawer"}],
                ["currentView", "type", {alias: "currentViewType"}],
                ["currentView", "params", "page", {alias: "currentViewPage"}],
            ]}>
                <App inventory={inventory} store={store}/>
            </Connect>
            <StoreDebugger manager={manager} />
        </div>
    , container);
}
