/ Student is the database where we will 
// add details and test if details are added
 
const Student = require('../App/student');
const assert = require('assert');
 
describe("Create Records", () => {
      
    // First test case
    it("create a user in db", () => {
 
        // assert(true);
        const geek = new Student({name: "geek"});
         
        // Save the object in database
        geek.save()
        .then( () => {
          // The geek.isNew returns false if
          // object is stored in database
          // The !geek.isNew becomes true and
          // the test passes.
          assert(!geek.isNew)
        })
        .catch( () => {
           console.log("error");
        })
    });
});