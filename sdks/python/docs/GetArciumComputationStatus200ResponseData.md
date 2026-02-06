# GetArciumComputationStatus200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** |  | [optional] 
**circuit_id** | **str** |  | [optional] 
**chain** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**progress** | **int** |  | [optional] 
**output** | **str** | Only present when status is completed | [optional] 
**proof** | **str** | Only present when status is completed | [optional] 

## Example

```python
from sipher_client.models.get_arcium_computation_status200_response_data import GetArciumComputationStatus200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetArciumComputationStatus200ResponseData from a JSON string
get_arcium_computation_status200_response_data_instance = GetArciumComputationStatus200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetArciumComputationStatus200ResponseData.to_json())

# convert the object into a dict
get_arcium_computation_status200_response_data_dict = get_arcium_computation_status200_response_data_instance.to_dict()
# create an instance of GetArciumComputationStatus200ResponseData from a dict
get_arcium_computation_status200_response_data_from_dict = GetArciumComputationStatus200ResponseData.from_dict(get_arcium_computation_status200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


