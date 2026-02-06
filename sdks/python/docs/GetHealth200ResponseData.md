# GetHealth200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**uptime** | **int** | Uptime in seconds | [optional] 
**solana** | [**GetHealth200ResponseDataSolana**](GetHealth200ResponseDataSolana.md) |  | [optional] 
**memory** | [**GetHealth200ResponseDataMemory**](GetHealth200ResponseDataMemory.md) |  | [optional] 
**endpoints** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.get_health200_response_data import GetHealth200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetHealth200ResponseData from a JSON string
get_health200_response_data_instance = GetHealth200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetHealth200ResponseData.to_json())

# convert the object into a dict
get_health200_response_data_dict = get_health200_response_data_instance.to_dict()
# create an instance of GetHealth200ResponseData from a dict
get_health200_response_data_from_dict = GetHealth200ResponseData.from_dict(get_health200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


