var MENU_ID = "kopie-send";

function createMenu() {
    chrome.contextMenus.removeAll(function() {
        chrome.contextMenus.create({
            id: MENU_ID,
            title: "Send to phone with Kopie",
            contexts: ["selection", "link"]
        });
    });
}

chrome.runtime.onInstalled.addListener(createMenu);
chrome.runtime.onStartup.addListener(createMenu);

function openInWindow() {
    chrome.windows.create({ url: "popup.html?window", type: "popup", width: 820, height: 640 }).catch(function() {});
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var text = info.selectionText || info.linkUrl;
    if (info.menuItemId !== MENU_ID || !text) {
        return;
    }

    // The popup picks this up when it opens.
    chrome.storage.session.set({ pending: { text: text, at: Date.now() } }).then(function() {
        var options = tab && tab.windowId > -1 ? { windowId: tab.windowId } : {};
        // Not every browser lets an extension open its own popup.
        return chrome.action.openPopup(options).catch(openInWindow);
    }).catch(function() {});
});
