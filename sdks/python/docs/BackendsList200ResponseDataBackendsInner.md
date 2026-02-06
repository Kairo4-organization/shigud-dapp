# BackendsList200ResponseDataBackendsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**chains** | **List[str]** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**priority** | **int** |  | [optional] 
**capabilities** | [**BackendsList200ResponseDataBackendsInnerCapabilities**](BackendsList200ResponseDataBackendsInnerCapabilities.md) |  | [optional] 
**health** | [**BackendsList200ResponseDataBackendsInnerHealth**](BackendsList200ResponseDataBackendsInnerHealth.md) |  | [optional] 

## Example

```python
from sipher_client.models.backends_list200_response_data_backends_inner import BackendsList200ResponseDataBackendsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsList200ResponseDataBackendsInner from a JSON string
backends_list200_response_data_backends_inner_instance = BackendsList200ResponseDataBackendsInner.from_json(json)
# print the JSON string representation of the object
print(BackendsList200ResponseDataBackendsInner.to_json())

# convert the object into a dict
backends_list200_response_data_backends_inner_dict = backends_list200_response_data_backends_inner_instance.to_dict()
# create an instance of BackendsList200ResponseDataBackendsInner from a dict
backends_list200_response_data_backends_inner_from_dict = BackendsList200ResponseDataBackendsInner.from_dict(backends_list200_response_data_backends_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


