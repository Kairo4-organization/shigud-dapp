# ProofsFulfillmentGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent_hash** | **str** | 0x-prefixed 32-byte hex string | 
**output_amount** | **str** |  | 
**output_blinding** | **str** | 0x-prefixed 32-byte hex string | 
**min_output_amount** | **str** |  | 
**recipient_stealth** | **str** | 0x-prefixed 32-byte hex string | 
**solver_id** | **str** |  | 
**solver_secret** | **str** | 0x-prefixed 32-byte hex string | 
**oracle_attestation** | [**ProofsFulfillmentGenerateRequestOracleAttestation**](ProofsFulfillmentGenerateRequestOracleAttestation.md) |  | 
**fulfillment_time** | **int** |  | 
**expiry** | **int** |  | 

## Example

```python
from sipher_client.models.proofs_fulfillment_generate_request import ProofsFulfillmentGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFulfillmentGenerateRequest from a JSON string
proofs_fulfillment_generate_request_instance = ProofsFulfillmentGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsFulfillmentGenerateRequest.to_json())

# convert the object into a dict
proofs_fulfillment_generate_request_dict = proofs_fulfillment_generate_request_instance.to_dict()
# create an instance of ProofsFulfillmentGenerateRequest from a dict
proofs_fulfillment_generate_request_from_dict = ProofsFulfillmentGenerateRequest.from_dict(proofs_fulfillment_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


