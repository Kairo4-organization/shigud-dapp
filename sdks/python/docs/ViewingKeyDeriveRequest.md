# ViewingKeyDeriveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_key** | [**ViewingKey**](ViewingKey.md) |  | 
**child_path** | **str** | Derivation path segment (e.g., \&quot;audit\&quot;, \&quot;2026/Q1\&quot;) | 

## Example

```python
from sipher_client.models.viewing_key_derive_request import ViewingKeyDeriveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDeriveRequest from a JSON string
viewing_key_derive_request_instance = ViewingKeyDeriveRequest.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDeriveRequest.to_json())

# convert the object into a dict
viewing_key_derive_request_dict = viewing_key_derive_request_instance.to_dict()
# create an instance of ViewingKeyDeriveRequest from a dict
viewing_key_derive_request_from_dict = ViewingKeyDeriveRequest.from_dict(viewing_key_derive_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


