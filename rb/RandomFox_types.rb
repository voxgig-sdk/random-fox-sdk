# frozen_string_literal: true

# Typed models for the RandomFox SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Fox entity data model.
#
# @!attribute [rw] image
#   @return [String]
#
# @!attribute [rw] link
#   @return [String]
Fox = Struct.new(
  :image,
  :link,
  keyword_init: true
)

# Request payload for Fox#load.
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
FoxLoadMatch = Struct.new(
  :image,
  :link,
  keyword_init: true
)

