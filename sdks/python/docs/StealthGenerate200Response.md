# StealthGenerate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**StealthGenerate200ResponseData**](StealthGenerate200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.stealth_generate200_response import StealthGenerate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerate200Response from a JSON string
stealth_generate200_response_instance = StealthGenerate200Response.from_json(json)
# print the JSON string representation of the object
print(StealthGenerate200Response.to_json())

# convert the object into a dict
stealth_generate200_response_dict = stealth_generate200_response_instance.to_dict()
# create an instance of StealthGenerate200Response from a dict
stealth_generate200_response_from_dict = StealthGenerate200Response.from_dict(stealth_generate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


