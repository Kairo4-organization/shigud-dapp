# BackendsList200ResponseDataBackendsInnerHealth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_state** | **str** |  | [optional] 
**is_healthy** | **bool** |  | [optional] 
**consecutive_failures** | **int** |  | [optional] 
**last_checked** | **int** |  | [optional] 
**last_failure_reason** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.backends_list200_response_data_backends_inner_health import BackendsList200ResponseDataBackendsInnerHealth

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsList200ResponseDataBackendsInnerHealth from a JSON string
backends_list200_response_data_backends_inner_health_instance = BackendsList200ResponseDataBackendsInnerHealth.from_json(json)
# print the JSON string representation of the object
print(BackendsList200ResponseDataBackendsInnerHealth.to_json())

# convert the object into a dict
backends_list200_response_data_backends_inner_health_dict = backends_list200_response_data_backends_inner_health_instance.to_dict()
# create an instance of BackendsList200ResponseDataBackendsInnerHealth from a dict
backends_list200_response_data_backends_inner_health_from_dict = BackendsList200ResponseDataBackendsInnerHealth.from_dict(backends_list200_response_data_backends_inner_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


