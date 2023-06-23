const toNumeric = (value) => {
    try {
        value = value.replace(/,/g, "");
        value = parseInt(value);
        return value;
    } catch (error) {
        return -1;
    }
     
    }

export { 
    toNumeric 
};