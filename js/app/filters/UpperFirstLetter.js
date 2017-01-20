function UpperFirstLetter() {
    return function(str){

            return str.slice(0,1).toUpperCase() + str.slice(1);

    }
}

angular
    .module('app')
    .filter('upperFirstLetter', UpperFirstLetter);