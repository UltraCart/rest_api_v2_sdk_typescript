## ultracart_rest_api_v2_typescript@3.10.7

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
npm install ultracart_rest_api_v2_typescript@3.10.7 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
\n\n
```
\n\n



# CHANGE LOG
Not every change is committed to every SDK.

| Version | Date | Comments |
| --: | :-: | --- |
| 3.10.7 | 05/23/2022 | add internal gift cert to order summary, addl provider info for storefront comm |
| 3.10.6 | 05/23/2022 | add internal gift cert to order summary, addl provider info for storefront comm |
| 3.10.5 | 05/20/2022 | dependabot on java gson version |
| 3.10.4 | 05/20/2022 | dependabot on java gson |
| 3.10.3 | 05/20/2022 | OrderApi.generatePackingSkip calls had wrong return type |
| 3.10.2 | 05/12/2022 | ChannelPartnerApi renamed one of the delete methods |
| 3.10.1 | 05/12/2022 | ChannelPartnerApi added orderId to import response obj |
| 3.10.0 | 05/10/2022 | beta release of ChannelPartnerApi |
| 3.9.8 | 04/26/2022 | OrderApi.duplicateOrder |
| 3.9.7 | 04/25/2022 | integration logs method for zpl to pdf conversion |
| 3.9.6 | 04/25/2022 | storefront communications email magic link setting |
| 3.9.5 | 04/14/2022 | postcard screenshot bug fixes |
| 3.9.4 | 04/13/2022 | Added spf DNS record to the sending domain object |
| 3.9.3 | 04/06/2022 | fix return object on send webhook test method |
| 3.9.2 | 04/04/2022 | user.email field extended and postcard screenshot fields |
| 3.9.1 | 03/03/2022 | javascript sdk package.json bug fix |
| 3.9.0 | 03/03/2022 | removed  ultra_cart_rest_api_v2.d.ts from javascript sdk because typescript sdk exists now |
| 3.8.8 | 03/02/2022 | bug fix for ruby sdk, uri.escape deprecated in 3.x |
| 3.8.7 | 03/02/2022 | bug fix for ruby sdk, uri.escape deprecated in 3.x |
| 3.8.6 | 03/02/2022 | bug fix for ruby sdk, uri.escape deprecated in 3.x |
| 3.8.5 | 02/25/2022 | new coupon for fixed cost shipping method |
| 3.8.2 | 02/16/2022 | create gift certificate method was missing email |
| 3.8.1 | 02/16/2022 | auto order item level pause flag |
| 3.8.0 | 02/16/2022 | gift certificate api (testing) |
| 3.7.38 | 02/15/2022 | gift certificate api (currently in testing) |
| 3.6.38 | 02/07/2022 | Exposed auto order logs |
| 3.6.37 | 02/04/2022 | insurance type for insurance payments |
| 3.6.36 | 12/29/2021 | Mail actual post card flag added to test method |
| 3.6.35 | 12/14/2021 | Add cancel_auto_order option to the accounts receivable retry configuration |
| 3.6.34 | 12/14/2021 | add evening phone E.164 fields to order billing/shipping objects |
| 3.6.33 | 12/13/2021 | automation testing |
| 3.6.32 | 12/10/2021 | testing automation - message 4 |
| 3.6.25 | 12/06/2021 | sdk automation testing.  no changes to actual sdk | 
| 3.6.24 | 11/30/2021 | return items_invalid_for_coupons for CouponResponse object to drive UI warnings | 
| 3.6.23 | 11/29/2021 | Item auto order prohibit cards that expire in months setting. | 
| 3.6.22 | 11/23/2021 | new storefront methods for twilio configuration | 
| 3.6.21 | 11/08/2021 | item shipping distribution center level CostOfGoodsSold | 
| 3.6.20 | 11/05/2021 | additional item auto order step types  | 
| 3.6.19 | 10/05/2021 | item fulfillment add ons  | 
| 3.6.18 | 09/30/2021 | terms if auto order flag added  | 
| 3.6.16 | 09/30/2021 | item exclude from sitemap field  | 
| 3.6.15 | 09/28/2021 | added refund_claim_id to insurance object  | 
| 3.6.14 | 09/21/2021 | configuration api fix.  the echeck test methods were attached to the paper check object  | 
| 3.6.13 | 09/20/2021 | expose EasyPost tracker id if available on shipment tracking details  | 
| 3.6.12 | 09/20/2021 | fix method for getCouponsByQuery to be POST instead of GET since it uses a JSON body  | 
| 3.6.11 | 09/13/2021 | fix for CouponApi, broke due to inadvertent parameter inclusion   | 
| 3.6.10 | 09/09/2021 | added constants for Google Shopping payment method (still in development)  | 
| 3.6.9 | 09/07/2021 | customer profile editor values have new list of state optional countries  | 
| 3.6.8 | 08/31/2021 | coupon query field to allow merchant code and description to be searched  | 
| 3.6.7 | 08/27/2021 | customer profile affiliate information now contains affiliate first and last name | 
| 3.6.6 | 08/26/2021 | configuration api - more field changes for UI | 
| 3.6.5 | 08/25/2021 | configuration api - removed some internal fields from sdk | 
| 3.6.4 | 08/24/2021 | configuration api - new payment method named insurance | 
| 3.6.1 | 08/23/2021 | configuration api - enum problems, also added order.item.tracking_number to support line item tracking numbers | 
| 3.6.0 | 08/19/2021 | coupon api - changed tieredAmountOffItem to support mulitple items | 
| 3.5.3 | 08/18/2021 | configuration api - added credit card rate to UltraCart Payments object | 
| 3.5.1 | 08/11/2021 | email webhook test method | 
| 3.5.0 | 08/11/2021 | RestOrderChannelPartner.store_completed was incorrectly defaulting to true | 
| 3.4.13 | 08/10/2021 | configuration api - changed some field types form string to number | 
| 3.4.12 | 08/10/2021 | email engine - added webhook editor values for internal ui  | 
| 3.4.9 | 08/05/2021 | configuration api - updated annotations for method names | 
| 3.4.8 | 08/04/2021 | configuration api - payments config refactoring | 
| 3.4.7 | 08/04/2021 | esp folders for lists/segments | 
| 3.4.5 | 08/03/2021 | configuration api bug fix for a bad response object on updateRotatingTransactionGateway | 
| 3.4.3 | 08/03/2021 | package tracking - add event_iso_date and event_timezone_id | 
| 3.4.2 | 07/29/2021 | bug fixes for new configuration api | 
| 3.4.1 | 07/29/2021 | bug fixes for new configuration api | 
| 3.4.0 | 07/29/2021 | added new configuration api (not live yet. sdk only works against development presently) | 
| 3.3.2 | 07/16/2021 | sso bug fixes | 
| 3.3.1 | 07/16/2021 | screen recording - event sub text used for assisting in UX rendering | 
| 3.3.0 | 07/16/2021 | new endpoint SingleSignOn | 
| 3.2.15 | 07/13/2021 | storefront communications - added methods to retrieve step dispatch logs | 
| 3.2.14 | 07/12/2021 | fix documentation bug on packing slip methods for order api | 
| 3.2.13 | 07/12/2021 | coupon api - added hideFromCustomer flag | 
| 3.2.12 | 07/09/2021 | new fulfillment and order methods for generation of packing slips | 
| 3.2.11 | 07/08/2021 | screen recording - missing external tracking flag added | 
| 3.2.10 | 07/08/2021 | customer profile - allow drop shipping options | 
| 3.2.9 | 07/07/2021 | screen recording - provide cost per thousand and retention interval | 
| 3.2.8 | 07/06/2021 | intgeration logs - min max log date/time retured in filter values | 
| 3.2.7 | 07/05/2021 | integration logger bug fixes | 
| 3.2.6 | 06/25/2021 | integration log: added logger name | 
| 3.2.2 | 06/24/2021 | integration log file mime type added | 
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
