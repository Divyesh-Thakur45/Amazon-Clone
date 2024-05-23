let param = new URLSearchParams(window.location.search)
console.log(JSON.parse(param.get("ACInnerData")))