export default (inventory, store) => ({
    fireDrawerItemClick(type) {
        const contents = inventory.peek();

        store.emit({
            currentView: {
                type,
                params: {
                    page: 0,
                },
            },
        });
    },
});
