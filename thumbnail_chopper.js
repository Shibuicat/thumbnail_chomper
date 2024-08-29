function blockThumbnailImage(requestDetails) {
  console.log("blocking...");
  return {
    cancel: true,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  blockThumbnailImage,
  { urls: ["https://i.ytimg.com/*", "https://i9.ytimg.com/*"] },
  ["blocking"],
);
