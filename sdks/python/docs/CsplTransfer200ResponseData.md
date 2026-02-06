# CsplTransfer200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **str** | Transaction signature | [optional] 
**new_sender_balance** | **str** | Updated sender encrypted balance | [optional] 
**recipient_pending_updated** | **bool** | Whether recipient pending balance was updated | [optional] 

## Example

```python
from sipher_client.models.cspl_transfer200_response_data import CsplTransfer200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CsplTransfer200ResponseData from a JSON string
cspl_transfer200_response_data_instance = CsplTransfer200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CsplTransfer200ResponseData.to_json())

# convert the object into a dict
cspl_transfer200_response_data_dict = cspl_transfer200_response_data_instance.to_dict()
# create an instance of CsplTransfer200ResponseData from a dict
cspl_transfer200_response_data_from_dict = CsplTransfer200ResponseData.from_dict(cspl_transfer200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


