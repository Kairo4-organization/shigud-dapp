# ComputeIncoCiphertexts200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 
**scheme** | **str** |  | [optional] 
**operand_count** | **int** |  | [optional] 
**result_ciphertext** | **str** |  | [optional] 
**noise_budget_remaining** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.compute_inco_ciphertexts200_response_data import ComputeIncoCiphertexts200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeIncoCiphertexts200ResponseData from a JSON string
compute_inco_ciphertexts200_response_data_instance = ComputeIncoCiphertexts200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ComputeIncoCiphertexts200ResponseData.to_json())

# convert the object into a dict
compute_inco_ciphertexts200_response_data_dict = compute_inco_ciphertexts200_response_data_instance.to_dict()
# create an instance of ComputeIncoCiphertexts200ResponseData from a dict
compute_inco_ciphertexts200_response_data_from_dict = ComputeIncoCiphertexts200ResponseData.from_dict(compute_inco_ciphertexts200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


