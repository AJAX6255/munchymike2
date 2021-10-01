module.exports = function handleIndex(request, response) {
  var battlesnakeInfo = {
    apiversion: '1',
    author: 'Allan Jackson',
    color: '#736CCB',
    head: 'ski',
    tail: 'weight',
  };
  response.status(200).json(battlesnakeInfo);
};
