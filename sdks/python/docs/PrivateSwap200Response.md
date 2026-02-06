# PrivateSwap200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**PrivateSwap200ResponseData**](PrivateSwap200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.private_swap200_response import PrivateSwap200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSwap200Response from a JSON string
private_swap200_response_instance = PrivateSwap200Response.from_json(json)
# print the JSON string representation of the object
print(PrivateSwap200Response.to_json())

# convert the object into a dict
private_swap200_response_dict = private_swap200_response_instance.to_dict()
# create an instance of PrivateSwap200Response from a dict
private_swap200_response_from_dict = PrivateSwap200Response.from_dict(private_swap200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


