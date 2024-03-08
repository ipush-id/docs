# PHP API

## Connect to Ipush Server

```php
$ipush = new Ipush(
    "wss://api.ipush.id/ws",
    "YOUR_APP_ID",
    "YOUR_API_KEY",
    "YOUR_API_SECRET"
);
```

## Send Message

```php
$data = "Hello world!";

$ipush->trigger("my-channel", "my-event", $data);
```