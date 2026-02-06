# StealthGenerateBatch200ResponseDataResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**StealthGenerate200ResponseData**](StealthGenerate200ResponseData.md) |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_batch200_response_data_results_inner import StealthGenerateBatch200ResponseDataResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateBatch200ResponseDataResultsInner from a JSON string
stealth_generate_batch200_response_data_results_inner_instance = StealthGenerateBatch200ResponseDataResultsInner.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateBatch200ResponseDataResultsInner.to_json())

# convert the object into a dict
stealth_generate_batch200_response_data_results_inner_dict = stealth_generate_batch200_response_data_results_inner_instance.to_dict()
# create an instance of StealthGenerateBatch200ResponseDataResultsInner from a dict
stealth_generate_batch200_response_data_results_inner_from_dict = StealthGenerateBatch200ResponseDataResultsInner.from_dict(stealth_generate_batch200_response_data_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


