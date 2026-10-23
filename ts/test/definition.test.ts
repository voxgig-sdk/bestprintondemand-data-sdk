import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "compare",
    "accessor": "Compare",
    "op": "load",
    "method": "GET",
    "path": "/compare",
    "args": [],
    "select": {
      "supplier_a": "printful",
      "supplier_b": "printify"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "supplier_a",
      "supplier_b"
    ],
    "queryArgs": [
      {
        "name": "supplier_a",
        "wire": "supplier_a"
      },
      {
        "name": "supplier_b",
        "wire": "supplier_b"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "suppliers": [
        "Printful",
        "Printify"
      ],
      "headline": "Printful is cheaper on 53 of 101 matched products, Printify on 47.",
      "matchedProducts": 107,
      "comparedOnSourcedTotals": 101,
      "lowerTotal": {
        "Printful": 53,
        "Printify": 47
      },
      "ties": 1,
      "notCountedEstimatedShipping": 6,
      "medianGapUsd": 1.79,
      "byCategory": [
        {
          "category": "Apparel",
          "products": 44,
          "comparedOnSourcedTotals": 44,
          "lowerTotal": {
            "Printful": 23,
            "Printify": 21
          },
          "ties": 0
        },
        {
          "category": "Drinkware",
          "products": 11,
          "comparedOnSourcedTotals": 11,
          "lowerTotal": {
            "Printful": 4,
            "Printify": 6
          },
          "ties": 1
        },
        {
          "category": "Accessories",
          "products": 24,
          "comparedOnSourcedTotals": 21,
          "lowerTotal": {
            "Printful": 12,
            "Printify": 9
          },
          "ties": 0
        }
      ],
      "largestLeads": [
        {
          "supplier": "Printful",
          "largestLeads": [
            {
              "product": "Recycled Basketball Jersey",
              "page": "https://bestprintondemand.co/products/basketball-jersey",
              "leadUsd": 21.13
            },
            {
              "product": "Kids Leggings",
              "page": "https://bestprintondemand.co/products/kids-leggings",
              "leadUsd": 20.41
            },
            {
              "product": "All-Over Print Leggings",
              "page": "https://bestprintondemand.co/products/leggings",
              "leadUsd": 14.26
            }
          ]
        },
        {
          "supplier": "Printify",
          "largestLeads": [
            {
              "product": "Throw Blanket",
              "page": "https://bestprintondemand.co/products/blanket",
              "leadUsd": 12.44
            },
            {
              "product": "Sherpa Blanket",
              "page": "https://bestprintondemand.co/products/sherpa-blanket",
              "leadUsd": 10.67
            },
            {
              "product": "All-Over Print Sports Bra",
              "page": "https://bestprintondemand.co/products/sports-bra",
              "leadUsd": 10.1
            }
          ]
        }
      ],
      "page": "https://bestprintondemand.co/compare/printful-vs-printify",
      "basis": "Listed US starting costs for one item with first-item shipping, in USD; tax, extra print areas and plan fees excluded. Confirm the variant on the supplier's own page before ordering. Data: BestPrintOnDemand, CC BY 4.0.",
      "summary": "Printful vs Printify: Printful is cheaper on 53 of 101 matched products, Printify on 47.\nMedian gap where one is cheaper: $1.79.\n6 more matched products are not counted because a total rests on estimated shipping.\n- Apparel: Printful lower on 23, Printify lower on 21 (of 44).\n- Drinkware: Printful lower on 4, Printify lower on 6, 1 tied (of 11).\n- Accessories: Printful lower on 12, Printify lower on 9 (of 21).\n- Wall Art: Printful lower on 3, Printify lower on 2 (of 5).\n- Home: Printful lower on 11, Printify lower on 9 (of 20).\nPrintful's largest leads: Recycled Basketball Jersey $21.13, Kids Leggings $20.41, All-Over Print Leggings $14.26.\nPrintify's largest leads: Throw Blanket $12.44, Sherpa Blanket $10.67, All-Over Print Sports Bra $10.10.\nMatched means the same product, print method and destination, and for printed apparel the same blank; a product counts only when both totals are fully sourced.\nPage: https://bestprintondemand.co/compare/printful-vs-printify\nListed US starting costs for one item with first-item shipping, in USD; tax, extra print areas and plan fees excluded. Confirm the variant on the supplier's own page before ordering. Data: BestPrintOnDemand, CC BY 4.0."
    },
    "idField": "id"
  },
  {
    "entity": "cost",
    "accessor": "Cost",
    "op": "load",
    "method": "GET",
    "path": "/products/{product}/costs",
    "args": [
      {
        "name": "product_id",
        "wire": "product",
        "value": "unisex-tee"
      }
    ],
    "select": {
      "buyer_pays_shipping": "v1",
      "channel": "etsy",
      "sell_price": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "sell_price",
      "channel",
      "buyer_pays_shipping"
    ],
    "queryArgs": [
      {
        "name": "buyer_pays_shipping",
        "wire": "buyer_pays_shipping"
      },
      {
        "name": "channel",
        "wire": "channel"
      },
      {
        "name": "sell_price",
        "wire": "sell_price"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "product": {
        "name": "Unisex Staple T-Shirt",
        "slug": "unisex-tee",
        "category": "Apparel",
        "blank": "Bella+Canvas 3001",
        "page": "https://bestprintondemand.co/products/unisex-tee"
      },
      "answer": "Gelato has the lowest total for this product delivered in the US: $15.68 ($10.69 base plus $4.99 shipping), $0.96 less than Printify and $1.59 less than Printful. 6 suppliers list a fully sourced total on the same blank and print method (Bella+Canvas 3001, DTG), from $15.68 to $23.99. Base price checked Oct 23, 2026.",
      "scenario": {
        "sellPriceUsd": 25,
        "channel": "Etsy",
        "shippingPaidBy": "seller"
      },
      "offers": [
        {
          "supplier": "Gelato",
          "supplierPage": "https://bestprintondemand.co/suppliers/gelato",
          "printMethod": "DTG",
          "region": "US",
          "variant": "Bella+Canvas 3001 premium unisex tee, white, L, front print (DTG), Gelato API quote for one item to the US",
          "blank": "Bella+Canvas 3001",
          "baseUsd": 10.69,
          "shippingUsd": 4.99,
          "shippingEstimated": false,
          "totalUsd": 15.68,
          "livePrice": true,
          "basePriceDate": "2026-10-23T16:24:04.458Z",
          "basePriceSource": "https://www.gelato.com/custom/bestsellers/premium-unisex-crewneck-tshirt-bella-canvas-3001",
          "shippingSource": "https://www.gelato.com/custom/bestsellers/premium-unisex-crewneck-tshirt-bella-canvas-3001",
          "profit": {
            "profitUsd": 6.5,
            "marginPct": 25.98,
            "channelFeeUsd": 2.83
          }
        },
        {
          "supplier": "Printify",
          "supplierPage": "https://bestprintondemand.co/suppliers/printify",
          "printMethod": "DTG",
          "region": "US",
          "variant": "Bella+Canvas 3001 (DTG), lowest landed US print provider (Printify catalog)",
          "blank": "Bella+Canvas 3001",
          "baseUsd": 11.29,
          "shippingUsd": 5.35,
          "shippingEstimated": false,
          "shippingSurchargeUsd": 0.4,
          "shippingSurchargeSource": "https://help.printify.com/hc/en-us/articles/28893325248145-Holiday-Shipping-Surcharge-2026",
          "totalUsd": 16.64,
          "paidPlan": "Printify Premium",
          "paidPlanTotalUsd": 14.39,
          "livePrice": true,
          "basePriceDate": "2026-10-23T15:24:04.931Z",
          "basePriceSource": "https://printify.com/app/products/12/bellacanvas/unisex-jersey-short-sleeve-tee",
          "shippingSource": "https://printify.com/app/products/12/bellacanvas/unisex-jersey-short-sleeve-tee",
          "profit": {
            "profitUsd": 5.53,
            "marginPct": 22.14,
            "channelFeeUsd": 2.83
          }
        },
        {
          "supplier": "Teelaunch",
          "supplierPage": "https://bestprintondemand.co/suppliers/teelaunch",
          "printMethod": "DTG",
          "region": "US",
          "variant": "Canvas Mens Shirt, Airlume combed ring-spun jersey tee (model number not stated)",
          "blank": null,
          "baseUsd": 11,
          "shippingUsd": 6,
          "shippingEstimated": false,
          "totalUsd": 17,
          "livePrice": false,
          "basePriceDate": "2026-09",
          "basePriceSource": "https://teelaunch.com/products/canvas-mens-shirt/",
          "shippingSource": "https://teelaunch.com/products/canvas-mens-shirt/",
          "profit": {
            "profitUsd": 5.18,
            "marginPct": 20.7,
            "channelFeeUsd": 2.83
          }
        }
      ],
      "basis": "Listed US starting costs for one item with first-item shipping, in USD; tax, extra print areas and plan fees excluded. Confirm the variant on the supplier's own page before ordering. Data: BestPrintOnDemand, CC BY 4.0.",
      "summary": "Unisex Staple T-Shirt (Apparel). Gelato has the lowest total for this product delivered in the US: $15.68 ($10.69 base plus $4.99 shipping), $0.96 less than Printify and $1.59 less than Printful. 6 suppliers list a fully sourced total on the same blank and print method (Bella+Canvas 3001, DTG), from $15.68 to $23.99. Base price checked Oct 23, 2026.\nProfit at a $25.00 sell price after Etsy fees, with you covering shipping.\n- Gelato, DTG, Bella+Canvas 3001: $15.68 ($10.69 base plus $4.99 shipping), profit $6.50 (26.0%). Source: https://www.gelato.com/custom/bestsellers/premium-unisex-crewneck-tshirt-bella-canvas-3001\n- Printify, DTG, Bella+Canvas 3001: $16.64 ($11.29 base plus $4.95 shipping and a $0.40 holiday surcharge), profit $5.53 (22.1%). Source: https://printify.com/app/products/12/bellacanvas/unisex-jersey-short-sleeve-tee\n- Teelaunch, DTG: $17.00 ($11.00 base plus $6.00 shipping), profit $5.18 (20.7%). Source: https://teelaunch.com/products/canvas-mens-shirt/\n- Printful, DTG, Bella+Canvas 3001: $17.27 ($11.92 base plus $4.95 shipping and a $0.40 holiday surcharge), profit $4.91 (19.6%). Source: https://api.printful.com/products/71\n- Fourthwall, DTG, Bella+Canvas 3001: ≈ $17.71 ($11.75 base plus $5.96 estimated shipping), profit $4.46 (17.9%). Source: https://fourthwall.com/products/bella-canvas-unisex-supersoft-t-shirt-dtg\n- Print Aura, DTG, Bella+Canvas 3001: ≈ $18.96 ($13.00 base plus $5.96 estimated shipping), profit $3.21 (12.9%). Source: https://app.printaura.com/products/77\n- Apliiq, DTG, Bella+Canvas 3001: $21.55 ($15.59 base plus $5.96 shipping), profit $0.62 (2.5%). Source: https://www.apliiq.com/brand/bella-canvas\n- Two Fifteen, DTG, Bella+Canvas 3001: $22.55 ($10.23 base plus $12.32 shipping), profit -$0.38 (-1.5%). Source: https://www.twofifteen.co.uk/bella-canvas-3001-unisex-jersey-short-sleeve-tee\n- Inkthreadable, DTG, Bella+Canvas 3001: $23.99 ($10.23 base plus $13.76 shipping), profit -$1.81 (-7.3%). Source: https://www.inkthreadable.co.uk/canvas-unisex-crew-neck-t-shirt\n- Gooten, DTG, Bella+Canvas 3001: no complete total. Source: https://www.gooten.com/print-on-demand/bella-canvas-3001-unisex-jersey-crew-neck-tee/\n- Scalable Press, DTG: no complete total. Source: https://scalablepress.com/pricing\nPage: https://bestprintondemand.co/products/unisex-tee\nListed US starting costs for one item with first-item shipping, in USD; tax, extra print areas and plan fees excluded. Confirm the variant on the supplier's own page before ordering. Data: BestPrintOnDemand, CC BY 4.0."
    },
    "idField": "id"
  },
  {
    "entity": "cost",
    "accessor": "Cost",
    "op": "load",
    "method": "GET",
    "path": "/products",
    "args": [],
    "select": {
      "query": "hoodie",
      "limit": 3
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "query": "hoodie",
      "matches": 7,
      "products": [
        {
          "name": "Unisex Pullover Hoodie",
          "slug": "pullover-hoodie",
          "category": "Apparel",
          "blank": "Gildan 18500",
          "page": "https://bestprintondemand.co/products/pullover-hoodie",
          "suppliersWithTotal": 5,
          "lowestTotal": {
            "supplier": "Gelato",
            "totalUsd": 28.98,
            "shippingEstimated": false,
            "claim": "Cheapest supplier for this product on a like-for-like total"
          }
        },
        {
          "name": "Heavyweight Pullover Hoodie",
          "slug": "heavyweight-hoodie",
          "category": "Apparel",
          "blank": "Bella+Canvas 4719",
          "page": "https://bestprintondemand.co/products/heavyweight-hoodie",
          "suppliersWithTotal": 1,
          "lowestTotal": {
            "supplier": "Printful",
            "totalUsd": 46.42,
            "shippingEstimated": false,
            "claim": "The only supplier with a listed total for this product"
          }
        },
        {
          "name": "Unisex Sponge Fleece Hoodie",
          "slug": "sponge-fleece-hoodie",
          "category": "Apparel",
          "blank": "Bella+Canvas 3719",
          "page": "https://bestprintondemand.co/products/sponge-fleece-hoodie",
          "suppliersWithTotal": 3,
          "lowestTotal": {
            "supplier": "Printful",
            "totalUsd": 40.87,
            "shippingEstimated": false,
            "claim": "Cheapest supplier for this product on a like-for-like total"
          }
        }
      ],
      "summary": "7 products match \"hoodie\", the 3 most sold first. Call get_product_costs with a slug for every supplier's price, shipping and profit.\n- Unisex Pullover Hoodie (pullover-hoodie): $28.98 at Gelato (cheapest supplier for this product on a like-for-like total). https://bestprintondemand.co/products/pullover-hoodie\n- Heavyweight Pullover Hoodie (heavyweight-hoodie): $46.42 at Printful (the only supplier with a listed total for this product). https://bestprintondemand.co/products/heavyweight-hoodie\n- Unisex Sponge Fleece Hoodie (sponge-fleece-hoodie): $40.87 at Printful (cheapest supplier for this product on a like-for-like total). https://bestprintondemand.co/products/sponge-fleece-hoodie\nListed US starting costs for one item with first-item shipping, in USD; tax, extra print areas and plan fees excluded. Confirm the variant on the supplier's own page before ordering. Data: BestPrintOnDemand, CC BY 4.0."
    },
    "idField": "id"
  },
  {
    "entity": "price_change",
    "accessor": "PriceChange",
    "op": "load",
    "method": "GET",
    "path": "/price-changes",
    "args": [],
    "select": {
      "product": "v1",
      "supplier": "printify"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "supplier",
      "product"
    ],
    "queryArgs": [
      {
        "name": "product",
        "wire": "product"
      },
      {
        "name": "supplier",
        "wire": "supplier"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "supplier": "Printify",
      "events": [
        {
          "headline": "Printify cut 16 prices by 3¢",
          "supplier": "Printify",
          "direction": "down",
          "rule": {
            "amountUsd": -0.03
          },
          "products": 16,
          "firstReadAtNewPrices": "2026-10-02T09:24:04.003Z",
          "lastFirstReadAtNewPrices": "2026-10-03T02:24:04.737Z",
          "lastReadAtOldPrices": "2026-10-02T14:24:04.001Z",
          "changedBetweenReadings": false,
          "page": "https://bestprintondemand.co/price-changes#printify-2026-10-02",
          "changes": [
            {
              "product": "All-Over Print Yoga Leggings",
              "productPage": "https://bestprintondemand.co/products/yoga-leggings",
              "supplier": "Printify",
              "beforeUsd": 35.3,
              "afterUsd": 35.27,
              "changePercent": -0.08,
              "lastReadAtOldPrice": "2026-10-02T04:24:04.202Z",
              "firstReadAtNewPrice": "2026-10-02T09:24:04.003Z",
              "source": "https://printify.com/app/products/516/generic-brand/high-waisted-yoga-leggings-aop"
            },
            {
              "product": "Die-Cut Sticker",
              "productPage": "https://bestprintondemand.co/products/die-cut-sticker",
              "supplier": "Printify",
              "beforeUsd": 3.78,
              "afterUsd": 3.75,
              "changePercent": -0.79,
              "lastReadAtOldPrice": "2026-10-01T20:24:05.596Z",
              "firstReadAtNewPrice": "2026-10-02T10:24:04.402Z",
              "source": "https://printify.com/app/products/600/generic-brand/die-cut-stickers"
            },
            {
              "product": "All-Over Print T-Shirt Dress",
              "productPage": "https://bestprintondemand.co/products/t-shirt-dress",
              "supplier": "Printify",
              "beforeUsd": 29.67,
              "afterUsd": 29.64,
              "changePercent": -0.1,
              "lastReadAtOldPrice": "2026-10-02T05:24:04.425Z",
              "firstReadAtNewPrice": "2026-10-02T10:24:04.402Z",
              "source": "https://printify.com/app/products/431/generic-brand/t-shirt-dress-aop"
            }
          ]
        }
      ],
      "singleProductChanges": [],
      "readings": [
        {
          "supplier": "Printify",
          "products": 114,
          "readings": 6976,
          "firstReading": "2026-09-25T23:24:05.082Z"
        }
      ],
      "page": "https://bestprintondemand.co/price-changes",
      "basis": "Prices are each supplier's lowest US base price for an in-stock option, read from its own catalog, in USD, before shipping and tax. A change counts once the new price has held two days, and is the supplier's only on evidence: the same variant read at a new price, or many products moving by the same rule at once. Data: BestPrintOnDemand, CC BY 4.0.",
      "summary": "Price changes for Printify, from hourly readings of Printify (6,976 readings since 2026-09-25).\n- Printify cut 16 prices by 3¢, first read at the new prices between 2026-10-02 and 2026-10-03. https://bestprintondemand.co/price-changes#printify-2026-10-02\nPage: https://bestprintondemand.co/price-changes\nPrices are each supplier's lowest US base price for an in-stock option, read from its own catalog, in USD, before shipping and tax. A change counts once the new price has held two days, and is the supplier's only on evidence: the same variant read at a new price, or many products moving by the same rule at once. Data: BestPrintOnDemand, CC BY 4.0."
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
