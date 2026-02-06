# TransferPrivateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **str** | Sender address (format varies by chain) | 
**recipient_meta_address** | [**TransferPrivateRequestRecipientMetaAddress**](TransferPrivateRequestRecipientMetaAddress.md) |  | 
**amount** | **str** | Positive integer as string (no leading zeros) | 
**token** | **str** | Token contract/mint address. Omit for native currency. | [optional] 

## Example

```python
from sipher_client.models.transfer_private_request import TransferPrivateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivateRequest from a JSON string
transfer_private_request_instance = TransferPrivateRequest.from_json(json)
# print the JSON string representation of the object
print(TransferPrivateRequest.to_json())

# convert the object into a dict
transfer_private_request_dict = transfer_private_request_instance.to_dict()
# create an instance of TransferPrivateRequest from a dict
transfer_private_request_from_dict = TransferPrivateRequest.from_dict(transfer_private_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


