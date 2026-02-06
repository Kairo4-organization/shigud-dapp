# PrivateSwap200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_stealth_address** | **str** | Base58-encoded Solana public key | [optional] 
**ephemeral_public_key** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**view_tag** | **int** |  | [optional] 
**commitment** | **str** | Pedersen commitment for output amount | [optional] 
**blinding_factor** | **str** | Blinding factor for commitment | [optional] 
**viewing_key_hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**shared_secret** | **str** |  | [optional] 
**input_mint** | **str** |  | [optional] 
**input_amount** | **str** |  | [optional] 
**output_mint** | **str** |  | [optional] 
**output_amount** | **str** |  | [optional] 
**output_amount_min** | **str** |  | [optional] 
**quote_id** | **str** |  | [optional] 
**price_impact_pct** | **str** |  | [optional] 
**slippage_bps** | **int** |  | [optional] 
**transactions** | [**List[PrivateSwap200ResponseDataTransactionsInner]**](PrivateSwap200ResponseDataTransactionsInner.md) |  | [optional] 
**execution_order** | **List[str]** |  | [optional] 
**estimated_compute_units** | **int** |  | [optional] 
**cspl_wrapped** | **bool** |  | [optional] 

## Example

```python
from sipher_client.models.private_swap200_response_data import PrivateSwap200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSwap200ResponseData from a JSON string
private_swap200_response_data_instance = PrivateSwap200ResponseData.from_json(json)
# print the JSON string representation of the object
print(PrivateSwap200ResponseData.to_json())

# convert the object into a dict
private_swap200_response_data_dict = private_swap200_response_data_instance.to_dict()
# create an instance of PrivateSwap200ResponseData from a dict
private_swap200_response_data_from_dict = PrivateSwap200ResponseData.from_dict(private_swap200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


