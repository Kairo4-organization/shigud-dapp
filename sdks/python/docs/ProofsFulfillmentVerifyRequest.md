# ProofsFulfillmentVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**proof** | **str** |  | 
**public_inputs** | **List[str]** |  | 

## Example

```python
from sipher_client.models.proofs_fulfillment_verify_request import ProofsFulfillmentVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFulfillmentVerifyRequest from a JSON string
proofs_fulfillment_verify_request_instance = ProofsFulfillmentVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsFulfillmentVerifyRequest.to_json())

# convert the object into a dict
proofs_fulfillment_verify_request_dict = proofs_fulfillment_verify_request_instance.to_dict()
# create an instance of ProofsFulfillmentVerifyRequest from a dict
proofs_fulfillment_verify_request_from_dict = ProofsFulfillmentVerifyRequest.from_dict(proofs_fulfillment_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


