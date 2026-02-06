# BackendsHealth200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**available** | **bool** |  | [optional] 
**estimated_cost** | **str** | BigInt as string | [optional] 
**estimated_time** | **int** | Estimated time in ms | [optional] 
**health** | [**BackendsHealth200ResponseDataHealth**](BackendsHealth200ResponseDataHealth.md) |  | [optional] 
**metrics** | [**BackendsHealth200ResponseDataMetrics**](BackendsHealth200ResponseDataMetrics.md) |  | [optional] 
**capabilities** | **object** |  | [optional] 

## Example

```python
from sipher_client.models.backends_health200_response_data import BackendsHealth200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsHealth200ResponseData from a JSON string
backends_health200_response_data_instance = BackendsHealth200ResponseData.from_json(json)
# print the JSON string representation of the object
print(BackendsHealth200ResponseData.to_json())

# convert the object into a dict
backends_health200_response_data_dict = backends_health200_response_data_instance.to_dict()
# create an instance of BackendsHealth200ResponseData from a dict
backends_health200_response_data_from_dict = BackendsHealth200ResponseData.from_dict(backends_health200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


