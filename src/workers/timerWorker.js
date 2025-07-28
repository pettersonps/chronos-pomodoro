self.onmessage = function (event) {
  console.log('WORKER recebeu:', event.data);

  self.postMessage('olá para você também');
};
