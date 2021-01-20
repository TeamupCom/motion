const hasProxy = (scope: any) => !!scope.Proxy

export const proxyDefined = hasProxy(
    (typeof process !== "undefined" &&
        {}.toString.call(process) === "[object process]") ||
        (typeof navigator !== "undefined" &&
            navigator.product === "ReactNative")
        ? global
        : self
)
