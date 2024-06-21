String.prototype.camelCase = function () {
    return this.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}


console.log("say hello".camelCase());