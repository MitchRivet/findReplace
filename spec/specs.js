describe('findReplace', function() {

    it("recognizes a word in a one word sentence and replaces it with a new word", function() {
        expect(findReplace("hello", "hello", "goodbye")).to.equal("goodbye");
    });

    it("recognizes a word in a two word sentence and replaces it with a new word", function() {
        expect(findReplace("hello friend", "hello", "goodbye")).to.equal("goodbye friend");
    });

    it("recognizes a word in a much longer sentence", function() {
        expect(findReplace("hi there big guy its me jason", "guy", "girl")).to.equal("hi there big girl its me jason");
    });

    it("recognizes word when the word is capitalized", function() {
        expect(findReplace("Hi there big guy its me Jason", "jason", "Ramone")).to.equal("Hi there big guy its me Ramone");
    });

});
