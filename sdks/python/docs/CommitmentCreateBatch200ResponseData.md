# CommitmentCreateBatch200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[CommitmentCreateBatch200ResponseDataResultsInner]**](CommitmentCreateBatch200ResponseDataResultsInner.md) |  | [optional] 
**summary** | [**StealthGenerateBatch200ResponseDataSummary**](StealthGenerateBatch200ResponseDataSummary.md) |  | [optional] 

## Example

```python
from sipher_client.models.commitment_create_batch200_response_data import CommitmentCreateBatch200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateBatch200ResponseData from a JSON string
commitment_create_batch200_response_data_instance = CommitmentCreateBatch200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateBatch200ResponseData.to_json())

# convert the object into a dict
commitment_create_batch200_response_data_dict = commitment_create_batch200_response_data_instance.to_dict()
# create an instance of CommitmentCreateBatch200ResponseData from a dict
commitment_create_batch200_response_data_from_dict = CommitmentCreateBatch200ResponseData.from_dict(commitment_create_batch200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


