# CommitmentCreateBatchRequestItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | [optional] 

## Example

```python
from sipher_client.models.commitment_create_batch_request_items_inner import CommitmentCreateBatchRequestItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateBatchRequestItemsInner from a JSON string
commitment_create_batch_request_items_inner_instance = CommitmentCreateBatchRequestItemsInner.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateBatchRequestItemsInner.to_json())

# convert the object into a dict
commitment_create_batch_request_items_inner_dict = commitment_create_batch_request_items_inner_instance.to_dict()
# create an instance of CommitmentCreateBatchRequestItemsInner from a dict
commitment_create_batch_request_items_inner_from_dict = CommitmentCreateBatchRequestItemsInner.from_dict(commitment_create_batch_request_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


