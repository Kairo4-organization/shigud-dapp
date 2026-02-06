# ProofsValidityGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent_hash** | **str** | 0x-prefixed 32-byte hex string | 
**sender_address** | **str** |  | 
**sender_blinding** | **str** | 0x-prefixed 32-byte hex string | 
**sender_secret** | **str** | 0x-prefixed 32-byte hex string | 
**authorization_signature** | **str** |  | 
**nonce** | **str** | 0x-prefixed 32-byte hex string | 
**timestamp** | **int** |  | 
**expiry** | **int** |  | 

## Example

```python
from sipher_client.models.proofs_validity_generate_request import ProofsValidityGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsValidityGenerateRequest from a JSON string
proofs_validity_generate_request_instance = ProofsValidityGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsValidityGenerateRequest.to_json())

# convert the object into a dict
proofs_validity_generate_request_dict = proofs_validity_generate_request_instance.to_dict()
# create an instance of ProofsValidityGenerateRequest from a dict
proofs_validity_generate_request_from_dict = ProofsValidityGenerateRequest.from_dict(proofs_validity_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


