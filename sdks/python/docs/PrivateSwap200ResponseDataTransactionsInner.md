# PrivateSwap200ResponseDataTransactionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**transaction** | **str** | Base64-encoded transaction or signature | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.private_swap200_response_data_transactions_inner import PrivateSwap200ResponseDataTransactionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateSwap200ResponseDataTransactionsInner from a JSON string
private_swap200_response_data_transactions_inner_instance = PrivateSwap200ResponseDataTransactionsInner.from_json(json)
# print the JSON string representation of the object
print(PrivateSwap200ResponseDataTransactionsInner.to_json())

# convert the object into a dict
private_swap200_response_data_transactions_inner_dict = private_swap200_response_data_transactions_inner_instance.to_dict()
# create an instance of PrivateSwap200ResponseDataTransactionsInner from a dict
private_swap200_response_data_transactions_inner_from_dict = PrivateSwap200ResponseDataTransactionsInner.from_dict(private_swap200_response_data_transactions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


