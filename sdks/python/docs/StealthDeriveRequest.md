# StealthDeriveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_meta_address** | [**StealthMetaAddress**](StealthMetaAddress.md) |  | 

## Example

```python
from sipher_client.models.stealth_derive_request import StealthDeriveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StealthDeriveRequest from a JSON string
stealth_derive_request_instance = StealthDeriveRequest.from_json(json)
# print the JSON string representation of the object
print(StealthDeriveRequest.to_json())

# convert the object into a dict
stealth_derive_request_dict = stealth_derive_request_instance.to_dict()
# create an instance of StealthDeriveRequest from a dict
stealth_derive_request_from_dict = StealthDeriveRequest.from_dict(stealth_derive_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


