export default function exists(thing) {
    return (typeof thing !== "undefined" && thing !== undefined && thing !== null)
}
