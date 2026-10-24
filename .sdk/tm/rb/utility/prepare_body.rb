# RandomFox SDK utility: prepare_body
require_relative 'media'
module RandomFoxUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RandomFoxUtilities.raw_body(ctx.reqdata) if RandomFoxUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
