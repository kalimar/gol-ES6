export default function Foo(a,b) {
  this.a = a;
  this.b = b;
}

Foo.prototype.gimmeXY = function() {
  document.write("foo a: " + this.a + "\n");
  document.write("foo b: " + this.b + "\n");
}

