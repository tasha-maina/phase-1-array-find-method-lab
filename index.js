
function superbowlWin(record) {
  const winRecord = record.find(game => game.result === "W");
  return winRecord ? winRecord.year : undefined;
}
module.exports = superbowlWin;

