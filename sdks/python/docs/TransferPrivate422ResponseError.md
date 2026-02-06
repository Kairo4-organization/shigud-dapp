# TransferPrivate422ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**supported_chains** | **List[str]** |  | [optional] 

## Example

```python
from sipher_client.models.transfer_private422_response_error import TransferPrivate422ResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of TransferPrivate422ResponseError from a JSON string
transfer_private422_response_error_instance = TransferPrivate422ResponseError.from_json(json)
# print the JSON string representation of the object
print(TransferPrivate422ResponseError.to_json())

# convert the object into a dict
transfer_private422_response_error_dict = transfer_private422_response_error_instance.to_dict()
# create an instance of TransferPrivate422ResponseError from a dict
transfer_private422_response_error_from_dict = TransferPrivate422ResponseError.from_dict(transfer_private422_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


