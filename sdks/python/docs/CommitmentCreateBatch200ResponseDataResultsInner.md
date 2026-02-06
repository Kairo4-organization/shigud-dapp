# CommitmentCreateBatch200ResponseDataResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**CommitmentAdd200ResponseData**](CommitmentAdd200ResponseData.md) |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.commitment_create_batch200_response_data_results_inner import CommitmentCreateBatch200ResponseDataResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateBatch200ResponseDataResultsInner from a JSON string
commitment_create_batch200_response_data_results_inner_instance = CommitmentCreateBatch200ResponseDataResultsInner.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateBatch200ResponseDataResultsInner.to_json())

# convert the object into a dict
commitment_create_batch200_response_data_results_inner_dict = commitment_create_batch200_response_data_results_inner_instance.to_dict()
# create an instance of CommitmentCreateBatch200ResponseDataResultsInner from a dict
commitment_create_batch200_response_data_results_inner_from_dict = CommitmentCreateBatch200ResponseDataResultsInner.from_dict(commitment_create_batch200_response_data_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


