# BestprintondemandData SDK configuration

module BestprintondemandDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "BestprintondemandData",
        "slug" => "bestprintondemand-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://bestprintondemand.co/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "compare" => {},
          "cost" => {},
          "price_change" => {},
        },
      },
      "entity" => {
        "compare" => {
          "fields" => [
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
            },
          ],
          "name" => "compare",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/compare",
                  "segments" => [
                    {
                      "lit" => "compare",
                    },
                  ],
                  "parts" => [
                    "compare",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "supplier_a",
                        "orig" => "supplier_a",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "printful",
                      },
                      {
                        "name" => "supplier_b",
                        "orig" => "supplier_b",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "printify",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "supplier_a",
                      "supplier_b",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "cost" => {
          "fields" => [
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
            },
          ],
          "name" => "cost",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products/{product}/costs",
                  "segments" => [
                    {
                      "lit" => "products",
                    },
                    {
                      "var" => "product_id",
                    },
                    {
                      "lit" => "costs",
                    },
                  ],
                  "parts" => [
                    "products",
                    "{product_id}",
                    "costs",
                  ],
                  "rename" => {
                    "param" => {
                      "product" => "product_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "product_id",
                        "orig" => "product",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "unisex-tee",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "buyer_pays_shipping",
                        "orig" => "buyer_pays_shipping",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "channel",
                        "orig" => "channel",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "etsy",
                      },
                      {
                        "name" => "sell_price",
                        "orig" => "sell_price",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => 25,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "product_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products",
                  "segments" => [
                    {
                      "lit" => "products",
                    },
                  ],
                  "parts" => [
                    "products",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 3,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "hoodie",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "query",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "price_change" => {
          "fields" => [
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
            },
          ],
          "name" => "price_change",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/price-changes",
                  "segments" => [
                    {
                      "lit" => "price-changes",
                    },
                  ],
                  "parts" => [
                    "price-changes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "product",
                        "orig" => "product",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "supplier",
                        "orig" => "supplier",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "printify",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BestprintondemandDataFeatures.make_feature(name)
  end
end
