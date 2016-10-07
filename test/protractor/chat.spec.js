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
