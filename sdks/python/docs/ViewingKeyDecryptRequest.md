# ViewingKeyDecryptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_key** | [**ViewingKey**](ViewingKey.md) |  | 
**encrypted** | [**ViewingKeyDecryptRequestEncrypted**](ViewingKeyDecryptRequestEncrypted.md) |  | 

## Example

```python
from sipher_client.models.viewing_key_decrypt_request import ViewingKeyDecryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDecryptRequest from a JSON string
viewing_key_decrypt_request_instance = ViewingKeyDecryptRequest.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDecryptRequest.to_json())

# convert the object into a dict
viewing_key_decrypt_request_dict = viewing_key_decrypt_request_instance.to_dict()
# create an instance of ViewingKeyDecryptRequest from a dict
viewing_key_decrypt_request_from_dict = ViewingKeyDecryptRequest.from_dict(viewing_key_decrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


