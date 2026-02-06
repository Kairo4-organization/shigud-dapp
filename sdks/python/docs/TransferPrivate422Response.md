# TransferPrivate422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**error** | [**TransferPrivate422ResponseError**](TransferPrivate422ResponseError.md) |  | [optional] 

## Example

```python
from sipher_client.models.transfer_private422_response import TransferPrivate422Response

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivate422Response from a JSON string
transfer_private422_response_instance = TransferPrivate422Response.from_json(json)
# print the JSON string representation of the object
print(TransferPrivate422Response.to_json())

# convert the object into a dict
transfer_private422_response_dict = transfer_private422_response_instance.to_dict()
# create an instance of TransferPrivate422Response from a dict
transfer_private422_response_from_dict = TransferPrivate422Response.from_dict(transfer_private422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


