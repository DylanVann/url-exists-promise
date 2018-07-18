# url-exists-promise

Check if a url exists in node.
Uses a HEAD request.

```ts
import { urlExists } from 'url-exists-promise'

urlExists('https://google.com/')
    // probably true
    .then(res => console.log(res))
```
