// Helper for the easy management of the local storage

const separator = "|";

const getStoredArray = (key) => {
    if (
        typeof localStorage.getItem(key) !== "undefined" &&
        localStorage.getItem(key) !== null
    ) {
        return localStorage
            .getItem(key)
            .split(separator)
            .filter((item) => item.length > 0);
    }
    return [];
};

const StorageHelper = {
    addElement: (item, key) => {
        if (localStorage.getItem(key) != null) {
            localStorage.setItem(
                key,
                localStorage.getItem(key) + item + separator
            );
        } else {
            localStorage.setItem(key, item + separator);
        }
    },

    deleteElement: (item, key) => {
        let store = localStorage.getItem(key);

        localStorage.setItem(key, store.replace(item + separator, ""));
    },

    isFavorited: (item, key) => {
        const store = getStoredArray(key);

        if (store.indexOf(item) > -1) {
            return true;
        }
        return false;
    },
};
export default StorageHelper;
