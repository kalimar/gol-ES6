import Foo from "./Foo";
import Bang from "./Bang";

var bang = new Bang("bangA", "bangB");

var foo = new Foo(bang.a, bang.b);

foo.gimmeXY();
