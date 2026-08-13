<?php
declare(strict_types=1);

// RandomFox SDK configuration

class RandomFoxConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RandomFox",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://randomfox.ca",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "fox" => [],
                ],
            ],
            "entity" => [
        'fox' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'image',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'link',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'fox',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/floof',
                  'parts' => [
                    'floof',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RandomFoxFeatures::make_feature($name);
    }
}
