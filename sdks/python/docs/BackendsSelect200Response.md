# BackendsSelect200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**BackendsSelect200ResponseData**](BackendsSelect200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.backends_select200_response import BackendsSelect200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsSelect200Response from a JSON string
backends_select200_response_instance = BackendsSelect200Response.from_json(json)
# print the JSON string representation of the object
print(BackendsSelect200Response.to_json())

# convert the object into a dict
backends_select200_response_dict = backends_select200_response_instance.to_dict()
# create an instance of BackendsSelect200Response from a dict
backends_select200_response_from_dict = BackendsSelect200Response.from_dict(backends_select200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


