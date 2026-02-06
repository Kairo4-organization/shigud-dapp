# ProofsRangeVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**proof** | **str** |  | 
**public_inputs** | **List[str]** |  | 

## Example

```python
from sipher_client.models.proofs_range_verify_request import ProofsRangeVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsRangeVerifyRequest from a JSON string
proofs_range_verify_request_instance = ProofsRangeVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(ProofsRangeVerifyRequest.to_json())

# convert the object into a dict
proofs_range_verify_request_dict = proofs_range_verify_request_instance.to_dict()
# create an instance of ProofsRangeVerifyRequest from a dict
proofs_range_verify_request_from_dict = ProofsRangeVerifyRequest.from_dict(proofs_range_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


