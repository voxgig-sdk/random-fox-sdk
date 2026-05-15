# RandomFox SDK utility: feature_hook
module RandomFoxUtilities
  FeatureHook = ->(ctx, name) {
    return unless ctx.client
    features = ctx.client.features
    return unless features
    features.each do |f|
      f.send(name, ctx) if f.respond_to?(name)
    end
  }
end
