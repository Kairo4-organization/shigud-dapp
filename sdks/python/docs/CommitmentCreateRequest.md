# CommitmentCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Non-negative integer string | 
**blinding_factor** | **str** | Optional custom blinding factor | [optional] 

## Example

```python
from sipher_client.models.commitment_create_request import CommitmentCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateRequest from a JSON string
commitment_create_request_instance = CommitmentCreateRequest.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateRequest.to_json())

# convert the object into a dict
commitment_create_request_dict = commitment_create_request_instance.to_dict()
# create an instance of CommitmentCreateRequest from a dict
commitment_create_request_from_dict = CommitmentCreateRequest.from_dict(commitment_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


