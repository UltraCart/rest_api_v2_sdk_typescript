## ultracart_rest_api_v2_typescript@3.2.1

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build an compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install ultracart_rest_api_v2_typescript@3.2.1 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save



# CHANGE LOG
Not every change is committed to every SDK.

| Version | Date | Comments |
| --: | :-: | --- |
| 3.2.0 | 06/23/2021 | Changed 4 methods due to naming conflicts revealed through swagger validator.  All internal methods, so impact should be negligible | 
| 3.1.50 | 06/23/2021 | Integrated Logging: returning back streamed files for log requests | 
| 3.1.49 | 06/17/2021 | Integrated Logging: standardize the response object from getIntegrationLog method  | 
| 3.1.47 | 06/16/2021 | Integrated Logging Rest API  | 
| 3.1.46 | 06/14/2021 | Screen recording: server side paginated heat map index with url contains filters, Item: channel partner item mapping unit cost override  | 
| 3.1.44 | 06/02/2021 | new boolean flag on items object to allow sharing of reviews between items   | 
| 3.1.43 | 06/01/2021 | fix item serialized name of item serialized name for channel partner item mappings  | 
| 3.1.42 | 06/01/2021 | added quickbooks accounting codes at the tiered level for tiered coupons  | 
| 3.1.41 | 05/21/2021 | screen recording heatmap methods | 
| 3.1.40 | 05/20/2021 | Order.summary.actual_payment_processing field added | 
| 3.1.39 | 05/19/2021 | full deployment to ensure all language SDKs are up to date | 
| 3.1.37 | 05/18/2021 | removed php sdk dependency on ext-mbstring by generating sdk with polyfill requirement.  sdk is more portable now. | 
| 3.1.35 | 05/14/2021 | screen recording histogram data  | 
| 3.1.34 | 05/12/2021 | screen recording preferred language, last x days filter, referrer domain | 
| 3.1.33 | 05/11/2021 | creen recording filter for affiliate id and email | 
| 3.1.32 | 05/06/2021 | customer profile pending loyalty points  | 
| 3.1.31 | 05/06/2021 | Added email domian field to screen recordings for filtering  | 
| 3.1.30 | 04/27/2021 | OrderApi.processPayment now allows a specific amount to be billed  | 
| 3.1.29 | 04/26/2021 | screen recording language iso code | 
| 3.1.28 | 04/26/2021 | screen recording statistics on the setting object | 
| 3.1.27 | 04/20/2021 | bug fix - annotation misspell on new email campaign property |
| 3.1.26 | 04/20/2021 | StoreFront Connumications - flag to end campaign or flow once purchase happens anywhere |
| 3.1.25 | 04/19/2021 | Screen recording UTM campaign and source fields |
| 3.1.24 | 04/16/2021 | Screen recording aggregations on communications campaign/flows |
| 3.1.22 | 04/09/2021 | Move URL filter values into page level view for screen recordings |
| 3.1.18 | 03/17/2021 | Added order query by ship on date |
| 3.1.17 | 03/17/2021 | New coupon - percent off MSRP item |
| 3.1.16 | 03/16/2021 | screen recording filter page parameter names |
| 3.1.15 | 03/15/2021 | fix response from deleteScreenRecordingSegment that should have been void |
| 3.1.14 | 03/15/2021 | sort screen recordings by favorite flag |
| 3.1.13 | 03/02/2021 | new webhook order_payment_failed |
| 3.1.12 | 02/25/2021 | added screen recording visitor_first_seen property |
| 3.1.11 | 02/24/2021 | Added Screen recording visitor number |
| 3.1.10 | 02/24/2021 | Added Screen recording merchant notes |
| 3.1.9 | 02/24/2021 | Allow coupons to be configured as unique with expiration on cart step within StoreFront Communications |
| 3.1.8 | 02/24/2021 | Add flag: screen recording missing event boolean |
| 3.1.5 | 02/12/2021 | Bug Fix: PHP retry logic missing a closing brace. Also screen recording page view data response refactor |
| 3.1.3 | 02/11/2021 | Bug Fix: wrong return type on CustomerApi.validateEmailVerificationToken |
| 3.1.2 | 02/11/2021 | CustomerApi.getEmailVerificationToken, CustomerApi.validateEmailVerificationToken added to allow for custom email verification.  Also added favorite flag to screen recording object |
| 3.1.1 | 02/10/2021 | CustomerApi.getCustomerByEmail() method added |
| 3.1.0 | 02/10/2021 | Minor revision jump.  Added new convenience methods for simple_key use to all api calls.  Updated docs |
| 3.0.75 | 02/01/2021 | StoreFront Communication plan revision (internal use) |
| 3.0.71 | 01/28/2021 | BugFix: PHP SDK retry logic NPE |
| 3.0.70 | 01/26/2021 | Checkout return URL support |
| 3.0.66 | 01/22/2021 | code library attributes (mostly internal dev) |
| 3.0.65 | 01/22/2021 | Added folder support for email campaigns and flows |
| 3.0.64 | 01/20/2021 | Bug fix on revenue per customer field incorrectly named. |
| 3.0.63 | 01/20/2021 | CouponAPI: bug fixes and new method doesCouponCodeExist |
| 3.0.62 | 01/19/2021 | Added retry ability when rate limit is triggered (PHP SDK only) only) Other sdk to follow. |
| 3.0.60 | 01/14/2021 | Working with Ruby SDK |
| 3.0.57 | 12/17/2020 | CouponAPI: Added Buy one get one free coupon |
| 3.0.53 | 12/14/2020 | StoreFrontAPI: added a duplicate method to load the pricing tiers on the StoreFront |
| 3.0.51 | 12/09/2020 | UserAPI: internal bug preventing proper usage of user group creation |
| 3.0.45 | 12/03/2020 | CouponAPI: added partial searches to getCoupon params, added deleteCoupons method, fixed bugs |
| 3.0.44 | 12/03/2020 | Code library updates, intended for internal use |
| 3.0.43 | 12/02/2020 | Added fields to code library to handle versions of published items |
| 3.0.42 | 12/02/2020 | Added display values to CouponApi.getEditorValues to make type dropdowns easy |
| 3.0.41 | 11/17/2020 | New modify cart step option for StoreFront communications |
| 3.0.39 | 11/12/2020 | Added Customer.tax_codes.taxjar_exemption_type |
| 3.0.38 | 11/09/2020 | Added TaxProviderTaxJar.configuration.send_outside_nexus flag |
| 3.0.37 | 11/06/2020 | Added transactional email screenshots for code library |
| 3.0.36 | 11/03/2020 | Added missing constant for pre-order stage |
| 3.0.34 | 10/26/2020 | UserAPI initial release |
| 3.0.33 | 10/23/2020 | Added library_item_oid to StoreFront Communications email object for upcoming code library |
| 3.0.32 | 10/21/2020 | Added new StoreFrontApi.search method that takes a POST instead of a GET |
| 3.0.31 | 10/16/2020 | more dev work on code library (internal) |
| 3.0.30 | 10/08/2020 | development work on code library (internal), first version of UserAPI.  The UserAPI is not live yet. |
| 3.0.29 | 09/29/2020 | new boolean field on coupon: bug fix |
| 3.0.28 | 09/29/2020 | new boolean field on coupon: free item with purchase of another item |
| 3.0.27 | 09/29/2020 | Refactored the code library applyToStoreFront to provide support for marketing emails |
| 3.0.26 | 09/25/2020 | Expose actual shipping and fulfillment costs in the order summary object |
| 3.0.25 | 09/16/2020 | New method: OrderApi.adjustOrderTotal |
| 3.0.24 | 09/10/2020 | Bugfix: incorrect response type on CheckoutAPI.registerAffiliateClick |
| 3.0.23 | 09/02/2020 | Added flag to email plan object.  allow_tracking_emails |
| 3.0.22 | 09/02/2020 | Order object - added tracking details |
| 3.0.21 | 09/01/2020 | break fix in php sdk due to bad namespace |
| 3.0.20 | 09/01/2020 | Added OrderApi.processPayment method |
| 3.0.19 | 08/28/2020 | Code Library development: added kraken parameters for thumbnail image generation. |
| 3.0.17 | 08/26/2020 | cont. development work on Code Library |
| 3.0.14 | 08/19/2020 | development work on Code Library |
| 3.0.13 | 08/18/2020 | development work on Code Library |
| 3.0.12 | 08/13/2020 | screenshot urls for campaigns and flows (storefront communications) |
| 3.0.11 | 08/12/2020 | Refactoring and development for Code Library (not released yet) |
| 3.0.10 | 08/10/2020 | Method for registering an affliate click via the SDK, found within CheckoutAPI |
| 3.0.8 | 08/05/2020 | stub for code library 'getLibraryFilterValues' for populating drop down lists |
| 3.0.4 | 08/05/2020 | fixed misspell of 'version' in LibraryItem object. |
| 3.0.3 | 08/04/2020 | added description to addToLibrary call to allow for initial description |
| 3.0.2 | 08/03/2020 | added option on email render step config to allow override of subject, added flow/campaign flag to end once customer purchases |
| 3.0.1 | 07/27/2020 | added init_json to storefront communication email objects |
| 3.0.0 | 07/01/2020 | upgraded our swagger-codegen fork to the latest swagger source code. this was a major changes so we jumped version numbers.  please test all code. |

Some changes jump version numbers due to multiple commits for bug fixes, omissions, and errors.
At UltraCart, we eat our own dog food, and we increment the version number for every commit in order
to generate a new javascript npm.  For this reason, version gaps will be found in the change log above.
