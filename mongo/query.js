// install local mongo and then log in to mongo shell

// cd price-transparency-guide/examples

// import all allowed_amounts
mongoimport --db price --collection allowed_amount --file ./allowed-amounts/allowed-amounts-multiple-plan-empty-sample.json

mongoimport --db price --collection allowed_amount --file ./allowed-amounts/allowed-amounts-multiple-plan-sample.json

mongoimport --db price --collection allowed_amount --file ./allowed-amounts/allowed-amounts-single-plan-empty-sample.json

mongoimport --db price --collection allowed_amount --file ./allowed-amounts/allowed-amounts-single-plan-sample.json

mongoimport --db price --collection allowed_amount --file ./allowed-amounts/multiplan-empty-example.json


// check
use price;
db.allowed_amount.count();
// should be 5


// import all in-network-rates
mongoimport --db price --collection in_network_rates --file ./in-network-rates/in-network-rates-bundle-single-plan-sample.json

mongoimport --db price --collection in_network_rates --file ./in-network-rates/in-network-rates-capitation-single-plan-sample.json

mongoimport --db price --collection in_network_rates --file ./in-network-rates/in-network-rates-fee-for-service-single-plan-sample.json

mongoimport --db price --collection in_network_rates --file ./in-network-rates/in-network-rates-multiple-plans-sample.json

mongoimport --db price --collection in_network_rates --file ./in-network-rates/in-network-rates-no-npi.json

db.in_network_rates.count();
// should be 5


// import all in-network-rates
mongoimport --db price --collection provider_reference --file ./provider-reference/provider-reference.json

db.provider_reference.count();
// should be 1


// import all in-network-rates
mongoimport --db price --collection table_of_contents --file ./table-of-contents/table-of-contents-sample.json

db.table_of_contents.count();
// should be 1


