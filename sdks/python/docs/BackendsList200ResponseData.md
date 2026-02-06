# BackendsList200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**List[BackendsList200ResponseDataBackendsInner]**](BackendsList200ResponseDataBackendsInner.md) |  | [optional] 
**total** | **int** |  | [optional] 
**total_enabled** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.backends_list200_response_data import BackendsList200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsList200ResponseData from a JSON string
backends_list200_response_data_instance = BackendsList200ResponseData.from_json(json)
# print the JSON string representation of the object
print(BackendsList200ResponseData.to_json())

# convert the object into a dict
backends_list200_response_data_dict = backends_list200_response_data_instance.to_dict()
# create an instance of BackendsList200ResponseData from a dict
backends_list200_response_data_from_dict = BackendsList200ResponseData.from_dict(backends_list200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


