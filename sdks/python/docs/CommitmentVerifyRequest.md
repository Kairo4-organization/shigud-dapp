# CommitmentVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment** | **str** |  | 
**value** | **str** |  | 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | 

## Example

```python
from sipher_client.models.commitment_verify_request import CommitmentVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentVerifyRequest from a JSON string
commitment_verify_request_instance = CommitmentVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(CommitmentVerifyRequest.to_json())

# convert the object into a dict
commitment_verify_request_dict = commitment_verify_request_instance.to_dict()
# create an instance of CommitmentVerifyRequest from a dict
commitment_verify_request_from_dict = CommitmentVerifyRequest.from_dict(commitment_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


