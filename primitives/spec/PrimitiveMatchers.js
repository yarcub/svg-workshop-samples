beforeEach(function() {
  this.addMatchers({

    toContainPoint: function(expectedX, expectedY) {
      var actual = this.actual;
      var notText = this.isNot ? " not" : "";

      this.message = function () {
        return "Expected " + actual + notText + " to have point at (" + expectedX +", " + expectedY + ")";
      }

      for(var index = 0; index < actual.points.numberOfItems ; index++){
        var actualPoint = actual.points.getItem(index);

        if(actualPoint.x === expectedX && actualPoint.y === expectedY){
          return true;
        }
      }

      return false;
    }

  });
});