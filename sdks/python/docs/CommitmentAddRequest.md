# CommitmentAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_a** | **str** |  | 
**commitment_b** | **str** |  | 
**blinding_a** | **str** | 0x-prefixed 32-byte hex string | 
**blinding_b** | **str** | 0x-prefixed 32-byte hex string | 

## Example

```python
from sipher_client.models.commitment_add_request import CommitmentAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentAddRequest from a JSON string
commitment_add_request_instance = CommitmentAddRequest.from_json(json)
# print the JSON string representation of the object
print(CommitmentAddRequest.to_json())

# convert the object into a dict
commitment_add_request_dict = commitment_add_request_instance.to_dict()
# create an instance of CommitmentAddRequest from a dict
commitment_add_request_from_dict = CommitmentAddRequest.from_dict(commitment_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


