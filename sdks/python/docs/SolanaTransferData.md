# SolanaTransferData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**transaction** | **str** | Base64-encoded unsigned transaction | 
**mint** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.solana_transfer_data import SolanaTransferData

# TODO update the JSON string below
json = "{}"
# create an instance of SolanaTransferData from a JSON string
solana_transfer_data_instance = SolanaTransferData.from_json(json)
# print the JSON string representation of the object
print(SolanaTransferData.to_json())

# convert the object into a dict
solana_transfer_data_dict = solana_transfer_data_instance.to_dict()
# create an instance of SolanaTransferData from a dict
solana_transfer_data_from_dict = SolanaTransferData.from_dict(solana_transfer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


