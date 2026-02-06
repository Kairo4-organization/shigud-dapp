# StealthGenerateBatch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**StealthGenerateBatch200ResponseData**](StealthGenerateBatch200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_batch200_response import StealthGenerateBatch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateBatch200Response from a JSON string
stealth_generate_batch200_response_instance = StealthGenerateBatch200Response.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateBatch200Response.to_json())

# convert the object into a dict
stealth_generate_batch200_response_dict = stealth_generate_batch200_response_instance.to_dict()
# create an instance of StealthGenerateBatch200Response from a dict
stealth_generate_batch200_response_from_dict = StealthGenerateBatch200Response.from_dict(stealth_generate_batch200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


