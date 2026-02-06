# StealthGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Optional label for the keypair | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_request import StealthGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateRequest from a JSON string
stealth_generate_request_instance = StealthGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateRequest.to_json())

# convert the object into a dict
stealth_generate_request_dict = stealth_generate_request_instance.to_dict()
# create an instance of StealthGenerateRequest from a dict
stealth_generate_request_from_dict = StealthGenerateRequest.from_dict(stealth_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


