# RandomFox SDK

Get a random fox photo with a single GET request

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Random Fox API

Random Fox API is a tiny single-endpoint service that returns a random fox photograph. It is maintained by [xinitrc](https://randomfox.ca) and listed in the [Free Public APIs directory](https://freepublicapis.com/random-fox-api).

What you get from the API:

- A JSON response containing a URL to a JPG image of a fox.
- A link to view the same image directly in the browser.
- A single, unauthenticated `GET` call — no API key, no signup.

Operational notes: CORS is enabled, so the endpoint can be called directly from browser code. The community catalogue lists average response time around 589 ms and reliability around 97%. No published rate limit; be polite.

## Try it

**TypeScript**
```bash
npm install random-fox
```

**Python**
```bash
pip install random-fox-sdk
```

**PHP**
```bash
composer require voxgig/random-fox-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/random-fox-sdk/go
```

**Ruby**
```bash
gem install random-fox-sdk
```

**Lua**
```bash
luarocks install random-fox-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RandomFoxSDK } from 'random-fox'

const client = new RandomFoxSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o random-fox-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "random-fox": {
      "command": "/abs/path/to/random-fox-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Fox** | A random fox photograph resource served from `GET https://randomfox.ca/floof/`, returning a JSON object with the image URL and a viewable link. | `/floof` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from randomfox_sdk import RandomFoxSDK

client = RandomFoxSDK({})


# Load a specific fox
fox, err = client.Fox(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'randomfox_sdk.php';

$client = new RandomFoxSDK([]);


// Load a specific fox
[$fox, $err] = $client->Fox(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/random-fox-sdk/go"

client := sdk.NewRandomFoxSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "RandomFox_sdk"

client = RandomFoxSDK.new({})


# Load a specific fox
fox, err = client.Fox(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("random-fox_sdk")

local client = sdk.new({})


-- Load a specific fox
local fox, err = client:Fox(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RandomFoxSDK.test()
const result = await client.Fox().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RandomFoxSDK.test(None, None)
result, err = client.Fox(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RandomFoxSDK::test(null, null);
[$result, $err] = $client->Fox(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Fox(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RandomFoxSDK.test(nil, nil)
result, err = client.Fox(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Fox(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Random Fox API

- Upstream: [https://randomfox.ca](https://randomfox.ca)

- The site does not publish an explicit licence for the images.
- Photos are community-submitted (the maintainer accepts links only).
- If you plan to redistribute the images, contact the maintainer first.
- Attribution to [randomfox.ca](https://randomfox.ca) is a courteous default.

---

Generated from the Random Fox API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
