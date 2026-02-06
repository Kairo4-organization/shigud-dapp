# BackendsCompare200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** |  | [optional] 
**chain** | **str** |  | [optional] 
**comparisons** | [**List[BackendsCompare200ResponseDataComparisonsInner]**](BackendsCompare200ResponseDataComparisonsInner.md) |  | [optional] 
**recommendation** | [**BackendsCompare200ResponseDataRecommendation**](BackendsCompare200ResponseDataRecommendation.md) |  | [optional] 

## Example

```python
from sipher_client.models.backends_compare200_response_data import BackendsCompare200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsCompare200ResponseData from a JSON string
backends_compare200_response_data_instance = BackendsCompare200ResponseData.from_json(json)
# print the JSON string representation of the object
print(BackendsCompare200ResponseData.to_json())

# convert the object into a dict
backends_compare200_response_data_dict = backends_compare200_response_data_instance.to_dict()
# create an instance of BackendsCompare200ResponseData from a dict
backends_compare200_response_data_from_dict = BackendsCompare200ResponseData.from_dict(backends_compare200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


