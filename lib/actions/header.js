export default (inventory, store) => ({
    fireMenuClick() {
        const contents = inventory.peek();

        store.emit({
            drawer: {
                isOpen: !contents.drawer.isOpen,
            },
        });
    },
});
