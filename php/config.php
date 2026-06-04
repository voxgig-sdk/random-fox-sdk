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
              'name' => 'image',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'link',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
          ],
          'name' => 'fox',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'method' => 'GET',
                  'orig' => '/floof',
                  'parts' => [
                    'floof',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
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
