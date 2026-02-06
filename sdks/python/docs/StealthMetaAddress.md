# StealthMetaAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_key** | **str** | 0x-prefixed 32-byte hex string | 
**viewing_key** | **str** | 0x-prefixed 32-byte hex string | 
**chain** | **str** |  | 
**label** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.stealth_meta_address import StealthMetaAddress

# TODO update the JSON string below
json = "{}"
# create an instance of StealthMetaAddress from a JSON string
stealth_meta_address_instance = StealthMetaAddress.from_json(json)
# print the JSON string representation of the object
print(StealthMetaAddress.to_json())

# convert the object into a dict
stealth_meta_address_dict = stealth_meta_address_instance.to_dict()
# create an instance of StealthMetaAddress from a dict
stealth_meta_address_from_dict = StealthMetaAddress.from_dict(stealth_meta_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


