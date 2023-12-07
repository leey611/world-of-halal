// Helper function that returns a promise that waits until an element is detected in the dom.
const WaitForElement = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
  
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
  
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

export default WaitForElement;