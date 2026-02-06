# BackendsCompareRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Type of privacy operation to compare backends for | 
**chain** | **str** | Target blockchain (default: solana) | [optional] 
**amount** | **str** | Transaction amount in smallest units | [optional] 
**prioritize** | **str** | Factor to prioritize in scoring (adjusts weights to 60%) | [optional] 

## Example

```python
from sipher_client.models.backends_compare_request import BackendsCompareRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsCompareRequest from a JSON string
backends_compare_request_instance = BackendsCompareRequest.from_json(json)
# print the JSON string representation of the object
print(BackendsCompareRequest.to_json())

# convert the object into a dict
backends_compare_request_dict = backends_compare_request_instance.to_dict()
# create an instance of BackendsCompareRequest from a dict
backends_compare_request_from_dict = BackendsCompareRequest.from_dict(backends_compare_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


