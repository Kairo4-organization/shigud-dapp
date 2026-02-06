# BackendsHealth200ResponseDataHealth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_state** | **str** |  | [optional] 
**is_healthy** | **bool** |  | [optional] 
**consecutive_failures** | **int** |  | [optional] 
**consecutive_successes** | **int** |  | [optional] 
**last_checked** | **int** |  | [optional] 
**last_failure_reason** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.backends_health200_response_data_health import BackendsHealth200ResponseDataHealth

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsHealth200ResponseDataHealth from a JSON string
backends_health200_response_data_health_instance = BackendsHealth200ResponseDataHealth.from_json(json)
# print the JSON string representation of the object
print(BackendsHealth200ResponseDataHealth.to_json())

# convert the object into a dict
backends_health200_response_data_health_dict = backends_health200_response_data_health_instance.to_dict()
# create an instance of BackendsHealth200ResponseDataHealth from a dict
backends_health200_response_data_health_from_dict = BackendsHealth200ResponseDataHealth.from_dict(backends_health200_response_data_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


