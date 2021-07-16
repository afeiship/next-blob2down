(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { filename: 'filename' };

  nx.blob2down = function (inBlob, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var url = global.URL.createObjectURL(inBlob);
    var tmp = document.createElement('a');
    tmp.href = url;
    tmp.hidden = true;
    tmp.download = options.filename;
    document.body.appendChild(tmp); // we need to append the element to the dom -> otherwise it will not work in firefox
    tmp.click();
    tmp.remove(); //afterwards we remove the element again
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blob2down;
  }
})();
