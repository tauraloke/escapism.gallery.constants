const frameData = require("../enum/frame_ids.json");
const frameClassNames = Object.entries(frameData).reduce(
  (obj, [k, v]) => ({ ...obj, [v]: k.toLowerCase() }),
  {}
);
const frameIds = Object.keys(Object.entries(frameData));

module.exports = {
  getFrameClassName: (id) => {
    return frameClassNames[id];
  },
  frameClassNames: frameClassNames,
  frameIds: frameIds,
};
