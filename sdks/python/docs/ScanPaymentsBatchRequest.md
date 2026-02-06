# ScanPaymentsBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_pairs** | [**List[ScanPaymentsBatchRequestKeyPairsInner]**](ScanPaymentsBatchRequestKeyPairsInner.md) |  | 
**from_slot** | **int** |  | [optional] 
**to_slot** | **int** |  | [optional] 
**limit** | **int** |  | [optional] [default to 100]

## Example

```python
from sipher_client.models.scan_payments_batch_request import ScanPaymentsBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatchRequest from a JSON string
scan_payments_batch_request_instance = ScanPaymentsBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatchRequest.to_json())

# convert the object into a dict
scan_payments_batch_request_dict = scan_payments_batch_request_instance.to_dict()
# create an instance of ScanPaymentsBatchRequest from a dict
scan_payments_batch_request_from_dict = ScanPaymentsBatchRequest.from_dict(scan_payments_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


