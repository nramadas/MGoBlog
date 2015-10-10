import exists   from "./exists";
import map      from "lodash/collection/map";

export const COLORS = {
    maize: "#ffcb05",
    blue: "#00274c",
    white: "#eff0f1",
    slate: "#333333",
    red: "#7a121c",
};

const pickPosition = (position, top, right, bottom, left) => {
    return {
        position,
        top: exists(top) ? top : null,
        right: exists(right) ? right : null,
        bottom: exists(bottom) ? bottom : null,
        left: exists(left) ? left : null,
    }
};

export const MIXINS = {
    pickAbsolute(top, right, bottom, left) {
        return pickPosition("absolute", top, right, bottom, left);
    },

    pickFixed(top, right, bottom, left) {
        return pickPosition("fixed", top, right, bottom, left);
    },

    pickRelative(top, right, bottom, left) {
        return pickPosition("relative", top, right, bottom, left);
    },

    boxShadow(color, hshadow, vshadow, blur, spread, inset) {
        const getDefault = (value, def) => exists(value) ? value : def;
        const str = `${color} ${getDefault(hshadow, 0)} ${getDefault(vshadow, 0)} ${getDefault(blur, "")} ${getDefault(spread, "")} ${getDefault(inset, "")}`
        return {
            WebkitBoxShadow: str,
            MozBoxShadow: str,
            boxShadow: str,
        }
    },

    forceHardwareAcceleration() {
        return {
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
        };
    },

    transition(properties={}) {
        let str = map(properties, (value, key) => `${key} ${value}`).join(", ");

        return {
            WebkitTransition: `-webkit-transform, ${str}`,
            MozTransition: `-moz-transform, ${str}`,
            transition: `transform, ${str}`,
        };
    },
};
