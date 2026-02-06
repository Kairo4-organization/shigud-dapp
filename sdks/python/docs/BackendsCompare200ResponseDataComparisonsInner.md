# BackendsCompare200ResponseDataComparisonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**available** | **bool** |  | [optional] 
**cost_lamports** | **float** |  | [optional] 
**cost_sol** | **str** |  | [optional] 
**latency_ms** | **float** |  | [optional] 
**latency_category** | **str** |  | [optional] 
**privacy_level** | **str** |  | [optional] 
**capabilities** | **List[str]** |  | [optional] 
**score** | **float** |  | [optional] 
**recommended** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.backends_compare200_response_data_comparisons_inner import BackendsCompare200ResponseDataComparisonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsCompare200ResponseDataComparisonsInner from a JSON string
backends_compare200_response_data_comparisons_inner_instance = BackendsCompare200ResponseDataComparisonsInner.from_json(json)
# print the JSON string representation of the object
print(BackendsCompare200ResponseDataComparisonsInner.to_json())

# convert the object into a dict
backends_compare200_response_data_comparisons_inner_dict = backends_compare200_response_data_comparisons_inner_instance.to_dict()
# create an instance of BackendsCompare200ResponseDataComparisonsInner from a dict
backends_compare200_response_data_comparisons_inner_from_dict = BackendsCompare200ResponseDataComparisonsInner.from_dict(backends_compare200_response_data_comparisons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


