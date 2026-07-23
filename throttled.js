function throttle(fn, delay)  {
    let lastmsg=0;
    return function(...args) {
        const now = Date.now();

        if(now - lastmsg >= delay) {
         
            lastmsg = now;
            fn(...args);

        }
};
}

const chatlive = (message) => console.log("Sending message...",message);

const throttledChat = throttle(chatlive, 2000);

setTimeout(() => {
    throttledChat("Hello");
}, 1000);

setTimeout(() => {
    throttledChat("How are you?");
}, 3000);

throttledChat("Hello");
throttledChat("How are you?");
