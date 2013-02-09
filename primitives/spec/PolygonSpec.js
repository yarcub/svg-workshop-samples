describe("Polygon ", function() {
  
  var poly;

  beforeEach(function(){
  	poly = window.document.querySelector('svg > polygon');
  });

  it("should be an svg child", function() {
    expect(poly).not.toBeNull();
  });

  it("should have a point at (100,200)", function(){
    expect(poly).toContainPoint(100, 200);
  });

  it("should have a point at (200,100)", function(){
    expect(poly).toContainPoint(200, 100);
  });

  it("should have a point at (300,200)", function(){
    expect(poly).toContainPoint(300, 200);
  });

  it("should have a point at (200,300)", function(){
    expect(poly).toContainPoint(200, 300);
  });

});