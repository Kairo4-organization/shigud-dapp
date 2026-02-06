# TransferShieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** | Base58-encoded Solana public key | 
**recipient_meta_address** | [**StealthMetaAddress**](StealthMetaAddress.md) |  | 
**amount** | **str** | Positive integer as string (no leading zeros) | 
**mint** | **str** | Optional SPL token mint. Omit for native SOL. | [optional] 

## Example

```python
from sipher_client.models.transfer_shield_request import TransferShieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferShieldRequest from a JSON string
transfer_shield_request_instance = TransferShieldRequest.from_json(json)
# print the JSON string representation of the object
print(TransferShieldRequest.to_json())

# convert the object into a dict
transfer_shield_request_dict = transfer_shield_request_instance.to_dict()
# create an instance of TransferShieldRequest from a dict
transfer_shield_request_from_dict = TransferShieldRequest.from_dict(transfer_shield_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


