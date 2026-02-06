# ProofsFundingGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **str** | User balance (private) | 
**minimum_required** | **str** | Minimum required amount (public) | 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | 
**asset_id** | **str** | Asset identifier (e.g., SOL) | 
**user_address** | **str** | User address for ownership proof | 
**ownership_signature** | **str** | Signature proving address ownership | 

## Example

```python
from sipher_client.models.proofs_funding_generate_request import ProofsFundingGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFundingGenerateRequest from a JSON string
proofs_funding_generate_request_instance = ProofsFundingGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsFundingGenerateRequest.to_json())

# convert the object into a dict
proofs_funding_generate_request_dict = proofs_funding_generate_request_instance.to_dict()
# create an instance of ProofsFundingGenerateRequest from a dict
proofs_funding_generate_request_from_dict = ProofsFundingGenerateRequest.from_dict(proofs_funding_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


