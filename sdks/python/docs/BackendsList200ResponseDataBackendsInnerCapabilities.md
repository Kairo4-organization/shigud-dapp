# BackendsList200ResponseDataBackendsInnerCapabilities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden_amount** | **bool** |  | [optional] 
**hidden_sender** | **bool** |  | [optional] 
**hidden_recipient** | **bool** |  | [optional] 
**hidden_compute** | **bool** |  | [optional] 
**compliance_support** | **bool** |  | [optional] 
**setup_required** | **bool** |  | [optional] 
**latency_estimate** | **str** |  | [optional] 
**supported_tokens** | **str** |  | [optional] 
**min_amount** | **str** | BigInt as string | [optional] 
**max_amount** | **str** | BigInt as string | [optional] 

## Example

```python
from sipher_client.models.backends_list200_response_data_backends_inner_capabilities import BackendsList200ResponseDataBackendsInnerCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsList200ResponseDataBackendsInnerCapabilities from a JSON string
backends_list200_response_data_backends_inner_capabilities_instance = BackendsList200ResponseDataBackendsInnerCapabilities.from_json(json)
# print the JSON string representation of the object
print(BackendsList200ResponseDataBackendsInnerCapabilities.to_json())

# convert the object into a dict
backends_list200_response_data_backends_inner_capabilities_dict = backends_list200_response_data_backends_inner_capabilities_instance.to_dict()
# create an instance of BackendsList200ResponseDataBackendsInnerCapabilities from a dict
backends_list200_response_data_backends_inner_capabilities_from_dict = BackendsList200ResponseDataBackendsInnerCapabilities.from_dict(backends_list200_response_data_backends_inner_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


