# CsplUnwrapRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cspl_mint** | **str** | C-SPL token mint identifier | 
**encrypted_amount** | **str** | Encrypted amount as hex | 
**owner** | **str** | Base58-encoded Solana public key | 
**proof** | **str** | Optional proof of ownership | [optional] 

## Example

```python
from sipher_client.models.cspl_unwrap_request import CsplUnwrapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CsplUnwrapRequest from a JSON string
cspl_unwrap_request_instance = CsplUnwrapRequest.from_json(json)
# print the JSON string representation of the object
print(CsplUnwrapRequest.to_json())

# convert the object into a dict
cspl_unwrap_request_dict = cspl_unwrap_request_instance.to_dict()
# create an instance of CsplUnwrapRequest from a dict
cspl_unwrap_request_from_dict = CsplUnwrapRequest.from_dict(cspl_unwrap_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


