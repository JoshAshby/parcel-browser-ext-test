import browser from "webextension-polyfill"

console.log("Booting!")

browser.runtime.onInstalled.addListener(({ reason }) => {
  console.log("Installed", { reason })
})
