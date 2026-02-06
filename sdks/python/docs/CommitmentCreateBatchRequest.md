# CommitmentCreateBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CommitmentCreateBatchRequestItemsInner]**](CommitmentCreateBatchRequestItemsInner.md) |  | 

## Example

```python
from sipher_client.models.commitment_create_batch_request import CommitmentCreateBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateBatchRequest from a JSON string
commitment_create_batch_request_instance = CommitmentCreateBatchRequest.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateBatchRequest.to_json())

# convert the object into a dict
commitment_create_batch_request_dict = commitment_create_batch_request_instance.to_dict()
# create an instance of CommitmentCreateBatchRequest from a dict
commitment_create_batch_request_from_dict = CommitmentCreateBatchRequest.from_dict(commitment_create_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


