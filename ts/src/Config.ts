
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'RandomFox',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://randomfox.ca",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      fox: {
      },

    }
  }


  entity = {
    "fox": {
      "fields": [
        {
          "name": "image",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "link",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "name": "fox",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/floof",
              "parts": [
                "floof"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

