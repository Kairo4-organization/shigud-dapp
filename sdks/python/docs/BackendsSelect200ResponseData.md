# BackendsSelect200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** |  | [optional] 
**preferred_backend** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.backends_select200_response_data import BackendsSelect200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsSelect200ResponseData from a JSON string
backends_select200_response_data_instance = BackendsSelect200ResponseData.from_json(json)
# print the JSON string representation of the object
print(BackendsSelect200ResponseData.to_json())

# convert the object into a dict
backends_select200_response_data_dict = backends_select200_response_data_instance.to_dict()
# create an instance of BackendsSelect200ResponseData from a dict
backends_select200_response_data_from_dict = BackendsSelect200ResponseData.from_dict(backends_select200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


