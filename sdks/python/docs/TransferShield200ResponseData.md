# TransferShield200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | **str** | Base64-encoded unsigned transaction | [optional] 
**stealth_address** | **str** |  | [optional] 
**ephemeral_public_key** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**view_tag** | **int** |  | [optional] 
**commitment** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**blinding_factor** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**viewing_key_hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**shared_secret** | **str** | 0x-prefixed 32-byte hex string | [optional] 

## Example

```python
from sipher_client.models.transfer_shield200_response_data import TransferShield200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferShield200ResponseData from a JSON string
transfer_shield200_response_data_instance = TransferShield200ResponseData.from_json(json)
# print the JSON string representation of the object
print(TransferShield200ResponseData.to_json())

# convert the object into a dict
transfer_shield200_response_data_dict = transfer_shield200_response_data_instance.to_dict()
# create an instance of TransferShield200ResponseData from a dict
transfer_shield200_response_data_from_dict = TransferShield200ResponseData.from_dict(transfer_shield200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


