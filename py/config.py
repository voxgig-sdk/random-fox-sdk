# RandomFox SDK configuration


def make_config():
    return {
        "main": {
            "name": "RandomFox",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://randomfox.ca",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "fox": {},
            },
        },
        "entity": {
      "fox": {
        "fields": [
          {
            "name": "image",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "link",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "fox",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/floof",
                "parts": [
                  "floof",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
