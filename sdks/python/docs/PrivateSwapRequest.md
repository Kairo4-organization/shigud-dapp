# PrivateSwapRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** | Base58-encoded Solana public key | 
**input_mint** | **str** | SPL token mint to swap from | 
**input_amount** | **str** | Amount to swap (smallest units) | 
**output_mint** | **str** | SPL token mint to swap to | 
**slippage_bps** | **int** | Slippage tolerance in basis points (default 50 &#x3D; 0.5%) | [optional] [default to 50]
**recipient_meta_address** | [**PrivateSwapRequestRecipientMetaAddress**](PrivateSwapRequestRecipientMetaAddress.md) |  | [optional] 

## Example

```python
from sipher_client.models.private_swap_request import PrivateSwapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSwapRequest from a JSON string
private_swap_request_instance = PrivateSwapRequest.from_json(json)
# print the JSON string representation of the object
print(PrivateSwapRequest.to_json())

# convert the object into a dict
private_swap_request_dict = private_swap_request_instance.to_dict()
# create an instance of PrivateSwapRequest from a dict
private_swap_request_from_dict = PrivateSwapRequest.from_dict(private_swap_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


