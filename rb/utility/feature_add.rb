# RandomFox SDK utility: feature_add
module RandomFoxUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
