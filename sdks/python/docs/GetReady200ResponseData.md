# GetReady200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ready** | **bool** |  | [optional] 
**checks** | [**GetReady200ResponseDataChecks**](GetReady200ResponseDataChecks.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_ready200_response_data import GetReady200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetReady200ResponseData from a JSON string
get_ready200_response_data_instance = GetReady200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetReady200ResponseData.to_json())

# convert the object into a dict
get_ready200_response_data_dict = get_ready200_response_data_instance.to_dict()
# create an instance of GetReady200ResponseData from a dict
get_ready200_response_data_from_dict = GetReady200ResponseData.from_dict(get_ready200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


