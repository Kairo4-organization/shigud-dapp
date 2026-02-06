# GetRpcProviders200ResponseDataActive


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** |  | [optional] 
**endpoint** | **str** | Masked RPC endpoint URL | [optional] 
**connected** | **bool** |  | [optional] 
**cluster** | **str** |  | [optional] 
**latency_ms** | **float** |  | [optional] 

## Example

```python
from sipher_client.models.get_rpc_providers200_response_data_active import GetRpcProviders200ResponseDataActive

# TODO update the JSON string below
json = "{}"
# create an instance of GetRpcProviders200ResponseDataActive from a JSON string
get_rpc_providers200_response_data_active_instance = GetRpcProviders200ResponseDataActive.from_json(json)
# print the JSON string representation of the object
print(GetRpcProviders200ResponseDataActive.to_json())

# convert the object into a dict
get_rpc_providers200_response_data_active_dict = get_rpc_providers200_response_data_active_instance.to_dict()
# create an instance of GetRpcProviders200ResponseDataActive from a dict
get_rpc_providers200_response_data_active_from_dict = GetRpcProviders200ResponseDataActive.from_dict(get_rpc_providers200_response_data_active_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


