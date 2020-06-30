class Store {
    get(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    set(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    del(name) {
        localStorage.removeItem(name);
    }

    clear() {
        localStorage.clear();
    }
}

export default new Store();
