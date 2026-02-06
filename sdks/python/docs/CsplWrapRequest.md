# CsplWrapRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mint** | **str** | SPL token mint address | 
**amount** | **str** | Positive integer as string (no leading zeros) | 
**owner** | **str** | Base58-encoded Solana public key | 
**create_account** | **bool** | Create C-SPL account if missing | [optional] [default to True]

## Example

```python
from sipher_client.models.cspl_wrap_request import CsplWrapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CsplWrapRequest from a JSON string
cspl_wrap_request_instance = CsplWrapRequest.from_json(json)
# print the JSON string representation of the object
print(CsplWrapRequest.to_json())

# convert the object into a dict
cspl_wrap_request_dict = cspl_wrap_request_instance.to_dict()
# create an instance of CsplWrapRequest from a dict
cspl_wrap_request_from_dict = CsplWrapRequest.from_dict(cspl_wrap_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


