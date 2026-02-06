# TransferPrivateRequestRecipientMetaAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_key** | **str** | 32-byte (ed25519) or 33-byte (secp256k1) hex key | 
**viewing_key** | **str** | 32-byte (ed25519) or 33-byte (secp256k1) hex key | 
**chain** | **str** |  | 
**label** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.transfer_private_request_recipient_meta_address import TransferPrivateRequestRecipientMetaAddress

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivateRequestRecipientMetaAddress from a JSON string
transfer_private_request_recipient_meta_address_instance = TransferPrivateRequestRecipientMetaAddress.from_json(json)
# print the JSON string representation of the object
print(TransferPrivateRequestRecipientMetaAddress.to_json())

# convert the object into a dict
transfer_private_request_recipient_meta_address_dict = transfer_private_request_recipient_meta_address_instance.to_dict()
# create an instance of TransferPrivateRequestRecipientMetaAddress from a dict
transfer_private_request_recipient_meta_address_from_dict = TransferPrivateRequestRecipientMetaAddress.from_dict(transfer_private_request_recipient_meta_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


