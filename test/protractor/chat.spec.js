describe('chatApp homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://desireedesario.com/ads-recruiting-frontend');

    //Find the element with ng-model=vm.userHold.name and fill in with Alex
    element(by.model('vm.userHold.name')).sendKeys('Alex');
    // Find the first (and only) button on the page and click it
    element(by.css(':button')).click();
    // Ensure fields contain what we've entered
    expect(model.getAttribute('vm.userHold.name')).toEqual('Alex');

    // Click to sign in - waiting for Angular as it is manually bootstrapped.
    userLoginBtn.click().then(function() {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('http://desireedesario.com/ads-recruiting-frontend/#/chats');
    }, 10000);
  });
});

  // describe('todo list', function() {
  //   var todoList;
  //
  //   beforeEach(function() {
  //     browser.get('http://www.angularjs.org');
  //
  //     todoList = element.all(by.repeater('todo in todoList.todos'));
  //   });
  //
  //   it('should list todos', function() {
  //     expect(todoList.count()).toEqual(2);
  //     expect(todoList.get(1).getText()).toEqual('build an angular app');
  //   });
  //
  //   it('should add a todo', function() {
  //     var addTodo = element(by.model('todoList.todoText'));
  //     var addButton = element(by.css('[value="add"]'));
  //
  //     addTodo.sendKeys('write a protractor test');
  //     addButton.click();
  //
  //     expect(todoList.count()).toEqual(3);
  //     expect(todoList.get(2).getText()).toEqual('write a protractor test');
  //   });
  // });
// });
