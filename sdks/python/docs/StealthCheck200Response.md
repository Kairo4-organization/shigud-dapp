# StealthCheck200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**StealthCheck200ResponseData**](StealthCheck200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.stealth_check200_response import StealthCheck200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StealthCheck200Response from a JSON string
stealth_check200_response_instance = StealthCheck200Response.from_json(json)
# print the JSON string representation of the object
print(StealthCheck200Response.to_json())

# convert the object into a dict
stealth_check200_response_dict = stealth_check200_response_instance.to_dict()
# create an instance of StealthCheck200Response from a dict
stealth_check200_response_from_dict = StealthCheck200Response.from_dict(stealth_check200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


