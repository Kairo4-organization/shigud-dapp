# EncryptIncoValue200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**EncryptIncoValue200ResponseData**](EncryptIncoValue200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.encrypt_inco_value200_response import EncryptIncoValue200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptIncoValue200Response from a JSON string
encrypt_inco_value200_response_instance = EncryptIncoValue200Response.from_json(json)
# print the JSON string representation of the object
print(EncryptIncoValue200Response.to_json())

# convert the object into a dict
encrypt_inco_value200_response_dict = encrypt_inco_value200_response_instance.to_dict()
# create an instance of EncryptIncoValue200Response from a dict
encrypt_inco_value200_response_from_dict = EncryptIncoValue200Response.from_dict(encrypt_inco_value200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


