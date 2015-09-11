var findReplace = function(string, find, replace) {

    //determining if the find word is inside of string
    if (string.indexOf(find) !== -1)
    {
        //if return true, finalstring is string where find is replaced with replace 
        var finalString = string.replace(find, replace)
    }

    return finalString;


};
