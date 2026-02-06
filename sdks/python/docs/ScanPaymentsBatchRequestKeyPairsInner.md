# ScanPaymentsBatchRequestKeyPairsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_private_key** | **str** | 0x-prefixed 32-byte hex string | 
**spending_public_key** | **str** | 0x-prefixed 32-byte hex string | 
**label** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments_batch_request_key_pairs_inner import ScanPaymentsBatchRequestKeyPairsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatchRequestKeyPairsInner from a JSON string
scan_payments_batch_request_key_pairs_inner_instance = ScanPaymentsBatchRequestKeyPairsInner.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatchRequestKeyPairsInner.to_json())

# convert the object into a dict
scan_payments_batch_request_key_pairs_inner_dict = scan_payments_batch_request_key_pairs_inner_instance.to_dict()
# create an instance of ScanPaymentsBatchRequestKeyPairsInner from a dict
scan_payments_batch_request_key_pairs_inner_from_dict = ScanPaymentsBatchRequestKeyPairsInner.from_dict(scan_payments_batch_request_key_pairs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


