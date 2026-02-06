# ProofsFulfillmentGenerateRequestOracleAttestation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | **str** | 0x-prefixed 32-byte hex string | 
**amount** | **str** |  | 
**tx_hash** | **str** | 0x-prefixed 32-byte hex string | 
**block_number** | **str** |  | 
**signature** | **str** |  | 

## Example

```python
from sipher_client.models.proofs_fulfillment_generate_request_oracle_attestation import ProofsFulfillmentGenerateRequestOracleAttestation

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFulfillmentGenerateRequestOracleAttestation from a JSON string
proofs_fulfillment_generate_request_oracle_attestation_instance = ProofsFulfillmentGenerateRequestOracleAttestation.from_json(json)
# print the JSON string representation of the object
print(ProofsFulfillmentGenerateRequestOracleAttestation.to_json())

# convert the object into a dict
proofs_fulfillment_generate_request_oracle_attestation_dict = proofs_fulfillment_generate_request_oracle_attestation_instance.to_dict()
# create an instance of ProofsFulfillmentGenerateRequestOracleAttestation from a dict
proofs_fulfillment_generate_request_oracle_attestation_from_dict = ProofsFulfillmentGenerateRequestOracleAttestation.from_dict(proofs_fulfillment_generate_request_oracle_attestation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


