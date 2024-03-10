# PHP

## Installation

If you don't have `composer.json` file yet, you need to run `composer init` first, finish the steps, and continue to the Ipush installation.

Run in terminal: 

```sh
composer require ipush/ipush
```

## Basic Usage


```php
<?php 
require __DIR__ . '/vendor/autoload.php';

use Ipush\Ipush;

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