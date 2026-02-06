# StealthDerive200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**StealthDerive200ResponseData**](StealthDerive200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.stealth_derive200_response import StealthDerive200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StealthDerive200Response from a JSON string
stealth_derive200_response_instance = StealthDerive200Response.from_json(json)
# print the JSON string representation of the object
print(StealthDerive200Response.to_json())

# convert the object into a dict
stealth_derive200_response_dict = stealth_derive200_response_instance.to_dict()
# create an instance of StealthDerive200Response from a dict
stealth_derive200_response_from_dict = StealthDerive200Response.from_dict(stealth_derive200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


