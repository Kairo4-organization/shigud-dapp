# SubmitArciumComputationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_id** | **str** | Circuit identifier | 
**encrypted_inputs** | **List[str]** | Encrypted inputs as hex strings | 
**chain** | **str** | Target chain | [optional] [default to 'solana']
**cipher** | **str** |  | [optional] [default to 'aes256']
**viewing_key** | [**SubmitArciumComputationRequestViewingKey**](SubmitArciumComputationRequestViewingKey.md) |  | [optional] 
**cluster** | **str** | MPC cluster to use | [optional] 
**timeout** | **int** | Timeout in milliseconds | [optional] 

## Example

```python
from sipher_client.models.submit_arcium_computation_request import SubmitArciumComputationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitArciumComputationRequest from a JSON string
submit_arcium_computation_request_instance = SubmitArciumComputationRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitArciumComputationRequest.to_json())

# convert the object into a dict
submit_arcium_computation_request_dict = submit_arcium_computation_request_instance.to_dict()
# create an instance of SubmitArciumComputationRequest from a dict
submit_arcium_computation_request_from_dict = SubmitArciumComputationRequest.from_dict(submit_arcium_computation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


