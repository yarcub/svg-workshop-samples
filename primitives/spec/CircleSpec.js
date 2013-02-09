describe("Circle ", function() {
  
  var circle;

  beforeEach(function(){
  	circle = window.document.querySelector('svg > circle');
  });

  /**
  Circle specific attributes are cx, cy and r
  These are "SVGAnimatedLength" objects wich can be animated
  **/
  it("should be an svg child", function() {
    expect(circle).not.toBeNull();
  });

  it("should have 50px radius", function() {
  	expect(circle.r.baseVal.value).toBe(50);
  });

  it("should be at (x,y)=>(200,200)", function(){
  	expect(circle.cx.baseVal.value).toBe(200);
  	expect(circle.cy.baseVal.value).toBe(200);
  })

  /**
  Not specific of attributes and can also be set by CSS.
  That's why we are testing compute style and not a specific attribute
  **/
  it("should have a yellow fill", function(){
  	var style = window.getComputedStyle(circle);
  	expect(style.fill).toMatch("#ffff00");
  });
});