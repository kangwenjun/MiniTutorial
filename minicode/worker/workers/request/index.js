const utils = require('./utils')

// 工作线程打印日志
console.log('hello worker')

// 在 Worker 线程执行上下文会全局暴露一个 `worker` 对象，直接调用 worker.onMeesage/postMessage 即可
worker.postMessage({
  msg: 'hello from worker: ' + utils.test(),
  buffer: utils.str2ab('hello arrayBuffer from worker')
})

worker.onMessage((msg) => {
  console.log('[Worker] on appservice message', msg)
  const buffer = msg.buffer
  console.log('[Worker] on appservice buffer length ', buffer)
  console.log('[Worker] on appservice buffer', utils.ab2str(buffer))
})