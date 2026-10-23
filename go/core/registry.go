package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCompareEntityFunc func(client *BestprintondemandDataSDK, entopts map[string]any) BestprintondemandDataEntity

var NewCostEntityFunc func(client *BestprintondemandDataSDK, entopts map[string]any) BestprintondemandDataEntity

var NewPriceChangeEntityFunc func(client *BestprintondemandDataSDK, entopts map[string]any) BestprintondemandDataEntity

