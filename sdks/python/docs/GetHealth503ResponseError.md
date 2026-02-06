# GetHealth503ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**message** | **str** |  | 
**details** | **object** |  | [optional] 

## Example

```python
from sipher_client.models.get_health503_response_error import GetHealth503ResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of GetHealth503ResponseError from a JSON string
get_health503_response_error_instance = GetHealth503ResponseError.from_json(json)
# print the JSON string representation of the object
print(GetHealth503ResponseError.to_json())

# convert the object into a dict
get_health503_response_error_dict = get_health503_response_error_instance.to_dict()
# create an instance of GetHealth503ResponseError from a dict
get_health503_response_error_from_dict = GetHealth503ResponseError.from_dict(get_health503_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


