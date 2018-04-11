export default () => {
    this.handles = [];

    this.addChangeListener = handleChange => {
        return this.handles.concat(handleChange);
    };

    this.removeChangeListener = handleChange => {
        return this.handles.splice(0, 1);
    };
};