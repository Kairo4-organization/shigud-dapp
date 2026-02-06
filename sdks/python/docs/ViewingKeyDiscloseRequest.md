# ViewingKeyDiscloseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_key** | [**ViewingKey**](ViewingKey.md) |  | 
**transaction_data** | [**ViewingKeyDiscloseRequestTransactionData**](ViewingKeyDiscloseRequestTransactionData.md) |  | 

## Example

```python
from sipher_client.models.viewing_key_disclose_request import ViewingKeyDiscloseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDiscloseRequest from a JSON string
viewing_key_disclose_request_instance = ViewingKeyDiscloseRequest.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDiscloseRequest.to_json())

# convert the object into a dict
viewing_key_disclose_request_dict = viewing_key_disclose_request_instance.to_dict()
# create an instance of ViewingKeyDiscloseRequest from a dict
viewing_key_disclose_request_from_dict = ViewingKeyDiscloseRequest.from_dict(viewing_key_disclose_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


