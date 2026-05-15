package = "voxgig-sdk-random-fox"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/random-fox-sdk.git"
}
description = {
  summary = "RandomFox SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["random-fox_sdk"] = "random-fox_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
