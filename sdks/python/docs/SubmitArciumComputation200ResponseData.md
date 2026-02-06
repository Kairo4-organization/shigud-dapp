# SubmitArciumComputation200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**estimated_completion** | **int** |  | [optional] 
**circuit_id** | **str** |  | [optional] 
**chain** | **str** |  | [optional] 
**input_count** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.submit_arcium_computation200_response_data import SubmitArciumComputation200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitArciumComputation200ResponseData from a JSON string
submit_arcium_computation200_response_data_instance = SubmitArciumComputation200ResponseData.from_json(json)
# print the JSON string representation of the object
print(SubmitArciumComputation200ResponseData.to_json())

# convert the object into a dict
submit_arcium_computation200_response_data_dict = submit_arcium_computation200_response_data_instance.to_dict()
# create an instance of SubmitArciumComputation200ResponseData from a dict
submit_arcium_computation200_response_data_from_dict = SubmitArciumComputation200ResponseData.from_dict(submit_arcium_computation200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


