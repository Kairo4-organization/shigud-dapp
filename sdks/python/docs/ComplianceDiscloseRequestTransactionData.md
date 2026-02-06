# ComplianceDiscloseRequestTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx_hash** | **str** |  | 
**amount** | **str** |  | 
**sender** | **str** |  | 
**receiver** | **str** |  | 

## Example

```python
from sipher_client.models.compliance_disclose_request_transaction_data import ComplianceDiscloseRequestTransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDiscloseRequestTransactionData from a JSON string
compliance_disclose_request_transaction_data_instance = ComplianceDiscloseRequestTransactionData.from_json(json)
# print the JSON string representation of the object
print(ComplianceDiscloseRequestTransactionData.to_json())

# convert the object into a dict
compliance_disclose_request_transaction_data_dict = compliance_disclose_request_transaction_data_instance.to_dict()
# create an instance of ComplianceDiscloseRequestTransactionData from a dict
compliance_disclose_request_transaction_data_from_dict = ComplianceDiscloseRequestTransactionData.from_dict(compliance_disclose_request_transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


