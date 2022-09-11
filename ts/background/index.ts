import { censorWord } from '../others/censor-word';

chrome.contextMenus.create({
  id: 'context-menu',
  title: 'Hide with AutoCensor',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    ([currentTab]) => {
      chrome.scripting.executeScript({
        target: {
          tabId: currentTab.id
        },
        func: censorWord,
        args: [info.selectionText]
      });
    }
  );
});
