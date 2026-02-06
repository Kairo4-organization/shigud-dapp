# ProofsFundingVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**proof** | **str** |  | 
**public_inputs** | **List[str]** |  | 

## Example

```python
from sipher_client.models.proofs_funding_verify_request import ProofsFundingVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFundingVerifyRequest from a JSON string
proofs_funding_verify_request_instance = ProofsFundingVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsFundingVerifyRequest.to_json())

# convert the object into a dict
proofs_funding_verify_request_dict = proofs_funding_verify_request_instance.to_dict()
# create an instance of ProofsFundingVerifyRequest from a dict
proofs_funding_verify_request_from_dict = ProofsFundingVerifyRequest.from_dict(proofs_funding_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


