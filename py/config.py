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
            "active": True,
            "name": "image",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "link",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "fox",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/floof",
                "parts": [
                  "floof",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
