class MakeBlinkyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step

    // toggle() is a jQuery method to show/hide the <span> tag.
    super.step();
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    this.$node.addClass('cupcake');
  }
}

window.MakeBlinkyDancer = MakeBlinkyDancer;