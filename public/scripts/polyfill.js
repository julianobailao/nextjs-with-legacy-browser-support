if (
  typeof globalThis !== "object"
  || globalThis.Math !== Math
) {
  const global = typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
      ? window
      : Function("return this")()
  global.globalThis = global
}