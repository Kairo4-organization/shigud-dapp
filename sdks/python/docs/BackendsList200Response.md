# BackendsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**BackendsList200ResponseData**](BackendsList200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.backends_list200_response import BackendsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsList200Response from a JSON string
backends_list200_response_instance = BackendsList200Response.from_json(json)
# print the JSON string representation of the object
print(BackendsList200Response.to_json())

# convert the object into a dict
backends_list200_response_dict = backends_list200_response_instance.to_dict()
# create an instance of BackendsList200Response from a dict
backends_list200_response_from_dict = BackendsList200Response.from_dict(backends_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


