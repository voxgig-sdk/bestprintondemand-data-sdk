# BestprintondemandData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BestprintondemandData",
            "slug": "bestprintondemand-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://bestprintondemand.co/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "compare": {},
                "cost": {},
                "price_change": {},
            },
        },
        "entity": {
      "compare": {
        "fields": [
          {
            "name": "summary",
            "title": "Summary",
            "type": "`$STRING`",
            "req": True,
            "short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
          },
        ],
        "name": "compare",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/compare",
                "segments": [
                  {
                    "lit": "compare",
                  },
                ],
                "parts": [
                  "compare",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "supplier_a",
                      "orig": "supplier_a",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "printful",
                    },
                    {
                      "name": "supplier_b",
                      "orig": "supplier_b",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "printify",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "supplier_a",
                    "supplier_b",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cost": {
        "fields": [
          {
            "name": "summary",
            "title": "Summary",
            "type": "`$STRING`",
            "req": True,
            "short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
          },
        ],
        "name": "cost",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/products/{product}/costs",
                "segments": [
                  {
                    "lit": "products",
                  },
                  {
                    "var": "product_id",
                  },
                  {
                    "lit": "costs",
                  },
                ],
                "parts": [
                  "products",
                  "{product_id}",
                  "costs",
                ],
                "rename": {
                  "param": {
                    "product": "product_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "product_id",
                      "orig": "product",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "unisex-tee",
                    },
                  ],
                  "query": [
                    {
                      "name": "buyer_pays_shipping",
                      "orig": "buyer_pays_shipping",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "etsy",
                    },
                    {
                      "name": "sell_price",
                      "orig": "sell_price",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 25,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "product_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/products",
                "segments": [
                  {
                    "lit": "products",
                  },
                ],
                "parts": [
                  "products",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 3,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "hoodie",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "query",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "price_change": {
        "fields": [
          {
            "name": "summary",
            "title": "Summary",
            "type": "`$STRING`",
            "req": True,
            "short": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.",
          },
        ],
        "name": "price_change",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/price-changes",
                "segments": [
                  {
                    "lit": "price-changes",
                  },
                ],
                "parts": [
                  "price-changes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "product",
                      "orig": "product",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "supplier",
                      "orig": "supplier",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "printify",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
