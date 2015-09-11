var findReplace = function(string, find, replace) {

    //taking the inputted string and making it lowercase
    var lowerString = string.toLowerCase();

    //creating a regex object for using the replace() method case-insensitive
    var re = new RegExp(find, "ig");

    //determining if the find word is inside of string
    if (lowerString.search(find) !== -1)
    {
        //if return true, finalstring is string where find is replaced with replace
        //re is the regex object so that we can find a word regardless of case
        //replace() will word even if the word is next to punctuation
        var finalString = string.replace(re, replace);
    }

    return finalString;
};

$(document).ready(function() {
    $("form#replacer").submit(function(event) {
        var string = $("input#string").val();
        var find = $("input#find").val();
        var replace = $("input#replace").val();
        var result = findReplace(string, find, replace);

        $(".result").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
