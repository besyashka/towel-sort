//function towelSort()

module.exports = function towelSort (matrix=[]) {
    const arr = [];
    const result = [];

    if(matrix.length === 0) {
        return arr;
    }

    matrix.forEach((item, index) => {
        if(index % 2 === 0) {
           arr.push(item);
        } else {
           arr.push(item.reverse());
        }
    })
    return result.concat(...arr);
}
