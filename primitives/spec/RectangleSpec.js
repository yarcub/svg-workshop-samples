describe("Square ", function() {
  
  var rect;

  beforeEach(function(){
  	rect = window.document.querySelector('svg > rect');
  });

  it("should be an svg child", function() {
    expect(rect).not.toBeNull();
  });

  it("should be a square", function(){
    expect(rect.width.baseVal.value).toBe(rect.height.baseVal.value);
  });

  it("should have 100px width", function() {
  	expect(rect.width.baseVal.value).toBe(100);
  });

  it("should have 100px height", function() {
    expect(rect.height.baseVal.value).toBe(100);
  });

  it("should be at (x,y)=>(150,150)", function(){
  	expect(rect.x.baseVal.value).toBe(150);
  	expect(rect.y.baseVal.value).toBe(150);
  })

  /**
  Not specific of attributes and can also be set by CSS.
  That's why we are testing compute style and not a specific attribute
  **/
  it("should have no fill", function(){
  	var style = window.getComputedStyle(rect);
  	expect(style.fill).toMatch("none");

  });

  it("should have stroke black", function(){
    var style = window.getComputedStyle(rect);
    expect(style.stroke).toMatch("#000000");

  });

});