const strContains = (first, second) => {
    console.log(first, second);
    first = first.toLowerCase();
    second = second.toLowerCase();

    if(first.includes(second)){
        return true;
    } else {
        return false; 
    }
};

export default strContains;