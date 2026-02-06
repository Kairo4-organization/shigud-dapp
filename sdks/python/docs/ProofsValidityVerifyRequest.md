# ProofsValidityVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**proof** | **str** |  | 
**public_inputs** | **List[str]** |  | 

## Example

```python
from sipher_client.models.proofs_validity_verify_request import ProofsValidityVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsValidityVerifyRequest from a JSON string
proofs_validity_verify_request_instance = ProofsValidityVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsValidityVerifyRequest.to_json())

# convert the object into a dict
proofs_validity_verify_request_dict = proofs_validity_verify_request_instance.to_dict()
# create an instance of ProofsValidityVerifyRequest from a dict
proofs_validity_verify_request_from_dict = ProofsValidityVerifyRequest.from_dict(proofs_validity_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


