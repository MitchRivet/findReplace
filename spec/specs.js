describe('findReplace', function() {

    it("recognizes a word in a one word sentence and replaces it with a new word", function() {
        expect(findReplace("hello", "hello", "goodbye")).to.equal("goodbye");
    });

});
