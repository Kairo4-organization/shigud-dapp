# StealthGenerate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta_address** | [**StealthMetaAddress**](StealthMetaAddress.md) |  | [optional] 
**spending_private_key** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**viewing_private_key** | **str** | 0x-prefixed 32-byte hex string | [optional] 

## Example

```python
from sipher_client.models.stealth_generate200_response_data import StealthGenerate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerate200ResponseData from a JSON string
stealth_generate200_response_data_instance = StealthGenerate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(StealthGenerate200ResponseData.to_json())

# convert the object into a dict
stealth_generate200_response_data_dict = stealth_generate200_response_data_instance.to_dict()
# create an instance of StealthGenerate200ResponseData from a dict
stealth_generate200_response_data_from_dict = StealthGenerate200ResponseData.from_dict(stealth_generate200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


