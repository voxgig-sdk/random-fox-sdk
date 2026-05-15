package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFoxEntityFunc func(client *RandomFoxSDK, entopts map[string]any) RandomFoxEntity

