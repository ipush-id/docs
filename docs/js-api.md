# JavaScript API

## Connect to Ipush Server

```js 
const ipush = new Ipush("YOUR_APP_KEY", {
    serverUrl: "wss://api.ipush.id/ws"
})
```

## Subscribe to channel

It will receive any message that is sent to channel `my-channel`

```js 
ipush.subscribe('my-channel')
```

## Unsubscribe channel

To stop receiving events from a channel

```js 
ipush.unsubscribe('my-channel')
```


## Listen to an event

The callback will be triggered every time a message with event `my-event` is sent to the server.

```js 
ipush.bind('my-event', (msg) => {
    const data = JSON.parse(msg.data)

    console.log(data)
})
```

## Listen to all events

The callback will be triggered every time any message is sent to the server.

```js 
ipush.any((msg) => {
    const data = JSON.parse(msg.data)

    console.log(data)
})
```