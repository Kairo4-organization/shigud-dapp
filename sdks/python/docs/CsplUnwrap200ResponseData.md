# CsplUnwrap200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **str** | Transaction signature | [optional] 
**amount** | **str** | Decrypted amount as string | [optional] 

## Example

```python
from sipher_client.models.cspl_unwrap200_response_data import CsplUnwrap200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CsplUnwrap200ResponseData from a JSON string
cspl_unwrap200_response_data_instance = CsplUnwrap200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CsplUnwrap200ResponseData.to_json())

# convert the object into a dict
cspl_unwrap200_response_data_dict = cspl_unwrap200_response_data_instance.to_dict()
# create an instance of CsplUnwrap200ResponseData from a dict
cspl_unwrap200_response_data_from_dict = CsplUnwrap200ResponseData.from_dict(cspl_unwrap200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


