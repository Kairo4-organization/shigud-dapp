# TransferShield200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**TransferShield200ResponseData**](TransferShield200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.transfer_shield200_response import TransferShield200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TransferShield200Response from a JSON string
transfer_shield200_response_instance = TransferShield200Response.from_json(json)
# print the JSON string representation of the object
print(TransferShield200Response.to_json())

# convert the object into a dict
transfer_shield200_response_dict = transfer_shield200_response_instance.to_dict()
# create an instance of TransferShield200Response from a dict
transfer_shield200_response_from_dict = TransferShield200Response.from_dict(transfer_shield200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


