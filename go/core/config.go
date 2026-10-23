package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BestprintondemandData",
			"slug": "bestprintondemand-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://bestprintondemand.co/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"compare": map[string]any{},
				"cost": map[string]any{},
				"price_change": map[string]any{},
			},
		},
		"entity": map[string]any{
			"compare": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$STRING`",
						"req": true,
						"short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
					},
				},
				"name": "compare",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/compare",
								"segments": []any{
									map[string]any{
										"lit": "compare",
									},
								},
								"parts": []any{
									"compare",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "supplier_a",
											"orig": "supplier_a",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "printful",
										},
										map[string]any{
											"name": "supplier_b",
											"orig": "supplier_b",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "printify",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"supplier_a",
										"supplier_b",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cost": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$STRING`",
						"req": true,
						"short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
					},
				},
				"name": "cost",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product}/costs",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "costs",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"costs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"product": "product_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "unisex-tee",
										},
									},
									"query": []any{
										map[string]any{
											"name": "buyer_pays_shipping",
											"orig": "buyer_pays_shipping",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "query",
											"example": "etsy",
										},
										map[string]any{
											"name": "sell_price",
											"orig": "sell_price",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
								},
								"parts": []any{
									"products",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 3,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "hoodie",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"query",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"price_change": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$STRING`",
						"req": true,
						"short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
					},
				},
				"name": "price_change",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/price-changes",
								"segments": []any{
									map[string]any{
										"lit": "price-changes",
									},
								},
								"parts": []any{
									"price-changes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "product",
											"orig": "product",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "supplier",
											"orig": "supplier",
											"type": "`$STRING`",
											"kind": "query",
											"example": "printify",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
