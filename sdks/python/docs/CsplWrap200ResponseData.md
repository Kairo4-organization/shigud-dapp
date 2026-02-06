# CsplWrap200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **str** | Transaction signature | [optional] 
**cspl_mint** | **str** | Confidential token mint address | [optional] 
**encrypted_balance** | **str** | Encrypted balance as hex | [optional] 
**token** | **object** | C-SPL token metadata | [optional] 

## Example

```python
from sipher_client.models.cspl_wrap200_response_data import CsplWrap200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CsplWrap200ResponseData from a JSON string
cspl_wrap200_response_data_instance = CsplWrap200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CsplWrap200ResponseData.to_json())

# convert the object into a dict
cspl_wrap200_response_data_dict = cspl_wrap200_response_data_instance.to_dict()
# create an instance of CsplWrap200ResponseData from a dict
cspl_wrap200_response_data_from_dict = CsplWrap200ResponseData.from_dict(cspl_wrap200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


