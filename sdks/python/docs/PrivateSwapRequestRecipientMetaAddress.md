# PrivateSwapRequestRecipientMetaAddress

Optional stealth meta-address. If omitted, an ephemeral one is generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_key** | **str** | 0x-prefixed 32-byte hex string | 
**viewing_key** | **str** | 0x-prefixed 32-byte hex string | 
**chain** | **str** |  | 
**label** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.private_swap_request_recipient_meta_address import PrivateSwapRequestRecipientMetaAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSwapRequestRecipientMetaAddress from a JSON string
private_swap_request_recipient_meta_address_instance = PrivateSwapRequestRecipientMetaAddress.from_json(json)
# print the JSON string representation of the object
print(PrivateSwapRequestRecipientMetaAddress.to_json())

# convert the object into a dict
private_swap_request_recipient_meta_address_dict = private_swap_request_recipient_meta_address_instance.to_dict()
# create an instance of PrivateSwapRequestRecipientMetaAddress from a dict
private_swap_request_recipient_meta_address_from_dict = PrivateSwapRequestRecipientMetaAddress.from_dict(private_swap_request_recipient_meta_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


