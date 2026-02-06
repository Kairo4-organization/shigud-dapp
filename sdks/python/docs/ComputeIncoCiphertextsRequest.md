# ComputeIncoCiphertextsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Homomorphic operation | 
**ciphertexts** | **List[str]** | Ciphertexts to operate on | 
**scheme** | **str** |  | [optional] [default to 'tfhe']

## Example

```python
from sipher_client.models.compute_inco_ciphertexts_request import ComputeIncoCiphertextsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeIncoCiphertextsRequest from a JSON string
compute_inco_ciphertexts_request_instance = ComputeIncoCiphertextsRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeIncoCiphertextsRequest.to_json())

# convert the object into a dict
compute_inco_ciphertexts_request_dict = compute_inco_ciphertexts_request_instance.to_dict()
# create an instance of ComputeIncoCiphertextsRequest from a dict
compute_inco_ciphertexts_request_from_dict = ComputeIncoCiphertextsRequest.from_dict(compute_inco_ciphertexts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


