# StealthAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | 0x-prefixed 32-byte hex string | 
**ephemeral_public_key** | **str** | 0x-prefixed 32-byte hex string | 
**view_tag** | **int** |  | 

## Example

```python
from sipher_client.models.stealth_address import StealthAddress

# TODO update the JSON string below
json = "{}"
# create an instance of StealthAddress from a JSON string
stealth_address_instance = StealthAddress.from_json(json)
# print the JSON string representation of the object
print(StealthAddress.to_json())

# convert the object into a dict
stealth_address_dict = stealth_address_instance.to_dict()
# create an instance of StealthAddress from a dict
stealth_address_from_dict = StealthAddress.from_dict(stealth_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


