# TransferPrivate200ResponseDataChainData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**transaction** | **str** | Base64-encoded unsigned transaction | 
**mint** | **str** |  | [optional] 
**to** | **str** | Recipient or token contract address | 
**value** | **str** | Native currency amount (wei) | 
**data** | **str** | Calldata (0x for native, ABI-encoded for ERC20) | 
**chain_id** | **int** |  | 
**token_contract** | **str** |  | [optional] 
**receiver_id** | **str** |  | 
**actions** | [**List[NearTransferDataActionsInner]**](NearTransferDataActionsInner.md) |  | 

## Example

```python
from sipher_client.models.transfer_private200_response_data_chain_data import TransferPrivate200ResponseDataChainData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivate200ResponseDataChainData from a JSON string
transfer_private200_response_data_chain_data_instance = TransferPrivate200ResponseDataChainData.from_json(json)
# print the JSON string representation of the object
print(TransferPrivate200ResponseDataChainData.to_json())

# convert the object into a dict
transfer_private200_response_data_chain_data_dict = transfer_private200_response_data_chain_data_instance.to_dict()
# create an instance of TransferPrivate200ResponseDataChainData from a dict
transfer_private200_response_data_chain_data_from_dict = TransferPrivate200ResponseDataChainData.from_dict(transfer_private200_response_data_chain_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


