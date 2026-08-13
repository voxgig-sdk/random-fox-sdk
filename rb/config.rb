# RandomFox SDK configuration

module RandomFoxConfig
  def self.make_config
    {
      "main" => {
        "name" => "RandomFox",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://randomfox.ca",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "fox" => {},
        },
      },
      "entity" => {
        "fox" => {
          "fields" => [
            {
              "active" => true,
              "name" => "image",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "link",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
          ],
          "name" => "fox",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/floof",
                  "parts" => [
                    "floof",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RandomFoxFeatures.make_feature(name)
  end
end
