var msgCenter = (function () {
  var _msg = {}; //存储消息
  return {
    //用于订阅一个消息
    register: function (type, fn) {
      // type: 消息类型, fn: 当消息中心发布这一条消息的时候执行的回调
    },
    //用于发布消息
    fire: function (type, args) {
      // type: 指定发送什么类型的消息, args: 当发布消息所附带的一些信息
    },
    //取消订阅消息
    cancle: function (type, fn) {
      // type: 取消哪一个类型的消息订阅, fn: 取消这个类型下面的哪一个回调
    },
  };
})();
