# GetRpcProviders200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | [**GetRpcProviders200ResponseDataActive**](GetRpcProviders200ResponseDataActive.md) |  | [optional] 
**supported** | [**List[GetRpcProviders200ResponseDataSupportedInner]**](GetRpcProviders200ResponseDataSupportedInner.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_rpc_providers200_response_data import GetRpcProviders200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetRpcProviders200ResponseData from a JSON string
get_rpc_providers200_response_data_instance = GetRpcProviders200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetRpcProviders200ResponseData.to_json())

# convert the object into a dict
get_rpc_providers200_response_data_dict = get_rpc_providers200_response_data_instance.to_dict()
# create an instance of GetRpcProviders200ResponseData from a dict
get_rpc_providers200_response_data_from_dict = GetRpcProviders200ResponseData.from_dict(get_rpc_providers200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


