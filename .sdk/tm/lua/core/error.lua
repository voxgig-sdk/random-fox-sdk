-- RandomFox SDK error

local RandomFoxError = {}
RandomFoxError.__index = RandomFoxError


function RandomFoxError.new(code, msg, ctx)
  local self = setmetatable({}, RandomFoxError)
  self.is_sdk_error = true
  self.sdk = "RandomFox"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RandomFoxError:error()
  return self.msg
end


function RandomFoxError:__tostring()
  return self.msg
end


return RandomFoxError
