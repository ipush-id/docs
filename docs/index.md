# Getting Started

This is the basic usage example to use Ipush. You can check [ipush-example](https://github.com/ipush-id/ipush-example/tree/main/) for an application example.

## Step 1: Subscribe to events on the client


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ipush JS Demo</title>
  </head>

  <body>
    <div class="container">
        <h1>Ipush Test</h1>
        <p>
          Try publishing an event to channel <code>my-channel</code>
          with event name <code>my-event</code>.
        </p>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/ipush-js@0.0.3/dist/index.global.js"></script>
    <script>
      const WS_URL = "wss://api.ipush.id/ws"

      const ipush = new IpushInit.Ipush("YOUR_APP_ID", {
          serverUrl: WS_URL
      })

      ipush.subscribe('my-channel')

      ipush.bind('my-event', (msg) => {
        alert(msg.data)
      })
      </script>
  </body>
</html>
```

## Step 2: Publish events from the server

```php
<?php 
require __DIR__ . '/vendor/autoload.php';

use Zuramai\Ipush\Ipush;

$ipush = new Ipush(
    // API URL
    "wss://api.ipush.id/ws",
    // APP ID
    "YOUR_APP_ID",
    // API KEY
    "YOUR_API_KEY",
    // API SECRET
    "YOUR_API_SECRET"
);

$data['message'] = "Hello world!";

$ipush->trigger("my-channel", "my-event", $data);


?>

```