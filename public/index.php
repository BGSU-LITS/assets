<?php
$dir = dirname($_SERVER['SCRIPT_NAME']);
$uri = $_SERVER['REQUEST_URI'];

if (strpos($uri, $dir) === 0) {
    $uri = substr($uri, strlen($dir));
}

if (preg_match(':^/theme/([^?]+):', $uri, $matches)) {
    $assets = [
        'bootstrap.css' => [
            'root' => __DIR__. '/../resources/assets/bower/bootstrap/less/',
            'file' => 'bootstrap.less',
            'type' => 'text/css'
        ],
        'bootstrap-theme.css' => [
            'root' => __DIR__. '/../resources/assets/bower/bootstrap/less/',
            'file' => 'theme.less',
            'type' => 'text/css'
        ]
    ];

    if (isset($assets[$matches[1]])) {
        $asset = $assets[$matches[1]];

        if ($asset['type'] == 'text/css') {
            require __DIR__. '/../vendor/autoload.php';

            $temp = __DIR__. '/../temp/';
            $file = Less_Cache::get(
                [$asset['root']. $asset['file'] => $asset['root']],
                ['compress' => true, 'cache_dir' => $temp],
                $_GET
            );

            header('Content-Type: '. $asset['type']);
            readfile($temp. $file);
            exit();
        }
    }
}

http_response_code(404);
