# CsplTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cspl_mint** | **str** | C-SPL token mint identifier | 
**var_from** | **str** | Base58-encoded Solana public key | 
**to** | **str** | Base58-encoded Solana public key | 
**encrypted_amount** | **str** | Encrypted transfer amount as hex | 
**memo** | **str** | Optional memo | [optional] 

## Example

```python
from sipher_client.models.cspl_transfer_request import CsplTransferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CsplTransferRequest from a JSON string
cspl_transfer_request_instance = CsplTransferRequest.from_json(json)
# print the JSON string representation of the object
print(CsplTransferRequest.to_json())

# convert the object into a dict
cspl_transfer_request_dict = cspl_transfer_request_instance.to_dict()
# create an instance of CsplTransferRequest from a dict
cspl_transfer_request_from_dict = CsplTransferRequest.from_dict(cspl_transfer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


