# RandomFox SDK configuration

module RandomFoxConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RandomFox",
        "slug" => "random-fox",
        "version" => "0.0.1",
        "target" => "rb",
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
              "name" => "image",
              "req" => true,
              "short" => "URL of the random fox image",
              "type" => "`$STRING`",
            },
            {
              "name" => "link",
              "req" => true,
              "short" => "Link to the fox image page",
              "type" => "`$STRING`",
            },
          ],
          "name" => "fox",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
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
                },
              ],
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
