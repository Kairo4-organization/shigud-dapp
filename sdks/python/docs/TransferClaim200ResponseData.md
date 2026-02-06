# TransferClaim200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx_signature** | **str** |  | [optional] 
**destination_address** | **str** |  | [optional] 
**amount** | **str** |  | [optional] 
**explorer_url** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.transfer_claim200_response_data import TransferClaim200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TransferClaim200ResponseData from a JSON string
transfer_claim200_response_data_instance = TransferClaim200ResponseData.from_json(json)
# print the JSON string representation of the object
print(TransferClaim200ResponseData.to_json())

# convert the object into a dict
transfer_claim200_response_data_dict = transfer_claim200_response_data_instance.to_dict()
# create an instance of TransferClaim200ResponseData from a dict
transfer_claim200_response_data_from_dict = TransferClaim200ResponseData.from_dict(transfer_claim200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


