// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = require("jquery");

var retrofitSteps = {
  1: {
    title: "Parapet bracing",
    text: "The portions of a wall that extend past the roof (parapets) need a diagonal bracing that is generally made of steel.",
    required: "required"
  },
  2: {
    title: "Wall-to-roof diaphragm anchors",
    text: "Steel bolts horizontally connect the brick wall to the roof. Rosettes seen on the outside of a building can indicate that this retrofit has been done.",
    required: "required"
  },
  3: {
    title: "Wall-to-floor diaphragm anchors",
    text: " Steel bolts connect the brick wall to the floors.",
    required: "required"
  },
  4: {
    title: "Out-of-plane wall bracing",
    text: "Steel beams that vertically connect the brick wall to the floors to keep the wall from bending.",
    required: "occasionally required"
  },
  5: {
    title: "Overall building bracing*",
    text: "Steel beams that increase a building’s overall strength.",
    required: "occasionally required"
  },
  6: {
    title: "Diaphragm strengthening*",
    text: "Plywood sheathing that strengthen floors and roofs.",
    required: "occasionally required"
  }
};

$(".dot").click(function(e) {
  var step = retrofitSteps[e.target.innerHTML];
  $(".details").html(`
    <table>
      <tr>
        <td><div class="dot inline">1</div>
        <td class="details-text"><strong>${step.title} (${step.required}):</strong> ${step.text}
      </tr>
    </table>
  `)
})