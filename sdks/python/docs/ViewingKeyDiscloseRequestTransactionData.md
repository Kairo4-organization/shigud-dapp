# ViewingKeyDiscloseRequestTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** |  | 
**recipient** | **str** |  | 
**amount** | **str** |  | 
**timestamp** | **int** |  | 

## Example

```python
from sipher_client.models.viewing_key_disclose_request_transaction_data import ViewingKeyDiscloseRequestTransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDiscloseRequestTransactionData from a JSON string
viewing_key_disclose_request_transaction_data_instance = ViewingKeyDiscloseRequestTransactionData.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDiscloseRequestTransactionData.to_json())

# convert the object into a dict
viewing_key_disclose_request_transaction_data_dict = viewing_key_disclose_request_transaction_data_instance.to_dict()
# create an instance of ViewingKeyDiscloseRequestTransactionData from a dict
viewing_key_disclose_request_transaction_data_from_dict = ViewingKeyDiscloseRequestTransactionData.from_dict(viewing_key_disclose_request_transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


