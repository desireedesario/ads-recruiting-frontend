describe('chatApp homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://desireedesario.com/ads-recruiting-frontend/#/');
    element(by.model("vm.userHold.name").sendKeys("Alex"));

  });
});

//a container to test cases
// describe("test entering into an input box", function(){
//   it("testing the input box", function(){
//     browser.get("http://desireedesario.com/ads-recruiting-frontend/#/")
//     element(by.model("vm.userHold.name").sendKeys("Alex"));
//   });
// });

//I am not fully experienced with testing, but I am excited for the oppurtunity to learn. I have recently purchased Udemys Protractor full course and will be going through testing as you review my assignment. 
