# JavaScript

## Install with NPM

Run in terminal:
```sh
npm install ipush-js
```

Usage:
```js
import { Ipush } from 'ipush-js'

const ipush = new Ipush("YOUR_APP_ID", {
    serverUrl: "wss://api.ipush.id/ws"
})
```

## Using CDN

```html
<script type="module">
import { Ipush } from 'https://cdn.jsdelivr.net/npm/ipush-js@0.0.3/+esm'

const ipush = new Ipush("YOUR_APP_ID", {
    serverUrl: "wss://api.ipush.id/ws"
})
</script>
```

Or directly attach it with `<script>`:

```html
<script src="https://cdn.jsdelivr.net/npm/ipush-js@0.0.3/dist/index.global.js"></script>
<script>
const ipush = new IpushInit.Ipush("YOUR_APP_ID", {
    serverUrl: "wss://api.ipush.id/ws"
})
</script>
```
