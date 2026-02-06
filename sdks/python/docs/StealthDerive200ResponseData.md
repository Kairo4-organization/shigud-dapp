# StealthDerive200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stealth_address** | [**StealthAddress**](StealthAddress.md) |  | [optional] 
**shared_secret** | **str** | 0x-prefixed 32-byte hex string | [optional] 

## Example

```python
from sipher_client.models.stealth_derive200_response_data import StealthDerive200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of StealthDerive200ResponseData from a JSON string
stealth_derive200_response_data_instance = StealthDerive200ResponseData.from_json(json)
# print the JSON string representation of the object
print(StealthDerive200ResponseData.to_json())

# convert the object into a dict
stealth_derive200_response_data_dict = stealth_derive200_response_data_instance.to_dict()
# create an instance of StealthDerive200ResponseData from a dict
stealth_derive200_response_data_from_dict = StealthDerive200ResponseData.from_dict(stealth_derive200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


