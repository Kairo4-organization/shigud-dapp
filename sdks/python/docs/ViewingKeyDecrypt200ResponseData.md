# ViewingKeyDecrypt200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** |  | [optional] 
**recipient** | **str** |  | [optional] 
**amount** | **str** |  | [optional] 
**timestamp** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.viewing_key_decrypt200_response_data import ViewingKeyDecrypt200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDecrypt200ResponseData from a JSON string
viewing_key_decrypt200_response_data_instance = ViewingKeyDecrypt200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDecrypt200ResponseData.to_json())

# convert the object into a dict
viewing_key_decrypt200_response_data_dict = viewing_key_decrypt200_response_data_instance.to_dict()
# create an instance of ViewingKeyDecrypt200ResponseData from a dict
viewing_key_decrypt200_response_data_from_dict = ViewingKeyDecrypt200ResponseData.from_dict(viewing_key_decrypt200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


