# BackendsHealth200ResponseDataMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_requests** | **int** |  | [optional] 
**successful_requests** | **int** |  | [optional] 
**failed_requests** | **int** |  | [optional] 
**average_latency_ms** | **float** |  | [optional] 

## Example

```python
from sipher_client.models.backends_health200_response_data_metrics import BackendsHealth200ResponseDataMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsHealth200ResponseDataMetrics from a JSON string
backends_health200_response_data_metrics_instance = BackendsHealth200ResponseDataMetrics.from_json(json)
# print the JSON string representation of the object
print(BackendsHealth200ResponseDataMetrics.to_json())

# convert the object into a dict
backends_health200_response_data_metrics_dict = backends_health200_response_data_metrics_instance.to_dict()
# create an instance of BackendsHealth200ResponseDataMetrics from a dict
backends_health200_response_data_metrics_from_dict = BackendsHealth200ResponseDataMetrics.from_dict(backends_health200_response_data_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


