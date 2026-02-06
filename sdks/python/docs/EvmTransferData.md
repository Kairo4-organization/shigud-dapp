# EvmTransferData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**to** | **str** | Recipient or token contract address | 
**value** | **str** | Native currency amount (wei) | 
**data** | **str** | Calldata (0x for native, ABI-encoded for ERC20) | 
**chain_id** | **int** |  | 
**token_contract** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.evm_transfer_data import EvmTransferData

# TODO update the JSON string below
json = "{}"
# create an instance of EvmTransferData from a JSON string
evm_transfer_data_instance = EvmTransferData.from_json(json)
# print the JSON string representation of the object
print(EvmTransferData.to_json())

# convert the object into a dict
evm_transfer_data_dict = evm_transfer_data_instance.to_dict()
# create an instance of EvmTransferData from a dict
evm_transfer_data_from_dict = EvmTransferData.from_dict(evm_transfer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


