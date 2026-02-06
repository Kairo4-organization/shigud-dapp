# StealthGenerateBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of keypairs to generate | 
**label** | **str** | Optional label applied to all keypairs | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_batch_request import StealthGenerateBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateBatchRequest from a JSON string
stealth_generate_batch_request_instance = StealthGenerateBatchRequest.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateBatchRequest.to_json())

# convert the object into a dict
stealth_generate_batch_request_dict = stealth_generate_batch_request_instance.to_dict()
# create an instance of StealthGenerateBatchRequest from a dict
stealth_generate_batch_request_from_dict = StealthGenerateBatchRequest.from_dict(stealth_generate_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


