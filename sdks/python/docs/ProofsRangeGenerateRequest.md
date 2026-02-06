# ProofsRangeGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Value to prove (private, not revealed) | 
**threshold** | **str** | Minimum threshold (public) | 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | 
**commitment** | **str** | Optional existing Pedersen commitment. If omitted, one is created from value + blindingFactor. | [optional] 

## Example

```python
from sipher_client.models.proofs_range_generate_request import ProofsRangeGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsRangeGenerateRequest from a JSON string
proofs_range_generate_request_instance = ProofsRangeGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsRangeGenerateRequest.to_json())

# convert the object into a dict
proofs_range_generate_request_dict = proofs_range_generate_request_instance.to_dict()
# create an instance of ProofsRangeGenerateRequest from a dict
proofs_range_generate_request_from_dict = ProofsRangeGenerateRequest.from_dict(proofs_range_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


