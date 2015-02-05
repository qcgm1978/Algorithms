module("GreeterTest");

test("test greet", function() {
    var greeter = new myapp.Greeter();
    assertEquals("Hello World!", greeter.greet("World"));
});

test("test greet null", function() {
        var greeter = new myapp.Greeter();
        assertNotNull(greeter.greet(null));
    }
);
