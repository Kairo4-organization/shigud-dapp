# BackendsSelectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend** | **str** | Backend name to prefer | 

## Example

```python
from sipher_client.models.backends_select_request import BackendsSelectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsSelectRequest from a JSON string
backends_select_request_instance = BackendsSelectRequest.from_json(json)
# print the JSON string representation of the object
print(BackendsSelectRequest.to_json())

# convert the object into a dict
backends_select_request_dict = backends_select_request_instance.to_dict()
# create an instance of BackendsSelectRequest from a dict
backends_select_request_from_dict = BackendsSelectRequest.from_dict(backends_select_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


