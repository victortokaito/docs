(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{509:function(e,t,a){"use strict";a.r(t);var s=a(8),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"liquidity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liquidity"}},[e._v("#")]),e._v(" Liquidity")]),e._v(" "),a("h2",{attrs:{id:"options-for-intial-liquidity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-for-intial-liquidity"}},[e._v("#")]),e._v(" Options for Intial Liquidity")]),e._v(" "),a("p",[e._v("When integrating a new asset, Osmosis Zone recommends at least USD $1000-worth of liquidity in a pool before it is listed onto "),a("a",{attrs:{href:"https://frontier.osmosis.zone",target:"_blank",rel:"noopener noreferrer"}},[e._v("frontier.osmosis.zone"),a("OutboundLink")],1),e._v("; there are a few ways to go about setting up the minimum liquidity requirement.")]),e._v(" "),a("p",[a("em",[e._v("Note that the Osmosis Foundation will "),a("strong",[e._v("not")]),e._v(" consider any OTC token transfers or loans")])]),e._v(" "),a("ul",[a("li",[e._v("Add your own liquidity\n"),a("ul",[a("li",[e._v("Simply buy at least USD $500-worth of OSMO (recommended), ATOM, and/or UST to pair with USD $500-worth of the new asset to create a 50/50 pool\n"),a("ul",[a("li",[e._v("Recommended criteria for a new pool:\n"),a("ul",[a("li",[e._v("Contains only 2 tokens")]),e._v(" "),a("li",[e._v("50/50 weighting")]),e._v(" "),a("li",[e._v("Contains a common Base Asset (i.e., OSMO, ATOM, or UST)")]),e._v(" "),a("li",[e._v("0.2 for OSMO pools, 0.3% swap fee for ATOM or UST pools")]),e._v(" "),a("li",[e._v("0% exit fee")]),e._v(" "),a("li",[e._v('No future governor (set to blank (""))')]),e._v(" "),a("li",[e._v("Sufficient liquidity (at least USD $1000-worth)")])])])])]),e._v(" "),a("li",[e._v("Alternatively, find some partners who would be willing to provide the base asset (e.g., OSMO, ATOM, UST, etc.) portion of the liquidity (this is assuming you can provide the pair asset portion (i.e., the new asset))")]),e._v(" "),a("li",[e._v("Alternatively, it is possible to create an asymmetrically-weighted liquidity pool to reduce the requirement for the base asset (e.g., 80% FOO::20% OSMO). However, Osmosis Foundation recommends only creating 50/50 pools")]),e._v(" "),a("li",[e._v("See: "),a("a",{attrs:{href:"https://docs.osmosis.zone/developing/modules/spec-gamm.html#create-pool",target:"_blank",rel:"noopener noreferrer"}},[e._v("GAMM Module: Create pool"),a("OutboundLink")],1),e._v(" for the CLI command to create a pool")]),e._v(" "),a("li",[e._v("If the asset has already been "),a("a",{attrs:{href:"https://docs.osmosis.zone/integrate/frontend.html#how-to-add-an-asset-onto-the-osmosis-assets-page",target:"_blank",rel:"noopener noreferrer"}},[e._v("added onto the Osmosis Zone Frontier Assets page"),a("OutboundLink")],1),e._v(", then a new pool can be created using the "),a("a",{attrs:{href:"https://frontier.osmosis.zone/pools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Zone Frontier Pools page"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("See: "),a("a",{attrs:{href:"https://docs.osmosis.zone/overview/osmosis-app/#create-a-new-pool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a new pool"),a("OutboundLink")],1)])])])])]),e._v(" "),a("li",[e._v("Initiate a Liquidity Bootstrapping Pool (LBP)\n"),a("ul",[a("li",[e._v("A Liquidity Bootstrapping Pool (LBP) is a Liquidity Pool that is initiated with a phase of linear weight change.\n"),a("ul",[a("li",[e._v("Choose any starting weights (e.g., 90:10), ending weights (e.g., 50:50), and weight change duration (e.g., 3 days)")])])]),e._v(" "),a("li",[e._v("The primary purpose of an LBP is to be able to initiate a liquidity pool with relatively low amounts of the base asset (e.g., 10% OSMO), and high amounts on the new pair asset (e.g., 90% FOO). Throughout the weight change, as the new pair assets gets cheaper, the market is incentivized to bootstrap the pool with more of the base asset over time.\n"),a("ul",[a("li",[e._v("Because you'll be providing a low amount of the base asset (e.g., OSMO), it is expected to be able to provide a large amount of the pair asset (e.g., FOO)")]),e._v(" "),a("li",[e._v("The benefit of being able to bootstrap a liquidity pool with more of the base asset from the market comes at the cost of the GAMM/LP token losing value throughout the weight change\n"),a("ul",[a("li",[e._v("Some (unverified) examples, where the pool is intially created with a fiar price, and where the prices of the assets do not change throughout the LBP:\n"),a("ul",[a("li",[e._v("80 FOO/20 OSMO -> 50 FOO/50 OSMO, means a 2x of the OSMO-side, but a 20% decrease in value of GAMM/LP token")]),e._v(" "),a("li",[e._v("90 FOO/10 OSMO -> 50 FOO/50 OSMO, means a 3x of the OSMO-side, but a 40% decrease in value of GAMM/LP token")]),e._v(" "),a("li",[e._v("95 FOO/ 5 OSMO -> 50 FOO/50 OSMO, means a ~4.36x of the OSMO-side, but a ~56.4% decrease in value of GAMM/LP token")])])]),e._v(" "),a("li",[e._v("Note that if the price of the pair asset (FOO) increases or decreases throughout the LBP, that can mitigate or exacerbate the loss of value of the GAMM/LP token")])])])])]),e._v(" "),a("li",[e._v("The secondary purpose of an LBP is natural price discovery for the new asset.\n"),a("ul",[a("li",[e._v("Although it can be a strategic way to establish a price for the token, an LBP is still possible to conduct with an already established price, even while arbitrage opportunities would exist. However, the GAMM/LP tokens will lose value of the duration of the weight change, and is therefore generally not recommended")])])]),e._v(" "),a("li",[e._v("To learn more about LBPs, see: "),a("a",{attrs:{href:"https://docs.osmosis.zone/overview/osmosis-app/learn-more.html#liquidity-bootstrapping-pools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn More: Liquidity Bootstrapping Pools"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("To create an LBP, see: "),a("a",{attrs:{href:"https://docs.osmosis.zone/integrate/liquidity.html#creating-a-liquidity-bootstrapping-pool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating an LBP"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("When creating an LBP, be sure to request the appropriate changes on the Osmosis Zone Frontier Front End to ensure the LBP page is displayed")]),e._v(" "),a("li",[e._v("Note: It is highly recommended to postpone any aridrops until after the LBP has fully completed. The potential for users dumping an airdropped token during such a sensitive phase of price discovery can significantly negatively impact the final price of the asset--much moreso than an airdrop that is released afterward.")]),e._v(" "),a("li",[e._v("Note: LBP 2.0 is still being developed, and will likely be at least a few more months before the front end interface is implemented for it")])])]),e._v(" "),a("li",[e._v("Request a loan from the Osmosis Community Pool (OCP)\n"),a("ul",[a("li",[e._v("Osmosis has now seen a successful case of a new project propsing a loan of OSMO from the OCP, which would later be repaid in the form of the new pair token\n"),a("ul",[a("li",[e._v("The loaned OSMO was sent to a multisig wallet, added to an LBP, and then the pair asset (STARS) was repaid to the OCP by the same multisig wallet after the completion of the LBP")])])]),e._v(" "),a("li",[e._v("Example:\n"),a("ul",[a("li",[e._v("Stargaze Network (loaned 135,000 OSMO, repaid equivalent value of STARS)\n"),a("ul",[a("li",[e._v("On-chain Proposal: "),a("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/99",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan Osmosis Proposal 99"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Commonwealth Posts: "),a("a",{attrs:{href:"https://commonwealth.im/osmosis/discussion/2882-details-and-parameters-of-stargaze-lbp-on-osmosis",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://commonwealth.im/osmosis/discussion/2494-signaling-proposal-for-osmo-for-stars-token-swap",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1)])])])])])])])]),e._v(" "),a("h2",{attrs:{id:"additional-liquidity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-liquidity"}},[e._v("#")]),e._v(" Additional Liquidity")]),e._v(" "),a("p",[e._v("As more liquidity becomes available to users, either through mining, airdrops, or giveaways, it could be strategic to incentivize more liquidity to be added to Osmosis liquidity pools to ensure there is a healthy, consistent market for the new asset. See the "),a("a",{attrs:{href:"https://docs.osmosis.zone/integrate/incentives.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liquidity Mining Incentives Docs page"),a("OutboundLink")],1),e._v(" to learn more about Osmosis Liquidity Mining Rewards, External Gauge Incentives, and Superfluid Staking.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-liquidity-bootstrapping-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-liquidity-bootstrapping-pool"}},[e._v("#")]),e._v(" Creating a Liquidity Bootstrapping Pool")]),e._v(" "),a("p",[e._v("The below is an example of the pool.json file for a "),a("a",{attrs:{href:"https://docs.osmosis.zone/overview/osmosis-app/learn-more.html#liquidity-bootstrapping-pools",target:"_blank",rel:"noopener noreferrer"}},[e._v("liquidity bootstrapping pool"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("A liquidity bootstrapping pool's weight begins at the weight set in the "),a("code",[e._v("weights")]),e._v(" parameter and linearly shifts the weights until "),a("code",[e._v("target-pool-weights")]),e._v(" is reached over a time period set by the "),a("code",[e._v("duration")]),e._v(" parameter upon pool creation.")]),e._v(" "),a("p",[e._v("Typically, weights begin at an unbalanced ratio with more weight given to the token that is to be sold and shifts to a 1:1 weight (or a weight favoring the counter-party token that the pool is aiming to accrue). The changing of the weight affects the exchange price of the tokens even when the tokens within the pools remain the same. Note that linear change in weight does "),a("strong",[e._v("not")]),e._v(" mean linear change in price (it is highly recommend to play around with the various parameters on this "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1t6VsMJF8lh4xuH_rfPNdT5DM3nY4orF9KFOj2HdMmuY/edit#gid=1392289526",target:"_blank",rel:"noopener noreferrer"}},[e._v("basic LBP simulator"),a("OutboundLink")],1),e._v(" to make sure you understand how the pool will act with different parameters and market demand).")]),e._v(" "),a("p",[e._v("The pool creator can designate when the weight change begins by setting the "),a("code",[e._v("start-time")]),e._v(". While the pool will be live and available for trade at the initial "),a("code",[e._v("weights")]),e._v(", pool weight shift will not begin until "),a("code",[e._v("start-time")]),e._v(" is reached.")]),e._v(" "),a("h3",{attrs:{id:"example-pool-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-pool-files"}},[e._v("#")]),e._v(" Example Pool Files")]),e._v(" "),a("p",[e._v("The following is an example of a liquidity bootstrapping pool.\nThe weights linearly change between the initial weights provided, and the target weights over 72 hrs (3 days)\nIf no start time is provided, it defaults to time the tx was successfully executed on chain.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pool.json")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"weights"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10akt,1atom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"initial-deposit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1000akt,100atom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"swap-fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exit-fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"lbp-params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"72h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target-pool-weights"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1akt,1atom"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Instead with start time included:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"weights"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10akt,1atom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"initial-deposit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1000akt,100atom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"swap-fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exit-fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"lbp-params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"72h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target-pool-weights"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1akt,1atom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"start-time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2006-01-02T15:04:05Z"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"example-cli-tx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-cli-tx"}},[e._v("#")]),e._v(" Example CLI TX")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('osmosisd tx gamm create-pool --pool-file="path/to/lbp-pool.json" --from myKey\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Note: The command to create a liquidity bootstrapping pool is the same as creating a normal pool. However, if the pool has valid "),a("code",[e._v("lbp-params")]),e._v(" in the pool file (json), it will be created as a liquidity bootstrapping pool.")])])}),[],!1,null,null,null);t.default=o.exports}}]);