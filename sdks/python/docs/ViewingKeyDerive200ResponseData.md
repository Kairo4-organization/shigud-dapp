# ViewingKeyDerive200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**path** | **str** |  | [optional] 
**hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**derived_from** | [**ViewingKeyDerive200ResponseDataDerivedFrom**](ViewingKeyDerive200ResponseDataDerivedFrom.md) |  | [optional] 

## Example

```python
from sipher_client.models.viewing_key_derive200_response_data import ViewingKeyDerive200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDerive200ResponseData from a JSON string
viewing_key_derive200_response_data_instance = ViewingKeyDerive200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDerive200ResponseData.to_json())

# convert the object into a dict
viewing_key_derive200_response_data_dict = viewing_key_derive200_response_data_instance.to_dict()
# create an instance of ViewingKeyDerive200ResponseData from a dict
viewing_key_derive200_response_data_from_dict = ViewingKeyDerive200ResponseData.from_dict(viewing_key_derive200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


