# BackendsCompare200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**BackendsCompare200ResponseData**](BackendsCompare200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.backends_compare200_response import BackendsCompare200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackendsCompare200Response from a JSON string
backends_compare200_response_instance = BackendsCompare200Response.from_json(json)
# print the JSON string representation of the object
print(BackendsCompare200Response.to_json())

# convert the object into a dict
backends_compare200_response_dict = backends_compare200_response_instance.to_dict()
# create an instance of BackendsCompare200Response from a dict
backends_compare200_response_from_dict = BackendsCompare200Response.from_dict(backends_compare200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


