class MakeHankeyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    super.step();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    this.$node.addClass('hankey');
  }
}

window.MakeHankeyDancer = MakeHankeyDancer;