# TransferPrivate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **str** |  | [optional] 
**curve** | **str** |  | [optional] 
**stealth_address** | **str** | Chain-native stealth address | [optional] 
**ephemeral_public_key** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**view_tag** | **int** |  | [optional] 
**commitment** | **str** |  | [optional] 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**viewing_key_hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**shared_secret** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**chain_data** | [**TransferPrivate200ResponseDataChainData**](TransferPrivate200ResponseDataChainData.md) |  | [optional] 

## Example

```python
from sipher_client.models.transfer_private200_response_data import TransferPrivate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivate200ResponseData from a JSON string
transfer_private200_response_data_instance = TransferPrivate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(TransferPrivate200ResponseData.to_json())

# convert the object into a dict
transfer_private200_response_data_dict = transfer_private200_response_data_instance.to_dict()
# create an instance of TransferPrivate200ResponseData from a dict
transfer_private200_response_data_from_dict = TransferPrivate200ResponseData.from_dict(transfer_private200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


