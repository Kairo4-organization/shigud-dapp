# TransferClaimRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stealth_address** | **str** | Base58-encoded Solana public key | 
**ephemeral_public_key** | **str** | Base58-encoded Solana public key | 
**spending_private_key** | **str** | 0x-prefixed 32-byte hex string | 
**viewing_private_key** | **str** | 0x-prefixed 32-byte hex string | 
**destination_address** | **str** | Base58-encoded Solana public key | 
**mint** | **str** | Base58-encoded Solana public key | 

## Example

```python
from sipher_client.models.transfer_claim_request import TransferClaimRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferClaimRequest from a JSON string
transfer_claim_request_instance = TransferClaimRequest.from_json(json)
# print the JSON string representation of the object
print(TransferClaimRequest.to_json())

# convert the object into a dict
transfer_claim_request_dict = transfer_claim_request_instance.to_dict()
# create an instance of TransferClaimRequest from a dict
transfer_claim_request_from_dict = TransferClaimRequest.from_dict(transfer_claim_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


