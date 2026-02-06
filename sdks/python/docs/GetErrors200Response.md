# GetErrors200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetErrors200ResponseData**](GetErrors200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_errors200_response import GetErrors200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetErrors200Response from a JSON string
get_errors200_response_instance = GetErrors200Response.from_json(json)
# print the JSON string representation of the object
print(GetErrors200Response.to_json())

# convert the object into a dict
get_errors200_response_dict = get_errors200_response_instance.to_dict()
# create an instance of GetErrors200Response from a dict
get_errors200_response_from_dict = GetErrors200Response.from_dict(get_errors200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


